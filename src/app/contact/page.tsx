import BlueHeader from "../components/blue-header"; // Import header
import Navbar from "../components/navbar"; // Import Navbar
import Image from "next/image"; // Import Image component

export default function ContactPage() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Header and Navbar */}
      <BlueHeader />
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-16 mt-16 flex-grow">
        {/* Image Section */}
        <div className="relative w-full h-[400px] mb-12 mt-10 mx-auto"> {/* Added mx-auto for centering */}
          <Image
            src="/images/contact.jpg" // Replace with actual image path
            alt="Contact Image"
            width={600} // Adjusted width for the image size
            height={400} // Adjusted height
            className="rounded-md mx-auto" // Ensuring the image is centered
          />
        </div>

        {/* VISIT OUR OFFICE Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">VISIT OUR OFFICE</h2>
          <p className="text-lg text-[#737373] mb-8">
            We help small businesses with big ideas
          </p>
        </div>

        {/* Email Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center">
            <div className="space-y-4 max-w-md">
              <h3 className="text-xl font-semibold">Contact Emails</h3>
              <ul className="text-lg text-[#737373] space-y-4">
                <li>georgia.young@example.com</li>
                <li>georgia.young@example.com</li>
                <li>georgia.young@example.com</li>
                <li>georgia.young@ple.com</li>
                <li>georgia.young@ple.com</li>
                <li>georgia.young@ple.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Get Support Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">Get Support</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Support</button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Support</button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Support</button>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">Submit Request</button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">Submit Request</button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">Submit Request</button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">WE CAN'T WAIT TO MEET YOU</h3>
          <p className="text-lg text-[#737373] mb-8">
            Let’s Talk
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold">
            Try it for free
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-12 border-t mt-20">
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
