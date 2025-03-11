import React from "react";
import Navbar from "../layout/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#0A6E74] mb-6">
            Terms of Service
          </h1>

          <p className="text-gray-600 mb-8">Last updated: November 1, 2023</p>

          <div className="prose max-w-none text-gray-600">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service")
              carefully before using the ConnectCause website and platform (the
              "Service") operated by ConnectCause ("us", "we", or "our").
            </p>

            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who access or use the Service.
            </p>

            <p>
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              1. Accounts
            </h2>

            <p>
              When you create an account with us, you must provide information
              that is accurate, complete, and current at all times. Failure to
              do so constitutes a breach of the Terms, which may result in
              immediate termination of your account on our Service.
            </p>

            <p>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password, whether your password is with our Service or a
              third-party service.
            </p>

            <p>
              You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of
              security or unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              2. Donations and Payments
            </h2>

            <p>
              ConnectCause facilitates donations between individuals and
              registered NGOs. By making a donation through our Service, you
              agree to the following:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                You authorize us to charge your payment method for the amount
                you specify.
              </li>
              <li>
                You understand that standard payment processing fees may apply
                to your donation.
              </li>
              <li>
                You acknowledge that donations are made directly to the NGO and
                not to ConnectCause.
              </li>
              <li>
                You understand that the tax-deductible status of your donation
                depends on the NGO's status and your local tax laws.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              3. NGO Verification
            </h2>

            <p>
              While we make reasonable efforts to verify the legitimacy of NGOs
              on our platform, we cannot guarantee the accuracy of all
              information provided by these organizations. Users are encouraged
              to conduct their own research before making donations or
              participating in events.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              4. Intellectual Property
            </h2>

            <p>
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of ConnectCause and its
              licensors. The Service is protected by copyright, trademark, and
              other laws of both the United States and foreign countries. Our
              trademarks and trade dress may not be used in connection with any
              product or service without the prior written consent of
              ConnectCause.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              5. Links To Other Web Sites
            </h2>

            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by ConnectCause.
            </p>

            <p>
              ConnectCause has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any
              third-party web sites or services. You further acknowledge and
              agree that ConnectCause shall not be responsible or liable,
              directly or indirectly, for any damage or loss caused or alleged
              to be caused by or in connection with use of or reliance on any
              such content, goods, or services available on or through any such
              web sites or services.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              6. Termination
            </h2>

            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>

            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service or contact us to request account
              deletion.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              7. Limitation Of Liability
            </h2>

            <p>
              In no event shall ConnectCause, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              8. Changes
            </h2>

            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will try to
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              9. Contact Us
            </h2>

            <p>
              If you have any questions about these Terms, please contact us at
              legal@connectcause.org.
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

export default Terms;
