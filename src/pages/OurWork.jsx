// src/pages/OurWork.jsx
import React from "react";

function OurWork() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-600">
        Our Work
      </h1>

      <p className="text-gray-700 text-justify leading-relaxed mb-10">
        Since its founding in 2022,{" "}
        <span className="font-semibold">Afghan Home Foundation</span> has been
        deeply committed to promoting cultural identity, social inclusion, and
        community empowerment among Afghans living abroad. We aim to create safe
        and welcoming spaces where families, youth, and elders can connect,
        celebrate, and thrive together. Our programs focus on building
        understanding, preserving heritage, and strengthening unity within the
        Afghan community.
      </p>

      {/* Section 1: Cultural Events */}
      <div className="bg-gray-100 rounded-2xl p-6 mb-10 shadow-md">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Cultural Celebrations and Festivals
        </h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          Our cultural events play a key role in preserving Afghan traditions
          and sharing them with the wider community. Every year, we host
          gatherings such as{" "}
          <span className="font-semibold">Eid celebrations</span>,
          <span className="font-semibold"> Nowruz (Persian New Year)</span>, and
          traditional{" "}
          <span className="font-semibold">Afghan music and food festivals</span>
          . These events bring together families and friends to celebrate the
          beauty of Afghan culture — its food, art, language, and generosity.
          Through these occasions, we aim to strengthen cultural pride and build
          bridges of understanding with other communities.
        </p>
      </div>

      {/* Section 2: Social Support & Advocacy */}
      <div className="bg-white rounded-2xl p-6 mb-10 shadow-md border">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Community Support and Advocacy
        </h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          Afghan Home Foundation provides ongoing support for newly arrived
          families and individuals adjusting to life in a new environment. From
          helping with language integration and housing assistance to connecting
          members with mental health resources, our team works to ensure no one
          feels alone in their journey. We also engage in advocacy efforts to
          raise awareness about the challenges Afghan refugees face, promoting
          inclusion, equality, and representation within local communities.
        </p>
      </div>

      {/* Section 3: Youth and Education */}
      <div className="bg-gray-100 rounded-2xl p-6 mb-10 shadow-md">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Youth Engagement and Educational Programs
        </h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          We believe that empowering Afghan youth is key to shaping a bright and
          resilient future. Our educational workshops and youth programs focus
          on leadership, mentorship, and skill development. We encourage young
          Afghans to participate in community service, cultural storytelling,
          and creative arts that reflect both their heritage and their
          potential. Through collaboration and mentorship, we help nurture a
          generation of confident and compassionate leaders.
        </p>
      </div>

      {/* Section 4: Community Gatherings */}
      <div className="bg-white rounded-2xl p-6 shadow-md border">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Social Gatherings and Seasonal Events
        </h2>
        <p className="text-gray-700 text-justify leading-relaxed">
          Afghan Home Foundation organizes regular social gatherings such as
          <span className="font-semibold"> summer picnics</span>,
          <span className="font-semibold"> family days</span>, and
          <span className="font-semibold"> community dinners</span> to
          strengthen unity and friendship among Afghans and their neighbors.
          These events create opportunities to share stories, build trust, and
          celebrate the spirit of togetherness that defines Afghan culture.
        </p>
      </div>

      {/* Closing statement */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 italic">
          Through culture, compassion, and community, Afghan Home Foundation
          continues to empower Afghans to stand strong, stay connected, and
          celebrate their shared identity — wherever they call home.
        </p>
      </div>
    </div>
  );
}

export default OurWork;
