import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApplicationStore } from '../../store/applicationStore';

interface Props {
  onNext: () => void;
  onReject?: () => void;
}

export default function PaymentStep({ onNext }: Props) {
  const store = useApplicationStore();
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(store.feeAmount === 0);

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full max-w-[1440px] mx-auto py-space-md flex flex-col gap-space-lg">
          {/* Progress Indicator & Protocol Banner */}
          <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="px-space-sm py-space-xs rounded bg-surface-container font-code-sm text-code-sm text-secondary font-semibold">STAGE 5 OF 5</span>
                <span className="font-headline-sm text-headline-sm text-on-surface">Fee Settlement &amp; Ephemeral Token Shred</span>
              </div>
              <div className="flex items-center gap-2 px-space-sm py-1 bg-surface-container-low rounded">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">DPDP Nonce: 0x9AF84..REVOKED</span>
              </div>
            </div>
            {/* Stepper Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-sm pt-space-xs">
              <div className="flex flex-col gap-1 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => store.setStep('ELIGIBILITY')}>
                <div className="h-1.5 w-full bg-on-tertiary-container rounded-full"></div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">1. Eligibility Verified</span>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => store.setStep('CONSENT')}>
                <div className="h-1.5 w-full bg-on-tertiary-container rounded-full"></div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">2. DPDP Consent Bound</span>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => store.setStep('FETCHING')}>
                <div className="h-1.5 w-full bg-on-tertiary-container rounded-full"></div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">3. Schema Normalization</span>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => store.setStep('APPLICATION')}>
                <div className="h-1.5 w-full bg-on-tertiary-container rounded-full"></div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">4. Auto-Hydration</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-1.5 w-full bg-secondary rounded-full"></div>
                <span className="font-label-caps text-label-caps uppercase text-secondary font-bold">5. Issuance &amp; Purge</span>
              </div>
            </div>
          </div>
          {/* Main Operational Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left Column: Official Docket & Cryptographic Envelope (~60% = col-span-7) */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              {/* Acknowledgement Docket Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
                <div className="flex items-start justify-between gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center flex-shrink-0 text-on-tertiary-container">
                      <span className="material-symbols-outlined text-[28px]">verified</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps uppercase text-on-tertiary-container font-bold tracking-wider">Statutory Receipt Dispatch #2026</span>
                      <h1 className="font-headline-md text-headline-md text-on-surface mt-0.5">Application Docket Generated &amp; Dispatched</h1>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Skill &amp; Apprenticeship Registration 2026 (DVET-MH)</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-center p-2 bg-surface-container-low rounded-lg">
                    <svg className="w-16 h-16 text-on-surface" fill="currentColor" viewBox="0 0 64 64">
                      <rect fill="none" height="22" rx="2" stroke="currentColor" strokeWidth="4" width="22" x="6" y="6"></rect>
                      <rect fill="currentColor" height="10" width="10" x="12" y="12"></rect>
                      <rect fill="none" height="22" rx="2" stroke="currentColor" strokeWidth="4" width="22" x="36" y="6"></rect>
                      <rect fill="currentColor" height="10" width="10" x="42" y="12"></rect>
                      <rect fill="none" height="22" rx="2" stroke="currentColor" strokeWidth="4" width="22" x="6" y="36"></rect>
                      <rect fill="currentColor" height="10" width="10" x="12" y="42"></rect>
                      <path d="M36 36h8v8h-8zM48 36h10v6H48zM36 48h6v10h-6zM46 48h6v6h-6zM54 52h4v6h-4z"></path>
                    </svg>
                    <span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Scan to Verify</span>
                  </div>
                </div>
                {/* Metadata Roster */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md p-space-md bg-surface-container-low rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Application Reference</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-code-md text-code-md text-on-surface font-semibold" id="appRefText">AHP-2026-89421</span>
                      <button className="px-2 py-0.5 rounded bg-surface-container-lowest font-code-sm text-code-sm text-secondary hover:bg-secondary hover:text-on-secondary transition-colors" onClick={(e) => { navigator.clipboard.writeText('AHP-2026-89421'); (e.target as HTMLButtonElement).innerText = 'COPIED'; }}>
                        COPY
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Timestamp (UTC +05:30)</span>
                    <span className="font-code-md text-code-md text-on-surface mt-1">19-Sep-2026, 00:04:12 IST</span>
                  </div>
                  <div className="sm:col-span-2 flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Target Directorate</span>
                    <span className="font-body-md text-body-md text-on-surface font-medium mt-0.5">Directorate of Vocational Education &amp; Training (DVET), Govt of Maharashtra</span>
                  </div>
                </div>
              </div>
              {/* Statutory Fee Breakdown Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
                <div className={`flex items-center justify-between pb-space-sm px-space-md py-space-sm rounded-lg ${isPaid ? 'bg-surface-container-low' : 'bg-primary-container'}`}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">account_balance_wallet</span>
                    <span className="font-title-sm text-title-sm text-on-surface">Statutory Ledger Settlement Statement</span>
                  </div>
                  <span className={`px-space-sm py-space-xs rounded font-code-sm text-code-sm font-bold ${isPaid ? 'bg-surface-container-lowest text-on-tertiary-container' : 'bg-primary text-on-primary'}`}>
                    {isPaid ? 'SETTLED • ZERO BALANCE' : 'PAYMENT PENDING'}
                  </span>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between py-1">
                    <span className="font-body-md text-body-md text-on-surface">Base DVET Registration Fee</span>
                    <span className="font-code-md text-code-md text-on-surface">₹250.00</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-body-md text-body-md text-on-surface">DPI Sovereign Public Good Protocol Fee</span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-on-surface-variant">Zero Markup</span>
                    </div>
                    <span className="font-code-md text-code-md text-on-surface">₹0.00</span>
                  </div>
                  {store.feeAmount === 0 && (
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-space-sm rounded">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified_user</span>
                        <span className="font-body-md text-body-md text-on-tertiary-container font-medium">NSDL ZKP Economic Subsidy Grant (100% Exemption Applied)</span>
                      </div>
                      <span className="font-code-md text-code-md text-on-tertiary-container font-semibold">-₹250.00</span>
                    </div>
                  )}
                </div>
                {/* Total Band */}
                <div className="flex items-center justify-between p-space-md bg-surface-container rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Net Statutory Citizen Obligation</span>
                    {store.feeAmount === 0 && (
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Zero-Knowledge Income Proof Validated (NSDL Ledger Ref: ZKP-9981-L)</span>
                    )}
                  </div>
                  <span className="font-headline-lg text-headline-lg text-on-surface">₹{store.feeAmount.toFixed(2)}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="font-label-caps text-label-caps uppercase">Tx Gateway Ref:</span>
                    <span className="font-code-sm text-code-sm text-on-surface bg-surface-container-low px-2 py-0.5 rounded font-medium">BHARAT-UPI-SANDBOX-77192A</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-tertiary-container flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    Irrevocable Escrow Attested
                  </span>
                </div>
              </div>
              {/* Cryptographic Sovereign Non-Repudiation Envelope */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-secondary">token</span>
                    <span className="font-title-sm text-title-sm text-on-surface">Cryptographic Sovereign Envelope &amp; Attestation</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-secondary font-mono">Ed25519-SHA256</span>
                </div>
                <div className="p-space-md bg-primary text-surface rounded-lg flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase text-on-primary-container">Payload Canonical Hash Digest</span>
                    <span className="font-code-sm text-code-sm text-tertiary-fixed">Deterministic Match</span>
                  </div>
                  <div className="font-code-sm text-code-sm text-surface break-all bg-primary-container p-2.5 rounded select-all font-mono leading-relaxed">
                    9e4b787c88b0f0a28f89bc11394c2e6da834015ccaa01bfa54687e1f021c4dfa9809
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-on-primary-container pt-1">
                    <span className="font-body-sm text-body-sm">Signer: Controller of Certifying Authorities (CCA-India) Root CA</span>
                    <span className="font-code-sm text-code-sm">Valid Until: 19-Sep-2036</span>
                  </div>
                </div>
                {/* Download CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                  <button className="flex items-center justify-center gap-2 px-space-md py-2.5 rounded bg-primary text-on-primary font-title-sm text-title-sm hover:bg-inverse-surface transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Official Receipt (PDF)</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-space-md py-2.5 rounded bg-surface-container font-title-sm text-title-sm text-secondary hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-[18px]">badge</span>
                    <span>Export W3C Credential</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Right Column: Ephemeral Shred Terminal & Dispatch Routing (~40% = col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {/* HERO SECURITY FEATURE: Ephemeral Memory Purge Terminal */}
              <div className="bg-primary text-surface rounded-xl p-space-lg shadow-md flex flex-col gap-space-md relative overflow-hidden">
                {/* Background micro visual accent */}
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-secondary/15 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-surface-container-low/10 flex items-center justify-center text-tertiary-fixed">
                      <span className="material-symbols-outlined text-[22px]">delete_sweep</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-tertiary-fixed uppercase font-bold tracking-wider">DPDP Act 2023 §6.4 Compliant</span>
                      <h2 className="font-title-md text-title-md text-surface">Ephemeral Token Shred Notice</h2>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-code-sm text-code-sm font-bold">
                    0 KB DISK
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed relative z-10">
                  AaplaHub operates exclusively as a stateless zero-persistence cryptographic conduit. All transient demographic fragments, unencrypted Aadhaar tokens, and temporary files have been overwritten in volatile RAM.
                </p>
                {/* Interactive Pseudo Terminal Log */}
                <div className="bg-primary-container/90 rounded-lg p-space-md flex flex-col gap-2 font-mono relative z-10">
                  <div className="flex items-center justify-between pb-1.5 border-b border-surface-container-low/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-variant"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></span>
                      <span className="font-code-sm text-code-sm text-on-primary-container ml-2">secure_mem_wipe.sh</span>
                    </div>
                    <span className="font-code-sm text-code-sm text-tertiary-fixed">EXIT_SUCCESS (0)</span>
                  </div>
                  <div className="flex flex-col gap-1 text-[11px] leading-5 text-surface-bright pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-on-primary-container">&gt; Memory Segment: 0x7F8B92CC</span>
                      <span className="text-tertiary-fixed font-semibold">[OVERWRITTEN 0x00]</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-primary-container">&gt; Aadhaar Demographic Heap</span>
                      <span className="text-surface font-semibold">PURGED (14ms)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-primary-container">&gt; DigiLocker PDF IOStream</span>
                      <span className="text-surface font-semibold">STREAM CLOSED</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-primary-container">&gt; Nonce Invalidation</span>
                      <span className="text-secondary-fixed font-semibold">SHA-256 BURNED</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-surface-container-low/10">
                      <span className="text-tertiary-fixed">&gt; Persistent Disk Footprint</span>
                      <span className="text-tertiary-fixed font-bold">0.00 KB RECORDED</span>
                    </div>
                  </div>
                </div>
                {/* Non-Repudiation Guarantee Seal */}
                <div className="flex items-center gap-3 p-space-sm bg-surface-container-lowest/5 rounded-lg relative z-10">
                  <span className="material-symbols-outlined text-secondary-fixed text-[24px]">verified_user</span>
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-surface">Zero Persistent PII Bonded</span>
                    <span className="font-body-sm text-body-sm text-on-primary-container">
                      Consuming officer workstation will evaluate only cryptographically signed claims without raw citizen identifiers.
                    </span>
                  </div>
                </div>
              </div>
              {/* Next Steps & Officer Forwarding */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex flex-col gap-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">swap_horiz</span>
                  <span className="font-title-sm text-title-sm text-on-surface">Officer Scrutiny &amp; SLA Pipeline</span>
                </div>
                <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Class-I Scrutiny Officer</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-on-surface font-medium">Assigned</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Shri Rajesh Sharma</span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">Desk: DVET-PUN-01 • Pune Divisional Headquarters</span>
                </div>
                <div className="flex items-center justify-between p-space-md bg-surface-container rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Guaranteed SLA Target</span>
                    <span className="font-title-sm text-title-sm text-on-surface font-semibold">48 Business Hours</span>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Resolution Expected</span>
                    <span className="font-code-sm text-code-sm text-secondary font-bold">21-Sep-2026, 00:04 IST</span>
                  </div>
                </div>
                {/* Workflow CTAs */}
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  {!isPaid ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button onClick={() => navigate('/citizen/dashboard')} className="flex-1 py-3 px-space-md rounded border border-outline-variant text-on-surface font-title-sm text-title-sm text-center hover:bg-surface-container transition-colors">
                        Cancel Application
                      </button>
                      <button onClick={() => setIsPaid(true)} className="flex-1 py-3 px-space-md rounded bg-primary text-on-primary font-title-sm text-title-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">payment</span>
                        <span>Make Payment (₹{store.feeAmount.toFixed(2)})</span>
                      </button>
                    </div>
                  ) : (
                    <button onClick={onNext} className="w-full py-3 px-space-md rounded bg-secondary text-on-secondary font-title-sm text-title-sm flex items-center justify-center gap-2 hover:bg-secondary-container transition-colors shadow-sm" data-path="application-tracking">
                      <span>Complete Transaction & View Audit Trail</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  )}
                </div>
              </div>
              {/* Sovereign Ecosystem Badge */}
              <div className="p-space-md bg-surface-container-low rounded-xl flex items-center justify-between gap-space-sm">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px]">shield</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Digital India Stack</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">NDGF Interoperability Standard v2.1</span>
                  </div>
                </div>
                <span className="font-code-sm text-code-sm text-on-tertiary-container font-bold">STQC PASSED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
