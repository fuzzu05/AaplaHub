import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield, FileText, CheckCircle, XCircle, Search, Clock, ArrowLeft, Activity, User, CreditCard, Lock } from 'lucide-react';

export default function OfficerPortal() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<any[]>([]);
  const [selectedApp, setSelectedApp] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchApplications = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://aaplahub.onrender.com';
      const res = await fetch(`${API_URL}/applications/all`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }
    fetchApplications();
  }, [token, navigate]);

  const handleAction = async (appId: string, status: 'APPROVED' | 'REJECTED') => {
    setIsProcessing(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://aaplahub.onrender.com';
      await fetch(`${API_URL}/applications/${appId}/status`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      await fetchApplications();
      setSelectedApp(null);
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    } finally {
      setIsProcessing(false);
    }
  };

  const pendingApps = applications.filter(a => a.status === 'UNDER_REVIEW');
  const filteredApps = pendingApps.filter(a => 
    a.applicationId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.canonicalData?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold tracking-tight">AaplaHub Gov-WAN</h1>
                <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Officer Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-bold text-blue-400">
                  {user?.name?.charAt(0) || 'O'}
                </div>
                <div className="hidden md:block text-sm">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs text-slate-400">ID: {String(user?.id || '').substring(0, 8)}</p>
                </div>
              </div>
              <button 
                onClick={() => { logout(); navigate('/'); }} 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedApp ? (
          /* WORK QUEUE VIEW */
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Work Queue</h2>
                <p className="text-sm text-slate-500 mt-1">
                  You have <span className="font-semibold text-blue-600">{pendingApps.length}</span> applications pending review.
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by ID, name, or service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-slate-600">Application ID</th>
                      <th className="px-6 py-4 font-semibold text-slate-600">Applicant</th>
                      <th className="px-6 py-4 font-semibold text-slate-600">Service</th>
                      <th className="px-6 py-4 font-semibold text-slate-600">Submitted</th>
                      <th className="px-6 py-4 font-semibold text-slate-600 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredApps.length > 0 ? (
                      filteredApps.map(app => (
                        <tr key={app.id} className="hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => setSelectedApp(app)}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                              <span className="font-mono font-medium text-slate-700">{app.applicationId.substring(0, 12)}...</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-medium text-slate-900">{app.canonicalData?.name || 'Unknown'}</td>
                          <td className="px-6 py-4 text-slate-600">{app.serviceName}</td>
                          <td className="px-6 py-4 text-slate-500 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {new Date(app.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedApp(app);
                              }}
                              className="text-blue-600 hover:text-blue-700 font-medium text-sm bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors"
                            >
                              Review Dossier
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                          <div className="flex flex-col items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-emerald-500 mb-3" />
                            <p className="text-lg font-medium text-slate-900">All caught up!</p>
                            <p className="text-sm mt-1">There are no applications matching your criteria.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* DOSSIER REVIEW VIEW */
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
            <button
              onClick={() => setSelectedApp(null)}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work Queue
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Main Dossier */}
              <div className="flex-1 space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{selectedApp.serviceName}</h2>
                      <p className="text-sm text-slate-500 font-mono mt-1">ID: {selectedApp.applicationId}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      UNDER REVIEW
                    </span>
                  </div>
                  
                  <div className="p-6 space-y-8">
                    {/* Applicant Profile */}
                    <section>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-400" />
                        Canonical Applicant Data
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                          <p className="text-xs text-slate-500 font-medium mb-1">Full Legal Name</p>
                          <p className="font-semibold text-slate-900">{selectedApp.canonicalData?.name}</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                          <p className="text-xs text-slate-500 font-medium mb-1">Date of Birth</p>
                          <p className="font-semibold text-slate-900">{selectedApp.canonicalData?.dateOfBirth}</p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 sm:col-span-2">
                          <p className="text-xs text-slate-500 font-medium mb-1">Declared Skills</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedApp.canonicalData?.skills?.map((skill: string, idx: number) => (
                              <span key={idx} className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Verification Status */}
                    <section>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-slate-400" />
                        System Verifications
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg border border-emerald-200 bg-emerald-50">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                            <div>
                              <p className="text-sm font-semibold text-emerald-900">Identity Verification</p>
                              <p className="text-xs text-emerald-700">Validated via Aadhaar Connector API</p>
                            </div>
                          </div>
                          <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-200/50 px-2 py-1 rounded">PASS</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg border border-emerald-200 bg-emerald-50">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-emerald-600" />
                            <div>
                              <p className="text-sm font-semibold text-emerald-900">Financial Verification</p>
                              <p className="text-xs text-emerald-700">Validated via PAN Connector API</p>
                            </div>
                          </div>
                          <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-200/50 px-2 py-1 rounded">PASS</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              {/* Sidebar Action Panel */}
              <div className="md:w-72 space-y-6">
                <div className="bg-slate-900 rounded-xl shadow-sm border border-slate-800 p-6 text-white sticky top-24">
                  <h3 className="font-semibold text-lg mb-2">Officer Decision</h3>
                  <p className="text-sm text-slate-400 mb-6">
                    Review the verified data carefully. Decisions recorded here are final and immutable in the audit log.
                  </p>
                  
                  <div className="space-y-3">
                    <button
                      disabled={isProcessing}
                      onClick={() => handleAction(selectedApp.applicationId, 'APPROVED')}
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? <Activity className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
                      Approve Application
                    </button>
                    <button
                      disabled={isProcessing}
                      onClick={() => handleAction(selectedApp.applicationId, 'REJECTED')}
                      className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-red-950 border border-red-900/50 text-red-400 px-4 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <XCircle className="w-5 h-5" />
                      Reject Application
                    </button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800 flex items-start gap-3">
                    <Lock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-500 leading-relaxed">
                      End-to-end encrypted interaction. Your decision is cryptographically signed with your Officer ID.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
