
import { TopNav } from "@/components/nav/TopNav";
import { ChevronLeft, Download, FileText, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Records = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 via-blue-50 to-medical-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MGwyOCAxNiAyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ4QjBGOSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10 animate-pulse" />
      <TopNav />
      <main className="relative pt-24 pb-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
            </div>
            <Link
              to="/records/new"
              className="inline-flex items-center px-4 py-2 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Request Document
            </Link>
          </div>

          <div className="glass-card rounded-xl p-6 backdrop-blur-xl bg-white/80">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search records..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-500"
              />
            </div>

            <div className="grid gap-4">
              {[
                {
                  id: 1,
                  title: "General Health Checkup Report",
                  date: "March 10, 2024",
                  doctor: "Dr. Sarah Johnson",
                  type: "Medical Report",
                },
                {
                  id: 2,
                  title: "Vaccination Certificate",
                  date: "February 15, 2024",
                  doctor: "Dr. Michael Chen",
                  type: "Certificate",
                },
                {
                  id: 3,
                  title: "Blood Test Results",
                  date: "January 25, 2024",
                  doctor: "Dr. Emily White",
                  type: "Lab Report",
                },
                {
                  id: 4,
                  title: "Annual Physical Examination",
                  date: "December 15, 2023",
                  doctor: "Dr. James Wilson",
                  type: "Medical Report",
                },
                {
                  id: 5,
                  title: "Dental Checkup Report",
                  date: "November 30, 2023",
                  doctor: "Dr. Lisa Anderson",
                  type: "Dental Report",
                },
              ].map((record) => (
                <RecordCard key={record.id} {...record} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const RecordCard = ({
  title,
  date,
  doctor,
  type,
}: {
  title: string;
  date: string;
  doctor: string;
  type: string;
}) => (
  <div className="group flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-medical-200 transition-all duration-300 hover:shadow-md bg-white/90 backdrop-blur-sm">
    <div className="flex items-center">
      <div className="bg-medical-50 rounded-lg p-3 mr-4 group-hover:bg-medical-100 transition-colors">
        <FileText className="w-6 h-6 text-medical-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{doctor}</p>
        <p className="text-xs text-gray-500">
          {type} • {date}
        </p>
      </div>
    </div>
    <button className="inline-flex items-center px-3 py-1.5 text-medical-600 hover:text-medical-700 hover:bg-medical-50 rounded-lg transition-all">
      <Download className="w-4 h-4 mr-1" />
      Download
    </button>
  </div>
);

export default Records;
