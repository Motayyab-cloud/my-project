import Navbar from "../components/navbar"; // Import Navbar
import BlueHeader from "../components/blue-header"; // Import BlueHeader
import Image from "next/image";

// Import images from src/images
import post1 from "@post1.png.jpg";
import post2 from "@post2.png.jpg";
import post3 from "@post3.png.jpg";

export default function FeaturedPostsPage() {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: post1, // Use imported image
      date: "22 April 2021",
      comments: 10,
      tag: "New",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: post2, // Use imported image
      date: "22 April 2021",
      comments: 10,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: post3, // Use imported image
      date: "22 April 2021",
      comments: 10,
      tag: "Hot",
    },
  ];

  return (
    <div className="font-sans">
      {/* Header and Navbar */}
      <BlueHeader />
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-16 mt-16">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-blue-500 text-4xl font-bold mb-6">Practice Advice</h1>
          <h2 className="text-black text-3xl font-bold mb-4">Featured Posts</h2>
          <p className="text-gray-600 text-lg">
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Featured Posts Section */}
        <div className="grid grid-cols-1 gap-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="relative w-full h-72 mb-6">
                <Image
                  src={post.img}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded">
                  {post.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm w-full">
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-sm font-medium mt-4 hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Hardcoded Footer */}
      <footer className="bg-white py-10 border-t mt-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-gray-700">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>Business Marketing</li>
                <li>User Analytics</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>iOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border rounded-md px-4 py-2 w-full"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-2 text-gray-500">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-8 text-sm text-gray-500">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
