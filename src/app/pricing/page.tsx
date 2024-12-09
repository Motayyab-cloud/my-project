import BlueHeader from "../components/blue-header"; // Import header
import Navbar from "../components/navbar"; // Import Navbar
import Image from "next/image"; // Import Image component

export default function PricingPage() {
  return (
    <div className="font-sans">
      {/* Header and Navbar */}
      <BlueHeader />
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-16 mt-12"> {/* Increased margin-top here */}
        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-left mb-12">Simple Pricing</h1> {/* Increased margin-bottom here */}

        {/* Pricing Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Increased gap between cards */}
          {/* Pricing Card 1 */}
          <div className="border p-8 rounded-md shadow-md"> {/* Increased padding for cards */}
            <h3 className="font-semibold text-xl">Basic Plan</h3>
            <p className="text-lg text-[#2DC071]">$9.99/month</p>
            <ul className="mt-6 text-sm text-[#737373]"> {/* Increased margin-top here */}
              <li>Access to basic features</li>
              <li>Up to 5 products</li>
              <li>Support via email</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md">Choose Plan</button>
          </div>

          {/* Pricing Card 2 */}
          <div className="border p-8 rounded-md shadow-md"> {/* Increased padding for cards */}
            <h3 className="font-semibold text-xl">Standard Plan</h3>
            <p className="text-lg text-[#2DC071]">$19.99/month</p>
            <ul className="mt-6 text-sm text-[#737373]">
              <li>Access to all basic features</li>
              <li>Up to 50 products</li>
              <li>Priority support</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md">Choose Plan</button>
          </div>

          {/* Pricing Card 3 */}
          <div className="border p-8 rounded-md shadow-md"> {/* Increased padding for cards */}
            <h3 className="font-semibold text-xl">Premium Plan</h3>
            <p className="text-lg text-[#2DC071]">$49.99/month</p>
            <ul className="mt-6 text-sm text-[#737373]">
              <li>Access to all features</li>
              <li>Unlimited products</li>
              <li>24/7 support</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md">Choose Plan</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-12 border-t mt-20"> {/* Increased padding and margin for footer */}
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-gray-700"> {/* Increased gap between columns */}
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-6">Company Info</h3> {/* Increased margin-bottom */}
              <ul className="space-y-4"> {/* Increased space between items */}
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-6">Features</h3>
              <ul className="space-y-4">
                <li>Business Marketing</li>
                <li>User Analytics</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>iOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h3 className="font-semibold mb-6">Get in Touch</h3>
              <div className="flex items-center space-x-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border rounded-md px-4 py-2 w-full"
                />
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-4 text-gray-500">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-12 text-sm text-gray-500"> {/* Increased margin-top */}
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
