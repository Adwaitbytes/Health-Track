
import { TopNav } from "@/components/nav/TopNav";
import { Bell, ChevronLeft, Lock, Moon, User } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <main className="pt-24 pb-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
              <div className="space-y-4">
                <SettingItem
                  icon={<User className="w-5 h-5" />}
                  title="Profile Information"
                  description="Update your personal information"
                />
                <SettingItem
                  icon={<Lock className="w-5 h-5" />}
                  title="Security"
                  description="Manage your password and security settings"
                />
                <SettingItem
                  icon={<Bell className="w-5 h-5" />}
                  title="Notifications"
                  description="Configure your notification preferences"
                />
                <SettingItem
                  icon={<Moon className="w-5 h-5" />}
                  title="Appearance"
                  description="Customize the app's appearance"
                />
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Data</h2>
              <div className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">Data Sharing</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Share medical history with doctors</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-medical-600">
                      <span className="translate-x-6 inline-block h-4 w-4 rounded-full bg-white transition"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Allow appointment reminders</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-medical-600">
                      <span className="translate-x-6 inline-block h-4 w-4 rounded-full bg-white transition"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SettingItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <button className="w-full flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
    <div className="bg-medical-50 rounded-lg p-2 mr-4">{icon}</div>
    <div className="text-left">
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <ChevronLeft className="w-5 h-5 text-gray-400 ml-auto transform rotate-180" />
  </button>
);

export default Settings;
