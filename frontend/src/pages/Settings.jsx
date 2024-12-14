import React, { useState } from "react";
import SettingsContent from "../components/SettingsContent";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaBars } from 'react-icons/fa';
import logo from "../asset/image.png";
import logoaudio from "../asset/image2.png";
import Sidebar from "../components/newSidebar";

const Settings = () => {
    const [selectedOption, setSelectedOption] = useState('Audio Settings');
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-cyan-400 py-3 px-4 sm:px-6 flex items-center justify-between shadow-md transition-all duration-300">
                <div className="flex items-center space-x-4">
                    <button 
                        className="bg-black shadow-lg text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                        onClick={() => window.history.back()}
                    >
                        <FaArrowLeftLong size={20} />
                    </button>
                    <h1 className="text-black text-xl sm:text-2xl font-bold">Settings</h1>
                </div>

                {/* Toggle Button - Only visible on smaller screens */}
                <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="lg:hidden bg-black/80 backdrop-blur-sm text-white p-2.5 rounded-xl
                        hover:bg-black/90 hover:scale-105 active:scale-95
                        transition-all duration-300 ease-out group shadow-lg
                        flex items-center gap-2"
                >
                    <span className="text-sm font-medium hidden sm:block">
                        {showSidebar ? 'Hide Menu' : 'Show Menu'}
                    </span>
                    <FaBars 
                        size={20}
                        className={`transform transition-transform duration-300 ${showSidebar ? 'rotate-90' : ''}`}
                    />
                </button>
            </header>
            
            {/* Main Content */}
            <main className="flex-grow flex flex-col lg:flex-row gap-4 p-4 sm:p-6 relative">
                {/* Mobile Overlay - Only visible on smaller screens */}
                <div className={`
                    lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300
                    ${showSidebar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `} onClick={() => setShowSidebar(false)} />
                
                {/* Sidebar - Always visible on large screens, toggleable on small screens */}
                <div className={`
                    fixed lg:relative lg:block
                    ${showSidebar ? 'block' : 'hidden'}
                    z-20
                `}>
                    <Sidebar SetSelectedOption={setSelectedOption} />
                </div>
                
                {/* Content Area */}
                <div className="flex-grow lg:ml-6">
                    <div className="bg-black text-white rounded-2xl p-4 sm:p-6 shadow-xl">
                        <SettingsContent selectedOption={selectedOption} />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-cyan-400 text-white p-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                        <img
                            src={logoaudio}
                            alt="Logo"
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-2xl"
                        />
                        <span className="font-bold text-black text-lg sm:text-xl">COPYRIGHT 2024</span>
                    </div>
                    
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="PMI Logo"
                            className="h-6 sm:h-8"
                        />
                    </div>
                    
                    <div className="flex space-x-6">
                        <FaInstagram 
                            size={24} 
                            className="text-white cursor-pointer hover:text-gray-200 transition-colors duration-300" 
                        />
                        <FaTwitter 
                            size={24} 
                            className="text-white cursor-pointer hover:text-gray-200 transition-colors duration-300" 
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Settings;