import React, { useState } from "react";
import ProfilePicture from '../asset/image4.png';
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Sidebar = ({ SetSelectedOption, username = "Ansu rose", MAX_NAME_LENGTH = 15 }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const options = [
      'Audio Settings',
      'Languages',
      'About Us',
      'Devices',
      'Storage',
      'Other'
    ];
    const truncatedUsername = username.slice(0, MAX_NAME_LENGTH);
    const navigate = useNavigate();
    
    const logout = () => navigate("/");
    const Profilenav = () => navigate("/profile");
    
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle function for sidebar

    return (
      <>
        {/* Mobile Menu Icon */}
        <button onClick={toggleSidebar} className="md:hidden absolute  top-20 left-8 w-[40px] z-20 bg-slate-700 rounded-full p-2">
          {isSidebarOpen ? <FiX className="text-2xl text-white" /> : <FiMenu className="text-2xl text-white" />}
        </button>
        
        {/* Sidebar */}
        <div 
          className={`fixed top-14 left-0 h-[570px] w-64 bg-blue-700 p-6 flex flex-col items-center space-y-8 rounded-3xl transform rounded-tl-lg rounded-bl-lg
                      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static z-10`}
        >
          <div className="w-28 h-24 rounded-full bg-gray-300 mb-6">
            <img src={ProfilePicture} alt="Profile" className="rounded-full object-cover w-full h-full" />
            <button onClick={Profilenav} className="capitalize text-center mt-2  break-words w-full bg-blue-700 hover:bg-blue-700">
              {truncatedUsername}
            </button>
          </div>

          {/* Menu Options */}
          <nav className="w-full ">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  SetSelectedOption(option);
                  if (isSidebarOpen) toggleSidebar(); // Close sidebar on mobile when an option is selected
                }}
                className="text-left w-full px-4 py-2 mt-2 rounded-lg bg-blue-700 hover:bg-blue-800 "
              >
                {option}
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <button
            onClick={() => {
              logout();
              if (isSidebarOpen) toggleSidebar(); // Close sidebar on mobile when logging out
            }}
            className="text-left w-full px-4 py-2 mt-auto rounded-lg bg-red-600 hover:bg-red-700 focus:outline-none focus:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className=" inset-0 bg-black opacity-50 z-0 md:hidden"
          ></div>
        )}
      </>
    );
};

export default Sidebar;
