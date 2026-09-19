import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout';

export default function OAuthMock() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'citizen';
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleSimulatedOAuth = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    // Simulate OAuth delay
    await new Promise(r => setTimeout(r, 1000));

    const mockProfile = {
      email: role === 'officer' ? 'officer@gov.in' : 'fuzail@example.com',
      name: role === 'officer' ? 'Govt Officer' : 'Fuzail Khan',
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const res = await fetch(`${API_URL}/auth/mock-oauth-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockProfile)
      });
      const data = await res.json();
      
      if (!res.ok || !data.access_token) {
        throw new Error(data.message || 'Login failed');
      }

      login(data.access_token, data.user);

      if (role === 'officer') {
        navigate('/officer');
      } else {
        navigate('/citizen/dashboard');
      }
    } catch (err) {
      console.error(err);
      alert("Mock login failed. Make sure backend is running.");
      setLoading(false);
    }
  };

  return (
    <Layout hideNav>
      <div className="flex flex-col w-full">
        <div className="w-full max-w-[1440px] mx-auto px-gutter py-space-xl">
          {/* Top Metadata Header Strip */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Zero-Trust Authentication Gateway</span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">ENDPOINT: AUTH.UIDAI.SIM.GOV.IN</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                {role === 'officer' ? 'Officer Sovereign Access' : 'Citizen Sovereign Access'} • Sandbox Authentication
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                Authenticate using 12-digit Aadhaar / Virtual ID to initiate an ephemeral, consent-bound session under sovereign privacy safeguards.
              </p>
            </div>
            {/* Quick Session Live Monitor */}
            <div className="flex items-center gap-space-md bg-surface-container-low px-space-md py-space-sm rounded-lg shadow-sm">
              <div className="flex flex-col text-right">
                <span className="font-label-caps text-label-caps text-on-surface-variant">SANDBOX SESSION KEY</span>
                <span className="font-code-sm text-code-sm text-on-surface font-semibold">0x7F8B...C409</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-[18px]">key</span>
              </div>
            </div>
          </div>
          
          {/* Main Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left Column: Interoperability & DPDP Framework */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {/* DPDP Compliance Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">DPDP Act 2023 Statutory Consent Framework</span>
                  </div>
                  <span className="font-label-caps text-label-caps text-on-tertiary-container bg-surface-container-low px-space-xs py-0.5 rounded">STATUTORY COMPLIANT</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  In compliance with the Digital Personal Data Protection Act, 2023 and the National Data Governance Framework (NDGF), this gateway operates under strict purpose limitation:
                </p>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">lock_clock</span>
                    <div className="flex flex-col">
                      <span className="font-title-sm text-title-sm text-on-surface">1. Zero Persistent Storage</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">No persistent storage of raw Aadhaar digits or biometric vectors on AaplaHub edge relays.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">timer</span>
                    <div className="flex flex-col">
                      <span className="font-title-sm text-title-sm text-on-surface">2. Ephemeral Session Expiry</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Ephemeral session key generated for single-transaction validity strictly bounded by a 15-minute TTL.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">enhanced_encryption</span>
                    <div className="flex flex-col">
                      <span className="font-title-sm text-title-sm text-on-surface">3. Salted Cryptographic Binding</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Dynamic SHA-256 salted hash bindings enforce zero inter-departmental linkability or data bleed.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cryptographic Telemetry Box */}
              <div className="bg-primary-container text-on-primary p-space-lg rounded-lg shadow-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[18px] text-primary-fixed">format_image_left</span>
                    <span className="font-code-md text-code-md text-primary-fixed uppercase tracking-wide">Cryptographic Telemetry</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-primary-fixed-dim">CLUSTER: MH-PUNE-02</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                  <div className="flex flex-col bg-surface-container-lowest/10 p-space-sm rounded">
                    <span className="font-label-caps text-label-caps text-on-primary-container">MOCK HSM SLOT</span>
                    <span className="font-code-sm text-code-sm text-tertiary-fixed font-semibold">Active #4</span>
                  </div>
                  <div className="flex flex-col bg-surface-container-lowest/10 p-space-sm rounded">
                    <span className="font-label-caps text-label-caps text-on-primary-container">CONSENT HASH</span>
                    <span className="font-code-sm text-code-sm text-surface-bright font-semibold">SHA-256 Valid</span>
                  </div>
                  <div className="flex flex-col bg-surface-container-lowest/10 p-space-sm rounded">
                    <span className="font-label-caps text-label-caps text-on-primary-container">TRANSPORT</span>
                    <span className="font-code-sm text-code-sm text-tertiary-fixed font-semibold">TLS 1.3 Strict</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-on-primary-container pt-space-xs">
                  <span className="font-code-sm text-code-sm">SIGNATURE ROOT: CCA-INDIA-2026</span>
                  <span className="font-code-sm text-code-sm">LATENCY: 18ms</span>
                </div>
              </div>
              
              {/* Visual Mini Graphic: Single-Use Token Exchange */}
              <div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-on-surface">Zero Data Residual</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Tokens dissolve automatically upon session conclusion.</span>
                  </div>
                </div>
                <svg className="w-16 h-8 text-on-tertiary-container" fill="none" viewBox="0 0 64 32">
                  <path d="M4 16h48m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <circle cx="58" cy="16" fill="currentColor" r="3"></circle>
                </svg>
              </div>
            </div>

            {/* Right Column: Authentication Form Card */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-sm flex flex-col gap-space-lg">
                {/* Tab Switcher */}
                <div className="flex items-center bg-surface-container-low p-1 rounded-lg gap-1">
                  <button className="flex-1 py-space-sm px-space-md rounded text-center font-title-sm text-title-sm bg-surface-container-lowest text-on-surface shadow-sm transition-all flex items-center justify-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px] text-secondary">fingerprint</span>
                    <span>Aadhaar e-KYC (Default)</span>
                  </button>
                  <button className="flex-1 py-space-sm px-space-md rounded text-center font-title-sm text-title-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                    <span>DigiLocker SSO</span>
                  </button>
                  <button className="flex-1 py-space-sm px-space-md rounded text-center font-title-sm text-title-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">badge</span>
                    <span>Virtual ID</span>
                  </button>
                </div>
                
                {/* Form Area */}
                <form className="flex flex-col gap-space-lg" onSubmit={handleSimulatedOAuth}>
                  {/* Aadhaar Input Field */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <label className="font-title-sm text-title-sm text-on-surface flex items-center gap-1" htmlFor="aadhaar-input">
                        12-Digit Aadhaar Identifier <span className="text-error font-bold">*</span>
                      </label>
                      <div className="flex items-center gap-1 text-on-tertiary-container font-code-sm text-code-sm">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        <span>Verhoeff Checksum Valid</span>
                      </div>
                    </div>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-on-surface-variant material-symbols-outlined text-[20px]">pin</span>
                      <input className="w-full h-11 pl-10 pr-12 bg-surface-container-low font-code-md text-code-md text-on-surface rounded focus:outline-none focus:ring-2 focus:ring-secondary tracking-widest" id="aadhaar-input" readOnly type="text" value="4821 •••• •••• 9011"/>
                      <button className="absolute right-3 text-on-surface-variant hover:text-on-surface" title="Mask/Unmask" type="button">
                        <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                      </button>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Pre-mapped in sandbox session. UIDAI Sandbox ID is locked to active test subject.</span>
                  </div>
                  
                  {/* 6-Digit Segmented OTP Input */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <label className="font-title-sm text-title-sm text-on-surface flex items-center gap-1">
                        Demographic Sandbox OTP <span className="text-error font-bold">*</span>
                      </label>
                      <div className="flex items-center gap-1 text-on-surface-variant font-code-sm text-code-sm">
                        <span className="material-symbols-outlined text-[16px] text-secondary">update</span>
                        <span>Resend OTP in <span className="text-secondary font-semibold">00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}s</span></span>
                      </div>
                    </div>
                    {/* Segmented Inputs */}
                    <div className="grid grid-cols-6 gap-space-sm pt-1">
                      <input className="h-14 text-center font-headline-md text-headline-md font-code-md bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" maxLength={1} type="text" defaultValue="8"/>
                      <input className="h-14 text-center font-headline-md text-headline-md font-code-md bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" maxLength={1} type="text" defaultValue="4"/>
                      <input className="h-14 text-center font-headline-md text-headline-md font-code-md bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" maxLength={1} type="text" defaultValue="1"/>
                      <input className="h-14 text-center font-headline-md text-headline-md font-code-md bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" maxLength={1} type="text" defaultValue="9"/>
                      <input className="h-14 text-center font-headline-md text-headline-md font-code-md bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all" maxLength={1} type="text" defaultValue="2"/>
                      <input className="h-14 text-center font-headline-md text-headline-md font-code-md bg-surface-container-lowest text-on-surface rounded ring-2 ring-secondary shadow-sm transition-all" maxLength={1} type="text" defaultValue="0"/>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 pt-1">
                      <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">sms</span>
                      Simulated SMS dispatched to registered mobile: +91 98••••••12
                    </span>
                  </div>
                  
                  {/* Statutory Checkbox */}
                  <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
                    <input defaultChecked className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary cursor-pointer" id="consent-check" type="checkbox"/>
                    <label className="font-body-sm text-body-sm text-on-surface leading-relaxed cursor-pointer select-none" htmlFor="consent-check">
                      I give informed statutory consent for <strong className="font-semibold text-on-surface">AaplaHub</strong> to request demographic validation (Name, DOB, Address hash) from the simulated UIDAI sandbox strictly for service delivery under DPDP Act 2023 principles.
                    </label>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <button disabled={loading} className={`w-full h-12 ${loading ? 'bg-surface-container-highest text-on-surface-variant' : 'bg-primary-container hover:bg-secondary text-on-primary'} font-title-md text-title-md rounded transition-colors flex items-center justify-center gap-space-sm shadow-md`} type="submit">
                      <span>{loading ? `Authenticating ${role}...` : 'Verify & Initialize Sovereign Session'}</span>
                      <span className={`material-symbols-outlined text-[20px] ${loading && 'animate-spin'}`}>{loading ? 'sync' : 'arrow_forward'}</span>
                    </button>
                  </div>
                </form>
                
                {/* Alternative Auth Rails */}
                <div className="pt-space-md flex flex-col gap-space-sm">
                  <div className="relative flex items-center justify-center">
                    <div className="w-full h-px bg-surface-container-highest"></div>
                    <span className="absolute px-space-sm bg-surface-container-lowest font-label-caps text-label-caps text-on-surface-variant uppercase">Alternative Authentication Methods</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    <button className="flex items-center justify-center gap-space-xs p-space-sm rounded bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface" type="button">
                      <span className="material-symbols-outlined text-[18px] text-secondary">phonelink_lock</span>
                      <span className="font-title-sm text-title-sm">DigiLocker App</span>
                    </button>
                    <button className="flex items-center justify-center gap-space-xs p-space-sm rounded bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface" type="button">
                      <span className="material-symbols-outlined text-[18px] text-secondary">qr_code_scanner</span>
                      <span className="font-title-sm text-title-sm">Offline QR Scan</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Sandbox Persona Banner */}
          <div className="mt-space-xl p-space-md bg-surface-container-low rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">assignment_ind</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-title-sm text-title-sm text-on-surface font-semibold">Sandbox Profile Active</span>
                  <span className="font-code-sm text-code-sm px-1.5 py-0.5 bg-surface-container-highest text-on-surface rounded font-medium">UIDAI Ref #2026-DEMO-01</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Synthetic {role} entity: <strong>{role === 'officer' ? 'Govt Officer' : 'Fuzail Khan'}</strong>.</span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-code-sm text-code-sm">
              <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified</span>
              <span>MOCK SCHEMA CANONICAL: IND-AADHAAR-DEMO-V2</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
