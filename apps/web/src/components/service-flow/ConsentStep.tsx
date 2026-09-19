import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApplicationStore } from '../../store/applicationStore';

interface Props {
  onNext: () => void;
  onReject?: () => void;
}

export default function ConsentStep({ onNext }: Props) {
  const [copiedHash, setCopiedHash] = useState(false);
  const [isWaiverClaimed, setIsWaiverClaimed] = useState(true);
  const navigate = useNavigate();
  const setFeeAmount = useApplicationStore(state => state.setFeeAmount);

  useEffect(() => {
    setFeeAmount(isWaiverClaimed ? 0 : 250);
  }, [isWaiverClaimed, setFeeAmount]);

  const handleCopyReqId = () => {
    navigator.clipboard.writeText('MH-DVET-APPR-2026-8941B');
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <>
      <div className="flex flex-col w-full">
{/* Journey Progression & Stepper Ribbon */}
<div className="w-full bg-surface-container-low px-margin py-space-md">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
{/* Breadcrumb Hierarchy */}
<nav className="flex items-center gap-space-xs font-title-sm text-title-sm text-on-surface-variant flex-wrap">
<button onClick={() => navigate('/citizen/dashboard')} className="hover:text-on-surface cursor-pointer">Citizen Services</button>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<button onClick={() => store.setStep('ELIGIBILITY')} className="hover:text-on-surface cursor-pointer">Skill & Apprenticeship 2026</button>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<span className="text-secondary font-headline-sm text-headline-sm font-semibold">Granular Consent Gate</span>
</nav>
{/* Stepper Status Pills */}
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-1 rounded-full shadow-sm">
<span className="font-code-sm text-code-sm text-on-surface-variant">Step 2 of 5</span>
<span className="text-outline text-body-sm">•</span>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
<span className="w-2 h-2 rounded-full bg-surface-variant"></span>
</div>
<span className="font-label-caps text-label-caps uppercase text-secondary font-semibold ml-1">Cryptographic Gate</span>
</div>
</div>
</div>
{/* Requisition Context Header (Statutory Sovereign Ledger Banner) */}
<div className="w-full bg-surface-container px-margin py-space-lg">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-8 flex flex-col gap-space-xs">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="bg-primary-container text-primary-fixed font-code-sm text-code-sm px-space-sm py-0.5 rounded">
            REQ-ID: MH-DVET-APPR-2026-8941B
          </span>
<span className="bg-surface-container-highest text-on-surface font-title-sm text-title-sm px-space-sm py-0.5 rounded flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">account_balance</span>
            DVET Maharashtra
          </span>
<span className="bg-surface-container-lowest text-on-tertiary-container font-label-caps text-label-caps px-space-sm py-0.5 rounded flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
            DPDP ACT 2023 § 6 COMPLIANT
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Granular Permission & Zero-Trust Data Gate
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Statutory eligibility verification for Apprenticeship Act 1961 state quota. Data is mapped dynamically in volatile RAM memory cache with zero disk persistence.
        </p>
</div>
{/* Ephemeral PII Memory Assurance Card */}
<div className="lg:col-span-4 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary text-[22px]">memory</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Ephemeral RAM Buffer</span>
<span className="material-symbols-outlined text-on-tertiary-container text-[16px]" title="Cryptographically sealed">verified</span>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-0.5">0 Disk Writes | TTL: Handshake Duration</span>
<span className="font-body-sm text-body-sm text-outline mt-1 leading-snug">
            All transient parameters are purged instantly from session registers upon certificate issuance.
          </span>
</div>
</div>
</div>
</div>
{/* Primary Workspace: Two Column Layout */}
<div className="w-full px-margin py-space-xl">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* LEFT & CENTER: Dynamic Permission Package Builder (8 Cols) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* Section Metadata & Protocol Indicator */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary">tune</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Data Package Inclusions</h2>
<span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-space-sm py-0.5 rounded">3 Credentials Selected</span>
</div>
<div className="flex items-center gap-1 font-code-sm text-code-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span>Canonical DPI Registry Connected</span>
</div>
</div>
{/* Credential Group 1: Demographic & Aadhaar Proof (MANDATORY, LOCKED) */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-on-tertiary-container"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md bg-surface-container-lowest">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded bg-surface-container-low flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[20px]">badge</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-title-md text-title-md text-on-surface">Group 1: Demographic Proof</span>
<span className="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-space-xs py-0.5 rounded uppercase font-semibold">Mandatory</span>
</div>
<div className="flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface-variant mt-0.5">
<span>Source: UIDAI Core e-KYC Sandbox</span>
<span>•</span>
<span className="text-on-tertiary-container font-medium flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">verified</span>
                    Aadhaar Vault Verified
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-1 rounded">
<span className="material-symbols-outlined text-outline text-[16px]">lock</span>
<span className="font-code-sm text-code-sm text-outline uppercase font-semibold">Locked by DVET Policy</span>
</div>
</div>
{/* Discrete Field Assertions Matrix */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between text-outline font-body-sm text-body-sm mb-1">
<span>Legal Identity</span>
<span className="material-symbols-outlined text-on-tertiary-container text-[16px]">check_circle</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Fuzail Khan</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Field: ind_name</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between text-outline font-body-sm text-body-sm mb-1">
<span>Date of Birth</span>
<span className="material-symbols-outlined text-on-tertiary-container text-[16px]">check_circle</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">2003-08-14</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Age Check: 22 yrs</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between text-outline font-body-sm text-body-sm mb-1">
<span>Gender</span>
<span className="material-symbols-outlined text-on-tertiary-container text-[16px]">check_circle</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Male</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Field: ind_gender</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between text-outline font-body-sm text-body-sm mb-1">
<span>Domicile Pincode</span>
<span className="material-symbols-outlined text-on-tertiary-container text-[16px]">check_circle</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">411014 (Pune)</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Region: MH-West</span>
</div>
</div>
</div>
{/* Credential Group 2: Academic Credential - Polytechnic Diploma (MANDATORY, LOCKED) */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-on-tertiary-container"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md bg-surface-container-lowest">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded bg-surface-container-low flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[20px]">school</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-title-md text-title-md text-on-surface">Group 2: Technical Qualification</span>
<span className="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-space-xs py-0.5 rounded uppercase font-semibold">Mandatory</span>
</div>
<div className="flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface-variant mt-0.5">
<span>Source: DigiLocker / MSBTE Node</span>
<span>•</span>
<span className="text-on-tertiary-container font-medium flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">verified</span>
                    Issuer Public Key Confirmed
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-1 rounded">
<span className="material-symbols-outlined text-outline text-[16px]">lock</span>
<span className="font-code-sm text-code-sm text-outline uppercase font-semibold">Required for State Quota</span>
</div>
</div>
{/* Academic Payload Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md">
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<span className="font-body-sm text-body-sm text-outline mb-1">Institutional Roll</span>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">2024-COMP-8831</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">MSBTE Board ID</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<span className="font-body-sm text-body-sm text-outline mb-1">Conferred Award</span>
<span className="font-title-sm text-title-sm text-on-surface font-semibold truncate">Dip. Computer Engineering</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Level 5 Qualification</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<span className="font-body-sm text-body-sm text-outline mb-1">Academic Performance</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">84.6%</span>
<span className="font-code-sm text-code-sm text-on-tertiary-container font-semibold">Distinction</span>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Canonical Grade Point: 8.9/10</span>
</div>
</div>
{/* Canonical Schema Bridge Tag Ribbon */}
<div className="mt-space-md p-space-sm bg-surface-container rounded flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap font-code-sm text-code-sm">
<span className="text-on-surface-variant">Schema Mapping Bridge:</span>
<span className="bg-surface-container-lowest px-space-xs py-0.5 rounded font-medium text-on-surface">MSBTE:CertDiploma</span>
<span className="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
<span className="bg-primary-container text-primary-fixed px-space-xs py-0.5 rounded font-mono">DPI_GOV:AcademicPayload_v2.json</span>
</div>
<span className="font-code-sm text-code-sm text-on-tertiary-container font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">link</span> Transformed via Sandbox
            </span>
</div>
</div>
{/* Credential Group 3: Income & Statutory Fee Waiver Tier (OPTIONAL, TOGGLEABLE) */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden transition-all duration-300" id="zkp-group-container">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary" id="zkp-stripe"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
<div className="flex items-center gap-space-md">
<div className="w-9 h-9 rounded bg-surface-container-low flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[20px]">currency_rupee</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-title-md text-title-md text-on-surface">Group 3: Economic Eligibility Tier</span>
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-space-xs py-0.5 rounded uppercase font-semibold">Optional Waiver</span>
</div>
<div className="flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface-variant mt-0.5">
<span>Source: NSDL / ITD Financial Mesh</span>
<span>•</span>
<span className="text-secondary font-medium">ZKP Boolean Proof</span>
</div>
</div>
</div>
{/* Interactivity Toggle Switch */}
<label className="relative inline-flex items-center cursor-pointer select-none">
<input checked={isWaiverClaimed} onChange={(e) => setIsWaiverClaimed(e.target.checked)} className="sr-only peer" id="zkpToggle" type="checkbox"/>
<div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
<span className="ml-space-sm font-title-sm text-title-sm text-on-surface font-semibold" id="toggleStatusLabel">Claim Fee Waiver</span>
</label>
</div>
{/* Zero-Knowledge Proof Details View */}
<div className="mt-space-md flex flex-col gap-space-md" id="zkpDetailsContainer">
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-8 bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs text-on-surface font-title-sm text-title-sm font-semibold">
<span className="material-symbols-outlined text-secondary text-[18px]">enhanced_encryption</span>
                    Zero-Knowledge Assertion (No Raw Tax Disclosed)
                  </div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Instead of sharing your income statements, AaplaHub queries NSDL with a cryptographic circuit proof. The verifier only receives a cryptographically sealed <code className="bg-surface-container px-1 py-0.5 rounded text-on-surface font-code-sm">true</code> boolean flag.
                  </p>
</div>
<div className="mt-space-md flex items-center gap-space-md flex-wrap pt-space-xs">
<div className="flex items-center gap-1 font-code-sm text-code-sm text-on-tertiary-container bg-surface-container-lowest px-space-sm py-1 rounded">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
<span>Predicate: AnnualIncome &lt; ₹2,50,000</span>
</div>
<span className="font-code-sm text-code-sm text-outline">Circuit: Groth16 Snark-v4</span>
</div>
</div>
{/* Instant Benefit Breakdown */}
<div className="md:col-span-4 bg-surface-container-high p-space-md rounded-lg flex flex-col justify-between">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Instant Fee Impact</span>
<div className="flex flex-col my-space-xs">
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Base DVET Fee:</span>
<span className={isWaiverClaimed ? "line-through text-outline" : "text-on-surface-variant"}>₹250.00</span>
</div>
<div className={`flex items-center justify-between font-headline-sm text-headline-sm font-bold ${isWaiverClaimed ? 'text-on-tertiary-container' : 'text-primary'}`}>
<span>Payable Now:</span>
<span id="payableAmount">{isWaiverClaimed ? '₹0 (WAIVED)' : '₹250.00'}</span>
</div>
</div>
{isWaiverClaimed ? (
  <span className="font-code-sm text-code-sm text-secondary flex items-center gap-1">
  <span className="material-symbols-outlined text-[14px]">check</span>
                    Govt Scholarship Subsidy Applied
                  </span>
) : (
  <span className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1">
  <span className="material-symbols-outlined text-[14px]">info</span>
                    Standard Fee Applicable
                  </span>
)}
</div>
</div>
</div>
{/* Disabled fallback message (hidden by default) */}
<div className="hidden p-space-md bg-surface-container-low rounded-lg mt-space-md" id="zkpDisabledMessage">
<div className="flex items-center gap-space-sm text-outline">
<span className="material-symbols-outlined text-[20px]">info</span>
<p className="font-body-md text-body-md">
                Income tier disclosure omitted. You will be prompted for standard registration payment of <strong className="text-on-surface">₹250.00</strong> during final submission.
              </p>
</div>
</div>
</div>
{/* Privacy & Legal Assurances Drawer */}
<div className="bg-surface-container-low rounded-lg p-space-md flex items-start gap-space-md">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">security_update_good</span>
<div className="flex flex-col gap-0.5">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">DPDP Act 2023 Statutory Protection Notice</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Section 6 consent requirements are strictly audited. Your personal identifiers are tied solely to Application Scope MH-DVET-2026. The consuming authority cannot re-share or query other databases without generating an explicit newly signed Citizen Consent Artifact.
            </p>
</div>
</div>
</div>
{/* RIGHT SIDEBAR: Access Guardrails & Cryptographic Proof (4 Cols) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* Technical Guardrails Container */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Access Guardrails</h3>
<span className="material-symbols-outlined text-on-tertiary-container text-[20px]">lock_clock</span>
</div>
<div className="flex flex-col gap-space-sm divide-y divide-transparent">
<div className="flex items-start gap-space-sm pt-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">pin_invoke</span>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface">Purpose Limitation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
                  Strictly locked to: <strong className="text-on-surface">Apprenticeship Act 1961 Registration</strong>. Any extraneous extraction returns HTTP 403 Forbidden.
                </span>
</div>
</div>
<div className="flex items-start gap-space-sm pt-space-sm">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">timer</span>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface">Session TTL Constraint</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
                  Single-Transaction Handshake. Token expires immediately upon verification packet generation (Max 15 min lifetime).
                </span>
</div>
</div>
<div className="flex items-start gap-space-sm pt-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px] mt-0.5">verified_user</span>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface">Cryptographic Non-Repudiation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
                  Signed via Citizen Resident Keypair under Certifying Authority root standards.
                </span>
</div>
</div>
</div>
</div>
{/* Dynamic Ed25519 Cryptographic Consent Hash Panel */}
<div className="bg-primary-container text-on-primary rounded-xl p-space-lg shadow-md flex flex-col gap-space-md relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-fixed text-[20px]">key</span>
<span className="font-title-sm text-title-sm text-on-primary font-semibold">Consent Hash (Ed25519)</span>
</div>
<span className="bg-surface-container-lowest/10 text-primary-fixed font-code-sm text-code-sm px-space-xs py-0.5 rounded">SHA-256</span>
</div>
<p className="font-body-sm text-body-sm text-on-primary-container">
            Deterministic state digest generated in real time against your exact selected permission payload.
          </p>
{/* Monospace Real-Time Hash Display */}
<div className="bg-surface-container-lowest/10 p-space-md rounded font-code-sm text-code-sm text-primary-fixed break-all select-all flex flex-col gap-space-xs">
<span className="text-on-primary-container font-label-caps text-label-caps uppercase">Dynamic Payload Digest:</span>
<span className="tracking-wide" id="consentHashValue">9e4b787c88b0f0a28f89bc11394c2e6da834015ccaa01bfa54687e1f021c</span>
</div>
{/* Copy Hash Button */}
<button className="flex items-center justify-center gap-space-xs bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary py-space-sm px-space-md rounded font-title-sm text-title-sm transition-colors w-full" id="copyHashBtn" onClick={() => { navigator.clipboard.writeText('8f92bd3a49e212450c268a78622c82a1'); setCopiedHash(true); setTimeout(() => setCopiedHash(false), 2000); }}>
<span className="material-symbols-outlined text-[16px]">{copiedHash ? 'check' : 'content_copy'}</span>
<span id="copyHashText">{copiedHash ? 'Copied!' : 'Copy Canonical Hash'}</span>
</button>
</div>
{/* Action Triggers */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
{/* Primary Sovereign Button */}
<button id="authorizeBtn" onClick={onNext} className="w-full bg-secondary hover:bg-secondary-container text-on-secondary py-space-md px-space-lg rounded font-title-md text-title-md flex items-center justify-center gap-space-sm shadow-md transition-all">
<span className="material-symbols-outlined text-[20px]">fingerprint</span>
<span>Sign Consent & Authorize Handshake</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
{/* Rejection / Scope Modification Trigger */}
<button className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-space-sm px-space-md rounded font-title-sm text-title-sm transition-colors text-center" id="rejectBtn">
            Reject / Modify Requisition Scope
          </button>
{/* Sovereign Peace of Mind Anchor */}
<div className="flex items-center justify-center gap-1 text-center font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px]">shield</span>
<span>Your sovereign data remains completely untouched until authorized.</span>
</div>
</div>
{/* System Provenance Metadata */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1 font-code-sm text-code-sm text-on-surface-variant">
<div className="flex justify-between items-center">
<span>Gateway Cluster:</span>
<span className="text-on-surface font-semibold">IN-WEST-PUNE-01</span>
</div>
<div className="flex justify-between items-center">
<span>Session Nonce:</span>
<span className="text-on-surface font-semibold">0x74FA...C03E</span>
</div>
<div className="flex justify-between items-center">
<span>Protocol Rev:</span>
<span className="text-on-surface font-semibold">DPI-HANDSHAKE-v2.6</span>
</div>
</div>
</div>
</div>
</div>
{/* Bottom Sandbox Audit Notice */}
<div className="w-full bg-surface-container-high py-space-sm px-margin">
<div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-xs font-code-sm text-code-sm text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>AaplaHub NDGF Sandbox Engine</span>
<span>•</span>
<span>Compliance Reference: NDGF-STD-SEC-4A</span>
</div>
<div>
<span>Non-repudiation audit trail recorded to immutable sovereign ledger logs.</span>
</div>
</div>
</div>
{/* Interactive Logic for dynamic ZKP toggle and Hash computation update */}

</div>
    </>
  );
}
