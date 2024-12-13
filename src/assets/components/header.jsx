import React, { useState } from 'react';
import Logo from '../images/teucard-black.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=''>
      <header className="navbar fixed w-full p-4 md:border-b-2 border-white/20 flex justify-between bg-black sticky max-w-[1440px] mx-auto py-4 mb-10 top-0 z-10 drop-shadow-md dark:text-black">
        <div className="logo-page">
          <a className="header-logo text-2xl font-bold" href="/">
            <img src={Logo} width="200" alt="Logo" />
          </a>
        </div>

        {/* Itens do Menu no Desktop */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex text-white space-x-6 text-lg font-bold content-center items-center">
            <li>
              <a
                href="/"
                className="hover:text-blue-500"
              >
                Home
              </a>
            </li><li>
              <a
                href="#services"
                className="hover:text-blue-500"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5513996687799&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site!"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Hambúrguer para Mobile */}
        <button
          id="menu-toggle"
          className="text-white md:hidden focus:outline-none"
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
        <div className="fixed z-10 top-16 left-0 w-full h-[calc(60vh-4rem)] bg-black text-white transition-transform duration-300">
          <ul className="flex flex-col items-center justify-center h-full w-full space-y-8 ">
            <li>
              <a
                href="https://rafaelguilherme.com.br"
                className="w-full rounded-full border-2 border-primary py-2 px-14 hover:bg-primary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="w-full rounded-full border-2 border-primary py-2 px-14 hover:bg-primary"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="w-full rounded-full border-2 border-primary py-2 px-12 hover:bg-primary"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="rounded-full border-2 border-primary py-2 px-12 hover:bg-primary"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5513996687799&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site!"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary font-bold text-black py-2 px-12   hover:bg-primary"
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