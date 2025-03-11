import React, { useState } from "react";
import { Plus, Search, Calendar, Edit, Trash2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
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
  status: "upcoming" | "past" | "draft";
}

interface EventManagerProps {
  events?: Event[];
  onCreateEvent?: (event: Omit<Event, "id" | "attendeeCount">) => void;
  onUpdateEvent?: (event: Event) => void;
  onDeleteEvent?: (id: string) => void;
}

const EventManager = ({
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
      status: "upcoming",
    },
    {
      id: "2",
      title: "Fundraising Gala Dinner",
      date: "July 10, 2023",
      time: "7:00 PM - 10:00 PM",
      location: "Grand Hotel, Downtown",
      description:
        "Annual fundraising gala with dinner, entertainment, and silent auction to support our conservation programs.",
      attendeeCount: 120,
      imageUrl:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      category: "Fundraising",
      status: "upcoming",
    },
    {
      id: "3",
      title: "Marine Education Workshop",
      date: "May 5, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Community Center",
      description:
        "Educational workshop for children and adults about marine ecosystems and conservation efforts.",
      attendeeCount: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1564144006388-615d45a27449?w=800&q=80",
      category: "Education",
      status: "past",
    },
    {
      id: "4",
      title: "Volunteer Orientation",
      date: "TBD",
      time: "TBD",
      location: "Virtual Meeting",
      description:
        "Orientation session for new volunteers to learn about our organization and how they can contribute.",
      attendeeCount: 0,
      imageUrl:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
      category: "Volunteer",
      status: "draft",
    },
  ],
  onCreateEvent = () => {},
  onUpdateEvent = () => {},
  onDeleteEvent = () => {},
}: EventManagerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

  // Form state for new/edit event
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    imageUrl: "",
    category: "",
    status: "draft",
  });

  const categories = [...new Set(events.map((event) => event.category))];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !categoryFilter || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const upcomingEvents = filteredEvents.filter(
    (event) => event.status === "upcoming",
  );
  const pastEvents = filteredEvents.filter((event) => event.status === "past");
  const draftEvents = filteredEvents.filter(
    (event) => event.status === "draft",
  );

  const handleEditEvent = (event: Event) => {
    setCurrentEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      imageUrl: event.imageUrl,
      category: event.category,
      status: event.status,
    });
    setIsEditDialogOpen(true);
  };

  const handleCreateSubmit = () => {
    onCreateEvent({
      title: formData.title,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      description: formData.description,
      imageUrl:
        formData.imageUrl ||
        "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&q=80",
      category: formData.category,
      status: formData.status as "upcoming" | "past" | "draft",
    });
    setIsCreateDialogOpen(false);
    resetForm();
  };

  const handleEditSubmit = () => {
    if (currentEvent) {
      onUpdateEvent({
        ...currentEvent,
        title: formData.title,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        description: formData.description,
        imageUrl: formData.imageUrl,
        category: formData.category,
        status: formData.status as "upcoming" | "past" | "draft",
      });
    }
    setIsEditDialogOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      imageUrl: "",
      category: "",
      status: "draft",
    });
    setCurrentEvent(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderEventForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <FormLabel htmlFor="title">Event Title</FormLabel>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter event title"
          />
        </div>

        <div className="space-y-2">
          <FormLabel htmlFor="category">Category</FormLabel>
          <Select
            value={formData.category}
            onValueChange={(value) => handleSelectChange("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Environment">Environment</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Fundraising">Fundraising</SelectItem>
              <SelectItem value="Volunteer">Volunteer</SelectItem>
              <SelectItem value="Community">Community</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="e.g., June 15, 2023"
          />
        </div>

        <div className="space-y-2">
          <FormLabel htmlFor="time">Time</FormLabel>
          <Input
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            placeholder="e.g., 9:00 AM - 12:00 PM"
          />
        </div>

        <div className="space-y-2">
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select
            value={formData.status}
            onValueChange={(value) => handleSelectChange("status", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="past">Past</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <FormLabel htmlFor="location">Location</FormLabel>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Enter event location"
        />
      </div>

      <div className="space-y-2">
        <FormLabel htmlFor="imageUrl">Image URL</FormLabel>
        <Input
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          placeholder="Enter image URL"
        />
      </div>

      <div className="space-y-2">
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter event description"
          rows={4}
        />
      </div>
    </div>
  );

  const renderEventList = (eventsList: Event[], showActions = true) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eventsList.length > 0 ? (
        eventsList.map((event) => (
          <div key={event.id} className="relative group">
            <EventCard {...event} onClick={() => {}} onRSVP={() => {}} />
            {showActions && (
              <div className="absolute top-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-8 w-8 bg-white/90 hover:bg-white"
                  onClick={() => handleEditEvent(event)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="destructive"
                      className="h-8 w-8 bg-white/90 hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Event</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete "{event.title}"? This
                        action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDeleteEvent(event.id)}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="col-span-full flex justify-center items-center p-8 bg-muted/20 rounded-lg">
          <p className="text-muted-foreground">No events found</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full h-full bg-white p-6 overflow-auto">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Event Manager</h1>
            <p className="text-muted-foreground">
              Create and manage your organization's events
            </p>
          </div>

          <Dialog
            open={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
          >
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new event for your
                  organization.
                </DialogDescription>
              </DialogHeader>

              {renderEventForm()}

              <DialogFooter className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => setIsCreateDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleCreateSubmit}>Create Event</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select
            value={categoryFilter || "all"}
            onValueChange={(value) =>
              setCategoryFilter(value === "all" ? null : value)
            }
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="All Categories" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Upcoming
              <Badge variant="secondary" className="ml-1">
                {upcomingEvents.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="past">
              Past
              <Badge variant="secondary" className="ml-1">
                {pastEvents.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="draft">
              Drafts
              <Badge variant="secondary" className="ml-1">
                {draftEvents.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {renderEventList(upcomingEvents)}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {renderEventList(pastEvents)}
          </TabsContent>

          <TabsContent value="draft" className="space-y-6">
            {renderEventList(draftEvents)}
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>
              Update the details of your event.
            </DialogDescription>
          </DialogHeader>

          {renderEventForm()}

          <DialogFooter className="mt-6">
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleEditSubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventManager;
