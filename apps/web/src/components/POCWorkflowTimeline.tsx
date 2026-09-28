import { useState } from 'react';
import { UserCheck, ShieldCheck, Database, FileText, CreditCard, Briefcase } from 'lucide-react';

const workflowNodes = [
  {
    id: 1,
    title: 'Phase 1: Onboarding',
    desc: 'Secure JWT Auth & Service Discovery.',
    Icon: UserCheck,
    high: true,
  },
  {
    id: 2,
    title: 'Phase 2: DPDP Consent',
    desc: 'Granular ZKP waiver & cryptographic handshake.',
    Icon: ShieldCheck,
    high: false,
  },
  {
    id: 3,
    title: 'Phase 3: Interop Engine',
    desc: 'Fetching Mock APIs & Canonical Mapping.',
    Icon: Database,
    high: true,
  },
  {
    id: 4,
    title: 'Phase 4: Zero-Data-Entry',
    desc: 'Auto-filled dossier & application submission.',
    Icon: FileText,
    high: false,
  },
  {
    id: 5,
    title: 'Phase 5: Payment Gate',
    desc: 'Dynamic ZKP routing & secure cancellation.',
    Icon: CreditCard,
    high: true,
  },
  {
    id: 6,
    title: 'Phase 6: Officer Loop',
    desc: 'Live tracking & tamper-proof officer approval.',
    Icon: Briefcase,
    high: false,
  },
];

export default function POCWorkflowTimeline() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // Approximate total length of the SVG bezier path
  const pathLength = 1150;
  // Calculate how much of the line to draw based on hovered index
  const drawLength = activeIndex >= 0 ? (activeIndex / 5) * pathLength : 0;
  const strokeOffset = pathLength - drawLength;

  return (
    <div
      className="w-full lg:flex-1 lg:max-w-[700px] bg-surface-container-lowest p-space-md lg:p-space-lg rounded-xl shadow-md relative mt-8 lg:mt-0"
      onMouseLeave={() => setActiveIndex(-1)}
    >
      <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-6 text-center lg:text-left">POC Workflow Timeline</h3>

      {/* Desktop/Tablet Horizontal Zigzag View */}
      <div className="hidden sm:block relative w-full h-[260px] mx-auto">
        {/* SVG Base Dashed Line */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 260">
          <path
            d="M 50,44 C 140,44 140,164 230,164 C 320,164 320,44 410,44 C 500,44 500,164 590,164 C 680,164 680,44 770,44 C 860,44 860,164 950,164"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8,8"
            className="text-outline-variant/50"
          />
          {/* Animated Solid Orange Highlight Line */}
          <path
            d="M 50,44 C 140,44 140,164 230,164 C 320,164 320,44 410,44 C 500,44 500,164 590,164 C 680,164 680,44 770,44 C 860,44 860,164 950,164"
            fill="none"
            stroke="#f97316"
            strokeWidth="4"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeOffset}
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Nodes */}
        {workflowNodes.map((node, index) => {
          const xPos = 5 + (index * 18); // 5%, 23%, 41%, 59%, 77%, 95%
          const yPos = node.high ? 20 : 140;
          const isActive = index <= activeIndex;
          const isCurrent = index === activeIndex;

          return (
            <div
              key={node.id}
              className="absolute flex flex-col items-center w-[120px] -ml-[60px] cursor-pointer group"
              style={{ left: `${xPos}%`, top: `${yPos}px` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div
                className={`w-12 h-12 rounded-full bg-white border-4 flex items-center justify-center z-10 relative transition-all duration-500 ${isActive
                    ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.7)] scale-110'
                    : 'border-outline-variant/60 shadow-sm group-hover:border-orange-300 group-hover:scale-105'
                  }`}
              >
                <node.Icon
                  className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-orange-500' : 'text-outline-variant/60 group-hover:text-orange-400'
                    }`}
                />
              </div>
              <div className={`mt-3 text-center px-1 transition-all duration-500 ${isCurrent ? 'translate-y-1' : ''}`}>
                <div className={`text-[12px] leading-tight font-bold transition-colors duration-500 ${isActive ? 'text-orange-600' : 'text-on-surface'}`}>
                  {node.title}
                </div>
                <div className={`text-[11px] leading-tight mt-1.5 font-medium transition-colors duration-500 ${isActive ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  {node.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical View */}
      <div className="sm:hidden flex flex-col gap-8 relative mt-2 pl-2">
        <div className="absolute left-8 top-4 bottom-4 w-[3px] border-l-[3px] border-dashed border-outline-variant/40 z-0"></div>
        {/* Animated Solid Line for Mobile */}
        <div
          className="absolute left-[30.5px] top-4 w-[3px] bg-orange-500 z-0 transition-all duration-700 ease-out"
          style={{ height: activeIndex >= 0 ? `calc(${(activeIndex / 5) * 100}% - 32px)` : '0%' }}
        ></div>

        {workflowNodes.map((node, index) => {
          const isActive = index <= activeIndex;
          const isCurrent = index === activeIndex;

          return (
            <div
              key={node.id}
              className="flex gap-4 relative z-10 cursor-pointer group"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={`w-12 h-12 shrink-0 rounded-full bg-white border-4 flex items-center justify-center transition-all duration-500 ${isActive
                  ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.7)] scale-110'
                  : 'border-outline-variant/60 shadow-sm group-hover:border-orange-300 group-hover:scale-105'
                }`}>
                <node.Icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-orange-500' : 'text-outline-variant/60 group-hover:text-orange-400'}`} />
              </div>
              <div className={`flex flex-col justify-center pt-1 transition-all duration-500 ${isCurrent ? 'translate-x-1' : ''}`}>
                <span className={`text-sm font-bold transition-colors duration-500 ${isActive ? 'text-orange-600' : 'text-on-surface'}`}>{node.title}</span>
                <span className={`text-xs mt-1 leading-relaxed transition-colors duration-500 ${isActive ? 'text-on-surface' : 'text-on-surface-variant'}`}>{node.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
