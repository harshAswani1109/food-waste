import React from 'react';
import { landingStyles } from './styles';
import { LANDING_CONTENT } from '@/app/constants';


const Landing: React.FC = () => {
  return (
    <div className={landingStyles.container}>
      <header className={landingStyles.header}>
        <h1>{LANDING_CONTENT.title}</h1>
        <p>{LANDING_CONTENT.subtitle}</p>
      </header>
      <main className={landingStyles.main}>
        <section className={landingStyles.features}>
          {LANDING_CONTENT.features.map((feature, index) => (
            <div key={index} className={landingStyles.featureItem}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
        <section className={landingStyles.cta}>
          <h2>{LANDING_CONTENT.ctaTitle}</h2>
          <p>{LANDING_CONTENT.ctaDescription}</p>
          <button className={landingStyles.ctaButton}>{LANDING_CONTENT.ctaButtonText}</button>
        </section>
      </main>
      <footer className={landingStyles.footer}>
        <p>{LANDING_CONTENT.footerText}</p>
      </footer>
    </div>
  );
};

export default Landing;