import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useApplicationStore } from '../store/applicationStore';
import Layout from '../components/Layout';

export default function CitizenDashboard() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const { selectService, reset } = useApplicationStore();
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 20); // 14m 20s
  const [activeScrutinyCount, setActiveScrutinyCount] = useState(0);

  useEffect(() => {
    if (!token) return;
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    fetch(`${API_URL}/applications/my-applications`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        const count = data.filter((a: any) => a.status === 'UNDER_REVIEW' || a.status === 'SUBMITTED').length;
        setActiveScrutinyCount(count);
      })
      .catch(err => console.error("Failed to fetch applications", err));
  }, [token]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleApply = (serviceName: string, fee: number) => {
    reset();
    selectService(serviceName, fee);
    navigate('/citizen/service-flow');
  };

  const handleExtendSession = () => {
    setTimeLeft(t => Math.min(20 * 60, t + 300));
  };

  const pct = Math.max(0, Math.min(100, (timeLeft / (20 * 60)) * 100));
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="max-w-[1440px] mx-auto px-gutter py-space-md w-full">
          {/* Top Sovereign Header Bar with Live Ephemeral Session Indicator */}
          <section className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg mb-gutter">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              {/* Greeting & Verified Identity Badges */}
              <div className="flex items-start gap-space-md min-w-0">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-md text-headline-md shadow-sm">
                    {user?.name?.substring(0, 2).toUpperCase() || 'FK'}
                  </div>
                  <span className="absolute -bottom-1 -right-1 bg-tertiary-fixed text-on-tertiary-fixed p-0.5 rounded-full flex items-center justify-center shadow-xs" title="Biometrically Validated Citizen">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex flex-wrap items-center gap-space-xs mb-1">
                    <h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">Namaste, {user?.name || 'Citizen'}</h1>
                    <span className="inline-flex items-center gap-1 bg-surface-container px-space-xs py-0.5 rounded font-label-caps text-label-caps text-secondary font-semibold">
                      <span className="material-symbols-outlined text-[13px]">shield_person</span>
                      UIDAI VERIFIED RESIDENT
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-code-sm text-code-sm px-1.5 py-0.5 rounded">
                      Ref: #2026-DEMO-01
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Sovereign Identity Vault active. Your citizen telemetry and canonical credentials adhere to <span className="text-on-surface font-medium">DPDP Act 2023 §6</span> data minimisation standards.
                  </p>
                </div>
              </div>

              {/* Ephemeral Session Box & Live Countdown Indicator */}
              <div className="bg-surface-container-low rounded-lg p-space-md shrink-0 lg:min-w-[320px] shadow-xs">
                <div className="flex items-center justify-between gap-space-sm mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-on-tertiary-container"></span>
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Ephemeral Session</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface font-semibold bg-surface-container px-1.5 py-0.5 rounded">
                    TLS-ZKP::v4.1
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-space-md">
                  <div className="font-code-md text-code-md text-primary-container font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[16px]">timer</span>
                    <span>{timeLeft > 0 ? `${mins}m ${secs < 10 ? '0' : ''}${secs}s` : 'Session Expired'}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">remaining TTL</span>
                  </div>
                  <button onClick={handleExtendSession} className="font-code-sm text-code-sm text-secondary hover:underline cursor-pointer bg-transparent">
                    + Extend
                  </button>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden mt-2">
                  <div className="bg-secondary h-full transition-all duration-1000" style={{ width: `${pct}%` }}></div>
                </div>
              </div>
            </div>

            {/* Sovereign Metric KPI Bar (4 Key Proof Points) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-lg pt-space-md bg-surface-container-low/60 rounded-lg p-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-xs shrink-0">
                  <span className="material-symbols-outlined text-[22px]">badge</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary-container leading-none">04</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Verified Credentials Linked</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-xs shrink-0">
                  <span className="material-symbols-outlined text-[22px]">pending_actions</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary-container leading-none">{activeScrutinyCount < 10 ? `0${activeScrutinyCount}` : activeScrutinyCount}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Active Scrutiny Application</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container shadow-xs shrink-0">
                  <span className="material-symbols-outlined text-[22px]">fingerprint</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary-container leading-none">02</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Cryptographic Consent Grants</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container shadow-xs shrink-0">
                  <span className="material-symbols-outlined text-[22px]">cloud_done</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-tertiary-container leading-none">100%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Zero-Reupload Paperless</span>
                </div>
              </div>
            </div>
          </section>

          {/* Canonical Data Engine Journey Bar: "How AaplaHub Serves You" */}
          <section className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-gutter">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">AaplaHub Core Philosophy</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">Deterministic Flow</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary-container">"Enter once. Reuse securely across Bharat."</h2>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Zero persistent central document store. Cryptographic tokens pull attributes just-in-time from source registries.
              </span>
            </div>

            {/* 4-Step Interactive Linear Topology Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
              <div className="relative bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between transition-all hover:bg-surface-container">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">01</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">explore</span>
                </div>
                <div>
                  <h3 className="font-title-sm text-title-sm text-primary-container font-semibold mb-1">Pick Sovereign Service</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Select state or union schemes without scanning PDFs or photocopying certificates.</p>
                </div>
                <div className="mt-space-md pt-space-xs font-code-sm text-code-sm text-on-surface-variant">
                  Input: Unified Service Registry
                </div>
              </div>
              <div className="relative bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between transition-all hover:bg-surface-container">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">02</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">key</span>
                </div>
                <div>
                  <h3 className="font-title-sm text-title-sm text-primary-container font-semibold mb-1">Grant Single-Use Consent</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Approve specific scoped attributes under DPDP §6. Granular time-bound revocation.</p>
                </div>
                <div className="mt-space-md pt-space-xs font-code-sm text-code-sm text-on-surface-variant">
                  Mechanism: PKI Token Engine
                </div>
              </div>
              <div className="relative bg-secondary text-on-secondary rounded-lg p-space-md flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="w-7 h-7 rounded-full bg-surface-container-lowest text-secondary font-code-sm text-code-sm flex items-center justify-center font-bold">03</span>
                  <span className="material-symbols-outlined text-on-secondary text-[20px] animate-pulse">schema</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="font-title-sm text-title-sm text-on-secondary font-semibold">Canonical Hydration</h3>
                    <span className="bg-surface-container-lowest/20 font-label-caps text-label-caps px-1 py-0.5 rounded text-on-secondary">Active</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-inverse-on-surface">Attributes normalized in real-time between DigiLocker, UIDAI and State DVET DBs.</p>
                </div>
                <div className="mt-space-md pt-space-xs font-code-sm text-code-sm text-surface-dim">
                  Transit: Zero Persistent Storage
                </div>
              </div>
              <div className="relative bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between transition-all hover:bg-surface-container">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant font-code-sm text-code-sm flex items-center justify-center font-bold">04</span>
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">task_alt</span>
                </div>
                <div>
                  <h3 className="font-title-sm text-title-sm text-primary-container font-semibold mb-1">Instant Clearance</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Desk officers review cryptographically pre-verified tokens. 80% faster TAT SLA.</p>
                </div>
                <div className="mt-space-md pt-space-xs font-code-sm text-code-sm text-on-surface-variant">
                  Result: Signed Verifiable Credential
                </div>
              </div>
            </div>
          </section>

          {/* Primary Action Launchpad (High Value Citizen CTAs) */}
          <section className="mb-gutter">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-2 border-surface-container-high mb-space-md gap-2">
              <h2 className="text-xl font-semibold text-primary-container">Available Services & Catalogues</h2>
              <Link to="/citizen/applications" className="inline-flex items-center gap-1 font-title-sm text-title-sm text-secondary hover:underline bg-secondary/10 px-3 py-1.5 rounded-lg transition-colors">
                View Application Portfolio <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              
              {/* Service 1: Employment Assistance */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all group border border-surface-container-high">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-[24px]">assignment_add</span>
                    </div>
                    <span className="bg-surface-container-low text-secondary font-label-caps text-label-caps px-2 py-0.5 rounded font-semibold border border-outline-variant/30">
                      FEE: ₹150
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary-container mb-1 group-hover:text-secondary transition-colors">
                    Employment Assistance
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md h-12">
                    Apply for state-sponsored skill deployment and employment assistance.
                  </p>
                </div>
                <button 
                  onClick={() => handleApply('Employment Assistance', 150)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-secondary text-on-primary font-title-sm text-title-sm px-space-md py-2.5 rounded-lg transition-colors"
                >
                  <span>Apply Now</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>

              {/* Service 2: Driving License Renewal */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all group border border-surface-container-high opacity-70">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-surface-container text-on-surface-variant flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-[24px]">directions_car</span>
                    </div>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-2 py-0.5 rounded font-semibold border border-outline-variant/30">
                      FEE: ₹400
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary-container mb-1">
                    Driving License Renewal
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md h-12">
                    Renew your non-transport driving license online.
                  </p>
                </div>
                <button 
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 bg-surface-container text-on-surface-variant font-title-sm text-title-sm px-space-md py-2.5 rounded-lg transition-colors cursor-not-allowed"
                >
                  <span>Coming Soon</span>
                </button>
              </div>

            </div>
          </section>

          {/* SIH 2026 Evaluation Sandbox Banner */}
          <section className="w-full bg-surface-container-low rounded-xl p-space-md mb-space-md shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">science</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-title-sm text-title-sm text-primary-container font-semibold">SIH 2026 Evaluation Sandbox Environment</span>
                    <span className="bg-surface-container text-on-surface-variant font-code-sm text-code-sm px-1.5 py-0.5 rounded font-medium">Node ID: IN-MH-SANDBOX-03</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    All citizen demographic attributes shown are synthetic non-PII test records routed across simulated mock connectors.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm shrink-0 font-code-sm text-code-sm">
                <span className="bg-surface-container-lowest text-secondary px-space-sm py-1 rounded font-semibold shadow-xs">Mock Latency: 38ms</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
