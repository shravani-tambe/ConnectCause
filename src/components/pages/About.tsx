import React from "react";
import Navbar from "../layout/Navbar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#0A6E74] mb-6">
            About ConnectCause
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              ConnectCause is a platform dedicated to bridging the gap between
              individuals who want to make a difference and the NGOs working on
              causes that matter most to them.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              Our mission is to create a transparent, accessible, and engaging
              platform that empowers both individuals and organizations to
              maximize their social impact. We believe that by connecting
              passionate people with worthy causes, we can collectively address
              some of the world's most pressing challenges.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              ConnectCause was founded in 2023 by a team of technologists and
              social impact enthusiasts who recognized the need for a more
              modern, user-friendly platform to connect donors and volunteers
              with NGOs. After witnessing the challenges that both individuals
              and organizations faced in finding meaningful ways to collaborate,
              we set out to build a solution that would make social impact more
              accessible to everyone.
            </p>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              Our Values
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>
                <span className="font-medium text-[#0A6E74]">
                  Transparency:
                </span>{" "}
                We believe in complete transparency in how NGOs operate and how
                donations are used.
              </li>
              <li>
                <span className="font-medium text-[#0A6E74]">
                  Accessibility:
                </span>{" "}
                Social impact should be accessible to everyone, regardless of
                their resources or background.
              </li>
              <li>
                <span className="font-medium text-[#0A6E74]">Community:</span>{" "}
                We foster a community of like-minded individuals and
                organizations working together for positive change.
              </li>
              <li>
                <span className="font-medium text-[#0A6E74]">Innovation:</span>{" "}
                We continuously seek innovative ways to enhance the connection
                between donors and causes.
              </li>
              <li>
                <span className="font-medium text-[#0A6E74]">Impact:</span> We
                measure our success by the tangible impact created through our
                platform.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0A6E74] mt-8 mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 mb-4">
              ConnectCause is powered by a diverse team of professionals who
              bring together expertise in technology, nonprofit management, and
              social impact. We're united by our passion for creating positive
              change and our belief in the power of collective action.
            </p>

            <div className="bg-[#0A6E74]/5 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-[#0A6E74] mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                Whether you're an individual looking to support causes you care
                about or an organization seeking to expand your reach,
                ConnectCause is here to help you maximize your impact. Join our
                community today and be part of the change you want to see in the
                world.
              </p>
              <button className="bg-gradient-to-r from-[#FF7D5C] to-[#FF7D5C]/90 hover:from-[#FF7D5C]/90 hover:to-[#FF7D5C] text-white font-medium py-2 px-6 rounded-md transition-all duration-200 hover:shadow-md">
                Get Started
              </button>
            </div>
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

export default About;
