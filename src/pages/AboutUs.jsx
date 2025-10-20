// src/pages/AboutUs.jsx
import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 text-center text-red-600">
        About Us
      </h1>

      <p className="text-gray-700 text-justify leading-relaxed mb-6">
        Founded in 2022,{" "}
        <span className="font-semibold">Afghan Home Foundation</span> is a
        non-profit community organization dedicated to supporting Afghan
        families as they build new lives and strengthen their cultural identity.
        Our mission is to empower individuals and families through social
        engagement, education, and advocacy programs that encourage inclusion,
        equality, and cultural pride.
      </p>

      <p className="text-gray-700 text-justify leading-relaxed mb-6">
        We believe in creating a welcoming and supportive environment where
        Afghans can connect, share, and celebrate their heritage while adapting
        to life in new communities. Our initiatives focus on cultural
        preservation, youth development, women’s empowerment, and community
        outreach — ensuring everyone has a voice and a place to belong.
      </p>

      <p className="text-gray-700 text-justify leading-relaxed mb-6">
        Through our dedicated volunteers and strong partnerships with local
        organizations, Afghan Home Foundation continues to build bridges between
        cultures and foster unity, understanding, and compassion.
      </p>

      <div className="bg-gray-100 rounded-2xl p-6 mt-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-red-600">Our Vision</h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          To create a connected and thriving Afghan community where individuals
          feel supported, valued, and empowered to achieve their full potential
          while contributing positively to society.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
