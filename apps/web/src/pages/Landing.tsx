import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Landing() {

  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* Top Sovereign Badge & Announcement Ribbon */}
        <section className="w-full bg-surface-container-low px-gutter py-space-sm flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-primary-container text-surface-bright px-space-sm py-0.5 rounded font-code-sm text-code-sm uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
              SIH 2026 Sandbox Track
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Problem Statement: Interoperability in Fragmented Government Services & Sovereign Data Federation
            </span>
          </div>
          <div className="flex items-center gap-space-md font-code-sm text-code-sm text-on-surface-variant">
            <span className="inline-flex items-center gap-1 text-on-tertiary-container">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              DPDP-2023 Compliant
            </span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <span className="hidden sm:inline">ISO/IEC 27701 Aligned</span>
          </div>
        </section>

        {/* Hero Header Block with Precision Typography & Direct Telemetry */}
        <section className="w-full px-gutter pt-space-xl pb-space-lg bg-surface relative overflow-hidden">
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-space-xl">
            <div className="flex flex-col max-w-3xl">
              <div className="inline-flex items-center gap-space-xs font-code-sm text-code-sm text-secondary uppercase tracking-widest mb-space-sm">
                <span className="material-symbols-outlined text-[16px]">account_tree</span>
                AaplaHub Sovereign Interoperability Gateway
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                One Federated Gateway.<br/>Zero Document Re-uploads.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md max-w-2xl leading-relaxed">
                AaplaHub acts as the sovereign canonical normalization layer between citizens, businesses, line departments, and statutory registries. Enter once, authorize granular consent, and reuse verified credentials securely.
              </p>
              {/* Trust Anchor Chips */}
              <div className="flex flex-wrap items-center gap-space-xs mt-space-lg">
                <div className="inline-flex items-center gap-1.5 bg-surface-container-high px-space-sm py-1 rounded font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary">cable</span>
                  Simulated Sandbox Connectors
                </div>
                <div className="inline-flex items-center gap-1.5 bg-surface-container-high px-space-sm py-1 rounded font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">lock_person</span>
                  DPDP Act Principles (Data Minimization)
                </div>
                <div className="inline-flex items-center gap-1.5 bg-surface-container-high px-space-sm py-1 rounded font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-on-secondary-fixed-variant">hourglass_empty</span>
                  Zero-Storage Ephemeral Buffer
                </div>
                <div className="inline-flex items-center gap-1.5 bg-surface-container-high px-space-sm py-1 rounded font-body-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">sync_alt</span>
                  Canonical Normalization Engine
                </div>
              </div>
            </div>

            {/* Real-time Verification Metric Widget */}
            <div className="w-full lg:w-80 bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Federated Gateway Pulse</span>
                <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-on-tertiary-container bg-surface-container px-space-xs py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                  SYNC LIVE
                </span>
              </div>
              <div className="grid grid-cols-2 gap-space-sm">
                <div className="bg-surface-container-low p-space-sm rounded">
                  <span className="font-code-sm text-code-sm text-on-surface-variant block">Latency</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface block mt-0.5">38ms</span>
                  <span className="font-body-sm text-body-sm text-on-tertiary-container">Synthetic TTL</span>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded">
                  <span className="font-code-sm text-code-sm text-on-surface-variant block">Consents Verified</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface block mt-0.5">14,892</span>
                  <span className="font-body-sm text-body-sm text-secondary">Zero-Store</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-primary-container text-surface-bright p-space-sm rounded">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">verified_user</span>
                  <span className="font-code-sm text-code-sm">Cryptographic Dockets</span>
                </div>
                <span className="font-code-sm text-code-sm text-tertiary-fixed">100% Tamperproof</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Role Gateways */}
        <section className="w-full px-gutter py-space-lg bg-surface">
          <div className="max-w-[1440px] mx-auto flex flex-col gap-space-md">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs pb-space-xs">
              <div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block">Operational Nodes</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Select Sovereign Gateway Desk</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Access specific citizen workflows, statutory review modules, business compliances, or inspect simulated interoperability ledger telemetry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mt-space-sm">
              {/* Card 1: Citizen Sovereign Portal */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-[26px]">badge</span>
                    </div>
                    <span className="font-code-sm text-code-sm bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant">NODE: 01</span>
                  </div>
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">Citizen Sovereign Portal</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                      Apply for welfare schemes, verify academic & identity credentials, issue single-use cryptographic consent tokens.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1">
                    <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">Key Capabilities</span>
                    <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-secondary"></span> Aadhaar & DigiLocker Fetch
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-secondary"></span> Instant Eligibility Pre-check
                    </span>
                  </div>
                </div>
                <div className="pt-space-lg">
                  <Link to="/oauth/mock?role=citizen" className="w-full inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary py-space-sm px-space-md rounded font-title-sm text-title-sm hover:bg-secondary transition-colors">
                    <span>Launch Citizen PWA</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 2: Officer Scrutiny Workstation */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[26px]">fact_check</span>
                    </div>
                    <span className="font-code-sm text-code-sm bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant">NODE: 02</span>
                  </div>
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">Officer Scrutiny Workstation</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                      High-velocity scrutiny desk, pre-verified canonical dockets, automated 4/4 statutory rule validation, and DSC approval.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1">
                    <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">Key Capabilities</span>
                    <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-on-tertiary-container"></span> Zero-Document Visual Scrutiny
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-on-tertiary-container"></span> Cryptographic DSC Signatures
                    </span>
                  </div>
                </div>
                <div className="pt-space-lg">
                  <Link to="/oauth/mock?role=officer" className="w-full inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary py-space-sm px-space-md rounded font-title-sm text-title-sm hover:bg-secondary transition-colors">
                    <span>Open Scrutiny Desk</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: Business Enterprise Suite (Disabled) */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group opacity-75">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-secondary-container/10 flex items-center justify-center text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                      <span className="material-symbols-outlined text-[26px]">domain</span>
                    </div>
                    <span className="font-code-sm text-code-sm bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant">NODE: 03</span>
                  </div>
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">Business Enterprise Suite</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                      Corporate single-window licensing, director DIN + PAN compliance, and multi-department statutory renewals.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1">
                    <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">Key Capabilities</span>
                    <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-secondary"></span> MCA-21 & GSTN Deep Sync
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-secondary"></span> Composite Business Dockets
                    </span>
                  </div>
                </div>
                <div className="pt-space-lg">
                  <button disabled className="w-full inline-flex items-center justify-center gap-space-xs bg-surface-container text-on-surface-variant py-space-sm px-space-md rounded font-title-sm text-title-sm cursor-not-allowed">
                    <span>Coming Soon</span>
                  </button>
                </div>
              </div>

              {/* Card 4: Platform Admin & Interop Gateway (Disabled) */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group opacity-75">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[26px]">hub</span>
                    </div>
                    <span className="font-code-sm text-code-sm bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant">NODE: 04</span>
                  </div>
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">Platform Admin & Interop Gateway</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                      Monitor simulated connector nodes, inspect real-time canonical field mappings, and view non-PII audit ledger.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1">
                    <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">Key Capabilities</span>
                    <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-primary-container"></span> Schema Mutation Observability
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-primary-container"></span> Nonce-Linked Audit Trails
                    </span>
                  </div>
                </div>
                <div className="pt-space-lg">
                  <button disabled className="w-full inline-flex items-center justify-center gap-space-xs bg-surface-container text-on-surface-variant py-space-sm px-space-md rounded font-title-sm text-title-sm cursor-not-allowed">
                    <span>Coming Soon</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sandbox Disclaimer Box */}
        <section className="w-full px-gutter py-space-lg bg-surface mt-auto">
          <div className="max-w-[1440px] mx-auto bg-surface-container-high p-space-md rounded-xl flex flex-col md:flex-row items-start md:items-center gap-space-md shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-[24px]">science</span>
            </div>
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="font-title-sm text-title-sm text-on-surface">POC Demonstration Environment Notice</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                This prototype operates under SIH 2026 Sandbox constraints. All connectors, registries (UIDAI, NSDL, Parivahan, MSBTE), and credential verification calls operate in sandbox mode utilizing synthetic, non-PII citizen records. No actual citizen data is accessed or stored.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1 font-code-sm text-code-sm bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface shadow-sm">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">token</span>
                MOCK DATASET: MH_PUNE_SYNTH_V2
              </span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
