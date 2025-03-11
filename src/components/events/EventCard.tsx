import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id?: string;
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  attendeeCount?: number;
  imageUrl?: string;
  category?: string;
  onClick?: () => void;
  onRSVP?: () => void;
}

const EventCard = ({
  id = "1",
  title = "Beach Cleanup Initiative",
  date = "June 15, 2023",
  time = "9:00 AM - 12:00 PM",
  location = "Sunset Beach, Miami",
  description = "Join us for our monthly beach cleanup event. Help us preserve our beautiful coastline and protect marine life.",
  attendeeCount = 24,
  imageUrl = "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&q=80",
  category = "Environment",
  onClick = () => console.log("Event card clicked"),
  onRSVP = () => console.log("RSVP clicked"),
}: EventCardProps) => {
  return (
    <Card className="w-[350px] h-[300px] overflow-hidden flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-32 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 bg-white/90 text-primary"
        >
          {category}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg font-bold line-clamp-1">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>

        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            <span>{attendeeCount} attendees</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" onClick={onClick}>
          View Details
        </Button>
        <Button size="sm" onClick={onRSVP}>
          RSVP
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
