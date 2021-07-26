// libs
import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState('en');

  return (
      <LanguageContext.Provider value={{ 
          language: language,
          updateLanguage: setLanguage
      }}>
        {props.children}
      </LanguageContext.Provider>
  );
}

export default LanguageContextProvider;