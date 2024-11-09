import React from 'react';
import { useLanguage } from './LanguageProvider/LanguageProvider';

const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className='w-10 h-10 bg-mainWhite rounded-[5px]' onClick={toggleLanguage}>
      {language === 'en' ? 'PT' : 'EN'}
    </button>
  );
};

export default LanguageToggleButton;