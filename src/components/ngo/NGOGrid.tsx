import React, { useState } from "react";
import { Search, Filter, X } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import NGOCard from "./NGOCard";

interface NGO {
  id: string;
  name: string;
  logo: string;
  missionStatement: string;
  categories: string[];
  isFollowed: boolean;
}

interface NGOGridProps {
  ngos?: NGO[];
  onFollow?: (id: string) => void;
  onViewProfile?: (id: string) => void;
}

const NGOGrid = ({
  ngos = [
    {
      id: "1",
      name: "Ocean Conservation Alliance",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=ocean",
      missionStatement:
        "Dedicated to protecting marine ecosystems and promoting sustainable ocean practices through education, advocacy, and direct action.",
      categories: ["Environment", "Conservation", "Education"],
      isFollowed: false,
    },
    {
      id: "2",
      name: "Global Hunger Relief",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=hunger",
      missionStatement:
        "Working to end hunger worldwide through emergency food assistance, sustainable agriculture programs, and nutrition education.",
      categories: ["Humanitarian", "Food Security", "Health"],
      isFollowed: true,
    },
    {
      id: "3",
      name: "Education for All Foundation",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=education",
      missionStatement:
        "Providing access to quality education for underprivileged children around the world through school building, teacher training, and educational resources.",
      categories: ["Education", "Children", "Development"],
      isFollowed: false,
    },
    {
      id: "4",
      name: "Wildlife Protection Fund",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=wildlife",
      missionStatement:
        "Preserving endangered species and their habitats through conservation efforts, anti-poaching initiatives, and public awareness campaigns.",
      categories: ["Wildlife", "Conservation", "Environment"],
      isFollowed: false,
    },
    {
      id: "5",
      name: "Clean Water Initiative",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=water",
      missionStatement:
        "Providing clean water solutions to communities in need through well drilling, water purification systems, and sanitation education.",
      categories: ["Water", "Health", "Development"],
      isFollowed: true,
    },
    {
      id: "6",
      name: "Refugee Support Network",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=refugee",
      missionStatement:
        "Supporting refugees with emergency aid, legal assistance, language training, and integration programs to help them rebuild their lives.",
      categories: ["Humanitarian", "Human Rights", "Crisis Response"],
      isFollowed: false,
    },
  ],
  onFollow = (id) => console.log(`Follow NGO with ID: ${id}`),
  onViewProfile = (id) => console.log(`View NGO profile with ID: ${id}`),
}: NGOGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");

  // Extract all unique categories from NGOs
  const allCategories = Array.from(
    new Set(ngos.flatMap((ngo) => ngo.categories)),
  ).sort();

  // Filter NGOs based on search term and selected categories
  const filteredNGOs = ngos.filter((ngo) => {
    const matchesSearch =
      searchTerm === "" ||
      ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.missionStatement.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategories =
      selectedCategories.length === 0 ||
      ngo.categories.some((category) => selectedCategories.includes(category));

    return matchesSearch && matchesCategories;
  });

  // Sort NGOs based on selected sort option
  const sortedNGOs = [...filteredNGOs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "followed") {
      return Number(b.isFollowed) - Number(a.isFollowed);
    }
    return 0;
  });

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSortBy("name");
  };

  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search NGOs by name or mission..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                  {selectedCategories.length > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {selectedCategories.length}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Categories</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {allCategories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryToggle(category)}
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="text-sm"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="followed">Following First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-500">Filtered by:</span>
            {selectedCategories.map((category) => (
              <Badge key={category} variant="outline" className="gap-1">
                {category}
                <button onClick={() => handleCategoryToggle(category)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="text-xs h-7"
              onClick={() => setSelectedCategories([])}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      {sortedNGOs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedNGOs.map((ngo) => (
            <NGOCard
              key={ngo.id}
              id={ngo.id}
              name={ngo.name}
              logo={ngo.logo}
              missionStatement={ngo.missionStatement}
              categories={ngo.categories}
              isFollowed={ngo.isFollowed}
              onFollow={onFollow}
              onViewProfile={onViewProfile}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No NGOs found</h3>
          <p className="text-gray-500 max-w-md">
            We couldn't find any NGOs matching your search criteria. Try
            adjusting your filters or search term.
          </p>
          <Button variant="outline" className="mt-4" onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default NGOGrid;
