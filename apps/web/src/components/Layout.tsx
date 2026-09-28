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
            <Link to="/" className="flex items-center cursor-pointer">
              <img 
                alt="AaplaHub Logo" 
                className="h-16 w-auto object-contain" 
                src="/logo.png"
              />
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
            
              {/* Hamburger Menu Dropdown */}
              <div className="relative group">
                <button className="p-2 rounded text-on-primary-container hover:text-on-primary hover:bg-surface/10 transition-colors flex items-center">
                  <span className="material-symbols-outlined text-[28px]">menu</span>
                </button>
                <div className="absolute right-0 mt-2 w-64 bg-surface-container-high rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2 border border-surface-variant/20">
                  <span className="block px-4 py-2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Gateway Desks</span>
                  <Link to="/oauth/mock?role=citizen" className="block px-4 py-3 text-sm font-medium text-on-surface hover:bg-surface-container-highest hover:text-primary transition-colors">Citizen Sovereign Portal</Link>
                  <Link to="/oauth/mock?role=officer" className="block px-4 py-3 text-sm font-medium text-on-surface hover:bg-surface-container-highest hover:text-primary transition-colors">Officer Scrutiny Workstation</Link>
                  <Link to="/oauth/mock?role=business" className="block px-4 py-3 text-sm font-medium text-on-surface hover:bg-surface-container-highest hover:text-primary transition-colors">Business Enterprise Suite</Link>
                  <Link to="/oauth/mock?role=admin" className="block px-4 py-3 text-sm font-medium text-on-surface hover:bg-surface-container-highest hover:text-primary transition-colors">Platform Admin & Interop Gateway</Link>
                </div>
              </div>

              <div className="w-px h-8 bg-on-primary-container/20 mx-1"></div>

              {user ? (
                <div className="flex items-center gap-space-sm">
                  <button aria-label="Notifications" className="p-space-sm rounded text-on-primary-container hover:text-on-primary hover:bg-surface/10 transition-colors" type="button">
                    <span className="material-symbols-outlined text-[24px]">notifications</span>
                  </button>
                  <div className="flex items-center gap-space-sm pl-space-xs">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary text-[20px]">person</span>
                    </div>
                    <div className="hidden sm:flex flex-col text-left mr-2">
                      <span className="font-title-sm text-title-sm text-on-primary leading-tight">
                        {user.role === 'citizen' ? 'Citizen' : 
                         user.role === 'officer' ? 'GovTech Officer' : 
                         user.role === 'business' ? 'Enterprise User' : 'Platform Admin'}
                      </span>
                      <span className="font-code-sm text-code-sm text-primary-fixed-dim leading-tight">
                        ROLE: {user.role.toUpperCase()}
                      </span>
                    </div>
                    <button 
                      onClick={handleLogout} 
                      className="px-4 py-2 text-sm font-medium text-on-primary-container bg-surface/10 hover:bg-surface/20 rounded transition-colors ml-2"
                      title="Click to logout"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-space-sm pl-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">person_off</span>
                  </div>
                  <div className="hidden sm:flex flex-col text-left mr-2">
                    <span className="font-title-sm text-title-sm text-on-primary leading-tight">Guest Session</span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant leading-tight">ROLE: NONE</span>
                  </div>
                </div>
              )}
          </div>
        </div>
      </header>

      <main className="w-full pt-20 bg-surface flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}
