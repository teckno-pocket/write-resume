import React from 'react';
import logoImage from '../assets/wrlogo.jpg';

const LaunchingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="text-center">
        <img src={logoImage} alt="Logo" className="w-64 mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-blue">Launching Soon</h1>
        <p className="text-xl text-gray-400 mb-4">Stay tuned for our exciting launch!</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Subscribe for Updates
        </button>
      </div>
    </div>
  );
};

export default LaunchingSoon;
