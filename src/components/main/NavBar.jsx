import React, { useState } from 'react';
import StarBtn from '../sub/StarBtn';

const NavBar = ({ RESUME }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      {/* Top navbar visible on all sizes */}
      <div className="w-full h-20 bg-black text-white fixed top-0 z-40 shadow-black/70 shadow-2xl flex justify-between items-center p-6">
        <div className="flex items-center gap-2 text-lg font-bold">
          <img
            src="assets/IMG_20251007_210104_244.webp"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
          <h1>SAAIRAM R P</h1>
        </div>
        {/* On medium+ devices show links + button inline */}
        <div className="hidden md:flex items-center gap-1 text-lg font-semibold">
          <ul className="flex gap-10 mr-10 cursor-pointer">
            <li><a className='hover:text-amber-300' href="about">About</a></li>
            <li><a className='hover:text-amber-300' href="#skill">Skills</a></li>
            <li><a className='hover:text-amber-300' href="#port">Portfolio</a></li>
            <li><a className='hover:text-amber-300' href="#contact">Contact</a></li>
          </ul>
          <StarBtn title="Resume" />
        </div>
      </div>

      {/* Floating hamburger button for small devices only */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-50 bg-black text-white p-4 rounded-full shadow-2xl"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        {menuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay menu for small devices */}
      {menuOpen && (
        <div className="md:hidden fixed h-full right-0 bg-violet-900/80 text-white z-25 flex flex-col items-center justify-center space-y-8 text-lg font-semibold pt-20 w-min px-5">
          <ul className="space-y-6 text-center">
            <li onClick={() => setMenuOpen(false)}><a className='hover:text-amber-300' href='#about'>About</a></li>
            <li onClick={() => setMenuOpen(false)}><a className='hover:text-amber-300' href='#skill'>Skills</a></li>
            <li onClick={() => setMenuOpen(false)}><a className='hover:text-amber-300' href='#port'>Portfolio</a></li>
            <li onClick={() => setMenuOpen(false)}><a className='hover:text-amber-300' href='#contact'>Contact</a></li>
          </ul>
          <StarBtn
            title="Resume"
            onClick={() => {
              window.open(RESUME);
              setMenuOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
};

export default NavBar;
