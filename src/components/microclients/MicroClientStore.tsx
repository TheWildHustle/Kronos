import { Link } from 'react-router-dom';

const MicroClientStore = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-golden">Micro-Client Store</h1>
        <Link to="/" className="text-crimson hover:text-golden transition-colors">
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for micro-client cards */}
        <div className="p-6 bg-slate bg-opacity-20 rounded-lg animate-golden-reformation">
          <h2 className="text-2xl font-semibold mb-4">Profile Viewer</h2>
          <p className="text-gray-300 mb-4">Display and interact with nostr profiles</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-golden">v1.0.0</span>
            <button className="px-4 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
              Install
            </button>
          </div>
        </div>

        <div className="p-6 bg-slate bg-opacity-20 rounded-lg animate-golden-reformation">
          <h2 className="text-2xl font-semibold mb-4">Event Publisher</h2>
          <p className="text-gray-300 mb-4">Create and publish nostr events</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-golden">v1.1.0</span>
            <button className="px-4 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
              Install
            </button>
          </div>
        </div>

        <div className="p-6 bg-slate bg-opacity-20 rounded-lg animate-golden-reformation">
          <h2 className="text-2xl font-semibold mb-4">Relay Manager</h2>
          <p className="text-gray-300 mb-4">Manage nostr relay connections</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-golden">v0.9.0</span>
            <button className="px-4 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroClientStore; 