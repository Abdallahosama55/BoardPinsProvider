import React from 'react';
import Header from '../../components/landing/About/Header';
import AboutContent from '../../components/landing/About/AboutContent';
import { useTranslation } from 'react-i18next';

function About() {
  const { i18n } = useTranslation(); // Access the i18n instance
  const currentLanguage = i18n.language ||'en'; // Get the current language from i18n

  return (
    <div className='mx-6 lg:mx-56 py-12 leading-[2]' id='about'>
      <Header currentLanguage={currentLanguage} />
      <AboutContent currentLanguage={currentLanguage} />
    </div>
  );
}

export default About;
