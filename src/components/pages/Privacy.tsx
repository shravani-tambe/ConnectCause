import React from "react";
import Navbar from "../layout/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#0A6E74] mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-8">Last updated: November 1, 2023</p>

          <div className="prose max-w-none text-gray-600">
            <p>
              ConnectCause ("we", "our", or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website and use our platform (collectively, the "Service").
            </p>

            <p>
              Please read this Privacy Policy carefully. By accessing or using
              our Service, you acknowledge that you have read, understood, and
              agree to be bound by all the terms of this Privacy Policy. If you
              do not agree with our policies and practices, please do not use
              our Service.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-[#0A6E74] mt-6 mb-3">
              1.1 Personal Information
            </h3>

            <p>
              We may collect personal information that you voluntarily provide
              to us when you register on the Service, express an interest in
              obtaining information about us or our products and services,
              participate in activities on the Service, or otherwise contact us.
              The personal information we collect may include:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and contact information</li>
              <li>Account credentials, such as passwords</li>
              <li>
                Profile information, such as profile pictures and preferences
              </li>
              <li>
                Payment information, such as credit card details (processed
                securely through our payment processor)
              </li>
              <li>Donation history and event participation records</li>
              <li>Communications and correspondence with us</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A6E74] mt-6 mb-3">
              1.2 Automatically Collected Information
            </h3>

            <p>
              When you access or use our Service, we may automatically collect
              certain information about your device and usage patterns,
              including:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Device information, such as your IP address, browser type,
                operating system, and device identifiers
              </li>
              <li>
                Usage data, such as pages visited, time spent on pages, links
                clicked, and actions taken
              </li>
              <li>
                Location information, such as general geographic location based
                on your IP address
              </li>
              <li>
                Cookies and similar tracking technologies, as described in our
                Cookie Policy
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              2. How We Use Your Information
            </h2>

            <p>
              We may use the information we collect for various purposes,
              including to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our Service</li>
              <li>
                Process donations and facilitate connections between users and
                NGOs
              </li>
              <li>Create and manage your account</li>
              <li>Send you service-related notifications and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>
                Send you marketing and promotional communications (with your
                consent)
              </li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Protect against fraudulent or unauthorized transactions</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              3. Sharing Your Information
            </h2>

            <p>We may share your information in the following circumstances:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>With NGOs:</strong> When you make a donation or register
                for an event, we share necessary information with the relevant
                NGO.
              </li>
              <li>
                <strong>With Service Providers:</strong> We may share your
                information with third-party vendors who provide services on our
                behalf, such as payment processing, data analysis, email
                delivery, and customer service.
              </li>
              <li>
                <strong>For Legal Purposes:</strong> We may disclose your
                information if required by law or in response to valid requests
                by public authorities.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your
                information with third parties when you have given us your
                consent to do so.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              4. Data Security
            </h2>

            <p>
              We implement appropriate technical and organizational measures to
              protect the security of your personal information. However, please
              be aware that no method of transmission over the internet or
              electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              5. Your Privacy Rights
            </h2>

            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                The right to access and receive a copy of your personal
                information
              </li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to delete your personal information</li>
              <li>
                The right to restrict or object to processing of your personal
                information
              </li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <p>
              To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              6. Changes to This Privacy Policy
            </h2>

            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              7. Contact Us
            </h2>

            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@connectcause.org.
            </p>
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

export default Privacy;
