import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, Menu, X, User, Building2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/thunks/authThunks";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  isLoggedIn?: boolean;
  userType?: "individual" | "ngo";
  userName?: string;
  userAvatar?: string;
  userInitials?: string;
  onLogin?: () => void;
  onSignup?: () => void;
  onLogout?: () => void;
}

const Navbar = ({
  onLogin = () => console.log("Login clicked"),
  onSignup = () => console.log("Signup clicked"),
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  // Use Redux state or fallback to props
  const isLoggedIn = isAuthenticated;
  const userType = user?.userType || "individual";
  const userName = user?.name || "John Doe";
  const userAvatar = user?.avatar || "";
  const userInitials = user?.initials || "JD";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">C</span>
          </div>
          <span className="text-xl font-bold hidden sm:inline-block">
            ConnectCause
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/browse-ngos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Browse NGOs
          </Link>
          <Link
            to="/events"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>
        </nav>

        {/* Auth Buttons or User Menu */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start p-2 border-b border-gray-100">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{userName}</span>
                    <span className="text-xs text-muted-foreground">
                      {userType === "individual" ? "Individual" : "NGO"}
                    </span>
                  </div>
                </div>
                <DropdownMenuItem asChild>
                  <Link
                    to={
                      userType === "individual"
                        ? "/dashboard"
                        : "/ngo/dashboard"
                    }
                    className="cursor-pointer"
                  >
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="cursor-pointer">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-500 focus:text-red-500 cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" onClick={onLogin}>
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sign in to your account</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm">Sign Up</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => onSignup()}
                    className="cursor-pointer"
                  >
                    <User className="h-4 w-4 mr-2" />
                    <span>Individual</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onSignup()}
                    className="cursor-pointer"
                  >
                    <Building2 className="h-4 w-4 mr-2" />
                    <span>NGO</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute top-20 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/browse-ngos"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse NGOs
            </Link>
            <Link
              to="/events"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {!isLoggedIn && (
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                <Button variant="outline" onClick={onLogin}>
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="default"
                    className="w-full justify-start"
                    onClick={() => {
                      onSignup();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign Up as Individual
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full justify-start"
                    onClick={() => {
                      onSignup();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Building2 className="h-4 w-4 mr-2" />
                    Sign Up as NGO
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
