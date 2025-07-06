// src/components/SkillCard.js
import React from 'react';

const SkillCard = ({ icon, title, description }) => (
  <div className="border-2 bg-white p-4 rounded-md"
    style={{
      borderColor: 'gold',
      boxShadow: '5px 7px 0 0 black',
      transition: 'all 0.3s ease'
    }}>
    <div className="flex items-center mb-2">
      <span className="text-2xl mr-2">{icon}</span>
      <h3 className="font-bold">{title}</h3>
    </div>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

export default SkillCard;