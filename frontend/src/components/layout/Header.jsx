import React from 'react';

const Header = () => {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-bold">Web Scraper & Visitor Classifier</h1>
      <p className="text-gray-600">Enter a website URL to generate personalized visitor classification questions</p>
    </div>
  );
};

export default Header;