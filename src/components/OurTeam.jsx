import React, { useState } from 'react';

// Import images from a folder (adjust paths as per your project structure)
import teamMember1 from './img/team1.jpg';
import teamMember2 from './img/team2.jpg';
import teamMember3 from './img/team3.jpg';
import teamMember4 from './img/team4.jpg';

const OurTeam = () => {
  // State to manage team members
  const [teamMembers] = useState([
    { name: 'Haile Alem', role: 'Juice Blender', image: teamMember1 },
    { name: 'Elsa Tesfaye', role: 'Packaging Designer', image: teamMember2 },
    { name: 'Biruk Assefa', role: 'Marketing Strategist', image: teamMember3 },
    { name: 'Hanna Fikru', role: 'Customer Experience Manager', image: teamMember4 }
  ]);

  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src={member.image}
                alt={`Team Member ${index + 1}`}
                className="w-40 h-40 mx-auto rounded-full object-cover object-center mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">Role: {member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;