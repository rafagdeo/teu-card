import React from 'react'
import Logo from '../images/teucard-black.png';

const footer = () => {
  return (
    <div>
      <footer class="bg-black px-4 pt-8 pb-2">
      <div class="justify-between gap-4 flex flex-col md:grid grid-cols-4 md:space-x-12 py-8 md:flex-row lg:w-[1440px] lg:mx-auto">
        <div class="w-full mx-auto text-center">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <div class="flex items-center gap-3 md: mt-3 content-center justify-center">
            <a href="https://www.instagram.com/">
            </a>
            <a href="https://www.facebook.com/">
              
            </a>
            <a href="http://www.youtube.com/">
            </a>
          </div>
        </div>

        <div class="flex flex-col p-0 text-white space-x-0 gap-4 md:pl-12">
          <a href="/" class="text-xl hover:underline hover:text-[#0E60F1]">Home</a>
          <a href="/" class="text-xl hover:underline hover:text-[#0E60F1]">Sobre nós</a>
          <a href="" class="text-xl hover:underline hover:text-[#0E60F1]">Serviços</a>
          <a href="" class="text-xl hover:underline hover:text-[#0E60F1]">Projetos</a>
        </div>

        <div class="flex flex-col  text-white gap-4">
          <a href="/" class="text-xl text-white hover:underline hover:text-[#0E60F1]">Contatos</a>
          <a href="/" class="text-xl text-white hover:underline hover:text-[#0E60F1]">Endereço</a>
        </div>

        <div class="flex content-center items-center gap-4 md:flex-col">
          <a href="/" target="_blank">
          
          </a>
          <a href="/" target="_blank">
          </a>
        </div>
      </div>
      <div class="flex md:flex md:w-[1440px] lg:mx-auto justify-between border-t-2 border-gray-700 pt-3 mt-6 text-center">
        <p class="text-lg text-white">© TeuCard 2024. All Rights Reserved.</p>
        <div class="flex content-center items-center justify-center space-x-2">
          <p class="text-lg text-white">
            <a href="/">Terms</a>
          </p>
          <p class="text-lg text-white">
            <a href="/">Privacy</a>
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default footer
