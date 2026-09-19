import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useApplicationStore } from '../store/applicationStore';
import Layout from '../components/Layout';
import EligibilityStep from '../components/service-flow/EligibilityStep';
import ConsentStep from '../components/service-flow/ConsentStep';
import InteropStep from '../components/service-flow/InteropStep';
import AppReviewStep from '../components/service-flow/AppReviewStep';
import PaymentStep from '../components/service-flow/PaymentStep';

export default function ServiceFlow() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const store = useApplicationStore();

  const [, setIntegrationLogs] = useState<string[]>([]);

  useEffect(() => {
    if (!store.selectedService) {
      navigate('/citizen/dashboard');
    }
  }, [store.selectedService, navigate]);

  const addLog = (msg: string) => setIntegrationLogs((prev: string[]) => [...prev, msg]);

  const handleProceedToConsent = () => {
    store.setStep('CONSENT');
  };

  const handleConsent = async () => {
    store.setStep('FETCHING');
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      addLog("Recording user consent for Identity...");
      await fetch(`${API_URL}/consent/grant`, {
        method: 'POST', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemName: 'AADHAAR_IDENTITY', purpose: store.selectedService })
      });
      addLog("Recording user consent for PAN...");
      await fetch(`${API_URL}/consent/grant`, {
        method: 'POST', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemName: 'PAN_INCOMETAX', purpose: store.selectedService })
      });
      addLog("Recording user consent for Skill DB...");
      await fetch(`${API_URL}/consent/grant`, {
        method: 'POST', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemName: 'MAHARASHTRA_SKILL_DB', purpose: store.selectedService })
      });

      addLog("Consent granted successfully. Initiating Interoperability Engine...");
      
      await new Promise(r => setTimeout(r, 800));

      addLog("Calling Identity Connector...");
      addLog("Calling PAN Connector...");
      addLog("Calling Skill Connector...");
      const res = await fetch(`${API_URL}/applications/apply-with-consent`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceName: store.selectedService,
          identifier: 'DEMO-1234', // mock identifier
          fee: store.feeAmount
        })
      });

      if (!res.ok) throw new Error("Integration failed");
      
      const data = await res.json();
      
      addLog("Data retrieved and mapped to canonical format successfully.");
      store.setCitizenData(data.canonicalData);
      store.setApplicationId(data.application.applicationId);

    } catch (error: any) {
      console.error(error);
      alert("Integration failed: " + error.message);
      addLog("ERROR: Failed to orchestrate integrations.");
    }
  };

  const handleProceedToAppReview = () => {
    store.setStep('APPLICATION');
  };

  const handleSubmitAppReview = async () => {
    store.setStep('PAYMENT');
  };

  const handlePayment = async () => {
    if (!store.applicationId) {
      alert("Error: Backend did not return a valid application ID.");
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const res = await fetch(`${API_URL}/applications/${store.applicationId}/pay`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Payment failed on backend");
      
      navigate('/citizen/applications');
    } catch (e) {
      console.error('Payment fetch failed:', e);
      alert('Payment processing failed on server');
    }
  };

  return (
    <Layout>
      {store.currentStep === 'ELIGIBILITY' && <EligibilityStep onNext={handleProceedToConsent} />}
      {store.currentStep === 'CONSENT' && <ConsentStep onNext={handleConsent} />}
      {store.currentStep === 'FETCHING' && <InteropStep onNext={handleProceedToAppReview} />}
      {store.currentStep === 'APPLICATION' && <AppReviewStep onNext={handleSubmitAppReview} />}
      {store.currentStep === 'PAYMENT' && <PaymentStep onNext={handlePayment} />}
    </Layout>
  );
}
