// src/pages/GetInvolved.jsx
import React from "react";

function GetInvolved() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
        Get Involved
      </h1>

      <p className="text-gray-700 text-justify leading-relaxed mb-10">
        Afghan Home Foundation believes that positive change starts with
        community participation. Since our beginning, volunteers, supporters,
        and partners have been the heart of our work. There are many ways you
        can get involved to help strengthen Afghan communities, promote culture,
        and support those in need both in Afghanistan and abroad.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Volunteering */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-red-600 mb-3">
            Volunteer with Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            Join our volunteer team to support cultural events, community
            gatherings, and social programs. Your time and effort make a
            difference in connecting Afghans, promoting education, and sharing
            traditions with younger generations.
          </p>
          <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
            Become a Volunteer
          </button>
        </div>

        {/* Donate */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-red-600 mb-3">
            Support with a Donation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            Every contribution, big or small, helps fund our social outreach,
            educational workshops, and cultural events. Donations directly
            support programs that bring hope, stability, and empowerment to
            Afghan families.
          </p>
          <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
            Donate Now
          </button>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Every small action brings us closer to a stronger community.
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6 text-justify">
          Whether it’s volunteering a few hours, sharing your skills, or making
          a donation, your contribution creates lasting change. Afghan Home
          Foundation is built by people like you — compassionate, resilient, and
          proud of their culture.
        </p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
          Join Our Community
        </button>
      </div>
    </div>
  );
}

export default GetInvolved;
