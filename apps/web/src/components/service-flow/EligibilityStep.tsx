

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  onNext: () => void;
  onReject?: () => void;
}

export default function EligibilityStep({ onNext }: Props) {
  const navigate = useNavigate();
  const [isJsonExpanded, setIsJsonExpanded] = useState(false);

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-margin py-space-md"><div className="flex flex-col w-full pb-space-xl">
{/* Top Breadcrumb & Metadata Strip */}
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<button onClick={() => navigate('/citizen/dashboard')} className="hover:text-secondary flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">account_balance</span>
<span>Services</span>
</button>
<span className="text-outline-variant">/</span>
<span className="text-on-surface-variant">Education &amp; Skill Training</span>
<span className="text-outline-variant">/</span>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Skill &amp; Apprenticeship Registration 2026</span>
</div>
<div className="flex items-center gap-space-xs font-code-sm text-code-sm bg-surface-container-high text-on-surface-variant px-space-sm py-1 rounded">
<span className="material-symbols-outlined text-secondary text-[14px]">shield</span>
<span>Stage 01: Pre-Consent Sovereign Audit Matrix</span>
</div>
</div>
{/* Hero Service Header Banner */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-3xl">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-space-xs py-0.5 rounded">DIRECTORATE OF VOCATIONAL EDUCATION &amp; TRAINING</span>
<span className="bg-surface-container-high text-on-surface font-code-sm text-code-sm px-space-xs py-0.5 rounded">SCHEME: DVET-APP-2026-V1</span>
<span className="bg-surface-container-low text-on-tertiary-container font-code-sm text-code-sm px-space-xs py-0.5 rounded flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-on-tertiary-container"></span>
            Canonical Mesh Active
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">
          Skill &amp; Apprenticeship Registration 2026
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Empowering polytechnic, ITI, and technical graduates with state-subsidized industry apprenticeships, monthly direct benefit transfer (DBT) stipends, and accredited national certifications.
        </p>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-space-xs shrink-0 bg-surface-container-low p-space-md rounded-lg">
<div className="flex items-center gap-space-xs text-on-tertiary-container font-title-sm text-title-sm">
<span className="material-symbols-outlined text-[20px]" >verified</span>
<span>Verified Citizen Profile Matched</span>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">Auth Session: <span className="text-on-surface font-semibold">UIDAI-SHA256-8912-F</span></span>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Aadhaar Vault Connected</span>
</div>
</div>
{/* Statutory SLA & Protocol Ribbon */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-sm mt-space-lg pt-space-md bg-surface-container-low/70 rounded-lg p-space-md">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">schedule</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Statutory Gazetted SLA</span>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">48 Hours Review Turnaround</span>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">currency_rupee</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Application Fee Status</span>
<span className="font-title-sm text-title-sm text-on-tertiary-container font-semibold">₹250 Waived (Income &lt; ₹2.5L)</span>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">schema</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Data Normalization Protocol</span>
<span className="font-title-sm text-title-sm text-on-surface font-semibold font-code-sm">W3C JSON-LD Canonical v2.4</span>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">privacy_tip</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Security &amp; Statutory Legal</span>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">DPDP Act 2023 Sec 6 Compliant</span>
</div>
</div>
</div>
</div>
{/* Primary Two-Column Grid: 70% Left, 30% Right */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* LEFT CONTENT COLUMN (8 Cols ~ 67-70%) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* Section A: Scheme Objective & Statutory Purpose Limitation */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">description</span>
<h2 className="font-headline-sm text-headline-sm text-primary-container">Statutory Purpose &amp; Program Scope</h2>
</div>
<span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-space-xs py-0.5 rounded">Gazette Notification: MS-ED-2025/119</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
          The Directorate of Vocational Education &amp; Training (DVET), Government of Maharashtra, administers this state-sponsored pathway under the Apprentices Act of 1961. Candidates registered under this protocol qualify for automated interview scheduling at over 1,420 empaneled industrial units, a monthly Direct Benefit Transfer (DBT) subsidy of up to <span className="font-semibold text-primary">₹9,000/month</span>, and recognized National Council for Vocational Training (NCVT) certification upon completion.
        </p>
{/* Purpose Limitation Callout Box */}
<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-on-surface font-title-sm text-title-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
<span>Statutory Purpose Limitation &amp; Ephemeral Memory Protocol</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Under the Digital Personal Data Protection (DPDP) Act 2023, data ingested through this gateway is strictly scoped to this apprenticeship enrollment. In compliance with the National Data Governance Framework (NDGF), all fetched attributes are held in encrypted, volatile RAM buffers during submission and purged after cryptographic hashing and officer review. No permanent citizen profile copy is stored by DVET.
          </p>
</div>
</div>
{/* Section B: Interoperability Matrix (AaplaHub Canonical Pre-fill vs Legacy) */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">hub</span>
<h2 className="font-headline-sm text-headline-sm text-primary-container">Interoperability &amp; Data Prerequisite Matrix</h2>
</div>
<span className="font-code-sm text-code-sm text-on-tertiary-container bg-surface-container-low px-space-xs py-1 rounded">
            3 of 3 Sovereign Registries Ready
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Experience the AaplaHub Sovereign DPI paradigm: manual scanning, attestation queues, and physical xerox submissions are completely superseded by deterministic, cryptographically signed API handshakes.
        </p>
{/* Comparison Cards Stack */}
<div className="flex flex-col gap-space-md mt-space-xs">
{/* Item 1: Aadhaar Identity */}
<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-code-sm text-code-sm font-semibold">01</span>
<span className="font-title-sm text-title-sm text-on-surface">Resident Demographic Identity &amp; Age Eligibility</span>
</div>
<span className="bg-surface-container-lowest text-on-tertiary-container font-code-sm text-code-sm px-space-xs py-0.5 rounded flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
                Pre-Verified Handshake
              </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="bg-surface-container-lowest/70 p-space-sm rounded flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-error uppercase">Legacy Manual Process</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Upload self-attested Aadhaar card photocopy (PDF/JPEG &lt; 2MB). Requires manual optical review by desk clerk. High rejection rate due to blur/glare.
                </p>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">AaplaHub Sovereign Flow</span>
<div className="flex items-center justify-between font-code-sm text-code-sm">
<span className="bg-primary text-on-primary px-1.5 py-0.5 rounded text-[10px]">UIDAI SANDBOX e-KYC</span>
<span className="text-on-surface font-semibold">Fuzail Khan (22 Yrs)</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm bg-surface-container-high/40 p-1.5 rounded">
<span className="text-on-surface-variant">Schema Match:</span>
<span className="font-code-sm text-code-sm text-on-tertiary-container font-semibold">person.demographic.v1 ✓ 100% Match</span>
</div>
</div>
</div>
</div>
{/* Item 2: Technical Diploma MSBTE */}
<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-code-sm text-code-sm font-semibold">02</span>
<span className="font-title-sm text-title-sm text-on-surface">Technical Academic Prerequisite (Polytechnic/Diploma)</span>
</div>
<span className="bg-surface-container-lowest text-on-tertiary-container font-code-sm text-code-sm px-space-xs py-0.5 rounded flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
                Canonical Ingestion Ready
              </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="bg-surface-container-lowest/70 p-space-sm rounded flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-error uppercase">Legacy Manual Process</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Produce physical MSBTE final marksheet copy with institute seal and transcript stamp. 7-10 day queue for academic registrar verification.
                </p>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">AaplaHub Sovereign Flow</span>
<div className="flex items-center justify-between font-code-sm text-code-sm">
<span className="bg-primary text-on-primary px-1.5 py-0.5 rounded text-[10px]">DIGILOCKER • MSBTE PUNE</span>
<span className="text-on-surface font-semibold">Roll: 2024-COMP-8831</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm bg-surface-container-high/40 p-1.5 rounded">
<span className="text-on-surface-variant">Canonical Diploma:</span>
<span className="font-code-sm text-code-sm text-on-tertiary-container font-semibold">Computer Engg (84.6% Distinction)</span>
</div>
</div>
</div>
</div>
{/* Item 3: Income Certificate / Fee Waiver */}
<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-code-sm text-code-sm font-semibold">03</span>
<span className="font-title-sm text-title-sm text-on-surface">Income Eligibility &amp; Statutory Fee Waiver Tier</span>
</div>
<span className="bg-surface-container-lowest text-on-tertiary-container font-code-sm text-code-sm px-space-xs py-0.5 rounded flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
                Zero-Knowledge Attested
              </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="bg-surface-container-lowest/70 p-space-sm rounded flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-error uppercase">Legacy Manual Process</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Visit Taluka Tehsildar office in person for stamped paper affidavit. Involves notarization fees, travel delays, and unverified paper claims.
                </p>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">AaplaHub Sovereign Flow</span>
<div className="flex items-center justify-between font-code-sm text-code-sm">
<span className="bg-primary text-on-primary px-1.5 py-0.5 rounded text-[10px]">NSDL / ITD MESH</span>
<span className="text-on-surface font-semibold">ZKP Assertion: &lt; ₹2.5L</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm bg-surface-container-high/40 p-1.5 rounded">
<span className="text-on-surface-variant">Fee Exemption:</span>
<span className="font-code-sm text-code-sm text-on-tertiary-container font-semibold">100% Fee Exemption (₹0 to Pay)</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Section C: Step-by-Step Processing Pipeline Roadmap */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">linear_scale</span>
<h2 className="font-headline-sm text-headline-sm text-primary-container">Statutory Application Progression</h2>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase">Step 1 of 5</span>
</div>
{/* Horizontal Process Stepper */}
<div className="grid grid-cols-1 sm:grid-cols-5 gap-space-xs relative">
{/* Step 1 (Current Active) */}
<div className="bg-surface-container-high p-space-sm rounded flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-5 h-5 rounded-full bg-secondary text-on-secondary font-code-sm text-code-sm flex items-center justify-center font-bold">1</span>
<span className="font-label-caps text-label-caps text-secondary font-bold">CURRENT</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface leading-tight">Pre-Check Review</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sovereign registry mapping &amp; eligibility qualification.</p>
</div>
{/* Step 2 */}
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-5 h-5 rounded-full bg-surface-dim text-on-surface font-code-sm text-code-sm flex items-center justify-center font-bold">2</span>
<span className="font-label-caps text-label-caps text-outline">NEXT</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface leading-tight">Granular Consent</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Explicit attribute-level release authorization.</p>
</div>
{/* Step 3 */}
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-5 h-5 rounded-full bg-surface-dim text-on-surface font-code-sm text-code-sm flex items-center justify-center font-bold">3</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface leading-tight">Hydration Handshake</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cryptographic ingestion into normalized form.</p>
</div>
{/* Step 4 */}
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-5 h-5 rounded-full bg-surface-dim text-on-surface font-code-sm text-code-sm flex items-center justify-center font-bold">4</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface leading-tight">Final Dispatch</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Declaration sign-off and receipt generation.</p>
</div>
{/* Step 5 */}
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-5 h-5 rounded-full bg-surface-dim text-on-surface font-code-sm text-code-sm flex items-center justify-center font-bold">5</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface leading-tight">DVET Issuance</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Officer e-Sign and apprenticeship enrollment card.</p>
</div>
</div>
</div>
{/* Section D: Live Canonical Preview Drawer (Accordion) */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between cursor-pointer" id="jsonToggleBtn" onClick={() => setIsJsonExpanded(!isJsonExpanded)}>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">data_object</span>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Inspect Normalized Canonical Payload Preview (JSON-LD)</span>
</div>
<div className="flex items-center gap-space-xs font-code-sm text-code-sm text-secondary">
<span id="toggleText">{isJsonExpanded ? 'Collapse' : 'Click to expand'}</span>
<span className="material-symbols-outlined text-[18px]" id="toggleIcon">{isJsonExpanded ? 'expand_less' : 'expand_more'}</span>
</div>
</div>
<div className={`${isJsonExpanded ? 'flex' : 'hidden'} flex-col gap-space-xs mt-space-sm`} id="jsonPreviewBox">
<div className="bg-primary-container text-on-primary-container p-space-md rounded font-code-sm text-code-sm overflow-x-auto leading-relaxed">
<pre className="text-secondary-fixed">
{`{
  "@context": "https://gov.in/aaplahub/schemas/apprenticeship-2026.jsonld",
  "@type": "ApprenticeshipPreFlightDeclaration",
  "applicant": {
    "identifierType": "UIDAI_TOKEN_SHA256",
    "fullName": "Fuzail Khan",
    "isAgeCompliant": true,
    "residenceJurisdiction": "IN-MH"
  },
  "qualification": {
    "credentialSource": "DIGILOCKER_MSBTE_NODE",
    "diplomaStream": "Computer Engineering",
    "percentageScore": 84.60,
    "passingYear": 2024
  },
  "statutoryEligibility": {
    "incomeZeroKnowledgeProof": "INCOME_BELOW_THRESHOLD_AFFIRMED",
    "feeWaiverEligible": true,
    "feeDue": 0.00
  }
}`}
</pre>
</div>
<span className="font-body-sm text-body-sm text-outline">This mock payload is generated through interoperable sandbox nodes and ready for granular resident consent.</span>
</div>
</div>
</div>
{/* RIGHT SIDEBAR (4 Cols ~ 30-33%) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* Card 1: Eligibility Readiness Meter */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">fact_check</span>
<h3 className="font-headline-sm text-headline-sm text-primary-container">Readiness Score</h3>
</div>
<span className="bg-surface-container-low text-on-tertiary-container font-code-sm text-code-sm font-semibold px-space-xs py-0.5 rounded">
            100% READY
          </span>
</div>
{/* Visual Meter / Circular Progress Concept */}
<div className="flex items-center gap-space-md bg-surface-container-low p-space-md rounded-lg">
{/* Inline SVG Gauge (Under 2KB, Accessible, Theme-aligned) */}
<div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
<svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-dim" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" stroke-linecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-headline-sm text-headline-sm text-primary-container font-bold">4/4</span>
</div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">All Criteria Satisfied</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Zero manual documents or physical verification stamps required.</span>
</div>
</div>
{/* Strict Statutory Checklist */}
<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px] mt-0.5 shrink-0" >check_circle</span>
<div className="flex flex-col leading-tight">
<span className="font-title-sm text-title-sm text-on-surface">Age 18 - 28 Years</span>
<span className="font-code-sm text-code-sm text-outline">UIDAI DOB Proof (Applicant: 22.4 yrs)</span>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px] mt-0.5 shrink-0" >check_circle</span>
<div className="flex flex-col leading-tight">
<span className="font-title-sm text-title-sm text-on-surface">Recognized Technical Diploma</span>
<span className="font-code-sm text-code-sm text-outline">MSBTE Pune Authenticated</span>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px] mt-0.5 shrink-0" >check_circle</span>
<div className="flex flex-col leading-tight">
<span className="font-title-sm text-title-sm text-on-surface">Maharashtra State Domicile</span>
<span className="font-code-sm text-code-sm text-outline">Aadhaar Address Hash Verified</span>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px] mt-0.5 shrink-0" >check_circle</span>
<div className="flex flex-col leading-tight">
<span className="font-title-sm text-title-sm text-on-surface">Income &lt; ₹2.5L Fee Waiver</span>
<span className="font-code-sm text-code-sm text-on-tertiary-container font-semibold">NSDL Mesh Attested (₹0 Application Fee)</span>
</div>
</div>
</div>
</div>
{/* Card 2: Interactive Next Steps / Action CTA Card */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">play_circle</span>
<h3 className="font-headline-sm text-headline-sm text-primary-container">Next Action</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Initiate your sovereign cryptographic consent. You will explicitly review every single data element before it is dispatched to the Directorate.
        </p>
{/* Primary Action Trigger */}
<button id="proceedToConsentBtn" onClick={onNext} className="w-full bg-primary-container hover:bg-primary text-on-primary py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs transition-colors shadow-sm group" type="button">
<span className="font-title-sm text-title-sm font-semibold">Proceed to Consent &amp; Data Sharing</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
{/* Secondary Action: PDF Rulebook */}
<button className="w-full bg-surface-container-low hover:bg-surface-container text-secondary py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs transition-colors font-title-sm text-title-sm font-semibold" type="button">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
<span>Download Scheme Rulebook (PDF • 1.2MB)</span>
</button>
{/* Sovereign Privacy Guarantee */}
<div className="flex items-center gap-space-xs bg-surface-container-low p-space-sm rounded">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0">lock</span>
<span className="font-code-sm text-code-sm text-on-surface-variant leading-tight">
            Zero Local PII Storage • Ephemeral RAM Processing • Non-Repudiable Audit Chain
          </span>
</div>
</div>
{/* Card 3: Departmental Helpdesk & Statutory Grievance */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">contact_support</span>
<h4 className="font-title-sm text-title-sm text-primary-container font-semibold">Nodal Officer &amp; Grievance</h4>
</div>
<span className="font-code-sm text-code-sm text-outline">DVET Cell</span>
</div>
<div className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="font-semibold text-on-surface">Shri A. K. Kulkarni</span>
<span>Joint Director (Apprenticeship &amp; Training)</span>
<span>DVET State Headquarters, 3 Mahapalika Marg, Mumbai 400001</span>
</div>
<div className="flex flex-col gap-1 pt-space-xs font-code-sm text-code-sm bg-surface-container-low p-space-sm rounded">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Statutory Email:</span>
<span className="text-secondary font-semibold">interop-dvet@maharashtra.gov.in</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Sandbox Node Ref:</span>
<span className="text-on-surface">SIH-2026-DVET-MOCK-03</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-outline text-[11px] mt-1 leading-tight">
          As per Maharashtra Right to Public Services Act (RTSA), grievances must be resolved within 14 gazetted working days.
        </p>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
