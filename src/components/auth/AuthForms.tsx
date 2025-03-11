import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import IndividualSignupForm from "./IndividualSignupForm";
import LoginForm from "./LoginForm";
import NGOSignupForm from "./NGOSignupForm";

interface AuthFormsProps {
  initialTab?: "login" | "signup";
  initialUserType?: "individual" | "ngo";
  onLoginSubmit?: (data: {
    email: string;
    password: string;
    userType: "individual" | "ngo";
  }) => void;
  onIndividualSignupSubmit?: (values: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
  onNGOSignupSubmit?: (values: any) => void;
  onForgotPassword?: () => void;
}

const AuthForms = ({
  initialTab = "login",
  initialUserType = "individual",
  onLoginSubmit = () => {},
  onIndividualSignupSubmit = () => {},
  onNGOSignupSubmit = () => {},
  onForgotPassword = () => {},
}: AuthFormsProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(initialTab);
  const [userType, setUserType] = useState<"individual" | "ngo">(
    initialUserType,
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value as "login" | "signup");
  };

  const handleUserTypeChange = (type: "individual" | "ngo") => {
    setUserType(type);
  };

  const handleLoginSubmit = (data: {
    email: string;
    password: string;
    userType: "individual" | "ngo";
  }) => {
    onLoginSubmit(data);
  };

  const handleIndividualSignupSubmit = (values: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    onIndividualSignupSubmit(values);
  };

  const handleNGOSignupSubmit = (values: any) => {
    onNGOSignupSubmit(values);
  };

  const handleSwitchToLogin = () => {
    setActiveTab("login");
  };

  const handleSwitchToSignup = () => {
    setActiveTab("signup");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-4">
          <LoginForm
            onSubmit={handleLoginSubmit}
            onForgotPassword={onForgotPassword}
            onCreateAccount={handleSwitchToSignup}
          />
        </TabsContent>

        <TabsContent value="signup" className="space-y-4">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Tabs
                value={userType}
                onValueChange={(value) =>
                  handleUserTypeChange(value as "individual" | "ngo")
                }
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="individual">Individual</TabsTrigger>
                  <TabsTrigger value="ngo">NGO</TabsTrigger>
                </TabsList>

                <TabsContent value="individual">
                  <IndividualSignupForm
                    onSubmit={handleIndividualSignupSubmit}
                    onLogin={handleSwitchToLogin}
                  />
                </TabsContent>

                <TabsContent value="ngo">
                  <NGOSignupForm
                    onSubmit={handleNGOSignupSubmit}
                    onLogin={handleSwitchToLogin}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForms;
