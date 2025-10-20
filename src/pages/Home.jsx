import React, { useState, useEffect } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      {
        // Hero Section with Image Slideshow
      }

      <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        {
          // Background Slideshow
        }
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

          {
            // Dark overlay for readability
          }
          {
            // <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          }
        </div>

        {
          // Content
        }
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"></h1>
        </div>
      </section>

      {
        // Mission Section
      }
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

      {
        // Programs Section
      }
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
                alt="Summer Gathering in Poland"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Summer Gathering</h3>
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
                alt="Foundation's Leader Abdul Qadir"
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
                alt="Eid ul-Adha 2025 Celebration"
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
    </div>
  );
}

export default Home;
