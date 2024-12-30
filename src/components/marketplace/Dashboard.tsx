import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-golden mb-8">Kronos Platform</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/templates" className="p-6 bg-slate bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all">
          <h2 className="text-2xl font-semibold mb-4">Template Gallery</h2>
          <p className="text-gray-300">Browse and customize pre-built nostr templates</p>
        </Link>

        <Link to="/microclients" className="p-6 bg-slate bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all">
          <h2 className="text-2xl font-semibold mb-4">Micro-Client Store</h2>
          <p className="text-gray-300">Discover and install nostr micro-clients</p>
        </Link>

        <Link to="/builder" className="p-6 bg-slate bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all">
          <h2 className="text-2xl font-semibold mb-4">App Builder</h2>
          <p className="text-gray-300">Create custom nostr applications</p>
        </Link>

        <Link to="/library" className="p-6 bg-slate bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all">
          <h2 className="text-2xl font-semibold mb-4">User Library</h2>
          <p className="text-gray-300">Access your saved configurations and apps</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard; 