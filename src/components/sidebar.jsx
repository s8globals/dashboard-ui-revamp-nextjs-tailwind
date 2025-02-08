import { FaTimes } from "react-icons/fa";

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
      <ul className="p-4 text-white space-y-4">
        <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-gray-300 cursor-pointer">Analytics</li>
        <li className="hover:text-gray-300 cursor-pointer">Users</li>
        <li className="hover:text-gray-300 cursor-pointer">Reports</li>
        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
