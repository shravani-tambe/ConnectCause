import React from "react";
import { Heart, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NGOCardProps {
  id?: string;
  name?: string;
  logo?: string;
  missionStatement?: string;
  categories?: string[];
  isFollowed?: boolean;
  onFollow?: (id: string) => void;
  onViewProfile?: (id: string) => void;
}

const NGOCard = ({
  id = "1",
  name = "Ocean Conservation Alliance",
  logo = "https://api.dicebear.com/7.x/avataaars/svg?seed=ocean",
  missionStatement = "Dedicated to protecting marine ecosystems and promoting sustainable ocean practices through education, advocacy, and direct action.",
  categories = ["Environment", "Conservation", "Education"],
  isFollowed = false,
  onFollow = () => {},
  onViewProfile = () => {},
}: NGOCardProps) => {
  return (
    <Card className="w-80 h-96 flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{name}</CardTitle>
            <div className="flex flex-wrap gap-1 mt-1">
              {categories.slice(0, 3).map((category, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <CardDescription className="line-clamp-5 text-sm">
          {missionStatement}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between pt-4 border-t">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={isFollowed ? "secondary" : "outline"}
                size="sm"
                className="gap-1"
                onClick={() => onFollow(id)}
              >
                <Heart
                  className={`h-4 w-4 ${isFollowed ? "fill-current" : ""}`}
                />
                {isFollowed ? "Following" : "Follow"}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {isFollowed
                  ? "Unfollow this NGO"
                  : "Follow this NGO to stay updated"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button
          variant="default"
          size="sm"
          className="gap-1"
          onClick={() => onViewProfile(id)}
        >
          View Profile
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NGOCard;
