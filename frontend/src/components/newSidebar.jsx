import React from "react";
import ProfilePicture from '../asset/image4.png';
import { useNavigate } from "react-router-dom";
import { FiSettings, FiGlobe, FiInfo, FiSmartphone, FiHardDrive, FiMoreHorizontal, FiLogOut } from "react-icons/fi";

const Sidebar = ({ SetSelectedOption, username = "Ansu rose", MAX_NAME_LENGTH = 15 }) => {
    const options = [
        { id: 'Audio Settings', icon: <FiSettings className="w-5 h-5" /> },
        { id: 'Languages', icon: <FiGlobe className="w-5 h-5" /> },
        { id: 'About Us', icon: <FiInfo className="w-5 h-5" /> },
        { id: 'Devices', icon: <FiSmartphone className="w-5 h-5" /> },
        { id: 'Storage', icon: <FiHardDrive className="w-5 h-5" /> },
        { id: 'Other', icon: <FiMoreHorizontal className="w-5 h-5" /> }
    ];
    
    const truncatedUsername = username.slice(0, MAX_NAME_LENGTH);
    const navigate = useNavigate();
    
    const logout = () => navigate("/");
    const Profilenav = () => navigate("/profile");

    return (
        <div className="w-64 h-[600px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 
            backdrop-blur-lg flex flex-col rounded-3xl transform transition-all duration-300 
            ease-in-out shadow-xl overflow-hidden border border-blue-400/20">
            
            {/* Profile Section */}
            <div className="relative group p-6 pb-4 bg-white/5">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-lg
                    group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300">
                    <img 
                        src={ProfilePicture} 
                        alt="Profile" 
                        className="rounded-full object-cover w-full h-full ring-2 ring-white/20"
                    />
                </div>
                <button 
                    onClick={Profilenav} 
                    className="mt-3 text-center w-full px-4 py-1.5 rounded-lg 
                        bg-white/10 hover:bg-white/20 backdrop-blur-sm
                        transition-all duration-300 text-white font-medium
                        border border-white/10 hover:border-white/20
                        shadow-lg hover:shadow-xl"
                >
                    {truncatedUsername}
                </button>
            </div>

            {/* Menu Options */}
            <nav className="flex-1 px-3 py-4 space-y-1.5 bg-gradient-to-b from-white/5 to-transparent">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => SetSelectedOption(option.id)}
                        className="flex items-center w-full px-4 py-2.5 rounded-xl
                            text-white/90 hover:text-white
                            bg-white/5 hover:bg-white/10
                            backdrop-blur-sm border border-white/5 hover:border-white/10
                            transition-all duration-300 group"
                    >
                        <span className="group-hover:scale-110 transition-transform duration-300">
                            {option.icon}
                        </span>
                        <span className="ml-3 font-medium">{option.id}</span>
                    </button>
                ))}
            </nav>

            {/* Logout Button */}
            <div className="p-3 bg-gradient-to-t from-black/20 to-transparent">
                <button
                    onClick={logout}
                    className="flex items-center w-full px-4 py-2.5 rounded-xl
                        text-red-100 hover:text-white
                        bg-red-500/50 hover:bg-red-500/70
                        backdrop-blur-sm border border-red-400/20 hover:border-red-400/40
                        transition-all duration-300 group"
                >
                    <FiLogOut className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="ml-3 font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
