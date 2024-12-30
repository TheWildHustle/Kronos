import { Link } from 'react-router-dom';

const TemplateGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-golden">Template Gallery</h1>
        <Link to="/" className="text-crimson hover:text-golden transition-colors">
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for template cards */}
        <div className="p-6 bg-slate bg-opacity-20 rounded-lg animate-void-absorption">
          <h2 className="text-2xl font-semibold mb-4">Basic Profile</h2>
          <p className="text-gray-300 mb-4">A simple nostr profile template with customizable fields</p>
          <button className="px-4 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
            Use Template
          </button>
        </div>

        <div className="p-6 bg-slate bg-opacity-20 rounded-lg animate-void-absorption">
          <h2 className="text-2xl font-semibold mb-4">Event Feed</h2>
          <p className="text-gray-300 mb-4">Display and interact with nostr events in real-time</p>
          <button className="px-4 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
            Use Template
          </button>
        </div>

        <div className="p-6 bg-slate bg-opacity-20 rounded-lg animate-void-absorption">
          <h2 className="text-2xl font-semibold mb-4">Messaging Interface</h2>
          <p className="text-gray-300 mb-4">Direct messaging template with encryption support</p>
          <button className="px-4 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery; 