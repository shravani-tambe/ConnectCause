import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import UserTypeSelection from "./auth/UserTypeSelection";
import AuthForms from "./auth/AuthForms";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [userType, setUserType] = useState<"individual" | "ngo" | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const handleGetStarted = () => {
    setShowAuth(false);
    setUserType(null);
  };

  const handleUserTypeSelect = (type: "individual" | "ngo") => {
    setUserType(type);
    setAuthMode("signup");
    setShowAuth(true);
  };

  const handleLogin = () => {
    setAuthMode("login");
    setShowAuth(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onLogin={handleLogin} onSignup={() => setShowAuth(false)} />

      <main className="flex-1">
        {showAuth ? (
          <div className="container mx-auto py-12 px-4">
            <AuthForms
              initialTab={authMode}
              initialUserType={userType || "individual"}
              onLoginSubmit={(data) => console.log("Login submitted:", data)}
              onIndividualSignupSubmit={(data) =>
                console.log("Individual signup:", data)
              }
              onNGOSignupSubmit={(data) => console.log("NGO signup:", data)}
              onForgotPassword={() => console.log("Forgot password")}
            />
          </div>
        ) : userType ? (
          <div className="container mx-auto py-12 px-4">
            <UserTypeSelection onSelectUserType={handleUserTypeSelect} />
          </div>
        ) : (
          <div className="relative">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 px-4">
              <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                      Connect with causes that matter to you
                    </h1>
                    <p className="text-lg text-gray-600">
                      Join our platform to discover NGOs, donate to important
                      causes, and participate in events that make a difference
                      in your community and around the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button size="lg" onClick={handleGetStarted}>
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button size="lg" variant="outline" onClick={handleLogin}>
                        I already have an account
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                      alt="People volunteering"
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                          <svg
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">1,200+ NGOs</p>
                          <p className="text-sm text-gray-500">
                            Ready to connect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="py-20 px-4 bg-white">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our platform makes it easy to discover, connect with, and
                    support NGOs that align with your values.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Discover NGOs
                    </h3>
                    <p className="text-gray-600">
                      Browse through our extensive directory of verified NGOs
                      working across various causes and regions.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Donate Securely
                    </h3>
                    <p className="text-gray-600">
                      Make one-time or recurring donations to causes you care
                      about with our secure payment processing.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Join Events</h3>
                    <p className="text-gray-600">
                      Participate in local and virtual events organized by NGOs
                      to directly contribute to their missions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/5 py-20 px-4">
              <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to make a difference?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of individuals and organizations already using
                  our platform to create positive change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => handleUserTypeSelect("individual")}
                  >
                    Sign Up as Individual
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleUserTypeSelect("ngo")}
                  >
                    Register as NGO
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-50 py-12 px-4 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    C
                  </span>
                </div>
                <span className="text-lg font-bold">ConnectCause</span>
              </div>
              <p className="text-sm text-gray-500">
                Connecting people with causes that matter since 2023.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/browse-ngos"
                    className="text-gray-500 hover:text-primary"
                  >
                    Browse NGOs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-gray-500 hover:text-primary"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-500 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/help" className="text-gray-500 hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-500 hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-500 hover:text-primary">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-500 hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-500 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-gray-500 hover:text-primary"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© 2023 ConnectCause. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
