import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
} from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";
import NGOGrid from "../ngo/NGOGrid";

interface DashboardStats {
  totalDonations?: number;
  followedNGOs?: number;
  upcomingEvents?: number;
  impactScore?: number;
}

interface IndividualDashboardProps {
  userName?: string;
  userAvatar?: string;
  userInitials?: string;
  stats?: DashboardStats;
  onLogout?: () => void;
}

const IndividualDashboard = ({
  userName = "John Doe",
  userAvatar = "",
  userInitials = "JD",
  stats = {
    totalDonations: 450,
    followedNGOs: 5,
    upcomingEvents: 3,
    impactScore: 78,
  },
  onLogout = () => console.log("Logout clicked"),
}: IndividualDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const StatCard = ({
    title,
    value,
    icon,
    description,
  }: {
    title: string;
    value: number | string;
    icon: React.ReactNode;
    description?: string;
  }) => (
    <Card className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] rounded-xl border border-gray-100">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1 tracking-tight text-[#0A6E74]">
              {value}
            </h3>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          <div className="bg-gradient-to-br from-[#FF7D5C]/20 to-[#FF7D5C]/10 p-3 rounded-full shadow-sm">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex h-screen from-[#fafafa] via-[#f5f9fa] to-[#0A6E74]/10 relative bg-gradient-to-b from-[100%]">
      <DashboardSidebar
        userName={userName}
        userAvatar={userAvatar}
        userInitials={userInitials}
        activeItem={activeTab === "browse" ? "browse ngos" : "dashboard"}
        onLogout={onLogout}
      />
      <div className="flex-1 overflow-auto animate-fadeIn relative">
        <div className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-gray-100 shadow-sm px-6 py-4 mb-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#0A6E74]">
                Welcome back, {userName.split(" ")[0]}
              </h1>
              <p className="text-muted-foreground text-lg">
                Here's what's happening with your impact
              </p>
            </div>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full md:w-auto"
            >
              <TabsList className="p-1 bg-gray-100/80 backdrop-blur-sm">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A6E74] data-[state=active]:shadow-sm transition-all duration-200"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="browse"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A6E74] data-[state=active]:shadow-sm transition-all duration-200"
                >
                  Browse NGOs
                </TabsTrigger>
                <TabsTrigger
                  value="donations"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A6E74] data-[state=active]:shadow-sm transition-all duration-200"
                >
                  Donations
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#0A6E74] data-[state=active]:shadow-sm transition-all duration-200"
                >
                  Events
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="hidden"
          >
            <TabsContent
              value="overview"
              className="space-y-6 mt-0"
              forceMount={activeTab === "overview"}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Total Donations"
                  value={`$${stats.totalDonations}`}
                  icon={<DollarSign className="h-5 w-5 text-[#FF7D5C]" />}
                  description="Lifetime contribution"
                />
                <StatCard
                  title="Followed NGOs"
                  value={stats.followedNGOs}
                  icon={<Users className="h-5 w-5 text-[#FF7D5C]" />}
                  description="Organizations you support"
                />
                <StatCard
                  title="Upcoming Events"
                  value={stats.upcomingEvents}
                  icon={<Calendar className="h-5 w-5 text-[#FF7D5C]" />}
                  description="Events you've RSVP'd to"
                />
                <StatCard
                  title="Impact Score"
                  value={stats.impactScore}
                  icon={<TrendingUp className="h-5 w-5 text-[#FF7D5C]" />}
                  description="Based on your activity"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                        >
                          <div className="bg-gradient-to-br from-[#FF7D5C]/20 to-[#FF7D5C]/10 p-2 rounded-full shadow-sm">
                            {activity.icon}
                          </div>
                          <div>
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {activity.description}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                      Recommended NGOs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendedNGOs.map((ngo, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 pb-3 border-b last:border-0 last:pb-0"
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                            <img
                              src={ngo.logo}
                              alt={ngo.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{ngo.name}</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {ngo.description}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-gradient-to-r hover:from-[#FF7D5C]/10 hover:to-[#FF7D5C]/5 hover:text-[#FF7D5C] hover:border-[#FF7D5C] transition-all duration-200"
                          >
                            Follow
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent
              value="browse"
              className="mt-0"
              forceMount={activeTab === "browse"}
            >
              <NGOGrid />
            </TabsContent>

            <TabsContent
              value="donations"
              className="mt-0"
              forceMount={activeTab === "donations"}
            >
              <Card className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                    Your Donation History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="bg-gradient-to-br from-[#FF7D5C]/20 to-[#FF7D5C]/10 p-4 rounded-full inline-block mb-4 animate-pulse shadow-sm">
                      <BarChart3 className="h-10 w-10 text-[#FF7D5C]" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                      Donation history coming soon
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      We're working on this feature. Soon you'll be able to
                      track all your donations and see your impact over time.
                    </p>
                    <Button className="mt-4 bg-gradient-to-r from-[#FF7D5C] to-[#FF7D5C]/90 hover:from-[#FF7D5C]/90 hover:to-[#FF7D5C] transition-all duration-200 hover:shadow-md">
                      Browse NGOs to Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              value="events"
              className="mt-0"
              forceMount={activeTab === "events"}
            >
              <Card className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                    Your Event RSVPs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="bg-gradient-to-br from-[#FF7D5C]/20 to-[#FF7D5C]/10 p-4 rounded-full inline-block mb-4 animate-pulse shadow-sm">
                      <Calendar className="h-10 w-10 text-[#FF7D5C]" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                      Event RSVPs coming soon
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      We're working on this feature. Soon you'll be able to view
                      all events you've RSVP'd to and manage your attendance.
                    </p>
                    <Button className="mt-4 bg-gradient-to-r from-[#FF7D5C] to-[#FF7D5C]/90 hover:from-[#FF7D5C]/90 hover:to-[#FF7D5C] transition-all duration-200 hover:shadow-md">
                      Discover Events
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {activeTab === "overview" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Total Donations"
                  value={`$${stats.totalDonations}`}
                  icon={<DollarSign className="h-5 w-5 text-[#FF7D5C]" />}
                  description="Lifetime contribution"
                />
                <StatCard
                  title="Followed NGOs"
                  value={stats.followedNGOs}
                  icon={<Users className="h-5 w-5 text-[#FF7D5C]" />}
                  description="Organizations you support"
                />
                <StatCard
                  title="Upcoming Events"
                  value={stats.upcomingEvents}
                  icon={<Calendar className="h-5 w-5 text-[#FF7D5C]" />}
                  description="Events you've RSVP'd to"
                />
                <StatCard
                  title="Impact Score"
                  value={stats.impactScore}
                  icon={<TrendingUp className="h-5 w-5 text-[#FF7D5C]" />}
                  description="Based on your activity"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                        >
                          <div className="bg-gradient-to-br from-[#FF7D5C]/20 to-[#FF7D5C]/10 p-2 rounded-full shadow-sm">
                            {activity.icon}
                          </div>
                          <div>
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {activity.description}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                      Recommended NGOs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendedNGOs.map((ngo, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 pb-3 border-b last:border-0 last:pb-0"
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                            <img
                              src={ngo.logo}
                              alt={ngo.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{ngo.name}</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {ngo.description}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-gradient-to-r hover:from-[#FF7D5C]/10 hover:to-[#FF7D5C]/5 hover:text-[#FF7D5C] hover:border-[#FF7D5C] transition-all duration-200"
                          >
                            Follow
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {activeTab === "browse" && <NGOGrid />}

          {activeTab === "donations" && (
            <Card className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
              <CardHeader>
                <CardTitle className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                  Your Donation History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="bg-gradient-to-br from-[#FF7D5C]/20 to-[#FF7D5C]/10 p-4 rounded-full inline-block mb-4 animate-pulse shadow-sm">
                    <BarChart3 className="h-10 w-10 text-[#FF7D5C]" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                    Donation history coming soon
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                    We're working on this feature. Soon you'll be able to track
                    all your donations and see your impact over time.
                  </p>
                  <Button className="mt-4 bg-gradient-to-r from-[#FF7D5C] to-[#FF7D5C]/90 hover:from-[#FF7D5C]/90 hover:to-[#FF7D5C] transition-all duration-200 hover:shadow-md">
                    Browse NGOs to Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "events" && (
            <Card className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100">
              <CardHeader>
                <CardTitle className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                  Your Event RSVPs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="bg-gradient-to-br from-[#FF7D5C]/20 to-[#FF7D5C]/10 p-4 rounded-full inline-block mb-4 animate-pulse shadow-sm">
                    <Calendar className="h-10 w-10 text-[#FF7D5C]" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#0A6E74]">
                    Event RSVPs coming soon
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                    We're working on this feature. Soon you'll be able to view
                    all events you've RSVP'd to and manage your attendance.
                  </p>
                  <Button className="mt-4 bg-gradient-to-r from-[#FF7D5C] to-[#FF7D5C]/90 hover:from-[#FF7D5C]/90 hover:to-[#FF7D5C] transition-all duration-200 hover:shadow-md">
                    Discover Events
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

// Mock data for recent activities
const recentActivities = [
  {
    icon: <DollarSign className="h-4 w-4 text-[#FF7D5C]" />,
    title: "Donated $50 to Ocean Conservation Alliance",
    description: "Thank you for supporting marine conservation efforts!",
    time: "2 days ago",
  },
  {
    icon: <Calendar className="h-4 w-4 text-[#FF7D5C]" />,
    title: "RSVP'd to Beach Cleanup Initiative",
    description: "Event scheduled for June 15, 2023 at Sunset Beach",
    time: "3 days ago",
  },
  {
    icon: <Users className="h-4 w-4 text-[#FF7D5C]" />,
    title: "Started following Clean Water Initiative",
    description: "You'll now receive updates about their projects and events",
    time: "1 week ago",
  },
];

// Mock data for recommended NGOs
const recommendedNGOs = [
  {
    name: "Wildlife Protection Fund",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=wildlife",
    description:
      "Preserving endangered species and their habitats through conservation efforts.",
  },
  {
    name: "Education for All Foundation",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=education",
    description:
      "Providing access to quality education for underprivileged children around the world.",
  },
  {
    name: "Refugee Support Network",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=refugee",
    description:
      "Supporting refugees with emergency aid, legal assistance, and integration programs.",
  },
];

export default IndividualDashboard;
