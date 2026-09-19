import type { ReactNode } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

export default function Layout({ children, hideNav = false }: LayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="flex flex-col w-full min-h-screen font-body-md text-on-surface antialiased bg-surface">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-container shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 w-full px-gutter flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <Link to="/" className="flex items-center gap-space-sm cursor-pointer">
              <img 
                alt="Brand logo" 
                className="h-8 w-auto object-contain" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1UMPqo7qrk0Vo48IL9d_9IRQ7HDfjr2c7cjoypT4cXjgDVN7To9WhQSY3-7m6Tk6m6RLDj9H4QCNUj4HS9IjVmPvkNAqTbXB0sNOAp-9itwXcaILr6t91uRDmz-KwlVf0UIjhu7bgumQu-x3zif3USSTcseNPBG_4rGJmemW_Vaf3JTESCflG6fGFE9oax2L2PoH_Ufamyu-X3JpLUkUW7aZvLfKWpsp69iqSEaK0SKbCjFXjVNEUqZ_nE"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-space-sm">
                  <span className="font-title-md text-title-md text-on-primary tracking-tight">AaplaHub DPI Gateway</span>
                  <span className="font-code-sm text-code-sm bg-surface/10 text-primary-fixed px-space-xs py-0.5 rounded hidden sm:inline-block">
                    SIH 2026 Sandbox POC • Simulated Connectors
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-primary-container">Enter Once. Reuse Securely.</span>
              </div>
            </Link>

            {!hideNav && user && (
              <nav className="hidden xl:flex items-center gap-space-xs">
                {user.role === 'citizen' && (
                  <>
                    <Link 
                      to="/citizen/dashboard" 
                      className={`px-space-md py-space-sm font-title-sm text-title-sm transition-colors rounded ${isActive('/citizen/dashboard') ? 'bg-secondary text-on-secondary' : 'text-on-primary-container hover:text-on-primary hover:bg-surface/10'}`}
                    >
                      Citizen Portal
                    </Link>
                    <Link 
                      to="/citizen/applications" 
                      className={`px-space-md py-space-sm font-title-sm text-title-sm transition-colors rounded ${isActive('/citizen/applications') ? 'bg-secondary text-on-secondary' : 'text-on-primary-container hover:text-on-primary hover:bg-surface/10'}`}
                    >
                      My Applications
                    </Link>
                  </>
                )}
                {user.role === 'officer' && (
                  <Link 
                    to="/officer" 
                    className={`px-space-md py-space-sm font-title-sm text-title-sm transition-colors rounded ${isActive('/officer') ? 'bg-secondary text-on-secondary' : 'text-on-primary-container hover:text-on-primary hover:bg-surface/10'}`}
                  >
                    Officer Workstation
                  </Link>
                )}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-space-md">
            <div className="hidden lg:flex items-center gap-space-xs bg-surface-container-lowest/5 px-space-sm py-space-xs rounded">
              <div className="flex items-center gap-1.5 px-space-xs py-0.5">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                <span className="font-code-sm text-code-sm text-surface-bright">UIDAI: Sandbox Ready</span>
              </div>
              <div className="flex items-center gap-1.5 px-space-xs py-0.5">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                <span className="font-code-sm text-code-sm text-surface-bright">NSDL: Mock Active</span>
              </div>
            </div>
            
            {user ? (
              <div className="flex items-center gap-space-sm">
                <button aria-label="Notifications" className="p-space-sm rounded text-on-primary-container hover:text-on-primary hover:bg-surface/10 transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                </button>
                <div className="flex items-center gap-space-sm pl-space-xs">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                  </div>
                  <div className="hidden sm:flex flex-col text-left mr-2">
                    <span className="font-title-sm text-title-sm text-on-primary leading-tight">
                      {user.role === 'citizen' ? 'Citizen' : 'GovTech Officer'}
                    </span>
                    <span className="font-code-sm text-code-sm text-primary-fixed-dim leading-tight">
                      ROLE: {user.role.toUpperCase()}
                    </span>
                  </div>
                  <button 
                    onClick={handleLogout} 
                    className="px-3 py-1.5 text-sm font-medium text-on-primary-container bg-surface/10 hover:bg-surface/20 rounded transition-colors"
                    title="Click to logout"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-space-sm">
                <Link to="/oauth/mock?role=citizen" className="px-space-md py-space-sm bg-secondary text-on-secondary rounded font-title-sm text-title-sm hover:bg-secondary-container transition-colors">
                  Citizen Login
                </Link>
                <Link to="/oauth/mock?role=officer" className="px-space-md py-space-sm border border-secondary text-secondary rounded font-title-sm text-title-sm hover:bg-secondary/10 transition-colors">
                  Officer Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="w-full pt-20 bg-surface flex-1 flex flex-col">
        {children}
      </main>

      <footer className="w-full bg-surface-container-low py-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-auto">
        <div className="w-full px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <span className="font-title-sm text-title-sm text-on-surface">AaplaHub Sovereign Interoperability Layer • Smart India Hackathon 2026 Sandbox Prototype</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Sovereign Public Digital Infrastructure Architecture • Zero Third-Party Tracker Compliance</span>
          </div>
          <div className="flex items-center gap-space-md font-code-sm text-code-sm text-on-surface-variant">
            <span>SANDBOX ENGINE v3.4.1-rc</span>
            <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
            <span>CONSENT LEDGER: ACTIVE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
