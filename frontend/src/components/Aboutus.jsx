import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi';

const AboutUs = () => {
    const socials = [
        {
            icon: <FiGithub />,
            name: "GitHub",
            link: "https://github.com/PMI-Audiobook",
            color: "hover:text-gray-900"
        },
        {
            icon: <FiLinkedin />,
            name: "LinkedIn",
            link: "https://linkedin.com/company/pmi-audiobook",
            color: "hover:text-blue-600"
        },
        {
            icon: <FiMail />,
            name: "Email",
            link: "mailto:contact@pmiaudiobook.com",
            color: "hover:text-red-500"
        },
        {
            icon: <FiGlobe />,
            name: "Website",
            link: "https://pmiaudiobook.com",
            color: "hover:text-cyan-500"
        }
    ];

    return (
        <div className="w-full h-full p-8 flex flex-col items-center justify-center">
            {/* About Section */}
            <div className="max-w-2xl text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 
                    bg-clip-text text-transparent mb-6">
                    About PMI Audiobook
                </h1>
                <p className="text-gray-600 mb-4 text-lg">
                    PMI Audiobook is a cutting-edge audio platform designed to transform your reading 
                    experience. Our mission is to make knowledge accessible through high-quality 
                    audiobook content.
                </p>
                <p className="text-gray-600 text-lg">
                    Built with modern technology and a focus on user experience, we strive to 
                    provide the best audio content delivery platform for our users.
                </p>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Connect With Us
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group"
                        >
                            <div className={`text-4xl text-gray-600 mb-2 transition-all duration-300 
                                ${social.color} group-hover:scale-110`}>
                                {social.icon}
                            </div>
                            <span className="text-gray-600 group-hover:text-gray-800">
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center text-gray-600">
                <p> 2024 PMI Audiobook</p>
            </div>
        </div>
    );
};

export default AboutUs;