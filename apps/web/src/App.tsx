import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Landing from './pages/Landing';
import OAuthMock from './pages/OAuthMock';
import CitizenDashboard from './pages/CitizenDashboard';
import CitizenApplications from './pages/CitizenApplications';
import ServiceFlow from './pages/ServiceFlow';
import OfficerPortal from './pages/OfficerPortal';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/oauth/mock" element={<OAuthMock />} />
          <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
          <Route path="/citizen/applications" element={<CitizenApplications />} />
          <Route path="/citizen/service-flow" element={<ServiceFlow />} />
          <Route path="/officer" element={<OfficerPortal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
