import React from 'react';
import AudioSettings from './Audio';
import  Language from './Languages'
import Devices from './Devices';

const SettingsContent = ({ selectedOption }) => {
  const renderContent = () => {
    switch (selectedOption) {
      case 'Devices':
        return <Devices/>;
      case 'Storage':
        return <p>Configure your Storage settings here.</p>;
      case 'Audio Settings':
        return <AudioSettings/>;
      case 'Languages':
        return <Language/>
      case 'About Us':
        return <p>Learn more about us here.</p>;
      case 'Other':
        return <p>Other settings.</p>;
      case 'Logout':
        return <p>You have been logged out.</p>;
      default:
        return <p>Welcome to the settings page!</p>;
    }
  };

  return (
    <div className="  flex-1 p-8 ">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{selectedOption}</h2>
      <div className="text-lg">{renderContent()}</div>
    </div>
  );
};

export default SettingsContent;
