import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useApplicationStore } from '../store/applicationStore';
import Layout from '../components/Layout';

interface Application {
  id: number;
  applicationId: string;
  serviceName: string;
  status: string;
  isPaid: boolean;
  fee: number;
  createdAt: string;
  updatedAt: string;
}

export default function CitizenApplications() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const store = useApplicationStore();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    fetch(`${API_URL}/applications/my-applications`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setApplications(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch applications", err);
        setLoading(false);
      });
  }, [token]);

  const getStageStatus = (app: Application, stageIndex: number) => {
    // Stages: 0: Submitted, 1: Canonical, 2: Payment, 3: Scrutiny, 4: Approved/Rejected
    if (stageIndex === 0) return 'pass';
    if (stageIndex === 1) return 'pass'; // Auto-filled
    if (stageIndex === 2) {
      if (app.isPaid) return 'pass';
      if (app.status === 'PAYMENT_PENDING') return 'active';
      return 'pending';
    }
    if (stageIndex === 3) {
      if (['APPROVED', 'REJECTED'].includes(app.status)) return 'pass';
      if (app.status === 'UNDER_REVIEW') return 'active';
      return 'pending';
    }
    if (stageIndex === 4) {
      if (app.status === 'APPROVED') return 'pass';
      if (app.status === 'REJECTED') return 'error';
      return 'pending';
    }
    return 'pending';
  };

  return (
    <Layout>
      <div className="flex flex-col w-full px-margin pb-space-xl pt-space-md max-w-[1440px] mx-auto">

        {/* Breadcrumbs & Context Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
          <div className="flex items-center gap-2">
            <span className="font-body-sm text-body-sm text-on-surface-variant">Citizen Portfolio</span>
            <span className="font-code-sm text-code-sm text-outline-variant">/</span>
            <span className="font-body-sm text-body-sm text-secondary font-semibold">Unified Life-Cycle Tracking</span>
            <span className="font-code-sm text-code-sm text-outline-variant">/</span>
            <span className="font-code-sm text-code-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Sovereign Bus ID: 0x9F4B...C102</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-space-sm py-0.5 rounded bg-surface-container-high">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping"></span>
              <span className="font-code-sm text-code-sm text-on-surface">Telemetry: Realtime</span>
            </div>
            <button onClick={() => window.location.reload()} className="flex items-center gap-1 text-secondary font-title-sm text-title-sm hover:underline">
              <span className="material-symbols-outlined text-[16px]">refresh</span>
              <span>Re-sync Registries</span>
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-1">Unified Application Tracking</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Real-time provenance tracking, gazetted scrutiny SLA monitoring, and cross-departmental status for all Citizen dockets.</p>
          </div>
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button onClick={() => navigate('/citizen/dashboard')} className="px-space-md py-2 rounded bg-primary text-on-primary font-title-sm text-title-sm flex items-center gap-2 transition-colors hover:bg-primary-container">
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>New Application</span>
            </button>
          </div>
        </div>

        {/* 4 High-Density Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Total Applications</span>
              <span className="p-1 rounded bg-surface-container text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">inventory_2</span>
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-xl text-headline-xl text-on-surface">{applications.length}</span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">Dispatched State Dockets</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-caps text-label-caps uppercase text-secondary">Under Active Scrutiny</span>
              <span className="p-1 rounded bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined text-[18px]">fact_check</span>
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-xl text-headline-xl text-secondary">{applications.filter(a => a.status === 'UNDER_REVIEW' || a.status === 'SUBMITTED').length}</span>
              <span className="font-title-sm text-title-sm text-on-surface">Applications</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-caps text-label-caps uppercase text-on-tertiary-container">Approved & Certified</span>
              <span className="p-1 rounded bg-surface-container-high text-on-tertiary-container">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-xl text-headline-xl text-on-tertiary-container">{applications.filter(a => a.status === 'APPROVED').length}</span>
              <span className="font-title-sm text-title-sm text-on-surface">VCs Issued</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-caps text-label-caps uppercase text-error">Clarification/Rejected</span>
              <span className="p-1 rounded bg-error-container text-on-error-container">
                <span className="material-symbols-outlined text-[18px]">warning</span>
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-xl text-headline-xl text-error">{applications.filter(a => a.status === 'REJECTED').length}</span>
              <span className="font-title-sm text-title-sm text-on-surface">Rejected</span>
            </div>
          </div>
        </div>

        {/* Applications List */}
        {loading ? (
          <div className="text-center py-12 text-on-surface-variant font-code-md animate-pulse">Loading applications via Sovereign Bus...</div>
        ) : applications.length === 0 ? (
          <div className="bg-surface-container-lowest p-space-xl text-center rounded-xl shadow-sm border border-surface-container-high">
            <p className="text-on-surface-variant mb-4 font-body-lg">You have not submitted any applications yet.</p>
            <button onClick={() => navigate('/citizen/dashboard')} className="bg-primary text-on-primary px-space-lg py-3 rounded-lg font-title-sm">
              Apply for a Service
            </button>
          </div>
        ) : (
          <div className="space-y-space-lg">
            {applications.map(app => (
              <div key={app.id} className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-secondary-container to-surface-variant"></div>

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md mb-space-lg pt-1">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className={`px-2.5 py-1 rounded font-title-sm text-title-sm font-semibold tracking-wide ${app.status === 'APPROVED' ? 'bg-tertiary text-on-tertiary' :
                        app.status === 'REJECTED' ? 'bg-error text-on-error' :
                          'bg-secondary text-on-secondary'
                        }`}>
                        {app.status.replace('_', ' ')}
                      </span>
                      <div className="flex items-center gap-1.5 bg-surface-container px-2.5 py-1 rounded font-code-md text-code-md text-on-surface font-semibold">
                        <span>{app.applicationId}</span>
                      </div>
                      <span className="font-code-sm text-code-sm bg-surface-container-low px-2 py-1 rounded text-on-surface-variant">
                        Fee: ₹{app.fee} | {app.isPaid ? 'PAID' : 'PENDING'}
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                      {app.serviceName}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 text-on-surface-variant font-body-md text-body-md">
                      <span className="material-symbols-outlined text-[18px] text-secondary">domain</span>
                      <span>Government of Maharashtra</span>
                      <span>•</span>
                      <span className="font-code-sm text-code-sm">Submitted: {new Date(app.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* 5-Stage Orchestration Pipeline */}
                <div className="mb-space-lg bg-surface-container-low p-space-md rounded-xl">
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-secondary">schema</span>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">Inter-Ministerial Orchestration Pipeline</h3>
                    </div>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">Deterministic Proof Engine: DPDP 2023 Compliant</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">

                    {/* Stage 1 */}
                    <div className={`p-3 rounded-lg flex flex-col justify-between relative overflow-hidden ${getStageStatus(app, 0) === 'pass' ? 'bg-surface-container-lowest shadow-sm' : 'bg-surface-container-lowest opacity-75'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-caps text-label-caps text-on-tertiary-container uppercase">Stage 01</span>
                        <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                      </div>
                      <div>
                        <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Submitted</h4>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className={`p-3 rounded-lg flex flex-col justify-between relative overflow-hidden ${getStageStatus(app, 1) === 'pass' ? 'bg-surface-container-lowest shadow-sm' : 'bg-surface-container-lowest opacity-75'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-caps text-label-caps text-on-tertiary-container uppercase">Stage 02</span>
                        <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                      </div>
                      <div>
                        <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Canonical Hydration</h4>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className={`p-3 rounded-lg flex flex-col justify-between relative overflow-hidden ${getStageStatus(app, 2) === 'pass' ? 'bg-surface-container-lowest shadow-sm' :
                      getStageStatus(app, 2) === 'active' ? 'bg-surface-container-highest shadow-sm' : 'bg-surface-container-lowest opacity-75'
                      }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-label-caps text-label-caps uppercase ${getStageStatus(app, 2) === 'pass' ? 'text-on-tertiary-container' : getStageStatus(app, 2) === 'active' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                          Stage 03
                        </span>
                        {getStageStatus(app, 2) === 'pass' && <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>}
                        {getStageStatus(app, 2) === 'active' && <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>}
                      </div>
                      <div>
                        <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Payment</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{app.isPaid ? 'Completed' : 'Pending'}</p>
                      </div>
                    </div>

                    {/* Stage 4 */}
                    <div className={`p-3 rounded-lg flex flex-col justify-between relative overflow-hidden ${getStageStatus(app, 3) === 'pass' ? 'bg-surface-container-lowest shadow-sm' :
                      getStageStatus(app, 3) === 'active' ? 'bg-surface-container-highest shadow-sm' : 'bg-surface-container-lowest opacity-75'
                      }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-label-caps text-label-caps uppercase ${getStageStatus(app, 3) === 'pass' ? 'text-on-tertiary-container' : getStageStatus(app, 3) === 'active' ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                          Stage 04
                        </span>
                        {getStageStatus(app, 3) === 'pass' && <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>}
                        {getStageStatus(app, 3) === 'active' && <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>}
                      </div>
                      <div>
                        <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Officer Scrutiny</h4>
                      </div>
                    </div>

                    {/* Stage 5 */}
                    <div className={`p-3 rounded-lg flex flex-col justify-between relative overflow-hidden ${getStageStatus(app, 4) === 'pass' ? 'bg-surface-container-lowest shadow-sm' :
                      getStageStatus(app, 4) === 'error' ? 'bg-error-container' : 'bg-surface-container-lowest opacity-75'
                      }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-label-caps text-label-caps uppercase ${getStageStatus(app, 4) === 'pass' ? 'text-on-tertiary-container' : getStageStatus(app, 4) === 'error' ? 'text-on-error-container' : 'text-on-surface-variant'}`}>
                          Stage 05
                        </span>
                        {getStageStatus(app, 4) === 'pass' && <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>}
                        {getStageStatus(app, 4) === 'error' && <span className="material-symbols-outlined text-[18px] text-on-error-container">cancel</span>}
                      </div>
                      <div>
                        <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Credential Dispatch</h4>
                        {app.status === 'APPROVED' && <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">VC Issued</p>}
                        {app.status === 'REJECTED' && <p className="font-body-sm text-body-sm text-on-error-container mt-1">Rejected</p>}
                      </div>
                    </div>

                  </div>
                </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md">
                    <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary">security</span>
                      <span>Cryptographically timestamped on Sovereign National Canonical Ledger.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Last updated: {new Date(app.updatedAt).toLocaleString()}</span>
                      {app.status === 'SUBMITTED' && (
                        <button 
                          onClick={() => {
                            store.selectService(app.serviceName, app.fee);
                            store.setApplicationId(app.applicationId);
                            store.setStep('PAYMENT');
                            navigate('/citizen/service-flow');
                          }}
                          className="bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container px-3 py-1.5 rounded text-sm font-semibold transition-colors flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[16px]">payment</span>
                          Complete Payment
                        </button>
                      )}
                    </div>
                  </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
}
