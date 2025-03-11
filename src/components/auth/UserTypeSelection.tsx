import React from "react";
import { User, Building2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UserTypeSelectionProps {
  onSelectUserType?: (userType: "individual" | "ngo") => void;
}

const UserTypeSelection = ({
  onSelectUserType = () => {},
}: UserTypeSelectionProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Join Our Platform</h2>
        <p className="text-muted-foreground mt-2">
          Choose how you want to participate in making a difference
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Individual User Card */}
        <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Individual</CardTitle>
            <CardDescription>Support causes you care about</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center gap-2">
                <span className="text-green-500">✓</span> Donate to NGOs
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-green-500">✓</span> Attend events
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-green-500">✓</span> Follow organizations
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-green-500">✓</span> Track your impact
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button
              size="lg"
              className="w-full max-w-xs"
              onClick={() => onSelectUserType("individual")}
            >
              Sign Up as Individual
            </Button>
          </CardFooter>
        </Card>

        {/* NGO Card */}
        <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">NGO</CardTitle>
            <CardDescription>Showcase your mission and impact</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center gap-2">
                <span className="text-green-500">✓</span> Create organization
                profile
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-green-500">✓</span> Receive donations
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-green-500">✓</span> Organize events
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-green-500">✓</span> Connect with
                supporters
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button
              size="lg"
              className="w-full max-w-xs"
              onClick={() => onSelectUserType("ngo")}
            >
              Sign Up as NGO
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          Already have an account?{" "}
          <Button variant="link" className="p-0" onClick={() => {}}>
            Log in
          </Button>
        </p>
      </div>
    </div>
  );
};

export default UserTypeSelection;
