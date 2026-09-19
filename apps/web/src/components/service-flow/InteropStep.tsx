

import { useState } from 'react';
import { useApplicationStore } from '../../store/applicationStore';

interface Props {
  onNext: () => void;
  onReject?: () => void;
}

export default function InteropStep({ onNext }: Props) {
  const store = useApplicationStore();
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Telemetry Bar / Pipeline Status Bar */}
        <section className="w-full bg-primary-container text-on-primary py-space-sm px-margin">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
            <div className="flex flex-wrap items-center gap-space-md">
              <div className="flex items-center gap-space-xs bg-surface-container-lowest/10 px-space-sm py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
                <span className="font-code-sm text-code-sm uppercase tracking-wider text-primary-fixed">Live Sovereign Connector Pipeline</span>
              </div>
              <span className="font-code-sm text-code-sm text-on-primary-container">Ephemeral Bus: <span className="text-on-primary font-semibold">ebus_stream_mumbai_04</span></span>
              <span className="text-outline hidden sm:inline">•</span>
              <div className="flex items-center gap-space-xs">
                <span className="font-label-caps text-label-caps uppercase text-on-primary-container">Target Scheme:</span>
                <span className="font-title-sm text-title-sm text-primary-fixed">Skill & Apprenticeship Registration 2026 (DVET Maharashtra)</span>
              </div>
            </div>
            <div className="flex items-center gap-space-lg font-code-sm text-code-sm">
              <div className="flex items-center gap-space-xs text-primary-fixed">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">hub</span>
                <span>3/3 Sovereign Connectors Engaged</span>
              </div>
              <div className="flex items-center gap-space-xs text-primary-fixed">
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed">timer</span>
                <span>Latency: <strong className="text-on-primary font-semibold">42ms</strong></span>
              </div>
              <div className="hidden lg:flex items-center gap-space-xs text-tertiary-fixed bg-tertiary-container/60 px-space-sm py-0.5 rounded">
                <span className="material-symbols-outlined text-[16px]">lock_clock</span>
                <span>Zero PII Disk Retention</span>
              </div>
            </div>
          </div>
        </section>
        {/* Context Subheader & Ref Bar */}
        <section className="w-full bg-surface-container-low py-space-md px-margin">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-9 h-9 bg-secondary rounded flex items-center justify-center text-on-secondary font-code-md text-code-md font-bold">
                03
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Step 3 of 5 • In-Flight Handshake</span>
                  <span className="text-outline-variant">•</span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">Trace: ndgf-trace-89a1c-prod</span>
                </div>
                <h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Live Interoperability & Dynamic Transformation Engine</h1>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-md">
              <div className="bg-surface px-space-md py-1.5 rounded-lg shadow-sm flex items-center gap-space-sm">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Application Ref:</span>
                <span className="font-code-md text-code-md font-bold text-on-surface tracking-wide">AHP-2026-89421</span>
                <button className="text-outline hover:text-secondary flex items-center transition-colors" title="Copy Hash" onClick={() => { navigator.clipboard.writeText('AHP-2026-89421'); setCopiedHash(true); setTimeout(() => setCopiedHash(false), 2000); }}>
<span className="material-symbols-outlined text-[16px]">{copiedHash ? 'check' : 'content_copy'}</span>
</button>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-1.5 rounded-lg shadow-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                <span className="font-label-caps text-label-caps uppercase text-on-surface">DPDP Act §6(1) Enforced</span>
              </div>
            </div>
          </div>
        </section>
        {/* Multi-Node Pipeline Progress (Top Stepper) */}
        <section className="w-full bg-surface py-space-lg px-margin">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">
              {/* Node 1: Complete */}
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-start gap-space-md relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-on-tertiary-container"></div>
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 text-on-tertiary-container">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-caps text-label-caps uppercase text-on-tertiary-container">Node 01 • Complete</span>
                    <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">check_circle</span>
                  </div>
                  <span className="font-title-sm text-title-sm text-on-surface truncate">Sovereign Consent Token</span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant truncate">Nonce: 0x7f48...d13a (Signed)</span>
                </div>
              </div>
              {/* Node 2: Active / Streaming */}
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-start gap-space-md relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary animate-pulse"></div>
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center flex-shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-caps text-label-caps uppercase text-secondary">Node 02 • Active Wire</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                  </div>
                  <span className="font-title-sm text-title-sm text-on-surface truncate">Heterogeneous Ingestion</span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant truncate">3 Connectors Responded (200 OK)</span>
                </div>
              </div>
              {/* Node 3: Current Focus / Normalizing */}
              <div className="bg-surface-container-highest p-space-md rounded-lg shadow-md flex items-start gap-space-md relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 text-on-primary">
                  <span className="material-symbols-outlined text-[18px]">transform</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface font-bold">Node 03 • Processing</span>
                    <span className="font-code-sm text-code-sm bg-secondary-fixed text-on-secondary-fixed px-1 rounded">Heuristic</span>
                  </div>
                  <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">Canonical Normalizer</span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant truncate">Fuzzy Match 99.4% • NDGF v2.4</span>
                </div>
              </div>
              {/* Node 4: Pending */}
              <div className="bg-surface-container-low p-space-md rounded-lg opacity-80 flex items-start gap-space-md relative">
                <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center flex-shrink-0 text-outline">
                  <span className="material-symbols-outlined text-[18px]">dynamic_form</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-caps text-label-caps uppercase text-outline">Node 04 • Queued</span>
                  </div>
                  <span className="font-title-sm text-title-sm text-on-surface-variant truncate">Form Pre-Fill Hydration</span>
                  <span className="font-code-sm text-code-sm text-outline truncate">Awaiting W3C Payload Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Transformation Architecture (3 Columns) */}
        <section className="w-full px-margin py-space-lg">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* COLUMN 1: Raw Heterogeneous Source Payloads (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px]">input</span>
                    <h2 className="font-title-sm text-title-sm text-on-surface uppercase tracking-wide">1. Raw Source Payloads</h2>
                  </div>
                  <span className="font-code-sm text-code-sm bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant">Simulated Sandbox</span>
                </div>
                {/* Card 1: UIDAI e-KYC */}
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm relative group hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-code-sm text-code-sm bg-primary-container text-on-primary px-space-xs py-0.5 rounded">REST: UIDAI-KYC v2.4</span>
                      <span className="font-title-sm text-title-sm text-on-surface">UIDAI Identity Vault</span>
                    </div>
                    <span className="flex items-center gap-1 font-label-caps text-label-caps bg-surface-container text-on-tertiary-container px-space-xs py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>AUTH_OK
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Authoritative legal identity verified via Aadhaar OTP biometric token.</p>
                  <div className="bg-primary-container text-primary-fixed p-space-sm rounded font-code-sm text-code-sm overflow-x-auto selection:bg-secondary">
                    <pre><code>
                      {`{
  "uid_token": "****-****-8912",
  "full_name": "FUZAIL AHMED KHAN",
  "dob": "14/08/2003",
  "gender": "MALE",
  "postal_pin": "411014",
  "status": "AUTH_SUCCESS"
}`}
                    </code></pre>
                  </div>
                  <div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
                    <span>Latency: 28ms</span>
                    <span className="text-on-tertiary-container font-semibold">Sig: SHA256-RSA-Valid</span>
                  </div>
                </div>
                {/* Card 2: MSBTE Pune DigiLocker API */}
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm relative group hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-code-sm text-code-sm bg-primary-container text-on-primary px-space-xs py-0.5 rounded">SOAP/JSON: MSBTE-v1.1</span>
                      <span className="font-title-sm text-title-sm text-on-surface">MSBTE Pune Academic</span>
                    </div>
                    <span className="flex items-center gap-1 font-label-caps text-label-caps bg-surface-container text-on-tertiary-container px-space-xs py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>DIGILOCKER_PULL
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Diploma marksheet pull via DigiLocker sovereign repository certificate URI.</p>
                  <div className="bg-primary-container text-primary-fixed p-space-sm rounded font-code-sm text-code-sm overflow-x-auto selection:bg-secondary">
                    <pre><code>
                      {`{
  "issuer": "MSBTE_MAHARASHTRA",
  "candidateName": "Khan Fuzail A.",
  "enrollment_no": "2019481902",
  "marks_obt": 846,
  "marks_tot": 1000,
  "grade": "Distinction"
}`}
                    </code></pre>
                  </div>
                  <div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
                    <span>Latency: 39ms</span>
                    <span className="text-on-tertiary-container font-semibold">Cert: in.gov.msbte.2023.cert</span>
                  </div>
                </div>
                {/* Card 3: NSDL Tax Mesh ZKP assertion */}
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm relative group hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-code-sm text-code-sm bg-primary-container text-on-primary px-space-xs py-0.5 rounded">ZKP: NSDL-PAN-ZK</span>
                      <span className="font-title-sm text-title-sm text-on-surface">NSDL Tax Zero-Knowledge</span>
                    </div>
                    <span className="flex items-center gap-1 font-label-caps text-label-caps bg-surface-container text-on-tertiary-container px-space-xs py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>PROOF_VALID
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Zero-Knowledge Proof: Proves annual income &lt; ₹2.5L without exposing raw PAN/ITR.</p>
                  <div className="bg-primary-container text-primary-fixed p-space-sm rounded font-code-sm text-code-sm overflow-x-auto selection:bg-secondary">
                    <pre><code>
                      {`{
  "pan_status": "ACTIVE_LINKED",
  "zkp_income_sub250k": true,
  "zk_verifier": "Groth16_Snark",
  "salt": "0x8f4cd891b8a002"
}`}
                    </code></pre>
                  </div>
                  <div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm">
                    <span>Latency: 14ms</span>
                    <span className="text-on-tertiary-container font-semibold">Zero Income Leakage</span>
                  </div>
                </div>
              </div>
              {/* COLUMN 2: Canonical Normalization & Discrepancy Resolution (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px]">sync_alt</span>
                    <h2 className="font-title-sm text-title-sm text-on-surface uppercase tracking-wide">2. Dynamic Normalization Hub</h2>
                  </div>
                  <span className="font-code-sm text-code-sm bg-surface-container-high px-space-xs py-0.5 rounded text-on-surface font-semibold">4 Rules Applied</span>
                </div>
                {/* Central Interactive Logic Center */}
                <div className="bg-surface-container p-space-md rounded-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between bg-surface-container-lowest p-space-sm rounded">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
                      <span className="font-title-sm text-title-sm text-on-surface">NDGF Spec v2.4 Compliant</span>
                    </div>
                    <span className="font-code-sm text-code-sm bg-surface-variant text-on-surface px-space-xs py-0.5 rounded">Deterministic</span>
                  </div>
                  {/* Transformation Rule 1: Heuristic Fuzzy Name Match */}
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-space-xs shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps uppercase text-secondary">Rule 1 • Fuzzy Identity Reconciliation</span>
                      <span className="font-code-sm text-code-sm text-on-tertiary-container font-bold bg-surface-container px-space-xs py-0.5 rounded">99.4% Match</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 my-1">
                      <div className="flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded text-body-sm">
                        <span className="font-code-sm text-code-sm text-on-surface-variant">UIDAI.full_name:</span>
                        <span className="font-code-sm text-code-sm text-on-surface font-medium">"FUZAIL AHMED KHAN"</span>
                      </div>
                      <div className="flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded text-body-sm">
                        <span className="font-code-sm text-code-sm text-on-surface-variant">MSBTE.candidateName:</span>
                        <span className="font-code-sm text-code-sm text-on-surface font-medium">"Khan Fuzail A."</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">subdirectory_arrow_right</span>
                      <div className="flex-1 bg-surface-variant/70 p-1.5 rounded flex items-center justify-between">
                        <span className="font-code-sm text-code-sm text-on-surface font-semibold">canonical_legal_name:</span>
                        <span className="font-code-sm text-code-sm text-secondary font-bold">"Fuzail Ahmed Khan"</span>
                      </div>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant italic">Token Sort Ratio + Levenshtein Distance verified by AaplaHub heuristic module.</span>
                  </div>
                  {/* Transformation Rule 2: Date of Birth Normalization */}
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-space-xs shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps uppercase text-secondary">Rule 2 • Temporal Standardizer</span>
                      <span className="font-code-sm text-code-sm text-on-surface-variant">ISO-8601</span>
                    </div>
                    <div className="flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">UIDAI Format: <strong className="text-on-surface">"14/08/2003"</strong></span>
                      <span className="material-symbols-outlined text-[16px] text-outline">arrow_forward</span>
                      <span className="font-code-sm text-code-sm text-secondary font-bold">"2003-08-14"</span>
                    </div>
                    <div className="bg-surface-variant/70 p-1.5 rounded flex items-center justify-between">
                      <span className="font-code-sm text-code-sm text-on-surface font-semibold">birth_date:</span>
                      <span className="font-code-sm text-code-sm text-secondary font-bold">"2003-08-14" (Age: 22y)</span>
                    </div>
                  </div>
                  {/* Transformation Rule 3: Academic Score Normalization */}
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-space-xs shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps uppercase text-secondary">Rule 3 • Academic Merit Classifier</span>
                      <span className="font-code-sm text-code-sm text-on-tertiary-container font-bold">Score: 84.60%</span>
                    </div>
                    <div className="flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Raw: 846 / 1000 ("Distinction")</span>
                      <span className="material-symbols-outlined text-[16px] text-outline">calculate</span>
                      <span className="font-code-sm text-code-sm text-on-surface font-semibold">Formula: (obt/tot)*100</span>
                    </div>
                    <div className="bg-surface-variant/70 p-1.5 rounded flex items-center justify-between">
                      <span className="font-code-sm text-code-sm text-on-surface font-semibold">qualifying_merit_score:</span>
                      <span className="font-code-sm text-code-sm text-secondary font-bold">84.60 (Grade 1 / First Class)</span>
                    </div>
                  </div>
                  {/* Transformation Rule 4: Statutory Fee Waiver Rule */}
                  <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-space-xs shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps uppercase text-secondary">Rule 4 • Statutory Fee Rule</span>
                      <span className="font-code-sm text-code-sm text-on-tertiary-container font-bold bg-surface-container px-space-xs py-0.5 rounded">₹0.00 Applied</span>
                    </div>
                    <div className="flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">NSDL.zkp_income_sub250k == true</span>
                      <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
                    </div>
                    <div className="bg-surface-variant/70 p-1.5 rounded flex items-center justify-between">
                      <span className="font-code-sm text-code-sm text-on-surface font-semibold">statutory_fee_exemption:</span>
                      <span className="font-code-sm text-code-sm text-on-tertiary-container font-bold">true (Govt Exemption Active)</span>
                    </div>
                  </div>
                </div>
                {/* Micro Telemetry Card: Hash Provenance */}
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-secondary text-[24px]">fingerprint</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Pipeline Hash Chain</span>
                    <span className="font-code-sm text-code-sm text-on-surface truncate">SHA256: 9e32f483b4c10a34e0219bd948a1...</span>
                  </div>
                </div>
              </div>
              {/* COLUMN 3: Normalized Canonical Payload (W3C JSON-LD) (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary-container text-[20px]">output</span>
                    <h2 className="font-title-sm text-title-sm text-on-surface uppercase tracking-wide">3. Resolved Canonical Packet</h2>
                  </div>
                  <div className="flex items-center gap-1 font-code-sm text-code-sm bg-tertiary-container text-on-tertiary px-space-xs py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping"></span>
                    <span>W3C JSON-LD</span>
                  </div>
                </div>
                {/* Monospace JSON-LD Output Terminal */}
                <div className="bg-primary-container text-on-primary rounded-lg shadow-md p-space-md flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></span>
                        <span className="font-code-sm text-code-sm text-primary-fixed ml-space-xs">payload_dvet_canonical.jsonld</span>
                      </div>
                      <button className="text-primary-fixed hover:text-on-primary text-xs flex items-center gap-1 transition-colors" title="Copy JSON" onClick={() => { navigator.clipboard.writeText('{"@context": ["https://www.w3.org/2018/credentials/v1", "https://schema.aaplahub.gov.in/v2/dvet.jsonld"], "type": ["VerifiablePresentation", "CitizenDPIPacket"]}'); setCopiedJson(true); setTimeout(() => setCopiedJson(false), 2000); }}>
<span className="material-symbols-outlined text-[14px]">{copiedJson ? 'check' : 'file_copy'}</span>
<span className="font-code-sm text-code-sm">{copiedJson ? 'Copied!' : 'Copy'}</span>
</button>
                    </div>
                    <div className="font-code-sm text-code-sm overflow-x-auto selection:bg-secondary leading-relaxed text-on-surface-variant">
                      <pre className="text-primary-fixed"><code>{"{"}
                        <span className="text-secondary-fixed">"@context"</span>: [
                        <span className="text-tertiary-fixed">"https://www.w3.org/2018/credentials/v1"</span>,
                        <span className="text-tertiary-fixed">"https://schema.aaplahub.gov.in/v2/dvet.jsonld"</span>
                        ],
                        <span className="text-secondary-fixed">"type"</span>: [<span className="text-tertiary-fixed">"VerifiablePresentation"</span>, <span className="text-tertiary-fixed">"CitizenDPIPacket"</span>],
                        <span className="text-secondary-fixed">"canonical_identity"</span>: {"{"}
                        <span className="text-secondary-fixed">"canonical_legal_name"</span>: <span className="text-tertiary-fixed">"Fuzail Ahmed Khan"</span>,
                        <span className="text-secondary-fixed">"birth_date"</span>: <span className="text-tertiary-fixed">"2003-08-14"</span>,
                        <span className="text-secondary-fixed">"gender"</span>: <span className="text-tertiary-fixed">"M"</span>,
                        <span className="text-secondary-fixed">"residence_postal_code"</span>: <span className="text-tertiary-fixed">"411014"</span>,
                        <span className="text-secondary-fixed">"aadhaar_vault_ref"</span>: <span className="text-tertiary-fixed">"uid-tkn:8912-ok"</span>
                        {"}"},
                        <span className="text-secondary-fixed">"academic_record"</span>: {"{"}
                        <span className="text-secondary-fixed">"issuing_board"</span>: <span className="text-tertiary-fixed">"MSBTE Maharashtra"</span>,
                        <span className="text-secondary-fixed">"qualifying_merit_score"</span>: <span className="text-tertiary-fixed">84.60</span>,
                        <span className="text-secondary-fixed">"classification"</span>: <span className="text-tertiary-fixed">"Distinction"</span>,
                        <span className="text-secondary-fixed">"credential_uri"</span>: <span className="text-tertiary-fixed">"digilocker://in.gov.msbte/2019481902"</span>
                        {"}"},
                        <span className="text-secondary-fixed">"statutory_assertions"</span>: {"{"}
                        <span className="text-secondary-fixed">"pan_status"</span>: <span className="text-tertiary-fixed">"ACTIVE_LINKED"</span>,
                        <span className="text-secondary-fixed">"income_sub_250k_zkp"</span>: <span className="text-tertiary-fixed">true</span>,
                        <span className="text-secondary-fixed">"statutory_fee_exemption"</span>: <span className="text-tertiary-fixed">true</span>,
                        <span className="text-secondary-fixed">"payable_fee_inr"</span>: <span className="text-tertiary-fixed">0.00</span>
                        {"}"},
                        <span className="text-secondary-fixed">"compliance_metadata"</span>: {"{"}
                        <span className="text-secondary-fixed">"consent_nonce"</span>: <span className="text-tertiary-fixed">"0x7f48d13a"</span>,
                        <span className="text-secondary-fixed">"handshake_latency_ms"</span>: <span className="text-tertiary-fixed">42</span>,
                        <span className="text-secondary-fixed">"disk_retention"</span>: <span className="text-tertiary-fixed">false</span>
                        {"}"}
                        {"}"}</code></pre>
                    </div>
                  </div>
                  {/* Ephemeral RAM Shred Timer Countdown */}
                  <div className="mt-space-md pt-space-sm bg-surface-container-lowest/5 p-space-sm rounded">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-secondary-fixed">
                        <span className="material-symbols-outlined text-[16px] animate-pulse">memory</span>
                        <span className="font-code-sm text-code-sm font-semibold">Ephemeral RAM Cache:</span>
                      </div>
                      <span className="font-code-md text-code-md text-tertiary-fixed font-bold" id="shred-countdown">TTL: 04m 58s</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-primary-container mt-1">Payload will auto-evaporate from volatile memory once dispatched to DVET Maharashtra API.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Bottom GovTech Action Bar */}
        <section className="w-full bg-surface-container-low py-space-lg px-margin shadow-lg">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-tertiary-container flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">task_alt</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-title-sm text-title-sm text-on-surface">Payload Normalized Successfully</span>
                  <span className="font-code-sm text-code-sm bg-surface-container text-on-tertiary-container px-space-xs py-0.5 rounded font-bold">4 of 4 Rules Passed</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Ready to populate DVET Maharashtra Apprentice Portal form without any manual keying.</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-md w-full md:w-auto">
              <button className="flex-1 md:flex-initial flex items-center justify-center gap-space-xs bg-surface text-on-surface px-space-md py-space-sm rounded shadow-sm hover:bg-surface-container transition-colors font-title-sm text-title-sm" type="button">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Inspect Hashes & Signatures</span>
              </button>
              <button 
                onClick={onNext} 
                disabled={!store.applicationId}
                className={`flex-1 md:flex-initial flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded shadow-md transition-all font-title-sm text-title-sm font-semibold ${!store.applicationId ? 'bg-surface-variant text-on-surface-variant cursor-not-allowed opacity-70' : 'bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary'}`} 
                type="button"
              >
                <span>{!store.applicationId ? 'Waiting for Interop Nodes...' : 'Proceed to Auto-Hydrated Form'}</span>
                {store.applicationId && <span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
                {!store.applicationId && <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>}
              </button>
            </div>
          </div>
        </section>
        {/* Interactive JavaScript for Live Simulation Countdown */}

      </div>
    </>
  );
}
