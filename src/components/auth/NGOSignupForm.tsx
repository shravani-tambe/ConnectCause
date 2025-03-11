import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  Globe,
  Calendar,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signupNGO } from "@/store/thunks/authThunks";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z
  .object({
    organizationName: z.string().min(2, {
      message: "Organization name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
    missionStatement: z.string().min(20, {
      message: "Mission statement must be at least 20 characters.",
    }),
    location: z.string().min(2, {
      message: "Location is required.",
    }),
    website: z.string().optional(),
    foundedYear: z.string().regex(/^\d{4}$/, {
      message: "Please enter a valid year (e.g., 2010).",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

interface NGOSignupFormProps {
  onSubmit?: (values: FormValues) => void;
  onLogin?: () => void;
}

const NGOSignupForm = ({
  onSubmit = (values) => console.log("Form submitted:", values),
  onLogin = () => console.log("Login clicked"),
}: NGOSignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      email: "",
      password: "",
      confirmPassword: "",
      missionStatement: "",
      location: "",
      website: "",
      foundedYear: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      await dispatch(signupNGO(values));
      onSubmit(values);
    } catch (err) {
      console.error("NGO Signup failed:", err);
    }
  };

  return (
    <Card className="w-[550px] bg-white shadow-md border border-gray-100 animate-fadeIn">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-[#0A6E74]">
          NGO Registration
        </CardTitle>
        <CardDescription className="text-center">
          Create your NGO account to showcase your mission and connect with
          supporters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="organizationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="Ocean Conservation Alliance"
                        {...field}
                        className="pl-10 border-gray-200 focus:border-[#0A6E74] focus:ring-[#0A6E74]/10"
                      />
                    </FormControl>
                    <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="Miami, Florida"
                          {...field}
                          className="pl-10 border-gray-200 focus:border-[#0A6E74] focus:ring-[#0A6E74]/10"
                        />
                      </FormControl>
                      <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="foundedYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Founded Year</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="2010"
                          {...field}
                          className="pl-10 border-gray-200 focus:border-[#0A6E74] focus:ring-[#0A6E74]/10"
                        />
                      </FormControl>
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website (Optional)</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="www.yourorganization.org"
                        {...field}
                        className="pl-10 border-gray-200 focus:border-[#0A6E74] focus:ring-[#0A6E74]/10"
                      />
                    </FormControl>
                    <Globe className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="missionStatement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mission Statement</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your organization's mission and impact..."
                      className="resize-none min-h-[100px] border-gray-200 focus:border-[#0A6E74] focus:ring-[#0A6E74]/10"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    This will be displayed on your profile to help supporters
                    understand your cause.
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="contact@yourorganization.org"
                        {...field}
                        className="pl-10 border-gray-200 focus:border-[#0A6E74] focus:ring-[#0A6E74]/10"
                      />
                    </FormControl>
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                        className="pl-10 border-gray-200 focus:border-[#0A6E74] focus:ring-[#0A6E74]/10"
                      />
                    </FormControl>
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1 h-7 w-7 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <FormDescription className="text-xs">
                    Password must be at least 8 characters long
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                        className="pl-10 border-gray-200 focus:border-[#0A6E74] focus:ring-[#0A6E74]/10"
                      />
                    </FormControl>
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1 h-7 w-7 text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-[#0A6E74] to-[#0A6E74]/90 hover:from-[#0A6E74]/90 hover:to-[#0A6E74] transition-all duration-200 hover:shadow-md"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Create NGO Account"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pt-2">
        <div className="text-sm text-center text-muted-foreground">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-[#0A6E74] hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-[#0A6E74] hover:underline">
            Privacy Policy
          </a>
        </div>
        <div className="text-sm text-center">
          Already have an account?{" "}
          <Button
            variant="link"
            onClick={onLogin}
            className="p-0 text-[#FF7D5C] hover:text-[#FF7D5C]/80"
          >
            Log in
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NGOSignupForm;
