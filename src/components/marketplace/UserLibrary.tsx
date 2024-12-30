import { Link } from 'react-router-dom';

const UserLibrary = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-golden">User Library</h1>
        <Link to="/" className="text-crimson hover:text-golden transition-colors">
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Saved Applications */}
        <section className="bg-slate bg-opacity-20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Saved Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-void rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Personal Feed</h3>
              <p className="text-gray-300 mb-4">Custom nostr feed with profile integration</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-golden">Last modified: 2 days ago</span>
                <button className="px-4 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
                  Open
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Installed Micro-Clients */}
        <section className="bg-slate bg-opacity-20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Installed Micro-Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-void rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Profile Viewer</h3>
              <p className="text-gray-300 mb-4">v1.0.0</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-golden">Installed: 1 week ago</span>
                <button className="px-4 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
                  Update
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-slate bg-opacity-20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="p-4 bg-void rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Created new application</h3>
                <p className="text-gray-300">Personal Feed</p>
              </div>
              <span className="text-sm text-golden">2 days ago</span>
            </div>
            <div className="p-4 bg-void rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Installed micro-client</h3>
                <p className="text-gray-300">Profile Viewer</p>
              </div>
              <span className="text-sm text-golden">1 week ago</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserLibrary; 