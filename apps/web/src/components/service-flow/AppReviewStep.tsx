import { useState } from 'react';
import { useApplicationStore } from '../../store/applicationStore';

interface Props {
  onNext: () => void;
}

export default function AppReviewStep({ onNext }: Props) {
  const store = useApplicationStore();

  const [choices, setChoices] = useState([
    {
      id: '1',
      company: 'Tata Motors Passenger Vehicles Ltd.',
      location: 'Pimpri Industrial Belt, Pune',
      role: 'Embedded Systems & IoT Diagnostics Apprentice',
      quota: '14 Openings'
    },
    {
      id: '2',
      company: 'Bharat Forge Advanced Technology Cluster',
      location: 'Mundhwa Cyber Park, Pune',
      role: 'Industrial Automation & PLC Software Junior Intern',
      quota: '8 Openings'
    },
    {
      id: '3',
      company: 'Mahindra Heavy Engineering Systems',
      location: 'Chakan Phase II, Pune',
      role: 'Systems Telemetry & Quality Control Apprentice',
      quota: '12 Openings'
    }
  ]);

  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === index) return;
    
    const newChoices = [...choices];
    const draggedItem = newChoices[draggedIdx];
    newChoices.splice(draggedIdx, 1);
    newChoices.splice(index, 0, draggedItem);
    
    setChoices(newChoices);
    setDraggedIdx(null);
  };

  return (
    <>
      <div className="flex flex-col w-full">
{/* Progress Stepper Tracker Bar */}
<div className="w-full bg-surface-container-low px-margin py-space-md shadow-sm">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Directorate of Vocational Education & Training</span>
<span className="text-outline">•</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Govt. of Maharashtra</span>
</div>
<h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight mt-0.5">Skill & Apprenticeship Registration 2026</h1>
</div>
{/* Stepper Badges */}
<div className="flex items-center gap-space-xs overflow-x-auto py-1">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors" onClick={() => store.setStep('ELIGIBILITY')}>
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container" >check_circle</span>
<span className="font-title-sm text-title-sm">1. Eligibility</span>
</div>
<span className="text-outline-variant font-code-sm text-code-sm">→</span>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors" onClick={() => store.setStep('CONSENT')}>
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container" >check_circle</span>
<span className="font-title-sm text-title-sm">2. Consent</span>
</div>
<span className="text-outline-variant font-code-sm text-code-sm">→</span>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-high text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors" onClick={() => store.setStep('FETCHING')}>
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container" >check_circle</span>
<span className="font-title-sm text-title-sm">3. Hydration</span>
</div>
<span className="text-outline-variant font-code-sm text-code-sm">→</span>
<div className="flex items-center gap-1.5 px-space-md py-1 rounded bg-primary-container text-on-primary shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="font-title-sm text-title-sm">Step 4 of 5: Review & Sign</span>
</div>
<span className="text-outline-variant font-code-sm text-code-sm">→</span>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container text-on-surface-variant opacity-60">
<span className="material-symbols-outlined text-[16px]">lock</span>
<span className="font-title-sm text-title-sm">5. Issuance</span>
</div>
</div>
</div>
</div>
{/* Zero-Upload Value Pitch & Draft Indicator */}
<div className="w-full px-margin py-space-md">
<div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-tertiary-fixed text-[24px]">verified_user</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-title-sm text-title-sm text-on-surface">100% Auto-Hydrated Sovereign Dossier</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm uppercase tracking-wider">Zero Document Scans</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Every attribute below is cryptographically sourced from verified ministerial databases. Manual uploads, self-attestation affidavits, and notarized copies are completely eliminated under Maharashtra Sovereign DPI Directives.
          </p>
</div>
</div>
<div className="flex items-center gap-space-md self-end sm:self-center flex-shrink-0">
<div className="flex flex-col text-right">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Dossier Tracking Nonce</span>
<span className="font-code-md text-code-md text-primary font-bold">AHP-2026-89421-DRAFT</span>
</div>
<div className="px-space-sm py-1 rounded bg-surface-variant text-on-surface font-code-sm text-code-sm">
          STATE: MUTABLE DRAFT
        </div>
</div>
</div>
</div>
{/* Main Grid Workspace */}
<div className="w-full px-margin pb-space-xl">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* LEFT COLUMN: Auto-Hydrated Data Blocks (8 Columns) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* SECTION A: Personal & Demographic Registry */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded bg-primary-container text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">A</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Personal & Demographic Registry Attributes</h2>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
              UIDAI e-KYC Vault
            </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md">
{/* Full Name */}
<div className="flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Legal Full Name</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[13px] text-on-tertiary-container">verified</span>
                  UIDAI Bound
                </span>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold tracking-tight">Fuzail Ahmed Khan</span>
<span className="font-code-sm text-code-sm text-outline mt-1">Aadhaar Linked Vault Nonce: ···· ···· 8912</span>
</div>
{/* Date of Birth & Age Calculation */}
<div className="flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Date of Birth & Calculated Age</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[13px] text-on-tertiary-container">lock</span>
                  DOB Attested
                </span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-title-md text-title-md text-on-surface font-bold">14-Aug-2003</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(22.4 yrs as on 01-Jan-2026)</span>
</div>
<span className="font-code-sm text-code-sm text-outline mt-1">Sovereign Proof: Civil Registration System (CRS)</span>
</div>
{/* Gender Identification */}
<div className="flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Gender</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[13px] text-on-tertiary-container">check_circle</span>
                  Locked
                </span>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">Male</span>
<span className="font-code-sm text-code-sm text-outline mt-1">Canonical Code: ISO/IEC 5218 : 1</span>
</div>
{/* Verified Communication Mobile/Email */}
<div className="flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Verified Contact Endpoint</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[13px] text-on-tertiary-container">lock</span>
                  2FA Validated
                </span>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">+91 ······ 4022 • fuzail****@gov.in</span>
<span className="font-code-sm text-code-sm text-outline mt-1">OTP Handshake Token: #99482-SYNCED</span>
</div>
{/* Domicile Address Span */}
<div className="sm:col-span-2 flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Certified Domicile & Permanent Residence</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[13px] text-on-tertiary-container">verified</span>
                  MahaOnline Attested
                </span>
</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Flat 402, Royal Palms, Viman Nagar, Pune, Maharashtra - 411014</span>
<div className="flex items-center gap-space-sm mt-1">
<span className="font-code-sm text-code-sm text-secondary">Canonical Spatial Hash: 18.5679° N, 73.9143° E</span>
<span className="text-outline">•</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Domicile Certificate No: DOM-2022-PUN-091244</span>
</div>
</div>
</div>
</div>
{/* SECTION B: Academic Credentials from MSBTE National Academic Depository */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded bg-primary-container text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">B</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Academic & Technical Qualifications</h2>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
              DigiLocker NAD Connected
            </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md">
{/* Qualifying Program */}
<div className="sm:col-span-2 flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Qualifying Technical Stream</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[13px] text-on-tertiary-container">done_all</span>
                  MSBTE Ledger Synced
                </span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Diploma in Computer Engineering</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Government Polytechnic Pune (Institution Code: 6006, DTE Region: Pune)</span>
</div>
{/* Enrollment Record */}
<div className="flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Roll Number & Examination Session</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[13px] text-on-tertiary-container">check_circle</span>
                  Verified
                </span>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">2024-COMP-8831</span>
<span className="font-code-sm text-code-sm text-outline mt-1">Convocated: Summer 2024 (Regular Scheme - 'I' Scheme)</span>
</div>
{/* Percentage Score & Division */}
<div className="flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Aggregate Score & Performance Tier</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-secondary text-on-secondary font-code-sm text-code-sm">
                  Merit Tier 1
                </span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">84.60%</span>
<span className="font-body-sm text-body-sm text-on-tertiary-container font-semibold">First Class with Distinction</span>
</div>
<span className="font-code-sm text-code-sm text-outline mt-1">Marks: 1354 / 1600 (Sem V & VI Combined)</span>
</div>
</div>
</div>
{/* SECTION C: Statutory Fee Waiver & DBT Bank Seeding */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded bg-primary-container text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">C</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Statutory Benefit Mapping & DBT Mandate</h2>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
              NSDL ZKP + NPCI Gateway
            </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md">
{/* Income Attestation via Zero Knowledge Proof */}
<div className="flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Economic Category Evaluation</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[13px] text-on-tertiary-container">shield</span>
                  NSDL ZKP Verified
                </span>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">Economically Weaker Section (EWS)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Cryptographic zero-knowledge proof confirms gross annual family income is below ₹2,50,000 threshold without revealing exact financial ledger.
              </p>
</div>
{/* Fee Exemption Breakdown */}
<div className="flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Application Fee Calculation</span>
<span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded font-code-sm text-code-sm ${store.feeAmount === 0 ? 'bg-tertiary-container text-tertiary-fixed' : 'bg-surface-container-highest text-on-surface'}`}>
  {store.feeAmount === 0 ? '100% Fee Waiver Applied' : 'Standard Fee Applicable'}
</span>
</div>
<div className="flex items-baseline gap-space-sm mt-1">
{store.feeAmount === 0 && <span className="font-title-md text-title-md text-outline line-through">₹250.00</span>}
<span className={`font-headline-sm text-headline-sm font-bold ${store.feeAmount === 0 ? 'text-on-tertiary-container' : 'text-on-surface'}`}>₹{store.feeAmount.toFixed(2)}</span>
{store.feeAmount === 0 && <span className="font-body-sm text-body-sm text-on-surface-variant">(Govt. Subsidy Grant)</span>}
</div>
{store.feeAmount === 0 && <span className="font-code-sm text-code-sm text-outline mt-2">Policy ID: MAHA-SKILL-WAIVER-SCHEME-2026</span>}
</div>
{/* DBT Bank Mandate (NPCI Linked) */}
<div className="sm:col-span-2 flex flex-col bg-surface-container-low p-space-md rounded">
<div className="flex items-center justify-between mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Direct Benefit Transfer (DBT) Monthly Stipend Account</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                  NPCI Aadhaar Bridge: ACTIVE
                </span>
</div>
<div className="flex items-center justify-between flex-wrap gap-2 mt-1">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[20px]">account_balance</span>
</div>
<div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold">State Bank of India (Branch: Pune Main, IFSC: SBIN0000454)</span>
<span className="font-code-sm text-code-sm text-on-surface-variant block">Primary Savings A/c ending with ···· ···· 4409</span>
</div>
</div>
<span className="font-code-sm text-code-sm text-on-tertiary-container bg-surface-container px-2 py-1 rounded font-semibold">Pre-Validated for ₹9,000/mo DBT Stipend</span>
</div>
</div>
</div>
</div>
{/* SECTION D: Industry Apprenticeship Preferences (Clustered match) */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded bg-primary-container text-on-primary font-code-sm text-code-sm flex items-center justify-center font-bold">D</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Target Industry Apprenticeship Choices</h2>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">Stream Mapped Algorithm</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs mb-space-md">
            Based on your certified Diploma in Computer Engineering and Pune domicile, 3 premier PSU & corporate clusters have been auto-prioritized. You can reorder preference hierarchy prior to final cryptographic signature.
          </p>
<div className="flex flex-col gap-space-sm">
{choices.map((choice, index) => (
  <div 
    key={choice.id}
    draggable
    onDragStart={(e) => handleDragStart(e, index)}
    onDragOver={handleDragOver}
    onDrop={(e) => handleDrop(e, index)}
    className={`flex items-center justify-between p-space-md rounded bg-surface-container-low transition-all border ${draggedIdx === index ? 'opacity-50 border-dashed border-secondary' : 'border-transparent'}`}
  >
    <div className="flex items-center gap-space-md">
      <span className={`w-6 h-6 rounded font-code-sm text-code-sm flex items-center justify-center font-bold ${index === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'}`}>
        {index + 1}
      </span>
      <div>
        <span className="font-title-sm text-title-sm text-on-surface font-semibold">{choice.company}</span>
        <div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
          <span>{choice.location}</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-code-sm text-code-sm text-secondary">Role: {choice.role}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-space-sm pl-2">
      <span className="hidden sm:inline px-2 py-0.5 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">Quota: {choice.quota}</span>
      <span className="material-symbols-outlined text-outline cursor-grab active:cursor-grabbing hover:text-on-surface transition-colors" title="Drag to reorder">drag_indicator</span>
    </div>
  </div>
))}
</div>
</div>
</div>
{/* RIGHT COLUMN: Integrity Summary, Attestation & Dispatch Sidebar (4 Columns) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
{/* Application Integrity Checklist Card */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Application Integrity Ledger</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Autonomous statutory evaluation checks passed before desk dispatch.</p>
<div className="flex flex-col gap-space-md my-space-lg">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px] mt-0.5" >check_circle</span>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">4 / 4 Statutory Criteria Sourced</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Age, Domicile, Technical Diploma & DBT verified</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px] mt-0.5" >check_circle</span>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Zero Manual Attachments</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">No PDF uploads, no photocopies, no gazetted attestation</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" >hub</span>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">4 Sovereign Registry Nodes</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">UIDAI • MSBTE • NSDL-ZKP • NPCI</span>
</div>
</div>
</div>
{/* Cryptographic Attestation Block */}
<div className="p-space-md rounded bg-surface-container-low font-code-sm text-code-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-bold">E-SIGN HASH NONCE</span>
<span className="text-tertiary-fixed-variant flex items-center gap-1 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                LIVE IST
              </span>
</div>
<span className="text-on-surface break-all font-medium">SHA256: 3c9b881f21a48c90b0e77d...e81a942</span>
<div className="flex items-center justify-between text-on-surface-variant pt-1 border-t border-outline-variant/30 mt-1">
<span>Time Lock:</span>
<span id="current-ist-timestamp">2026-03-29 11:42:08 IST</span>
</div>
</div>
{/* Citizen Declaration Checkbox */}
<div className="mt-space-lg pt-space-md border-t border-surface-container">
<label className="flex items-start gap-space-sm cursor-pointer select-none">
<input defaultChecked className="mt-1 w-4 h-4 rounded bg-primary text-on-primary focus:ring-2 focus:ring-secondary accent-primary" id="statutory-declaration-checkbox" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface leading-tight">
                I solemnly declare under Section 4 of DPDP Act 2023 that the canonical attributes auto-hydrated above represent my authentic government identity. I authorize dispatch to DVET Maharashtra.
              </span>
</label>
</div>
{/* Dispatch Primary CTA */}
<button onClick={onNext} className="w-full mt-space-lg h-12 rounded-lg bg-secondary text-on-secondary font-title-sm text-title-sm font-semibold flex items-center justify-center gap-space-sm shadow-md hover:opacity-95 transition-all" id="submit-dispatch-btn">
<span>Submit Application & Dispatch to Desk (₹{store.feeAmount.toFixed(2)})</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
{/* Secondary Summary Download */}
<button className="w-full mt-space-sm h-10 rounded-lg bg-surface-container text-on-surface font-title-sm text-title-sm flex items-center justify-center gap-space-xs hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[16px]">download</span>
<span>Download Pre-Submission Summary (PDF)</span>
</button>
{/* Help / Re-Sync Link */}
<div className="flex items-center justify-center gap-space-xs mt-space-md text-on-surface-variant font-body-sm text-body-sm">
<span>Discrepancy in registry data?</span>
<a className="text-secondary font-semibold hover:underline" href="#">Re-fetch from Digilocker</a>
</div>
</div>
{/* Security Guardrail Badge */}
<div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">verified</span>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface">Tamper-Proof Audit Envelope</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Once submitted, this application is serialized into the state apprenticeships blockchain ledger. Officer desks receive cryptographic tokens, eliminating fraudulent document alterations.
            </p>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
