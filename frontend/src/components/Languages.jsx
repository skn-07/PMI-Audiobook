import React, { useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { 
  FaGlobe, 
  FaLanguage, 
  FaFlag,
  FaGlobeAmericas,
  FaGlobeEurope,
  FaGlobeAsia
} from 'react-icons/fa';

const LanguageSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    {
      code: 'en',
      label: 'English',
      nativeName: 'English',
      icon: <FaGlobeAmericas className="text-cyan-400 w-5 h-5" />,
    },
    {
      code: 'es',
      label: 'Spanish',
      nativeName: 'Español',
      icon: <FaGlobeEurope className="text-cyan-400 w-5 h-5" />,
    },
    {
      code: 'fr',
      label: 'French',
      nativeName: 'Français',
      icon: <FaGlobeEurope className="text-cyan-400 w-5 h-5" />,
    },
    {
      code: 'de',
      label: 'German',
      nativeName: 'Deutsch',
      icon: <FaGlobeEurope className="text-cyan-400 w-5 h-5" />,
    },
    {
      code: 'zh',
      label: 'Chinese',
      nativeName: '中文',
      icon: <FaGlobeAsia className="text-cyan-400 w-5 h-5" />,
    },
  ];

  const filteredLanguages = languages.filter(lang =>
    lang.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <FaLanguage className="text-cyan-400 w-6 h-6" />
          <h3 className="text-lg font-semibold text-white">Language Preferences</h3>
        </div>
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search languages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-700/50 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          />
          <FaGlobe className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Language Grid */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full">
        {filteredLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.label)}
            className={`
              relative overflow-hidden group w-full
              bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl
              border ${selectedLanguage === lang.label ? 'border-cyan-400/50' : 'border-gray-700'}
              hover:border-cyan-400/50 transition-all duration-300
              flex items-center space-x-3
            `}
          >
            {lang.icon}
            <div className="flex-1 text-left">
              <h3 className="text-white font-medium text-lg">{lang.label}</h3>
              <p className="text-sm text-gray-400">{lang.nativeName}</p>
            </div>
            <div 
              className={`
                w-3 h-3 rounded-full flex-shrink-0
                ${selectedLanguage === lang.label ? 'bg-cyan-400' : 'bg-gray-600'}
                transition-colors duration-300
              `}
            />
            
            {/* Hover Effect */}
            <div 
              className={`
                absolute inset-0 -z-10 transition-opacity duration-300
                bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10
                opacity-0 group-hover:opacity-100
              `}
            />
          </button>
        ))}
      </div>

      {/* Selected Language Info */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
        <p className="text-gray-400">
          Currently selected: <span className="text-cyan-400 font-medium">{selectedLanguage}</span>
        </p>
      </div>
    </div>
  );
};

export default LanguageSettings;
