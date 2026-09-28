import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import POCWorkflowTimeline from '../components/POCWorkflowTimeline';

export default function Landing() {

  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* Hero Header Block with Precision Typography & Direct Telemetry */}
        <section className="w-full px-gutter pt-space-xl pb-space-lg bg-surface relative overflow-hidden">
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-space-xl">
            <div className="flex flex-col max-w-3xl">
              <span className="text-[3rem] lg:text-[4rem] font-extrabold text-orange-500 mb-4 tracking-tighter leading-none">
                AaplaHub
              </span>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-2">
                One Federated Gateway.<br/>Zero Document Re-uploads.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md max-w-2xl leading-relaxed">
                AaplaHub acts as the sovereign canonical normalization layer between citizens, businesses, line departments, and statutory registries. Enter once, authorize granular consent, and reuse verified credentials securely.
              </p>
            </div>

            <POCWorkflowTimeline />
          </div>
        </section>

        {/* Interactive Role Gateways */}
        <section className="w-full px-gutter py-space-lg bg-surface">
          <div className="max-w-[1440px] mx-auto flex flex-col gap-space-md">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs pb-space-xs">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Select Sovereign Gateway Desk</h2>
              </div>
              <div className="flex items-center gap-space-md font-code-sm text-code-sm text-on-surface-variant mb-1 bg-surface-container px-3 py-1.5 rounded-full shadow-sm">
                <span className="inline-flex items-center gap-1 text-on-tertiary-container font-medium">
                  <span className="material-symbols-outlined text-[14px]">shield</span>
                  DPDP-2023 Compliant
                </span>
                <span className="hidden sm:inline text-outline-variant">•</span>
                <span className="hidden sm:inline font-medium">ISO/IEC 27701 Aligned</span>
              </div>
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

              {/* Card 3: Business Enterprise Suite */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
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
                  <Link to="/oauth/mock?role=business" className="w-full inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary py-space-sm px-space-md rounded font-title-sm text-title-sm hover:bg-secondary transition-colors">
                    <span>Enter Business Suite</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 4: Platform Admin & Interop Gateway */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
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
                  <Link to="/oauth/mock?role=admin" className="w-full inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary py-space-sm px-space-md rounded font-title-sm text-title-sm hover:bg-secondary transition-colors">
                    <span>Access Gateway Console</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
