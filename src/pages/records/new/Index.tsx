
import { TopNav } from "@/components/nav/TopNav";
import { ChevronLeft, FileText, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const RequestDocument = () => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MGwyOCAxNiAyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ4QjBGOSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
      <TopNav />
      <main className="relative pt-24 pb-8 animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/records" className="text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Request Medical Document</h1>
          </div>

          <div className="glass-card rounded-xl p-8 backdrop-blur-xl bg-white/80">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Medical Certificate",
                    "Health Record",
                    "Test Results",
                    "Prescription Copy",
                    "Insurance Form",
                    "Vaccination Record",
                  ].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-lg border transition-all flex items-center gap-3 ${
                        selectedType === type
                          ? "bg-medical-50 border-medical-200"
                          : "border-gray-200 hover:border-medical-200"
                      }`}
                    >
                      <FileText className={`w-5 h-5 ${
                        selectedType === type ? "text-medical-600" : "text-gray-400"
                      }`} />
                      <span className="text-sm font-medium text-gray-900">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea
                  className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-medical-500"
                  rows={4}
                  placeholder="Please provide any specific details about your document request..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Supporting Documents (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    Drag and drop files here, or{" "}
                    <button className="text-medical-600 hover:text-medical-700 font-medium">
                      browse
                    </button>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supported formats: PDF, JPG, PNG (max 10MB)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                className="px-6 py-3 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition-colors flex items-center gap-2"
                onClick={() => {/* Handle request submission */}}
              >
                <FileText className="w-4 h-4" />
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestDocument;
