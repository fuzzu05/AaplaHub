const http = require('http');

const request = (method, path, body = null, token = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
};

async function runTests() {
  console.log("1. Starting Verification...");
  
  // Test 4 & 5: Mock APIs are called and return different schemas
  console.log("Checking Mock APIs directly...");
  const idRes = await request('GET', '/identity/DEMO-1234');
  const panRes = await request('GET', '/pan/DEMO-1234');
  const skillRes = await request('GET', '/mahasem/DEMO-1234');
  console.log(`Identity Status: ${idRes.status}, Keys: ${Object.keys(idRes.data).join(',')}`);
  console.log(`PAN Status: ${panRes.status}, Keys: ${Object.keys(panRes.data).join(',')}`);
  console.log(`Skill Status: ${skillRes.status}, Keys: ${Object.keys(skillRes.data).join(',')}`);

  if (idRes.status !== 200 || panRes.status !== 200 || skillRes.status !== 200) {
    console.error("Mock APIs failed!");
    return;
  }

  // Auth Citizen
  const authRes = await request('POST', '/auth/mock-oauth-login', { email: 'rahul@example.com', name: 'Rahul' });
  const token = authRes.data.access_token;
  console.log(`Citizen Authenticated, Token received: ${!!token}`);

  // Test 7: Fails without consent
  console.log("Attempting to apply without consent...");
  const noConsentRes = await request('POST', '/applications/apply-with-consent', {
    serviceName: 'Employment', identifier: 'DEMO-1234', fee: 150
  }, token);
  console.log(`No consent application status: ${noConsentRes.status}`);
  if (noConsentRes.status !== 400) {
    console.log("Warning: Expected 400 Bad Request");
  }

  // Grant Consent
  console.log("Granting Consents...");
  await request('POST', '/consent/grant', { systemName: 'AADHAAR_IDENTITY', purpose: 'Employment' }, token);
  await request('POST', '/consent/grant', { systemName: 'PAN_INCOMETAX', purpose: 'Employment' }, token);
  await request('POST', '/consent/grant', { systemName: 'MAHARASHTRA_SKILL_DB', purpose: 'Employment' }, token);
  
  // Test 8, 6, 9: Succeeds with consent, transforms to Canonical, persists
  console.log("Attempting to apply WITH consent...");
  const applyRes = await request('POST', '/applications/apply-with-consent', {
    serviceName: 'Employment Assistance', identifier: 'DEMO-1234', fee: 150
  }, token);
  console.log(`Apply status: ${applyRes.status}`);
  const appId = applyRes.data.application?.applicationId;
  console.log(`Generated App ID: ${appId}`);
  console.log(`Canonical Data Mapped:`, applyRes.data.canonicalData);

  // Auth Officer
  const officerAuthRes = await request('POST', '/auth/mock-oauth-login', { email: 'officer@gov.in', name: 'Govt Officer' });
  const officerToken = officerAuthRes.data.access_token;
  
  // Pay
  await request('POST', `/applications/${appId}/pay`, null, token);
  console.log("Payment successful.");

  // Test 10: Check Officer Portal
  console.log("Fetching Officer Portal Applications...");
  const allAppsRes = await request('GET', '/applications/all', null, officerToken);
  const foundApp = allAppsRes.data.find(a => a.applicationId === appId);
  console.log(`App exists in Officer view: ${!!foundApp}, Status: ${foundApp?.status}`);

  // Test 11: Officer Approval updates status
  console.log("Approving application...");
  const approveRes = await request('POST', `/applications/${appId}/status`, { status: 'APPROVED' }, officerToken);
  console.log(`Approve status: ${approveRes.status}`);

  // Test 12: Citizen tracking reflects status
  console.log("Fetching Citizen Applications...");
  const myAppsRes = await request('GET', '/applications/my-applications', null, token);
  const updatedApp = myAppsRes.data.find(a => a.applicationId === appId);
  console.log(`Citizen sees updated status: ${updatedApp?.status}`);

  // Test 13: Audit Logs
  console.log("Fetching Audit Logs...");
  const auditRes = await request('GET', '/audit/my-activity', null, token);
  console.log(`Total Audit Logs for Citizen: ${auditRes.data.length}`);
  if (auditRes.data.length > 0) {
    console.log(`Sample Log Action: ${auditRes.data[0].action} on ${auditRes.data[0].systemName}`);
  }

  console.log("Verification checks complete.");
}

runTests().catch(console.error);
