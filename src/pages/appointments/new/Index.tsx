
import { TopNav } from "@/components/nav/TopNav";
import { Calendar, ChevronLeft, Clock, Search, Stethoscope, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MGwyOCAxNiAyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ4QjBGOSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
      <TopNav />
      <main className="relative pt-24 pb-8 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/appointments" className="text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Book New Appointment</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-xl p-6 backdrop-blur-xl bg-white/80">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-medical-600" />
                Select Doctor
              </h2>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search doctors..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-500"
                />
              </div>
              <div className="space-y-3">
                {[
                  { id: 1, name: "Dr. Sarah Johnson", speciality: "General Physician" },
                  { id: 2, name: "Dr. Michael Chen", speciality: "Cardiologist" },
                  { id: 3, name: "Dr. Emily White", speciality: "Pediatrician" },
                ].map((doctor) => (
                  <button
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor.name)}
                    className={`w-full flex items-center p-3 rounded-lg transition-all ${
                      selectedDoctor === doctor.name
                        ? "bg-medical-50 border-medical-200 border"
                        : "hover:bg-gray-50 border border-transparent"
                    }`}
                  >
                    <div className="bg-medical-100 rounded-full p-2 mr-3">
                      <Stethoscope className="w-5 h-5 text-medical-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900">{doctor.name}</p>
                      <p className="text-xs text-gray-600">{doctor.speciality}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 backdrop-blur-xl bg-white/80">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-medical-600" />
                  Select Date
                </h2>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    "Mar 15", "Mar 16", "Mar 17", "Mar 18",
                    "Mar 19", "Mar 20", "Mar 21", "Mar 22",
                  ].map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedDate === date
                          ? "bg-medical-50 border-medical-200 border"
                          : "hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      <p className="text-sm font-medium text-gray-900">{date}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 backdrop-blur-xl bg-white/80">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-medical-600" />
                  Select Time
                </h2>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "09:00 AM", "10:00 AM", "11:00 AM",
                    "02:00 PM", "03:00 PM", "04:00 PM",
                  ].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedTime === time
                          ? "bg-medical-50 border-medical-200 border"
                          : "hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      <p className="text-sm font-medium text-gray-900">{time}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              className="px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors flex items-center gap-2"
              onClick={() => {/* Handle booking */}}
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewAppointment;
