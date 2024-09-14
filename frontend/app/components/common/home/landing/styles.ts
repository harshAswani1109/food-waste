import { css } from '@emotion/css';

export const landingStyles = {
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
  `,
  header: css`
    text-align: center;
    margin-bottom: 3rem;
  `,
  main: css`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `,
  features: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  `,
  featureItem: css`
    background-color: #f0f0f0;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
  `,
  cta: css`
    text-align: center;
    background-color: #e6f7ff;
    padding: 3rem;
    border-radius: 8px;
  `,
  ctaButton: css`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  `,
  footer: css`
    text-align: center;
    margin-top: 3rem;
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;
  `,
};