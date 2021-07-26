// libs
import React, { useContext } from 'react';

// components
import { LanguageContext } from '../../contexts/language.context';

const Language = () => {
  const context = useContext(LanguageContext);

  const onlanguagechange = language => {
    if (context.language !== language) context.updateLanguage(language);
  }

  return (
    <div>
      <i className="flag gb" onClick={() => onlanguagechange('en')}></i>
      <i className="flag de" onClick={() => onlanguagechange('de')}></i>
    </div>
  )
}

export default Language;