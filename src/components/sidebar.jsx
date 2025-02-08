import { useState } from "react";
import { FaTimes, FaHome, FaChartBar, FaEnvelope, FaCog, FaSignOutAlt} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white/10 glass backdrop-blur-lg shadow-xl transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform lg:translate-x-0 lg:relative lg:w-64`}
    >
      {/* Close Button (Only for Small Screens) */}
      <div className="p-4 flex justify-end lg:hidden">
        <button className="text-white text-2xl" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>

      {/* Sidebar Items */}
     
      <ul className="space-y-6 p-4 text-white">
          <li className="sidebar-item hover:text-gray-300 cursor-pointer"><FaHome /> Dashboard</li>
          <li className="sidebar-item hover:text-gray-300 cursor-pointer"><FaChartBar /> Analytics</li>
          <li className="sidebar-item hover:text-gray-300 cursor-pointer"><FaEnvelope /> Messages</li>
          <li className="sidebar-item hover:text-gray-300 cursor-pointer"><FaCog /> Settings</li>
          <li className="sidebar-item hover:text-gray-300 cursor-pointer text-red-500"><FaSignOutAlt /> Logout</li>
        </ul>
    </aside>
  );
};

export default Sidebar;
