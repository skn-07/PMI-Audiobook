import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaPlay, FaPause, FaEllipsisV, FaPlus, FaInstagram, FaTwitter } from 'react-icons/fa';
import image4 from '../asset/image4.png';
import image2 from '../asset/image2.png';
import image from '../asset/image.png';

import '../index.css';
import './favourites.css';

function Favourites() {
  const [favorites, setFavorites] = useState([
    { 
      id: 1, 
      title: 'The Power Of Your Subconscious Mind', 
      author: 'Joseph Murphy', 
      cover: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UF1000,1000_QL80_.jpg', 
      liked: true, 
      daysAgo: '1 day ago', 
      isPlaying: false, 
    }, 
    { 
      id: 2, 
      title: 'The Story Of My Life', 
      author: 'Helen Keller', 
      cover: 'https://m.media-amazon.com/images/I/71hvVPz9rrL._AC_UF1000,1000_QL80_.jpg', 
      liked: false, 
      daysAgo: '4 days ago', 
      isPlaying: false, 
    }, 
    { 
      id: 3, 
      title: 'The Alchemist', 
      author: 'Paulo Coelho', 
      cover: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg', 
      liked: true, 
      daysAgo: '4 days ago', 
      isPlaying: false, 
    }, 
    { 
      id: 4, 
      title: 'Wings Of Fire', 
      author: 'A. P. J. Abdul Kalam', 
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjNJTe0KNf0OJyTkXv85MMC4cCiWJiZoYguOZWQJIpQ69Rxe5dWVkpIxGwTlDz9ZgLQc&usqp=CAU', 
      liked: true, 
      daysAgo: '5 days ago', 
      isPlaying: false, 
    }, 
    { 
      id: 5, 
      title: 'Harry Potter And The Philosopher\'s Stone', 
      author: 'J. K. Rowling', 
      cover: 'https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg', 
      liked: false, 
      daysAgo: '5 days ago', 
      isPlaying: false, 
    }, 
    { 
      id: 6, 
      title: 'The 5 AM Club', 
      author: 'Robin Sharma', 
      cover: 'https://m.media-amazon.com/images/I/71Jg6kSgYwL._AC_UF1000,1000_QL80_.jpg', 
      liked: true, 
      daysAgo: '6 days ago', 
      isPlaying: false, 
    }, 
    { 
      id: 7, 
      title: 'Haben', 
      author: 'Haben Girma', 
      cover: 'https://habengirma.com/wp-content/uploads/2019/06/haben-book-cover-large-685x1024.jpg', 
      liked: false, 
      daysAgo: 'May 5', 
      isPlaying: false, 
    } 
  ]);

  const toggleLike = (id) => { 
    setFavorites(favorites.map(fav => 
      fav.id === id ? { ...fav, liked: !fav.liked } : fav 
    )); 
  };

  const togglePlay = (id) => { 
    setFavorites(favorites.map(fav => 
      fav.id === id ? { ...fav, isPlaying: !fav.isPlaying } : fav 
    )); 
  };

  return ( 
    <div className="min-h-screen flex flex-col"> 
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg flex-grow"> 
        <div className="flex justify-between items-center bg-blue-100 p-4 rounded-md"> 
          <h1 className="text-xl font-bold text-blue-700">FAVORITES</h1> 
          <FaHeart color="lightblue" /> 
          <img 
            src={image4}
            alt="Profile" 
            className="w-8 h-8 rounded-full border-2 border-white shadow-md"
          />
        </div> 

        <div className="mt-6"> 
          {favorites.map((fav) => ( 
            <div key={fav.id} className="flex justify-between items-center p-4 mb-4 rounded-lg shadow-md bg-slate-700"> 
              <div className="relative"> 
                <img 
                  src={fav.cover} 
                  alt={fav.title} 
                  className="w-20 h-32 rounded-md shadow-lg" 
                /> 
                <button 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ width: '30px', height: '30px' }}
                  onClick={() => togglePlay(fav.id)} 
                > 
                  {fav.isPlaying ? <FaPause /> : <FaPlay />} 
                </button> 
              </div> 

              <div className="ml-4"> 
                <h3 className="text-lg font-semibold text-white">{fav.title}</h3> 
                <span className="text-sm text-gray-400">{fav.daysAgo}</span> 
                <p className="text-gray-400">{fav.author}</p> 
              </div> 

              <div className="flex items-center space-x-4"> 
                <div onClick={() => toggleLike(fav.id)} className="cursor-pointer"> 
                  {fav.liked ? <FaHeart className="text-red-500 text-xl" /> : <FaRegHeart className="text-xl" />} 
                </div> 
                <FaEllipsisV className="text-white text-xl cursor-pointer" />  
              </div> 
            </div> 
          ))} 
          <div className="flex justify-center mt-6">
            <button 
              className="p-4  text-black  hover:bg-gray-400 transition-colors duration-300"
              
            >
              <FaPlus size={24} />
            </button>
          </div>
        </div> 
      </div> 

      {/* Footer */}
      <footer className="bg-cyan-400 text-white flex items-center justify-between p-2 w-full">
        <div className="flex items-center space-x-2">
          <img
            src={image2} 
            alt="Logo"
            className="h-10 w-10 rounded-2xl"
          />
          <span className="font-bold text-black text-xl">COPYRIGHT 2024</span>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src={image}
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
} 

export default Favourites;
