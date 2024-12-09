import BlueHeader from "./components/blue-header"; // Import header
import Carausel from "./components/caraousel"; // Import carousel component
import Editors from "./components/editorspick"; // Import EditorsPick component
import GreenDiv from "./components/green-div"; // Import GreenDiv component
import Navbar from "./components/navbar"; // Import Navbar
import ProductCard from "./components/products-card"; // Import ProductCard component
import Whitediv from "./components/white-dic"; // Import WhiteDiv component
// import FeaturedPostsPage from "./components/featuredposts";
export default function Home() {
  return (
    <div>
      <BlueHeader />
      <Navbar />
      <Carausel />
      <Editors />
      <ProductCard />
      <GreenDiv />
      <Whitediv />
     

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
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>Business Marketing</li>
                <li>User Analytic</li>
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
