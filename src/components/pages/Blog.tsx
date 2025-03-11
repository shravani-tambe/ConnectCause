import React from "react";
import Navbar from "../layout/Navbar";
import { Calendar } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#0A6E74] mb-6">
            Blog
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Stay updated with the latest news, stories, and insights from
            ConnectCause and our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-filter backdrop-blur-sm hover:shadow-md transition-all duration-300 rounded-xl border border-gray-100 overflow-hidden hover:scale-[1.02]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A6E74] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-[#FF7D5C] hover:text-[#FF7D5C]/80 text-sm font-medium">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#FF7D5C] to-[#FF7D5C]/90 hover:from-[#FF7D5C]/90 hover:to-[#FF7D5C] text-white font-medium py-2 px-6 rounded-md transition-all duration-200 hover:shadow-md">
              Load More Articles
            </button>
          </div>

          <div className="mt-16 p-8 bg-[#0A6E74]/5 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#0A6E74] mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates, stories, and insights delivered directly
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A6E74]/20 focus:border-[#0A6E74]"
              />
              <button className="bg-[#0A6E74] hover:bg-[#0A6E74]/90 text-white font-medium py-2 px-6 rounded-md transition-all duration-200 hover:shadow-md">
                Subscribe
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

const blogPosts = [
  {
    title: "How Small Donations Make a Big Impact",
    excerpt:
      "Learn how even small contributions can create significant change when directed to the right causes and organizations.",
    date: "June 15, 2023",
    category: "Donations",
    imageUrl:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
  },
  {
    title: "5 Ways to Support Environmental Conservation",
    excerpt:
      "Discover practical ways you can contribute to environmental conservation efforts, from donations to volunteer opportunities.",
    date: "May 22, 2023",
    category: "Environment",
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
  },
  {
    title: "Spotlight: Education for All Foundation",
    excerpt:
      "Meet the team behind Education for All Foundation and learn about their mission to provide quality education to underprivileged children.",
    date: "April 10, 2023",
    category: "NGO Spotlight",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    title: "The Power of Community Volunteering",
    excerpt:
      "Explore how community volunteering strengthens social bonds, builds skills, and creates lasting positive change.",
    date: "March 5, 2023",
    category: "Volunteering",
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  },
  {
    title: "Digital Transformation in the Nonprofit Sector",
    excerpt:
      "How technology is revolutionizing the way NGOs operate, fundraise, and connect with supporters.",
    date: "February 18, 2023",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    title: "Measuring Impact: Beyond the Numbers",
    excerpt:
      "Why qualitative impact assessment matters and how NGOs can effectively communicate their true impact to supporters.",
    date: "January 30, 2023",
    category: "Impact",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export default Blog;
