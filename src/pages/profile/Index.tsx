
import { TopNav } from "@/components/nav/TopNav";
import { Activity, ChevronLeft, Edit2, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <main className="pt-24 pb-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full bg-medical-100 flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-medical-600" />
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-gray-200">
                  <Edit2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-600">Student ID: ST12345</p>
              <div className="mt-4 space-y-2">
                <InfoItem icon={<Mail className="w-4 h-4" />} text="john.doe@example.com" />
                <InfoItem icon={<Phone className="w-4 h-4" />} text="+1 234 567 890" />
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 md:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Overview</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <HealthCard
                  icon={<Activity className="w-6 h-6" />}
                  title="Blood Type"
                  value="A+"
                />
                <HealthCard
                  icon={<Activity className="w-6 h-6" />}
                  title="Height"
                  value="175 cm"
                />
                <HealthCard
                  icon={<Activity className="w-6 h-6" />}
                  title="Weight"
                  value="70 kg"
                />
                <HealthCard
                  icon={<Activity className="w-6 h-6" />}
                  title="BMI"
                  value="22.9"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const InfoItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center justify-center gap-2 text-gray-600">
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

const HealthCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="bg-white rounded-lg p-4 border border-gray-100">
    <div className="flex items-center gap-3 mb-2">
      <div className="bg-medical-50 rounded-lg p-2">{icon}</div>
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
    </div>
    <p className="text-2xl font-semibold text-medical-600">{value}</p>
  </div>
);

export default Profile;
