import React, { useState } from 'react';
import { FaLaptop, FaMobileAlt, FaTabletAlt, FaDesktop } from 'react-icons/fa'; // Importing icons from react-icons

const DeviceSettings = () => {
  const [isLaptopEnabled, setIsLaptopEnabled] = useState(false);
  const [isMobileEnabled, setIsMobileEnabled] = useState(false);
  const [isTabletEnabled, setIsTabletEnabled] = useState(false);
  const [isDesktopEnabled, setIsDesktopEnabled] = useState(false);

  const toggleSetting = (setter) => {
    setter((prev) => !prev);
  };

  const settings = [
    {
      label: 'Laptop',
      description: 'Enable settings for laptops.',
      isEnabled: isLaptopEnabled,
      toggle: () => toggleSetting(setIsLaptopEnabled),
      icon: <FaLaptop size={24} />
    },
    {
      label: 'Mobile',
      description: 'Enable settings for mobile devices.',
      isEnabled: isMobileEnabled,
      toggle: () => toggleSetting(setIsMobileEnabled),
      icon: <FaMobileAlt size={24} />
    },
    {
      label: 'Tablet',
      description: 'Enable settings for tablet devices.',
      isEnabled: isTabletEnabled,
      toggle: () => toggleSetting(setIsTabletEnabled),
      icon: <FaTabletAlt size={24} />
    },
    {
      label: 'Desktop',
      description: 'Enable settings for desktop devices.',
      isEnabled: isDesktopEnabled,
      toggle: () => toggleSetting(setIsDesktopEnabled),
      icon: <FaDesktop size={24} />
    },
  ];

  return (
    <div className=" ">
  
      <div className="grid  sm:grid-cols-2 md:w-[123vh] gap-6 md:gap-10 md:grid-cols-3">
        {settings.map(({ label, description, isEnabled, toggle, icon }, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-[35px]   transition-colors duration-300  shadow-[0_1px_7px_rgba(225,225,235,0.4)] " >
            <div className="flex justify-center items-center mb-4">
              <div className={`w-12 h-12 flex justify-center items-center rounded-full ${isEnabled ? 'bg-green-500' : 'bg-gray-500'}`}>
                {icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white text-center">{label}</h3>
            <p className="text-sm text-gray-300 text-center mb-4">{description}</p>
            <div
              onClick={toggle}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ml-[108px]  md:ml-[14vh]   ${
                isEnabled ? 'bg-green-500' : 'bg-gray-400'
              }`}
            >
              <div
                className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceSettings;
