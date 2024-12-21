import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import BgAbout from '../images/bg-about.png';
import Video from '../video/card_vd.mp4'


const sobre = () => {
  return (
    <div>
      <Header />
      

        <section className='py-40 bg-cover bg-center' style={{ backgroundImage: `url(${BgAbout})` }}>   
            <div className='px-6 grid gap-4 items-center w-[1127px] mx-auto'>    
             <h2 className='text-white font-bold text-4xl animate-fadeIn'>Texto chamativo</h2>
             <p className='text-gray-300 font-multi animate-fadeIn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>   
        </section>

        <section className='px-6 py-20 w-[750px] mx-auto justify-center content-center  align-center text-center grid gap-6'>
            <h3 className='text-white font-gendy text-5xl font-bold animate-fadeIn'>Conheça o</h3>
            <h2 className='bg-gradient-to-r from-brandeis via-purple-700 to-brandeis inline-block text-transparent bg-clip-text text-8xl font-bold animate-fadeIn '>TEUCARD</h2>
            <p className='text-gray-300 font-muli animate-fadeIn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo lorem, luctus a mattis a, aliquam in ex. Nam at interdum ligula, sed congue orci. </p>
        </section>

        <section className='px-6 my-24 space-x-6 max-w-[1440px] mx-auto md:flex'>
            <div className='order-2 grid space-y-4 items-center content-center md:order-2 md:pl-24'>
            <h2 className='text-white font-gendy text-4xl font-medium animate-fadeIn'>Mais que um banco</h2>
            <h3 className='text-white font-gendy text-7xl font-bold animate-fadeIn'>Teu melhor amigo</h3>
            <p className='text-gray-300 font-muli'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo lorem, luctus a mattis a, aliquam in ex. Nam at interdum ligula, sed congue orci. </p>
              <a href="#" className='animate-fadeIn w-60 text-center items-center px-6 py-2 border border-brandeis rounded-full text-white font-bold uppercase bg-blue-700 hover:bg-white hover:border-white hover:text-black'>Conheça mais</a>
            </div>
            <div className='order-1 md:order-1'>
            <video
                  autoPlay
                  muted
                  width="800px"
                  controls={false}
                  loading="lazy">
              <source src={Video} type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
            </div>
          </section>
      <Footer /> 
    </div>
  )
  
}

export default sobre
