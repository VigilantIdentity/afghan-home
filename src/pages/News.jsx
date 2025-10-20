// src/pages/News.jsx
import React from "react";

function News() {
  const newsArticles = [
    {
      title: "Powerful Earthquake Strikes Herat Province",
      date: "October 2025",
      image: "/earthquake2025.jpg",

      summary:
        "A devastating earthquake recently struck parts of Herat, destroying homes and displacing thousands of families. Afghan Home Foundation is working with partner organizations to help coordinate emergency relief and provide shelter support for those affected.",
    },
    {
      title: "Flash Floods Impact Northern Afghanistan Communities",
      date: "September 2025",
      image: "flood2025.jpg",
      summary:
        "Heavy monsoon rains have caused severe flooding in several northern provinces, damaging farmlands and isolating rural villages. Volunteers from Afghan Home Foundation are raising awareness and collecting supplies for families in need.",
    },
    {
      title: "Community-Led Rebuilding Efforts Bring Hope",
      date: "August 2025",
      image: "rebuild2025.jpg",
      summary:
        "Local Afghan communities have begun rebuilding homes, schools, and mosques with the support of NGOs and volunteers. Afghan Home Foundation continues to assist with materials and fundraising to restore hope and dignity to those affected.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-600">
        Latest News
      </h1>
      <p className="text-gray-700 text-center mb-10 leading-relaxed">
        Stay informed about the latest developments in Afghanistan and the
        efforts of Afghan Home Foundation in providing support and raising
        awareness for our communities.
      </p>

      {/* News grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-red-600 mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{article.date}</p>
              <p className="text-gray-700 text-justify leading-relaxed">
                {article.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 italic">
          Afghan Home Foundation stands in solidarity with all those affected by
          natural disasters in Afghanistan. Together, we can rebuild lives and
          communities.
        </p>
      </div>
    </div>
  );
}

export default News;
