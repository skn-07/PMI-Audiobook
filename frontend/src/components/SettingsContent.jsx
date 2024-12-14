import React from 'react';
import AudioSettings from './Audio';
import Language from './Languages'
import Devices from './Devices';
import AboutUs from './Aboutus';
import Storage from './Storage';
import Other from './other';

const SettingsContent = ({ selectedOption }) => {
  const renderContent = () => {
    switch (selectedOption) {
      case 'Audio Settings':
        return <AudioSettings />;
      case 'Devices':
        return <Devices />;
      case 'Storage':
        return <Storage />;
      case 'Languages':
        return <Language />;
      case 'About Us':
        return <AboutUs />;
      case 'Other':
        return <Other />;
      default:
        return <AudioSettings />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default SettingsContent;
