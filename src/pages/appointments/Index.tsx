
import { TopNav } from "@/components/nav/TopNav";
import { Calendar, ChevronLeft, Filter, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Appointments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <main className="pt-24 pb-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
            </div>
            <Link
              to="/appointments/new"
              className="inline-flex items-center px-4 py-2 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Appointment
            </Link>
          </div>

          <div className="glass-card rounded-xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search appointments..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-500"
                />
              </div>
              <button className="inline-flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>

            <div className="grid gap-4">
              {[
                {
                  id: 1,
                  date: "March 15, 2024",
                  time: "10:00 AM",
                  doctor: "Dr. Sarah Johnson",
                  type: "General Checkup",
                  status: "upcoming" as const,
                },
                {
                  id: 2,
                  date: "March 18, 2024",
                  time: "2:30 PM",
                  doctor: "Dr. Michael Chen",
                  type: "Vaccination",
                  status: "upcoming" as const,
                },
                {
                  id: 3,
                  date: "March 20, 2024",
                  time: "11:15 AM",
                  doctor: "Dr. Emily White",
                  type: "Dental Checkup",
                  status: "pending" as const,
                },
              ].map((appointment) => (
                <AppointmentCard 
                  key={appointment.id}
                  date={appointment.date}
                  time={appointment.time}
                  doctor={appointment.doctor}
                  type={appointment.type}
                  status={appointment.status}
                />
              ))}
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
  status,
}: {
  date: string;
  time: string;
  doctor: string;
  type: string;
  status: "upcoming" | "pending" | "completed";
}) => (
  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-medical-200 transition-colors bg-white">
    <div className="flex items-center">
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
    <div className="flex items-center gap-3">
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
          status === "upcoming"
            ? "bg-blue-50 text-blue-700"
            : status === "pending"
            ? "bg-yellow-50 text-yellow-700"
            : "bg-green-50 text-green-700"
        }`}
      >
        {status}
      </span>
      <button className="text-gray-400 hover:text-gray-600">
        <ChevronLeft className="w-5 h-5 transform rotate-180" />
      </button>
    </div>
  </div>
);

export default Appointments;
