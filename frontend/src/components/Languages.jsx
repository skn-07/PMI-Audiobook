import React, { useState } from 'react';

const LanguageSettings = () => {
  const [isEnglishEnabled, setIsEnglishEnabled] = useState(false);
  const [isSpanishEnabled, setIsSpanishEnabled] = useState(false);
  const [isFrenchEnabled, setIsFrenchEnabled] = useState(false);
  const [isGermanEnabled, setIsGermanEnabled] = useState(false);
  const [isChineseEnabled, setIsChineseEnabled] = useState(false);

  const toggleSetting = (setter) => {
    setter((prev) => !prev);
  };

  const settings = [
    {
      label: 'English',
      description: 'Set the language to English.',
      isEnabled: isEnglishEnabled,
      toggle: () => toggleSetting(setIsEnglishEnabled),
    },
    {
      label: 'Spanish',
      description: 'Set the language to Spanish.',
      isEnabled: isSpanishEnabled,
      toggle: () => toggleSetting(setIsSpanishEnabled),
    },
    {
      label: 'French',
      description: 'Set the language to French.',
      isEnabled: isFrenchEnabled,
      toggle: () => toggleSetting(setIsFrenchEnabled),
    },
    {
      label: 'German',
      description: 'Set the language to German.',
      isEnabled: isGermanEnabled,
      toggle: () => toggleSetting(setIsGermanEnabled),
    },
    {
      label: 'Chinese',
      description: 'Set the language to Chinese.',
      isEnabled: isChineseEnabled,
      toggle: () => toggleSetting(setIsChineseEnabled),
    },
  ];

  return (
    <div
      className="p-4 max-h-[445px] overflow-y-scroll space-y-6 bg-gray-800 rounded-lg shadow-lg custom-scrollbar"
    >
      {settings.map(({ label, description, isEnabled, toggle }, index) => (
        <div key={index} className="p-4 rounded-lg shadow-lg w-[550px]">
          <h3 className="sm:text-[15px] lg:text-[18px] w-full font-semibold text-white mb-4">
            {label}
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-300 text-center sm:text-left">
              {description}
            </p>
            <div
              onClick={toggle}
              className={`w-12 h-6 sm:w-14 sm:h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                isEnabled ? 'bg-blue-500' : 'bg-gray-400'
              }`}
            >
              <div
                className={`h-5 w-5 sm:h-6 sm:w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isEnabled ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </div>
          <hr style={{ borderTop: '1px dotted #ccc', width: '100%' }} className="mt-4" />
        </div>
      ))}
    </div>
  );
};

export default LanguageSettings;
