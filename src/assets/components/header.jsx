import React, { useState } from 'react';
import Logo from '../images/teucard-black.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative z-10 w-full max-w-[1440px] mb-16'>
      <header className="navbar fixed top-0 z-10 py-2 bg-black drop-shadow-md dark:text-black flex justify-between border-b-2 border-white/20 md:px-8 mx-auto left-0 right-0"
      >
        <div className="logo-page">
          <a className="header-logo text-2xl font-bold" href="/">
            <img src={Logo} width="200" alt="Logo" />
          </a>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex text-white space-x-6 text-lg font-bold content-center items-center">
            <li>
              <a
                href="/"
                className="hover:text-brandeis"
              >
                Home
              </a>
            </li><li>
              <a
                href="/sobre"
                className="hover:text-brandeis"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="/diferenciais"
                className="hover:text-brandeis"
              >
                Diferenciais
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold bg-brandeis rounded-full px-6 py-2 hover:bg-white hover:text-black"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Hambúrguer */}
        <button
          id="menu-toggle"
          className="text-white md:hidden focus:outline-none hover:text-brandeis"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </header>

      {/* Menu Lateral para Mobile */}
      {isMenuOpen && (
        <div className="fixed z-10 top-16 left-0 w-full h-[calc(50vh-4rem)] bg-black text-white transition-transform duration-300 border-b">
          <ul className="flex flex-col justify-center h-full w-full space-y-2">
            <li className='font-bold text-lg hover:bg-brandeis hover:text-white p-4'>
              <a
                href="/"
        
              >
                Home
              </a>
            </li>
            <li className='font-bold text-lg hover:bg-brandeis hover:text-white p-4'>
              <a
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className='font-bold text-lg hover:bg-brandeis hover:text-white p-4'>
              <a
                href="#services"
              >
                Serviços
              </a>
            </li>
            <li className='font-bold text-lg hover:bg-brandeis hover:text-white p-4'>
              <a
                href="#projects"
              >
                Projetos
              </a>
            </li>
            <li className='font-bold text-lg hover:bg-brandeis hover:text-white p-4'>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;