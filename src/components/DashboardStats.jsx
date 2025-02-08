const DashboardStats = () => {
    return (
      <div className="glass mt-10 p-6 bg-gray-900">
        {/* Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Circular Chart */}
          <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
            <h3 className="text-md font-medium text-white mb-4">Sales Overview</h3>
            <div className="flex justify-center">
              <div className="w-32 h-32 border-8 border-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                72%
              </div>
            </div>
          </div>
  
          {/* Revenue & Sales Graph (Placeholder) */}
          <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
            <h3 className="text-md font-medium text-white mb-4">Revenue & Sales</h3>
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
          </div>
  
          {/* Live Sales Trend */}
          <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
            <h3 className="text-md font-medium text-white mb-4">Sales Trend</h3>
            <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardStats;
  