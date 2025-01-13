import React from 'react'
import Logo from '../images/teucard-black.png';
import Ios from '../images/ios.webp'
import Android from '../images/android.webp'

const footer = () => {
  return (
    <div>
      <footer className="bg-black px-4 pt-8 pb-2">
      <div className="justify-between gap-4 flex flex-col md:grid grid-cols-4 md:space-x-6 py-8 md:flex-row lg:w-[1440px] lg:mx-auto">
        <div className="w-full mx-auto text-center">
          <a href="#">
            <img src={Logo} alt="Logo"/>
          </a>
          {/* <div className="flex items-center gap-3 md: mt-3 content-center justify-center">
            <a href="https://www.instagram.com/">
            </a>
            <a href="https://www.facebook.com/">
              
            </a>
            <a href="http://www.youtube.com/">
            </a>
          </div> */}
        </div>

        <div className="flex flex-col p-0 text-white space-x-0 gap-4 md:pl-24">
          <a href="/" className="text-xl hover:underline hover:text-[#0E60F1]">Home</a>
          <a href="/" className="text-xl hover:underline hover:text-[#0E60F1]">Sobre nós</a>
          <a href="" className="text-xl hover:underline hover:text-[#0E60F1]">Serviços</a>
          <a href="" className="text-xl hover:underline hover:text-[#0E60F1]">Projetos</a>
        </div>

        <div className="flex flex-col md:pl-12 text-white gap-4">
          <a href="#" className="text-xl text-white hover:underline hover:text-[#0E60F1]">Contatos</a>
          <a href="#" className="text-xl text-white hover:underline hover:text-[#0E60F1]">Endereço</a>
        </div>

        <div className="flex content-center items-center gap-4 md:flex-col">
          <a href="#" target="_blank">
            <img src={Ios} alt="Download app ios" />
          </a>
          <a href="#" target="_blank">
            <img src={Android} alt="Download app android" />
          </a>
        </div>
      </div>
      <div className="flex md:flex md:w-[1440px] lg:mx-auto justify-between border-t-2 border-gray-700 pt-3 mt-6 text-center">
        <p className="text-lg text-white">© TeuCard 2024. All Rights Reserved.</p>
        <div className="flex content-center items-center justify-center space-x-2">
          <p className="text-lg text-white">
            <a href="/">Terms</a>
          </p>
          <p className="text-lg text-white">
            <a href="/">Privacy</a>
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default footer
