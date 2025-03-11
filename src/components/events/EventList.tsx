import React, { useState } from "react";
import { Search, Filter, Calendar, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import EventCard from "./EventCard";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendeeCount: number;
  imageUrl: string;
  category: string;
  ngoId: string;
  ngoName: string;
}

interface EventListProps {
  events?: Event[];
  ngoId?: string;
  onEventClick?: (eventId: string) => void;
  onRSVP?: (eventId: string) => void;
}

const EventList = ({
  events = [
    {
      id: "1",
      title: "Beach Cleanup Initiative",
      date: "June 15, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "Sunset Beach, Miami",
      description:
        "Join us for our monthly beach cleanup event. Help us preserve our beautiful coastline and protect marine life.",
      attendeeCount: 24,
      imageUrl:
        "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&q=80",
      category: "Environment",
      ngoId: "101",
      ngoName: "Ocean Conservation Alliance",
    },
    {
      id: "2",
      title: "Community Garden Workshop",
      date: "July 8, 2023",
      time: "10:00 AM - 1:00 PM",
      location: "Green Park Community Center",
      description:
        "Learn sustainable gardening techniques and help plant our community garden. All tools and materials provided.",
      attendeeCount: 18,
      imageUrl:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      category: "Education",
      ngoId: "102",
      ngoName: "Urban Green Initiatives",
    },
    {
      id: "3",
      title: "Fundraising Gala Dinner",
      date: "August 20, 2023",
      time: "7:00 PM - 10:00 PM",
      location: "Grand Hotel Ballroom",
      description:
        "Annual fundraising gala with dinner, live music, and silent auction. All proceeds go to supporting our education programs.",
      attendeeCount: 75,
      imageUrl:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      category: "Fundraising",
      ngoId: "103",
      ngoName: "Education For All Foundation",
    },
    {
      id: "4",
      title: "Wildlife Conservation Talk",
      date: "September 5, 2023",
      time: "6:30 PM - 8:00 PM",
      location: "City Library Auditorium",
      description:
        "Join our expert panel for a discussion on local wildlife conservation efforts and how you can get involved.",
      attendeeCount: 42,
      imageUrl:
        "https://images.unsplash.com/photo-1564652518878-669c5d59f8af?w=800&q=80",
      category: "Education",
      ngoId: "104",
      ngoName: "Wildlife Protection Society",
    },
    {
      id: "5",
      title: "Homeless Shelter Volunteer Day",
      date: "October 12, 2023",
      time: "1:00 PM - 5:00 PM",
      location: "Hope Shelter Downtown",
      description:
        "Help prepare and serve meals, sort donations, and assist with various tasks at our local homeless shelter.",
      attendeeCount: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80",
      category: "Volunteer",
      ngoId: "105",
      ngoName: "Community Support Network",
    },
    {
      id: "6",
      title: "Youth Mentorship Program Orientation",
      date: "November 3, 2023",
      time: "5:00 PM - 6:30 PM",
      location: "Community Youth Center",
      description:
        "Learn about our youth mentorship program and how you can become a mentor to local at-risk youth.",
      attendeeCount: 28,
      imageUrl:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
      category: "Education",
      ngoId: "106",
      ngoName: "Youth Empowerment Initiative",
    },
  ],
  ngoId,
  onEventClick = (eventId) => console.log(`Event clicked: ${eventId}`),
  onRSVP = (eventId) => console.log(`RSVP clicked for event: ${eventId}`),
}: EventListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [viewMode, setViewMode] = useState("grid");

  // Filter events by NGO if ngoId is provided
  const filteredEvents = events
    .filter((event) => !ngoId || event.ngoId === ngoId)
    .filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (event) => !selectedCategory || event.category === selectedCategory,
    );

  // Get unique categories for filter dropdown
  const categories = [...new Set(events.map((event) => event.category))];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col space-y-4">
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={undefined}>All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Filter Options</h4>
                  <Separator />
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Date Range</h5>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        Start Date
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        End Date
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Tabs
              defaultValue="grid"
              value={viewMode}
              onValueChange={setViewMode}
              className="hidden md:block"
            >
              <TabsList>
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredEvents.length}{" "}
          {filteredEvents.length === 1 ? "event" : "events"}
          {selectedCategory && ` in ${selectedCategory}`}
          {ngoId && ` for this organization`}
        </div>

        {/* Events grid */}
        {filteredEvents.length > 0 ? (
          <div
            className={`
            ${
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col space-y-4"
            }
          `}
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={viewMode === "list" ? "w-full" : ""}
              >
                <EventCard
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  attendeeCount={event.attendeeCount}
                  imageUrl={event.imageUrl}
                  category={event.category}
                  onClick={() => onEventClick(event.id)}
                  onRSVP={() => onRSVP(event.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Filter className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No events found</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Try adjusting your search or filter criteria
            </p>
            {searchTerm || selectedCategory ? (
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(undefined);
                }}
              >
                Clear filters
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;
