import React, { useState } from 'react';
import { FaVolumeUp, FaMusic, FaHeadphones, FaWaveSquare, FaSoundcloud } from 'react-icons/fa';

const AudioSettings = () => {
  const [isAudioQualityEnabled, setIsAudioQualityEnabled] = useState(false);
  const [isNormalizeEnabled, setIsNormalizeEnabled] = useState(false);
  const [isMonoEnabled, setIsMonoEnabled] = useState(false);
  const [isBassBoostEnabled, setIsBassBoostEnabled] = useState(false);
  const [isSurroundSoundEnabled, setIsSurroundSoundEnabled] = useState(false);
  const [volume, setVolume] = useState(75);

  const toggleSetting = (setter) => {
    setter((prev) => !prev);
  };

  const settings = [
    {
      icon: <FaMusic className="text-cyan-400 w-6 h-6" />,
      label: 'Audio Quality',
      description: 'Sets your audio quality to high (equivalent to 24bits/s)',
      isEnabled: isAudioQualityEnabled,
      toggle: () => toggleSetting(setIsAudioQualityEnabled),
    },
    {
      icon: <FaVolumeUp className="text-cyan-400 w-6 h-6" />,
      label: 'Normalize Volume',
      description: 'Sets the same volume level for all tracks',
      isEnabled: isNormalizeEnabled,
      toggle: () => toggleSetting(setIsNormalizeEnabled),
    },
    {
      icon: <FaHeadphones className="text-cyan-400 w-6 h-6" />,
      label: 'Mono Audio',
      description: 'Makes the left and right speakers play the same audio',
      isEnabled: isMonoEnabled,
      toggle: () => toggleSetting(setIsMonoEnabled),
    },
    {
      icon: <FaWaveSquare className="text-cyan-400 w-6 h-6" />,
      label: 'Bass Boost',
      description: 'Enhances bass for a richer audio experience',
      isEnabled: isBassBoostEnabled,
      toggle: () => toggleSetting(setIsBassBoostEnabled),
    },
    {
      icon: <FaSoundcloud className="text-cyan-400 w-6 h-6" />,
      label: 'Surround Sound',
      description: 'Creates an immersive sound environment',
      isEnabled: isSurroundSoundEnabled,
      toggle: () => toggleSetting(setIsSurroundSoundEnabled),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Volume Slider */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <FaVolumeUp className="text-cyan-400 w-6 h-6" />
            <h3 className="text-lg font-semibold text-white">Master Volume</h3>
          </div>
          <span className="text-cyan-400 font-medium">{volume}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
      </div>

      {/* Settings Cards */}
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {settings.map(({ icon, label, description, isEnabled, toggle }, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden group
              bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg
              border border-gray-700 transition-all duration-300
              hover:border-cyan-400/50 hover:shadow-cyan-400/10
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                {icon}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {label}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
              
              <button
                onClick={toggle}
                className="relative inline-flex h-4 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                role="switch"
                aria-checked={isEnabled}
              >
                <div
                  className={`
                    absolute left-0 bottom-0.5 inline-block h-5 w-5 transform rounded-full bg-white shadow-lg
                    transition duration-300 ease-in-out
                    ${isEnabled ? 'translate-x-6' : 'translate-x-0'}
                  `}
                />
                <div
                  className={`
                    h-full w-full rounded-full
                    ${isEnabled ? 'bg-cyan-400' : 'bg-gray-600'}
                  `}
                />
              </button>
            </div>
            
            {/* Animated Background Gradient */}
            <div 
              className={`
                absolute inset-0 -z-10 transition-opacity duration-300
                bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10
                opacity-0 group-hover:opacity-100
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioSettings;
