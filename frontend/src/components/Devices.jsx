import React, { useState } from 'react';
import { 
  FaLaptop, 
  FaMobileAlt, 
  FaTabletAlt, 
  FaDesktop,
  FaWifi,
  FaPlug
} from 'react-icons/fa';

const DeviceSettings = () => {
  const [connectedDevices, setConnectedDevices] = useState(['laptop', 'mobile']);

  const devices = [
    {
      id: 'laptop',
      label: 'Laptop',
      description: 'MacBook Pro',
      icon: <FaLaptop className="w-6 h-6" />
    },
    {
      id: 'mobile',
      label: 'Mobile',
      description: 'iPhone 13',
      icon: <FaMobileAlt className="w-6 h-6" />
    },
    {
      id: 'tablet',
      label: 'Tablet',
      description: 'iPad Air',
      icon: <FaTabletAlt className="w-6 h-6" />
    },
    {
      id: 'desktop',
      label: 'Desktop',
      description: 'Home PC',
      icon: <FaDesktop className="w-6 h-6" />
    },
  ];

  const toggleDevice = (deviceId) => {
    setConnectedDevices(prev => 
      prev.includes(deviceId) 
        ? prev.filter(id => id !== deviceId)
        : [...prev, deviceId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaWifi className="text-cyan-400 w-6 h-6" />
            <h3 className="text-lg font-semibold text-white">Connected Devices</h3>
          </div>
          <span className="text-sm text-gray-400">
            {connectedDevices.length} active {connectedDevices.length === 1 ? 'device' : 'devices'}
          </span>
        </div>
      </div>

      {/* Devices Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {devices.map((device) => {
          const isConnected = connectedDevices.includes(device.id);
          return (
            <div
              key={device.id}
              className={`
                relative overflow-hidden group
                bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl
                border ${isConnected ? 'border-cyan-400/50' : 'border-gray-700'}
                transition-all duration-300
              `}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`
                    p-3 rounded-xl
                    ${isConnected ? 'bg-cyan-400/20 text-cyan-400' : 'bg-gray-700/50 text-gray-400'}
                  `}>
                    {device.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{device.label}</h3>
                    <p className="text-sm text-gray-400">{device.description}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleDevice(device.id)}
                  className="relative inline-flex h-4 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                  role="switch"
                  aria-checked={isConnected}
                >
                  <span
                    className={`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0
                      transition duration-200 ease-in-out absolute top-0.5 right-6
                      ${isConnected ? 'translate-x-5' : 'translate-x-0'}
                    `}
                  />
                  <span
                    className={`
                      pointer-events-none inline-block h-full w-full rounded-full
                      ${isConnected ? 'bg-cyan-400' : 'bg-gray-600'}
                      transition-colors ease-in-out duration-200
                    `}
                  />
                </button>
              </div>

              {/* Status and Battery */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className={`
                  px-2 py-1 rounded-full
                  ${isConnected ? 'bg-green-400/20 text-green-400' : 'bg-gray-700/50 text-gray-400'}
                `}>
                  {isConnected ? 'Connected' : 'Not Connected'}
                </span>
                <div className="flex items-center space-x-1 text-gray-400">
                  <FaPlug className="w-4 h-4" />
                  <span>{device.battery}</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div 
                className={`
                  absolute inset-0 -z-10 transition-opacity duration-300
                  bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10
                  opacity-0 group-hover:opacity-100
                `}
              />
            </div>
          );
        })}
      </div>

      {/* Add Device Button */}
      <button
        className={`
          w-full p-4 rounded-xl border border-dashed border-gray-600
          hover:border-cyan-400/50 hover:bg-gray-800/30
          transition-all duration-300 text-gray-400 hover:text-cyan-400
          flex items-center justify-center space-x-2
        `}
      >
        <FaWifi className="w-5 h-5" />
        <span>Add New Device</span>
      </button>
    </div>
  );
};

export default DeviceSettings;
