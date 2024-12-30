import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Lazy load components
const Dashboard = lazy(() => import('./components/marketplace/Dashboard'));
const TemplateGallery = lazy(() => import('./components/templates/TemplateGallery'));
const MicroClientStore = lazy(() => import('./components/microclients/MicroClientStore'));
const AppBuilder = lazy(() => import('./components/builder/AppBuilder'));
const UserLibrary = lazy(() => import('./components/marketplace/UserLibrary'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-golden animate-time-spiral">Loading...</div>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-void text-white">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/templates" element={<TemplateGallery />} />
              <Route path="/microclients" element={<MicroClientStore />} />
              <Route path="/builder" element={<AppBuilder />} />
              <Route path="/library" element={<UserLibrary />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
