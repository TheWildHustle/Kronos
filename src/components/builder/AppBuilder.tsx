import { Link } from 'react-router-dom';

const AppBuilder = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-golden">App Builder</h1>
        <Link to="/" className="text-crimson hover:text-golden transition-colors">
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Component Palette */}
        <div className="col-span-3 bg-slate bg-opacity-20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Components</h2>
          <div className="space-y-4">
            <div className="p-3 bg-void rounded cursor-pointer hover:bg-crimson transition-colors">
              Profile Component
            </div>
            <div className="p-3 bg-void rounded cursor-pointer hover:bg-crimson transition-colors">
              Event Feed
            </div>
            <div className="p-3 bg-void rounded cursor-pointer hover:bg-crimson transition-colors">
              Relay Manager
            </div>
          </div>
        </div>

        {/* Builder Canvas */}
        <div className="col-span-6 bg-slate bg-opacity-20 p-6 rounded-lg min-h-[600px]">
          <div className="border-2 border-dashed border-golden h-full rounded-lg flex items-center justify-center">
            <p className="text-gray-300">Drag and drop components here</p>
          </div>
        </div>

        {/* Properties Panel */}
        <div className="col-span-3 bg-slate bg-opacity-20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Properties</h2>
          <p className="text-gray-300">Select a component to edit its properties</p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="mt-6 flex justify-end space-x-4">
        <button className="px-6 py-2 bg-void text-white rounded hover:bg-crimson transition-colors">
          Preview
        </button>
        <button className="px-6 py-2 bg-crimson text-white rounded hover:bg-golden transition-colors">
          Deploy
        </button>
      </div>
    </div>
  );
};

export default AppBuilder; 