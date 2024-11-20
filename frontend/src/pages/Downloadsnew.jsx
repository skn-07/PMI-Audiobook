
import React, { useState } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../asset/image.png";
import profile from "../asset/image4.png";
import logoaudio from "../asset/image2.png";
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { FaPlus } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

// Array of colors for the book titles
const colors = ["text-red-400", "text-green-300", "text-blue-300", "text-purple-300", "text-yellow-300"];

const LibraryPage = () => {
  const [books, setBooks] = useState([
    {
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      cover: 'https://dbz-images.dubizzle.com/images/2024/10/20/965ff1f2f514469fbb0af30e9329b772-.jpeg?impolicy=dpc',
    },
    {
      title: 'Ikigai',
      author: 'Francesc Miralles, Héctor García',
      cover: 'https://th.bing.com/th/id/OIP.M3QhTCfOTL9sa6IEzK262AAAAA?rs=1&pid=ImgDetMain',
    },
    {
      title: 'The Diary of a Young Girl',
      author: 'Anne Frank',
      cover: 'https://www.pluggedin.com/wp-content/uploads/2020/01/anne-frank-diary-of-a-young-girl-cover-image-632x1024.jpeg',
    },
    {
      title: 'The Kite Runner',
      author: 'Khaled Hosseini',
      cover: 'https://th.bing.com/th/id/OIP.NwK6C9T2i-g1xefjLwBABAHaLt?rs=1&pid=ImgDetMain',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      cover: 'https://th.bing.com/th/id/OIP.223i4OV32vguwB3skaY6DAHaLU?rs=1&pid=ImgDetMain',
    },
    {
      title: '1984',
      author: 'George Orwell',
      cover: 'https://th.bing.com/th/id/OIP.kbMxdBWJd1dEmqtbRqHa5wHaLX?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'https://th.bing.com/th/id/OIP.MQI9zKkB2N-GOU4G8TYXOgHaFj?rs=1&pid=ImgDetMain',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      cover: 'https://th.bing.com/th/id/OIP.MSu1wkGWxI_-D58jiDFjogHaJt?rs=1&pid=ImgDetMain',
    },
  ]);

  // Slick settings
  const settings = {
    dots: true,
    infinite: false,   // Turn off infinite for now to make testing smoother
    speed: 500,        // Speed of the slide transition
    slidesToShow: 5,   // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll per action
    swipeToSlide: true, // Allow swiping
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-cyan-300 py-4 px-8 flex items-center rounded-bl-3xl rounded-br-3xl">
        <div className="bg-black shadow-lg text-blue-500 font-semibold px-2 py-2 rounded-full mr-5">
          <a href={'{provide link}'}>
            <FaArrowLeftLong size={24} className="text-white cursor-pointer" />
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <img
            src={profile}
            alt="User Avatar"
            className="w-10 h-10 rounded-2xl"
          />
          <h1 className="text-black text-2xl font-bold">Your Library</h1>
        </div>
        <div className="bg-black text-blue-500 font-semibold px-2 py-2 rounded-full ml-auto">
          <a href={'{provide link}'}>
            <FaPlus size={24} className="text-white cursor-pointer" />
          </a>
        </div>
      </header>

      {/* Downloads Section */}
      <main className="flex-grow px-8 py-10 mt-10">
        <h2 className="text-4xl font-bold mb-6 ml-1">DOWNLOADS</h2>
        <div className="flex justify-center">
          {/* React-Slick Slider */}
          <Slider {...settings} className="w-full">
            {books.map((book, index) => (
              <div key={index} className="p-1 h-full w-[200px]"> {/* Adjust padding and height */}
                <div className="bg-slate-800 rounded-[15px] shadow-lg hover:shadow-xl transition-shadow h-80 "> {/* Add height */}
                  <a href={'{provide link}'} className="block">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-[200px] object-cover rounded-tl-[11px] rounded-tr-[11px]" // Fixed height for image
                    />
                    <div className="ml-2 text-blue-600">
                      <h3 className={`text-xl font-semibold ${colors[index % colors.length]}`}>
                        {book.title}
                      </h3>
                      <p className="text-gray-500">{book.author}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-cyan-300 text-white flex items-center justify-between p-2">
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

export default LibraryPage;
