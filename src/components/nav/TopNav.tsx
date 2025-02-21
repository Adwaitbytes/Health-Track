
import { Bell, Calendar, ClipboardList, Home, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-medical-600">HealthTrack</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink icon={<Home className="w-4 h-4" />} to="/" text="Dashboard" />
              <NavLink icon={<ClipboardList className="w-4 h-4" />} to="/records" text="Records" />
              <NavLink icon={<Calendar className="w-4 h-4" />} to="/appointments" text="Appointments" />
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-medical-500 rounded-full"></span>
            </button>
            <Link to="/settings" className="p-2 rounded-full hover:bg-gray-100 ml-2">
              <Settings className="w-5 h-5 text-gray-600" />
            </Link>
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 ml-2">
              <User className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, to, text }: { icon: React.ReactNode; to: string; text: string }) => (
  <Link
    to={to}
    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-medical-600 transition-colors"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);
