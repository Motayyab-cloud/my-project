import BlueHeader from "../components/blue-header"; // Import header
import Navbar from "../components/navbar"; // Import Navbar
import Image from "next/image"; // Import Image component

export default function BlogPage() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Header and Navbar */}
      <BlueHeader />
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-16 mt-16 flex-grow">
        {/* First Section: What We Do + Innovation */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-center mb-6">What We Do</h1>
          <h2 className="text-3xl font-semibold text-center mb-6">Innovation tailored for you</h2>
          {/* Image after the heading */}
          <div className="relative w-full h-72 mb-12 mx-auto">
            <Image
              src="/images/blog-1.jpg" // Replace with actual image path
              alt="Innovation Image"
              width={800} // Adjusted width for better responsiveness
              height={500} // Adjusted height for better look
              className="rounded-md mx-auto"
            />
          </div>
        </div>

        {/* Second Section: Meet Our Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          {/* Image after the "Meet Our Team" heading */}
          <div className="relative w-full h-72 mb-12 mx-auto">
            <Image
              src="/images/blog-2.jpg" // Replace with actual image path
              alt="Team Image"
              width={800} // Adjusted width
              height={500} // Adjusted height
              className="rounded-md mx-auto"
            />
          </div>
        </div>

        {/* Third Section: Free Trial Call to Action */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your 14 Days Free Trial</h3>
          <p className="text-lg text-[#737373] mb-8">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
          </p>
          <p className="text-lg text-[#737373] mb-8">
            Try it free now and explore all the premium features that can help you grow.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold">
            Start Free Trial
          </button>
        </div>

        {/* Last Image Section with additional spacing */}
        <div className="relative w-full h-72 mb-16 mx-auto">
          <Image
            src="/images/blog-3.jpg" // Replace with the actual image path
            alt="Another Image"
            width={800} // Adjusted width
            height={500} // Adjusted height
            className="rounded-md mx-auto"
          />
        </div>

        {/* Add 10 spaces (padding or margin) after the last image */}
        <div className="mb-10"></div> {/* 10 units of space */}

      </div>

      {/* Footer Section */}
      <footer className="bg-white py-12 border-t mt-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-gray-700">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-6">Company Info</h3>
              <ul className="space-y-4">
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
          <div className="text-center mt-12 text-sm text-gray-500">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
