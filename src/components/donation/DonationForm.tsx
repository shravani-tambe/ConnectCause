import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CreditCard, DollarSign, Calendar, RefreshCw } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const donationFormSchema = z.object({
  donationType: z.enum(["one-time", "recurring"]),
  amount: z.string().min(1, "Amount is required"),
  customAmount: z.string().optional(),
  frequency: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
});

type DonationFormValues = z.infer<typeof donationFormSchema>;

interface DonationFormProps {
  ngoId?: string;
  ngoName?: string;
  onDonationComplete?: (data: DonationFormValues) => void;
}

const DonationForm = ({
  ngoId = "1",
  ngoName = "Ocean Conservation Alliance",
  onDonationComplete = () => {},
}: DonationFormProps) => {
  const [selectedAmount, setSelectedAmount] = useState("25");
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      donationType: "one-time",
      amount: "25",
      frequency: "monthly",
      name: "",
      email: "",
    },
  });

  const donationType = form.watch("donationType");

  const handleAmountSelection = (amount: string) => {
    if (amount === "custom") {
      setIsCustomAmount(true);
      form.setValue("amount", "");
    } else {
      setIsCustomAmount(false);
      form.setValue("amount", amount);
      setSelectedAmount(amount);
    }
  };

  const onSubmit = (data: DonationFormValues) => {
    // In a real implementation, this would integrate with Stripe
    console.log("Donation data:", data);
    onDonationComplete(data);
    // Redirect to Stripe checkout would happen here
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Support {ngoName}</CardTitle>
        <CardDescription>
          Your donation helps us continue our important work
        </CardDescription>
      </CardHeader>

      <Tabs defaultValue="one-time" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="one-time"
            onClick={() => form.setValue("donationType", "one-time")}
          >
            One-time
          </TabsTrigger>
          <TabsTrigger
            value="recurring"
            onClick={() => form.setValue("donationType", "recurring")}
          >
            Monthly
          </TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* Amount Selection */}
                <div className="space-y-2">
                  <FormLabel>Select Amount</FormLabel>
                  <div className="grid grid-cols-4 gap-2">
                    {["10", "25", "50", "100"].map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={
                          selectedAmount === amount && !isCustomAmount
                            ? "default"
                            : "outline"
                        }
                        className="h-12"
                        onClick={() => handleAmountSelection(amount)}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <Button
                    type="button"
                    variant={isCustomAmount ? "default" : "outline"}
                    className="w-full mt-2 h-12"
                    onClick={() => handleAmountSelection("custom")}
                  >
                    Custom Amount
                  </Button>

                  {isCustomAmount && (
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="Enter amount"
                                className="pl-9"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                {/* Recurring Options */}
                {donationType === "recurring" && (
                  <FormField
                    control={form.control}
                    name="frequency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequency</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="annually">Annually</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          How often you would like to donate
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Donor Information */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-sm font-medium">Donor Information</h3>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          We'll send the receipt to this email
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full">
                {donationType === "one-time" ? (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Payment
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Set Up Recurring Donation
                  </>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Secure payment processing by Stripe. Your financial information
                is never stored on our servers.
              </p>
            </CardFooter>
          </form>
        </Form>
      </Tabs>
    </Card>
  );
};

export default DonationForm;
