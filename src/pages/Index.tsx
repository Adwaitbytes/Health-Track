
import { TopNav } from "@/components/nav/TopNav";
import { Activity, Calendar, FileText, PlusCircle, Stethoscope, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 via-blue-50 to-medical-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MGwyOCAxNiAyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ4QjBGOSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10 animate-pulse" />
      <TopNav />
      <main className="pt-24 pb-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-medical-400 to-blue-400 rounded-full blur opacity-30 animate-pulse"></div>
                <div className="relative bg-medical-100 p-4 rounded-full">
                  <Stethoscope className="w-12 h-12 text-medical-600" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Health Portal</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your comprehensive healthcare management system. Schedule appointments,
              access records, and manage your health journey all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link
              to="/appointments/new"
              className="group glass-card rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-xl bg-white/80"
            >
              <div className="bg-medical-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-medical-200 transition-colors">
                <Calendar className="w-8 h-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Appointment</h3>
              <p className="text-gray-600">Schedule consultations with healthcare providers</p>
            </Link>

            <Link
              to="/records/new"
              className="group glass-card rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-xl bg-white/80"
            >
              <div className="bg-medical-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-medical-200 transition-colors">
                <FileText className="w-8 h-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Documents</h3>
              <p className="text-gray-600">Generate health records or leave permissions</p>
            </Link>

            <Link
              to="/records"
              className="group glass-card rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-xl bg-white/80"
            >
              <div className="bg-medical-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-medical-200 transition-colors">
                <Activity className="w-8 h-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">View History</h3>
              <p className="text-gray-600">Access your complete medical history</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl p-6 backdrop-blur-xl bg-white/80">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
                  <Link
                    to="/appointments"
                    className="text-medical-600 hover:text-medical-700 text-sm font-medium"
                  >
                    View all
                  </Link>
                </div>
                <div className="space-y-4">
                  <AppointmentCard
                    date="March 15, 2024"
                    time="10:00 AM"
                    doctor="Dr. Sarah Johnson"
                    type="General Checkup"
                  />
                  <AppointmentCard
                    date="March 18, 2024"
                    time="2:30 PM"
                    doctor="Dr. Michael Chen"
                    type="Vaccination"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 backdrop-blur-xl bg-white/80">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <QuickAction
                  icon={<PlusCircle className="w-5 h-5 text-medical-600" />}
                  text="New Appointment"
                  to="/appointments/new"
                />
                <QuickAction
                  icon={<FileText className="w-5 h-5 text-medical-600" />}
                  text="Download Records"
                  to="/records"
                />
                <QuickAction
                  icon={<User className="w-5 h-5 text-medical-600" />}
                  text="Update Profile"
                  to="/profile"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const AppointmentCard = ({
  date,
  time,
  doctor,
  type,
}: {
  date: string;
  time: string;
  doctor: string;
  type: string;
}) => (
  <div className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-medical-200 transition-colors">
    <div className="bg-medical-50 rounded-lg p-3 mr-4">
      <Calendar className="w-6 h-6 text-medical-600" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-900">{doctor}</p>
      <p className="text-sm text-gray-600">{type}</p>
      <p className="text-xs text-gray-500">
        {date} at {time}
      </p>
    </div>
  </div>
);

const QuickAction = ({ icon, text, to }: { icon: React.ReactNode; text: string; to: string }) => (
  <Link
    to={to}
    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
  >
    {icon}
    <span className="ml-3 text-sm font-medium text-gray-700">{text}</span>
  </Link>
);

export default Index;
