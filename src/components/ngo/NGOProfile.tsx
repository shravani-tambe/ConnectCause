import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Share2,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import EventList from "../events/EventList";
import DonationForm from "../donation/DonationForm";

interface NGOProfileProps {
  id?: string;
  name?: string;
  logo?: string;
  coverImage?: string;
  missionStatement?: string;
  description?: string;
  location?: string;
  website?: string;
  foundedYear?: string;
  categories?: string[];
  followerCount?: number;
  isFollowed?: boolean;
  onFollow?: () => void;
  onShare?: () => void;
  onDonate?: (amount: number) => void;
}

const NGOProfile = ({
  id = "1",
  name = "Ocean Conservation Alliance",
  logo = "https://api.dicebear.com/7.x/avataaars/svg?seed=ocean",
  coverImage = "https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?w=1200&q=80",
  missionStatement = "Dedicated to protecting marine ecosystems and promoting sustainable ocean practices through education, advocacy, and direct action.",
  description = "The Ocean Conservation Alliance was founded in 2010 by a group of marine biologists and environmental activists concerned about the declining health of our oceans. Our organization focuses on three main areas: marine habitat protection, sustainable fishing advocacy, and public education about ocean conservation.\n\nOver the past decade, we have successfully campaigned for the establishment of several marine protected areas, worked with fishing communities to implement sustainable practices, and educated thousands of students through our school programs and beach cleanup initiatives.\n\nOur team consists of dedicated scientists, educators, and volunteers who are passionate about preserving our oceans for future generations. We believe that through collaborative efforts between communities, governments, and organizations, we can create meaningful change and ensure the long-term health of our marine ecosystems.",
  location = "Miami, Florida",
  website = "www.oceanconservationalliance.org",
  foundedYear = "2010",
  categories = ["Environment", "Conservation", "Education", "Research"],
  followerCount = 1245,
  isFollowed = false,
  onFollow = () => console.log("Follow clicked"),
  onShare = () => console.log("Share clicked"),
  onDonate = (amount) => console.log(`Donation of $${amount} made`),
}: NGOProfileProps) => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="w-full h-full bg-white overflow-auto">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src={coverImage}
          alt={`${name} cover image`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Profile Header */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Logo/Avatar */}
          <div className="z-10 rounded-full border-4 border-white bg-white shadow-md">
            <Avatar className="h-32 w-32">
              <AvatarImage src={logo} alt={name} />
              <AvatarFallback>
                {name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* NGO Info */}
          <div className="flex-1 pt-4 md:pt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {name}
                </h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                  <span className="mx-1">•</span>
                  <span>Founded {foundedYear}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={isFollowed ? "secondary" : "outline"}
                  className="gap-2"
                  onClick={onFollow}
                >
                  <Heart
                    className={`h-4 w-4 ${isFollowed ? "fill-current" : ""}`}
                  />
                  {isFollowed ? "Following" : "Follow"}
                </Button>
                <Button variant="outline" size="icon" onClick={onShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <p className="mt-4 text-gray-600">{missionStatement}</p>

            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{followerCount} followers</span>
              </div>
              {website && (
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{website}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full justify-start h-12 bg-transparent p-0">
              <TabsTrigger
                value="about"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-12 px-4"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-12 px-4"
              >
                Events
              </TabsTrigger>
              <TabsTrigger
                value="donate"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-12 px-4"
              >
                Donate
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <div className="max-w-6xl -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8">
              <TabsContent
                value="about"
                className="mt-0"
                forceMount={activeTab === "about"}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Our Mission
                      </h2>
                      <p className="text-gray-700">{missionStatement}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">About Us</h2>
                      {description.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-gray-700 mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Quick Facts</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-gray-500">Founded</span>
                          <span className="font-medium">{foundedYear}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-500">Location</span>
                          <span className="font-medium">{location}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-500">Website</span>
                          <a
                            href={`https://${website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline"
                          >
                            {website}
                          </a>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-500">Followers</span>
                          <span className="font-medium">{followerCount}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                          <Badge key={index} variant="outline">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button
                        className="w-full"
                        onClick={() => setActiveTab("donate")}
                      >
                        Donate Now
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="events"
                className="mt-0"
                forceMount={activeTab === "events"}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Upcoming Events</h2>
                    <Button variant="outline" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      View Calendar
                    </Button>
                  </div>
                  <EventList ngoId={id} />
                </div>
              </TabsContent>

              <TabsContent
                value="donate"
                className="mt-0"
                forceMount={activeTab === "donate"}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">
                      Support Our Mission
                    </h2>
                    <p className="text-gray-700">
                      Your donation helps us continue our vital work protecting
                      marine ecosystems. We rely on the generosity of supporters
                      like you to fund our conservation efforts, educational
                      programs, and advocacy initiatives.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">
                        How Your Donation Helps
                      </h3>
                      <ul className="space-y-2 list-disc list-inside text-gray-700">
                        <li>
                          $25 can provide educational materials for a classroom
                        </li>
                        <li>$50 can fund a beach cleanup event</li>
                        <li>
                          $100 can support water quality testing at a local
                          beach
                        </li>
                        <li>
                          $250 can help fund research on marine ecosystems
                        </li>
                        <li>
                          $500 can sponsor a community conservation workshop
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">
                        Other Ways to Support
                      </h3>
                      <p className="text-gray-700 mb-4">
                        In addition to financial contributions, there are many
                        other ways you can support our mission:
                      </p>
                      <ul className="space-y-2 list-disc list-inside text-gray-700">
                        <li>Volunteer for beach cleanups and events</li>
                        <li>Participate in our citizen science programs</li>
                        <li>Spread awareness on social media</li>
                        <li>Adopt sustainable practices in your daily life</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <DonationForm ngoId={id} ngoName={name} />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default NGOProfile;
