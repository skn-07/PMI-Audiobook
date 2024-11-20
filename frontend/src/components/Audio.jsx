import React, { useState } from 'react';

const AudioSettings = () => {
  const [isAudioQualityEnabled, setIsAudioQualityEnabled] = useState(false);
  const [isNormalizeEnabled, setIsNormalizeEnabled] = useState(false);
  const [isMonoEnabled, setIsMonoEnabled] = useState(false);
  const [isBassBoostEnabled, setIsBassBoostEnabled] = useState(false);
  const [isSurroundSoundEnabled, setIsSurroundSoundEnabled] = useState(false);

  const toggleSetting = (setter) => {
    setter((prev) => !prev);
  };

  const settings = [
    {
      label: 'Audio Quality',
      description: 'Sets your audio quality to low (equivalent to 24bits/s)',
      isEnabled: isAudioQualityEnabled,
      toggle: () => toggleSetting(setIsAudioQualityEnabled),
    },
    {
      label: 'Normalize Volume',
      description: 'Sets the same volume level for all tracks',
      isEnabled: isNormalizeEnabled,
      toggle: () => toggleSetting(setIsNormalizeEnabled),
    },
    {
      label: 'Mono Audio',
      description: 'Makes the left and right speakers play the same audio',
      isEnabled: isMonoEnabled,
      toggle: () => toggleSetting(setIsMonoEnabled),
    },
    {
      label: 'Bass Boost',
      description: 'Enhances bass for a richer audio experience',
      isEnabled: isBassBoostEnabled,
      toggle: () => toggleSetting(setIsBassBoostEnabled),
    },
    {
      label: 'Surround Sound',
      description: 'Creates an immersive sound environment',
      isEnabled: isSurroundSoundEnabled,
      toggle: () => toggleSetting(setIsSurroundSoundEnabled),
    },
  ];

  return (
    <div className="p-4  max-h-[445px] overflow-y-auto space-y-6 bg-gray-800 rounded-lg shadow-lg custom-scrollbar">
      {settings.map(({ label, description, isEnabled, toggle }, index) => (
        <div key={index} className="p-4 rounded-lg shadow-lg w-[550px]">
          <h3 className=" sm:text-[15px] lg:text-[18px] w-full font-semibold text-white mb-4">
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
          <hr style={{ borderTop: '1px dotted #ccc', width: '100%' }} className='mt-4' />
        </div>
      ))}
    </div>
  );
};

export default AudioSettings;
