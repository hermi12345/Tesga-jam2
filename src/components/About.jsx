import React from 'react';

const About = () => {
  return (
    <div>
      <div className="bg-white">
        {/* Mission and Vision */}
        <section className="bg-green-500 text-white py-12 px-4">
          <h2 className="text-2xl font-bold text-center">Mission and Vision</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Our mission is to enrich lives by offering premium products that nourish and delight, while our vision is to become a trusted global brand synonymous with health, taste, and sustainability.
          </p>
        </section>

        
        {/* We Promise Section */}
        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Our Promise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="text-gray-700">We promise to uphold the highest standards in product quality and safety.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>
              <p className="text-gray-700">We are committed to ensuring our customers satisfaction with every purchase.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Sustainable Practices</h3>
              <p className="text-gray-700">We pledge to use eco-friendly practices to minimize our environmental footprint.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Sustainable Practices</h3>
              <p className="text-gray-700">We pledge to use eco-friendly practices to minimize our environmental footprint.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;