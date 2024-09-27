import React from 'react';
import { LANDING_CONTENT } from '@/constants';

const Landing: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">{LANDING_CONTENT.title}</h1>
        <p className="text-xl">{LANDING_CONTENT.subtitle}</p>
      </header>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {LANDING_CONTENT.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
        <section className="text-center py-12 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">{LANDING_CONTENT.ctaTitle}</h2>
          <p className="mb-6">{LANDING_CONTENT.ctaDescription}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            {LANDING_CONTENT.ctaButtonText}
          </button>
        </section>
      </main>
      <footer className="text-center py-6 mt-12">
        <p className="text-gray-600">{LANDING_CONTENT.footerText}</p>
      </footer>
    </div>
  );
};

export default Landing;