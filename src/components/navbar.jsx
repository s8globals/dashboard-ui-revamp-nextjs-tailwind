import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="glass w-full px-6 py-4 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg flex items-center justify-between">
      {/* Hamburger Icon (Opens Sidebar) */}
      <button className="text-white text-2xl lg:hidden" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Dashboard Title */}
      <h1 className="text-white text-xl font-semibold mx-auto lg:mx-0">Dashboard UI Design</h1>

      {/* Navbar Items (Hidden on Small Screens) */}
      <ul className="hidden lg:flex space-x-6 text-white">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Profile</li>
        <li className="hover:text-gray-300 cursor-pointer">Settings</li>
        <li className="hover:text-gray-300 cursor-pointer">Logout</li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
