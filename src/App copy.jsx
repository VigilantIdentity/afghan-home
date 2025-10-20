// App.jsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background image slideshow
  const images = [
    "/eidul_adha20251.jpg",
    "/eidul_adha20252.jpg",
    "/eidul_adha20253.jpg",
    "/eidul_adha20254.jpg",
    "/eidul_adha20255.jpg",
    "/eidul_adha20256.jpg",
    "/eidul_adha20257.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      {/* Header */}
      {/*
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >*/}
      <header
        className={
          "fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2"
        }
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <a href="#" className="flex items-center align-middle space-x-2">
                <img
                  src="src/assets/sabawon_headerlogo.jpg" // <-- put your logo file here (public/logo.png)
                  alt="CareForAfghanistan Logo"
                  className="h-30 w-max-auto" // adjust height as needed
                />
                <span className="text-2xl font-bold text-red-600">
                  Afghan<span className="text-blue-600"> Home Foundation</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Our Work
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                News
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Donate Button */}

            <div className="hidden md:block">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Get Involved
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
            }`}
          >
            <a href="#" className="block py-2 text-gray-800 hover:text-red-600">
              Our Work
            </a>
            <a href="#" className="block py-2 text-gray-800 hover:text-red-600">
              About Us
            </a>
            <a href="#" className="block py-2 text-gray-800 hover:text-red-600">
              News
            </a>
            <a href="#" className="block py-2 text-gray-800 hover:text-red-600">
              Contact
            </a>
            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full w-full">
              Get Involved
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Image Slideshow */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dark overlay for readability */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"></h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Together as One Afghan
            </h2>
            <blockquote className="border-l-4 border-red-500 pl-6 italic text-lg md:text-xl max-w-3xl mx-auto text-gray-500">
              “Living far from home, we stay connected through culture,
              friendship, and support. Join us as we build a welcoming space for
              Afghans and friends in Poland — to share stories, celebrate
              traditions, and help one another thrive.”
            </blockquote>
          </div>
          {/*}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 mb-3">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Join Us
            </button>
          </div>
          */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h3
              className="italic text-xl md:text-2xl lg:text-2xl font-semibold md:font-bold mb-4 md:mb-6
             text-black-300 drop-shadow-md leading-relaxed max-w-3xl mx-auto"
            >
              You can{" "}
              <span className="text-2xl font-bold text-red-600">help</span> us
              in many ways, surely you will find the one which suits you best.
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-gray-600">
                Together, we lift each other up. Support, guidance, and a
                listening ear—always here for you.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Advocacy</h3>
              <p className="text-gray-600">
                Through advocacy, we turn concern into action and voices into
                impact.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Volunteering</h3>
              <p className="text-gray-600">
                Lend your skills, share your time, and help us make our
                community a better place for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      {/*
      <section className="py-10 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Emergency Appeal: Afghanistan Earthquake Response
          </h2>
          <p className="text-white mb-6">
            Help us provide urgent assistance to families affected by the recent
            earthquakes.
          </p>
          <button className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-full transition duration-300">
            Donate Now
          </button>
        </div>
      </section>
      */}

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Social Events
            </h2>
            <p className="italic text-gray-600 max-w-3xl mx-auto">
              Experience the richness of Afghan culture and connect with our
              vibrant community at the special social events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1">
              <img
                src="/summer_gather2025.jpg"
                alt="Food Security Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Summer Gthering</h3>
                <p className="text-gray-600">
                  Sun, flavors, and friends! Come enjoy a delightful summer
                  feast with your community.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-red-600 font-semibold"
                >
                  Learn more →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1">
              <img
                src="/abdulqadir_2025.jpg"
                alt="Education Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Our Community Guide
                </h3>
                <p className="text-gray-600">
                  Supporting, connecting, and inspiring—our Community Guide is
                  at the heart of our group’s growth and harmony.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-red-600 font-semibold"
                >
                  Learn more →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1">
              <img
                src="/eidul_adha20251.jpg"
                alt="Healthcare Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eid ul-Adha 2025</h3>
                <p className="text-gray-600">
                  Celebrate the spirit of Eid ul-Adha 2025 with love, laughter,
                  and community.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-red-600 font-semibold"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      {/*
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Thanks to our donors and partners, we've made a significant
              difference in communities across Afghanistan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">
                50,000+
              </div>
              <p className="text-gray-600">
                People provided with emergency aid
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">120+</div>
              <p className="text-gray-600">Communities supported</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">35</div>
              <p className="text-gray-600">Schools built or renovated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">
                15,000+
              </div>
              <p className="text-gray-600">
                Children receiving education support
              </p>
            </div>
          </div>
        </div>
      </section>
*/}
      {/* Newsletter Section */}
      {/*
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates on our work in
              Afghanistan.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
*/}
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 pr-8 lg:pr-20">
              <h3 className="text-xl font-bold mb-4">Afghan Home Foundation</h3>
              <p className="text-gray-400 text-justify">
                We have been actively serving the community since 2022,
                dedicated to supporting Afghan families and individuals as they
                build new lives and connections. Through cultural events,
                advocacy, and community programs, the foundation fosters
                inclusion, empowerment, and unity. With a strong focus on
                preserving heritage while embracing new opportunities, Afghan
                Home Foundation continues to be a source of hope, support, and
                togetherness for Afghans and the wider community.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">
                Abdul Qadir Ghani:
                <br /> +48 123 456 789
              </p>
              <p className="text-gray-400">
                Professor Pukhthonyaar: <br />
                +48 987 654 321
              </p>
              <p className="text-gray-400">
                Abdul Rasheed: <br /> +48 456 789 123
              </p>
              <p className="mt-2 text-gray-400">
                info@afghanhomefoundation.org
              </p>
              {/*
              <address className="not-italic text-gray-400">
                <p>ul. Afgańska 15</p>
                <p>00-001 Warsaw, Poland</p>
                <p className="mt-2">info@careforafghanistan.org</p>
                <p>+48 123 456 789</p>
              </address>
              */}
            </div>

            <div className="pl-8 lg:pl-20">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2022 Afghan Home Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
