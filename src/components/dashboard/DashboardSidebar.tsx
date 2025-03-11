import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Search,
  Heart,
  Calendar,
  Clock,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  tooltip: string;
}

interface DashboardSidebarProps {
  userName?: string;
  userAvatar?: string;
  userInitials?: string;
  activeItem?: string;
  onLogout?: () => void;
}

const DashboardSidebar = ({
  userName = "John Doe",
  userAvatar = "",
  userInitials = "JD",
  activeItem = "home",
  onLogout = () => console.log("Logout clicked"),
}: DashboardSidebarProps) => {
  const navItems: NavItem[] = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Dashboard",
      path: "/dashboard",
      tooltip: "Go to your dashboard",
    },
    {
      icon: <Search className="h-5 w-5" />,
      label: "Browse NGOs",
      path: "/browse-ngos",
      tooltip: "Discover NGOs to support",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      label: "Followed NGOs",
      path: "/followed-ngos",
      tooltip: "View NGOs you follow",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Event RSVPs",
      path: "/event-rsvps",
      tooltip: "Manage your event RSVPs",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Donation History",
      path: "/donation-history",
      tooltip: "View your donation history",
    },
  ];

  const bottomNavItems: NavItem[] = [
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      path: "/settings",
      tooltip: "Manage your account settings",
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: "Help & Support",
      path: "/help",
      tooltip: "Get help and support",
    },
  ];

  return (
    <div className="w-64 h-full flex flex-col bg-white border-r border-gray-200">
      {/* User profile section */}
      <div className="p-4 flex items-center space-x-3">
        <Avatar>
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-sm">{userName}</span>
          <span className="text-xs text-muted-foreground">Individual</span>
        </div>
      </div>

      <Separator className="my-2" />

      {/* Main navigation */}
      <nav className="flex-1 px-3 py-2 overflow-y-auto">
        <TooltipProvider>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={item.path}>
                      <Button
                        variant={
                          activeItem === item.label.toLowerCase()
                            ? "secondary"
                            : "ghost"
                        }
                        className="w-full justify-start text-sm font-normal h-10"
                      >
                        {item.icon}
                        <span className="ml-3">{item.label}</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{item.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </nav>

      {/* Bottom navigation */}
      <div className="px-3 py-2 border-t border-gray-200">
        <TooltipProvider>
          <ul className="space-y-1">
            {bottomNavItems.map((item) => (
              <li key={item.path}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={item.path}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm font-normal h-10"
                      >
                        {item.icon}
                        <span className="ml-3">{item.label}</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{item.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}

            <li>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm font-normal h-10 text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={onLogout}
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="ml-3">Logout</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Sign out of your account</p>
                </TooltipContent>
              </Tooltip>
            </li>
          </ul>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default DashboardSidebar;
