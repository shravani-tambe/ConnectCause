import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Share2,
  Heart,
  ArrowLeft,
  ExternalLink,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EventDetailsProps {
  id?: string;
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  longDescription?: string;
  attendeeCount?: number;
  maxAttendees?: number;
  imageUrl?: string;
  category?: string;
  ngoId?: string;
  ngoName?: string;
  ngoLogo?: string;
  attendees?: Array<{
    id: string;
    name: string;
    avatar?: string;
  }>;
  isRSVPed?: boolean;
  onRSVP?: () => void;
  onCancelRSVP?: () => void;
  onShare?: () => void;
  onFollowNGO?: () => void;
  isFollowingNGO?: boolean;
}

const EventDetails = ({
  id = "1",
  title = "Beach Cleanup Initiative",
  date = "June 15, 2023",
  time = "9:00 AM - 12:00 PM",
  location = "Sunset Beach, Miami",
  description = "Join us for our monthly beach cleanup event. Help us preserve our beautiful coastline and protect marine life.",
  longDescription = "Join Ocean Conservation Alliance for our monthly beach cleanup initiative at Sunset Beach. This event is part of our ongoing efforts to preserve coastal ecosystems and protect marine life from the harmful effects of pollution. Participants will help collect trash and debris from the shoreline, sort recyclables, and learn about the impact of pollution on our oceans.\n\nWe'll provide all necessary equipment including gloves, trash bags, and collection tools. Please wear comfortable clothes, sun protection, and bring a reusable water bottle. This event is suitable for all ages and abilities - families are welcome!\n\nYour participation makes a real difference. At our last cleanup, 45 volunteers collected over 250 pounds of trash from our beaches. Together, we can keep our oceans clean and protect marine ecosystems for future generations.",
  attendeeCount = 24,
  maxAttendees = 50,
  imageUrl = "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&q=80",
  category = "Environment",
  ngoId = "101",
  ngoName = "Ocean Conservation Alliance",
  ngoLogo = "https://api.dicebear.com/7.x/avataaars/svg?seed=ocean",
  attendees = [
    {
      id: "1",
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: "2",
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      id: "3",
      name: "Jessica Williams",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    },
    {
      id: "4",
      name: "David Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      id: "5",
      name: "Emily Taylor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ],
  isRSVPed = false,
  onRSVP = () => console.log("RSVP clicked"),
  onCancelRSVP = () => console.log("Cancel RSVP clicked"),
  onShare = () => console.log("Share clicked"),
  onFollowNGO = () => console.log("Follow NGO clicked"),
  isFollowingNGO = false,
}: EventDetailsProps) => {
  const [isRSVPDialogOpen, setIsRSVPDialogOpen] = useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  // In a real app, we would use this to get the event ID from the URL
  // const { eventId } = useParams();

  const handleRSVP = () => {
    onRSVP();
    setIsRSVPDialogOpen(false);
  };

  const handleCancelRSVP = () => {
    onCancelRSVP();
  };

  const handleShare = () => {
    onShare();
    setIsShareDialogOpen(false);
  };

  const spotsRemaining = maxAttendees - attendeeCount;
  const spotsRemainingText =
    spotsRemaining > 0 ? `${spotsRemaining} spots remaining` : "Event is full";

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6">
      <div className="mb-6">
        <Button variant="ghost" className="gap-1" asChild>
          <Link to="/events">
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge className="bg-white/90 text-primary hover:bg-white/80">
                {category}
              </Badge>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src={ngoLogo} alt={ngoName} />
                  <AvatarFallback>{ngoName.charAt(0)}</AvatarFallback>
                </Avatar>
                <Link
                  to={`/ngo/${ngoId}`}
                  className="text-sm font-medium hover:underline"
                >
                  {ngoName}
                </Link>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm text-muted-foreground">
                {attendeeCount} attendees
              </span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm text-muted-foreground">
                {spotsRemainingText}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm text-muted-foreground">{date}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Time</p>
                    <p className="text-sm text-muted-foreground">{time}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{location}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Capacity</p>
                    <p className="text-sm text-muted-foreground">
                      {attendeeCount} / {maxAttendees} attendees
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs
              defaultValue="details"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="attendees">Attendees</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="pt-4">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-2">
                    About this event
                  </h3>
                  <p className="whitespace-pre-line text-gray-700">
                    {longDescription}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="attendees" className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Who's attending</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {attendees.map((attendee) => (
                    <div
                      key={attendee.id}
                      className="flex items-center gap-3 p-3 rounded-lg border"
                    >
                      <Avatar>
                        <AvatarImage
                          src={attendee.avatar}
                          alt={attendee.name}
                        />
                        <AvatarFallback>
                          {attendee.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{attendee.name}</p>
                      </div>
                    </div>
                  ))}
                  {attendeeCount > attendees.length && (
                    <div className="flex items-center justify-center gap-3 p-3 rounded-lg border border-dashed">
                      <p className="text-sm text-muted-foreground">
                        +{attendeeCount - attendees.length} more attendees
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Registration</CardTitle>
              <CardDescription>
                {isRSVPed
                  ? "You're registered for this event"
                  : "Register to attend this event"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isRSVPed ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-4">
                  <p className="text-sm text-green-800 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    You're attending this event
                  </p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mb-4">
                  {spotsRemaining > 0
                    ? `${spotsRemaining} spots remaining out of ${maxAttendees}`
                    : "This event is currently full"}
                </p>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              {isRSVPed ? (
                <Button
                  variant="outline"
                  className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200"
                  onClick={handleCancelRSVP}
                >
                  Cancel Registration
                </Button>
              ) : (
                <Dialog
                  open={isRSVPDialogOpen}
                  onOpenChange={setIsRSVPDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button className="w-full" disabled={spotsRemaining <= 0}>
                      Register for Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Registration</DialogTitle>
                      <DialogDescription>
                        You're about to register for {title} on {date}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Date & Time</p>
                          <p className="text-sm text-muted-foreground">
                            {date}, {time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">
                            {location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsRSVPDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button onClick={handleRSVP}>Confirm Registration</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}

              <div className="flex gap-2 w-full">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="flex-1"
                        onClick={() => setIsShareDialogOpen(true)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share this event</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={isFollowingNGO ? "secondary" : "outline"}
                        size="icon"
                        className="flex-1"
                        onClick={onFollowNGO}
                      >
                        <Heart
                          className={`h-4 w-4 ${isFollowingNGO ? "fill-current" : ""}`}
                        />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {isFollowingNGO
                          ? `Unfollow ${ngoName}`
                          : `Follow ${ngoName}`}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="flex-1"
                        asChild
                      >
                        <Link to={`/ngo/${ngoId}`}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View {ngoName}'s profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organizer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={ngoLogo} alt={ngoName} />
                  <AvatarFallback>{ngoName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{ngoName}</p>
                  <p className="text-sm text-muted-foreground">
                    Event Organizer
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link to={`/ngo/${ngoId}`}>View Organizer Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Share Dialog */}
      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share this event</DialogTitle>
            <DialogDescription>
              Share this event with your friends and network
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <Button variant="outline" className="gap-2" onClick={handleShare}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleShare}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              Twitter
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleShare}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleShare}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5z" />
                <path d="M22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5z" />
                <path d="m12 12 4 4" />
                <path d="m8 8 4 4" />
                <path d="m16 8-4 4" />
                <path d="m8 16 4-4" />
              </svg>
              WhatsApp
            </Button>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium">Or copy link</p>
            <div className="flex">
              <Input
                readOnly
                value={`https://example.com/events/${id}`}
                className="rounded-r-none"
              />
              <Button
                className="rounded-l-none"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://example.com/events/${id}`,
                  );
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventDetails;
