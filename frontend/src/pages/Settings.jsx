import React, { useState } from "react";

import SettingsContent from "../components/SettingsContent";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../asset/image.png";
import logoaudio from "../asset/image2.png";
import Sidebar from "../components/newSidebar";
const Settings = () =>{
    const [selectedOption,SetSelectedOption]=useState('Audio Settings');

    return(
        <div className=" flex flex-col min-h-screen min-w-[740px]">
            <header className="bg-cyan-400 py-4 px-5 flex items-center  h-14 " >
                <div className="bg-black shadow-lg text-blue-500 font-semibold px-2  py-2 rounded-full mr-5">
                <a href={'{provide link}'}>
                <FaArrowLeftLong size={20} className="text-white cursor-pointer" />
                </a>
                </div>
                <div className="flex items-center space-x-3">
               
                <h1 className="text-black text-2xl font-bold">Settings</h1>
                </div>
        </header>
        
        <main className=" mt-2 mb-2 bg-black text-white flex rounded-3xl p-5 mr-4 ml-4   flex-grow">
            <Sidebar SetSelectedOption = {SetSelectedOption}/>
            <SettingsContent selectedOption={selectedOption} />
        </main>

        <footer className="bg-cyan-400 text-white flex items-center justify-between p-2 ">
        <div className="flex items-center space-x-2">
          <img
            src={logoaudio}
            alt="Logo"
            className="h-10 w-10 rounded-2xl"
          />
          <span className="font-bold text-black text-xl">COPYRIGHT 2024</span>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="PMI Logo"
            className="h-8"
          />
        </div>
        <div className="flex space-x-4 mr-10">
          <FaInstagram size={24} className="text-white cursor-pointer" />
          <FaTwitter size={24} className="text-white cursor-pointer" />
        </div>
        </footer>
    </div>


    );

};

export default Settings;