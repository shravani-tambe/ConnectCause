import React from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  Heart,
  Home,
  Settings,
  Users,
  FileText,
  DollarSign,
  LogOut,
} from "lucide-react";

interface NGOSidebarProps {
  activePage?: string;
  organizationName?: string;
  organizationLogo?: string;
  onNavigate?: (page: string) => void;
}

const NGOSidebar = ({
  activePage = "dashboard",
  organizationName = "Ocean Conservation Alliance",
  organizationLogo = "https://api.dicebear.com/7.x/avataaars/svg?seed=ocean",
  onNavigate = () => {},
}: NGOSidebarProps) => {
  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="w-5 h-5" /> },
    {
      id: "profile",
      label: "Manage Profile",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      id: "donations",
      label: "Donations",
      icon: <DollarSign className="w-5 h-5" />,
    },
    { id: "events", label: "Events", icon: <Calendar className="w-5 h-5" /> },
    {
      id: "followers",
      label: "Followers",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: "reports",
      label: "Reports",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      id: "volunteers",
      label: "Volunteers",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "documents",
      label: "Documents",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
  };

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
            <img
              src={organizationLogo}
              alt={`${organizationName} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-sm truncate">{organizationName}</h3>
            <p className="text-xs text-muted-foreground">NGO Dashboard</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activePage === item.id ? "secondary" : "ghost"}
              className={`w-full justify-start text-sm ${activePage === item.id ? "font-medium" : "font-normal"}`}
              onClick={() => handleNavigation(item.id)}
              asChild
            >
              <Link
                to={`/ngo/${item.id}`}
                className="flex items-center gap-3 px-3 py-2"
              >
                {item.icon}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-gray-200">
        <Button
          variant="outline"
          className="w-full justify-start text-sm text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default NGOSidebar;
