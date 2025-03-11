import React, { useState } from "react";
import {
  BarChart3,
  DollarSign,
  Users,
  Calendar,
  Heart,
  Settings,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NGOSidebar from "./NGOSidebar";
import EventManager from "../events/EventManager";

interface NGODashboardProps {
  organizationName?: string;
  organizationLogo?: string;
  stats?: {
    totalDonations?: number;
    totalFollowers?: number;
    upcomingEvents?: number;
    totalVolunteers?: number;
  };
  activePage?: string;
  onNavigate?: (page: string) => void;
}

const NGODashboard = ({
  organizationName = "Ocean Conservation Alliance",
  organizationLogo = "https://api.dicebear.com/7.x/avataaars/svg?seed=ocean",
  stats = {
    totalDonations: 24850,
    totalFollowers: 1243,
    upcomingEvents: 3,
    totalVolunteers: 78,
  },
  activePage = "dashboard",
  onNavigate = () => {},
}: NGODashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Render different content based on active page
  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return renderDashboard();
      case "events":
        return <EventManager />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>
                  {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
                </CardTitle>
                <CardDescription>
                  This section is under development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The {activePage} management interface will be available soon.
                </p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  // Dashboard overview content
  const renderDashboard = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 flex flex-row items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Donations
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  ${stats.totalDonations.toLocaleString()}
                </h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-row items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Followers
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {stats.totalFollowers.toLocaleString()}
                </h3>
              </div>
              <div className="p-2 bg-pink-100 rounded-full">
                <Heart className="h-6 w-6 text-pink-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-row items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Upcoming Events
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {stats.upcomingEvents}
                </h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Calendar className="h-6 w-6 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-row items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Volunteers
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {stats.totalVolunteers}
                </h3>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Users className="h-6 w-6 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="donations">Recent Donations</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="followers">New Followers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Overview</CardTitle>
                <CardDescription>
                  Your organization's performance at a glance
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Analytics visualization will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
                <CardDescription>
                  Latest contributions to your organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {String.fromCharCode(65 + i)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">Anonymous Donor</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(
                              Date.now() - i * 86400000,
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="font-medium">
                        ${(Math.random() * 500 + 50).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Events scheduled in the near future
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Beach Cleanup {i + 1}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(
                              Date.now() + (i + 1) * 7 * 86400000,
                            ).toLocaleDateString()}{" "}
                            • 9:00 AM
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {10 + i * 5} RSVPs
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="followers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>New Followers</CardTitle>
                <CardDescription>
                  People who recently followed your organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=person${i}`}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">User {i + 1}</p>
                          <p className="text-sm text-muted-foreground">
                            Followed{" "}
                            {i === 0
                              ? "today"
                              : i === 1
                                ? "yesterday"
                                : `${i} days ago`}
                          </p>
                        </div>
                      </div>
                      <button className="text-sm text-blue-500 hover:underline">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <NGOSidebar
        activePage={activePage}
        organizationName={organizationName}
        organizationLogo={organizationLogo}
        onNavigate={onNavigate}
      />
      <div className="flex-1 overflow-auto p-6">{renderContent()}</div>
    </div>
  );
};

export default NGODashboard;
