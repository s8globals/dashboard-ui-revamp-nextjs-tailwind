import { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import DashboardCards from "@/components/DashboardCards";
import DashboardStats from "@/components/DashboardStats";
const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Dashboard Content */}
        <main className="p-6 absolute">
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Dashboard Overview
            </h2>
            <DashboardCards />
            <DashboardStats/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
