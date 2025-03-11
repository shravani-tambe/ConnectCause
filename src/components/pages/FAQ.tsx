import React from "react";
import Navbar from "../layout/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#0A6E74] mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Find answers to the most common questions about ConnectCause.
          </p>

          <Tabs defaultValue="general" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger
                value="general"
                className="data-[state=active]:bg-white data-[state=active]:text-[#0A6E74] data-[state=active]:shadow-sm transition-all duration-200"
              >
                General
              </TabsTrigger>
              <TabsTrigger
                value="donations"
                className="data-[state=active]:bg-white data-[state=active]:text-[#0A6E74] data-[state=active]:shadow-sm transition-all duration-200"
              >
                Donations
              </TabsTrigger>
              <TabsTrigger
                value="ngos"
                className="data-[state=active]:bg-white data-[state=active]:text-[#0A6E74] data-[state=active]:shadow-sm transition-all duration-200"
              >
                For NGOs
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="data-[state=active]:bg-white data-[state=active]:text-[#0A6E74] data-[state=active]:shadow-sm transition-all duration-200"
              >
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    What is ConnectCause?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    ConnectCause is a platform that connects individuals with
                    NGOs working on causes they care about. Our platform makes
                    it easy to discover organizations, donate to their
                    initiatives, and participate in their events.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How do I create an account?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    To create an account, click on the "Sign Up" button in the
                    top right corner of the homepage. You'll be asked to choose
                    between an individual or NGO account type, and then guided
                    through the registration process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    Is my personal information secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, we take data security very seriously. All personal
                    information is encrypted and stored securely. We never share
                    your information with third parties without your explicit
                    consent. You can review our Privacy Policy for more details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How can I contact support?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    You can contact our support team by emailing
                    support@connectcause.org or by using the contact form in the
                    Help Center. We aim to respond to all inquiries within 24
                    hours during business days.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="donations" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How do donations work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Donations are processed securely through our payment
                    partner, Stripe. You can make one-time or recurring
                    donations to any NGO on our platform. 100% of your donation
                    goes directly to the NGO, minus standard payment processing
                    fees.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    Are my donations tax-deductible?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Tax deductibility depends on the NGO's status and your local
                    tax laws. Most NGOs on our platform are registered
                    charities, but we recommend checking with the specific
                    organization or consulting with a tax professional for
                    confirmation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    Can I set up recurring donations?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, you can set up recurring donations on a weekly,
                    monthly, quarterly, or annual basis. You can manage your
                    recurring donations from your dashboard and cancel or modify
                    them at any time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How do I get a receipt for my donation?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    A receipt is automatically emailed to you after each
                    donation. You can also access all your donation receipts
                    from your dashboard under the "Donation History" section.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="ngos" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How do I register my NGO?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    To register your NGO, select "NGO" during the sign-up
                    process. You'll need to provide information about your
                    organization, including your mission statement, registration
                    details, and contact information. Our team will review your
                    application within 2-3 business days.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    What are the fees for NGOs?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Basic registration on ConnectCause is free for all verified
                    NGOs. We only charge standard payment processing fees for
                    donations (typically 2.9% + $0.30 per transaction). We do
                    not take any additional platform fees.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How do I create and manage events?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Once your NGO is registered, you can create events from your
                    dashboard. You can set event details, manage RSVPs, and
                    communicate with attendees all from one place. You can also
                    track attendance and gather feedback after the event.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How do I receive donations?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Donations are processed through Stripe and deposited
                    directly into your organization's bank account. You'll need
                    to connect your bank account during the registration
                    process. Funds are typically deposited within 2-7 business
                    days, depending on your location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How do I RSVP for an event?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    To RSVP for an event, navigate to the event page and click
                    the "Register for Event" button. You'll receive a
                    confirmation email with all the details, and the event will
                    be added to your dashboard for easy reference.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    Can I cancel my RSVP?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, you can cancel your RSVP at any time by going to the
                    event page or your dashboard and clicking "Cancel
                    Registration." We encourage you to cancel if you can't
                    attend so that others may have the opportunity to
                    participate.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    Are there fees for attending events?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Event fees vary depending on the event. Many events are
                    free, while others may have a registration fee. Any fees are
                    clearly displayed on the event page before you RSVP.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                    How do I find events near me?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    You can use the search and filter options on the Events page
                    to find events by location, date, category, or NGO. You can
                    also set your location preferences in your profile to see
                    more relevant events in your area.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-8 bg-[#0A6E74]/5 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A6E74] mb-4">
              Didn't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you with any questions or issues
              you might have.
            </p>
            <button className="bg-gradient-to-r from-[#FF7D5C] to-[#FF7D5C]/90 hover:from-[#FF7D5C]/90 hover:to-[#FF7D5C] text-white font-medium py-2 px-6 rounded-md transition-all duration-200 hover:shadow-md">
              Contact Support
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 py-12 px-4 border-t border-gray-200 mt-auto">
        <div className="container mx-auto">
          <div className="text-center text-sm text-gray-500">
            <p>© 2023 ConnectCause. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
