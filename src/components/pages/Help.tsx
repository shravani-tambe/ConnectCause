import React from "react";
import Navbar from "../layout/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#0A6E74] mb-6">
            Help Center
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions and learn how to make the most of
            ConnectCause.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-[#0A6E74] mb-3">
                For Individuals
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn how to discover NGOs, donate, and participate in events.
              </p>
              <button className="text-[#FF7D5C] hover:text-[#FF7D5C]/80 text-sm font-medium">
                View guides →
              </button>
            </div>

            <div className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-[#0A6E74] mb-3">
                For NGOs
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Resources for creating your profile, managing donations, and
                organizing events.
              </p>
              <button className="text-[#FF7D5C] hover:text-[#FF7D5C]/80 text-sm font-medium">
                View guides →
              </button>
            </div>

            <div className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-[#0A6E74] mb-3">
                Technical Support
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Troubleshooting common issues and technical questions.
              </p>
              <button className="text-[#FF7D5C] hover:text-[#FF7D5C]/80 text-sm font-medium">
                Get help →
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#0A6E74] mb-6">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                How do I create an account?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                To create an account, click on the "Sign Up" button in the top
                right corner of the homepage. You'll be asked to choose between
                an individual or NGO account type, and then guided through the
                registration process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                How do donations work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Donations are processed securely through our payment partner,
                Stripe. You can make one-time or recurring donations to any NGO
                on our platform. 100% of your donation goes directly to the NGO,
                minus standard payment processing fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                How do I register my NGO?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                To register your NGO, select "NGO" during the sign-up process.
                You'll need to provide information about your organization,
                including your mission statement, registration details, and
                contact information. Our team will review your application
                within 2-3 business days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#0A6E74] hover:text-[#0A6E74]/80">
                How do I RSVP for an event?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                To RSVP for an event, navigate to the event page and click the
                "Register for Event" button. You'll receive a confirmation email
                with all the details, and the event will be added to your
                dashboard for easy reference.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
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
          </Accordion>

          <div className="mt-12 p-8 bg-[#0A6E74]/5 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#0A6E74] mb-4">
              Still have questions?
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

export default Help;
