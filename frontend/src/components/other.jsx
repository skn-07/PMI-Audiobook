import React, { useState } from 'react';
import { FiBell, FiEye, FiMoon, FiSun, FiDownload, FiWifi, FiClock, FiLock } from 'react-icons/fi';

const Other = () => {
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
        autoDownload: false,
        dataUsage: true,
        sleepTimer: '30',
        privacy: 'medium'
    });

    const handleToggle = (setting) => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleSelect = (setting, value) => {
        setSettings(prev => ({
            ...prev,
            [setting]: value
        }));
    };

    return (
        <div className="w-full h-full p-8 space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6">Other Settings</h2>

                {/* Notification Settings */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center space-x-3">
                            <FiBell className="text-2xl text-blue-500" />
                            <div>
                                <h3 className="text-slate-200 font-medium">Notifications</h3>
                                <p className="text-sm text-blue-500/80">Receive updates and alerts</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={settings.notifications}
                                onChange={() => handleToggle('notifications')}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                                after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    {/* Theme Settings */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center space-x-3">
                            {settings.darkMode ? 
                                <FiMoon className="text-2xl text-blue-500" /> : 
                                <FiSun className="text-2xl text-blue-500" />
                            }
                            <div>
                                <h3 className="text-slate-200 font-medium">Theme</h3>
                                <p className="text-sm text-blue-500/80">Toggle dark mode</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={settings.darkMode}
                                onChange={() => handleToggle('darkMode')}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full 
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                                after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                                after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                    </div>

                    {/* Sleep Timer */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center space-x-3">
                            <FiClock className="text-2xl text-blue-500" />
                            <div>
                                <h3 className="text-slate-200 font-medium">Sleep Timer</h3>
                                <p className="text-sm text-blue-500/80">Auto-stop playback</p>
                            </div>
                        </div>
                        <select
                            value={settings.sleepTimer}
                            onChange={(e) => handleSelect('sleepTimer', e.target.value)}
                            className="bg-white/5 border border-white/10 text-slate-200 rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 p-2.5"
                        >
                            <option value="15">15 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="45">45 minutes</option>
                            <option value="60">1 hour</option>
                        </select>
                    </div>

                    {/* Privacy Settings */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center space-x-3">
                            <FiLock className="text-2xl text-blue-500" />
                            <div>
                                <h3 className="text-slate-200 font-medium">Privacy</h3>
                                <p className="text-sm text-blue-500/80">Data collection level</p>
                            </div>
                        </div>
                        <select
                            value={settings.privacy}
                            onChange={(e) => handleSelect('privacy', e.target.value)}
                            className="bg-white/5 border border-white/10 text-blue-600 rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 p-2.5"
                        >
                            <option value="low">Minimal</option>
                            <option value="medium">Balanced</option>
                            <option value="high">Full</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-blue-800">
                    These settings help personalize your audiobook experience. Changes are saved automatically.
                </p>
            </div>
        </div>
    );
};

export default Other;