import React, { useRef, useEffect } from 'react';
import Video from '../video/card_vd.mp4'
import Cards from '../video/cards.mp4'

function Card() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollTop = window.scrollY;
        const videoRect = videoRef.current.getBoundingClientRect();
        const videoOffset = videoRect.top + window.scrollY;
        const scrollPercentage = (scrollTop - videoOffset) / (videoRect.height);
        const scrollValue = Math.min(Math.max(scrollPercentage, 0), 1);

        videoRef.current.style.transform = `translateY(${scrollValue * 100}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <section className='px-6 my-20 space-x-6 w-[1440px] mx-auto md:flex'>
    <div className='order-2 grid gap-4 items-center content-center md:order-1'>
      <h2 className='text-white font-gendy text-5xl font-bold animate-fadeIn'>Conheça o teucard</h2>
      <p className='text-gray-300 font-muli animate-fadeIn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo lorem, luctus a mattis a, aliquam in ex. Nam at interdum ligula, sed congue orci. </p>
      <a href="#" className='w-60 text-center items-center px-6 py-2 border border-brandeis rounded-full text-white font-bold uppercase bg-blue-700 hover:bg-white hover:border-white hover:text-black animate-fadeIn'>Conheça mais</a>
    </div>
    <div className='order-1 md:order-2'>
    <video autoPlay
          muted
          width="full"
          controls={false}
          loading="lazy">
      <source src={Cards} type="video/mp4" />
      Seu navegador não suporta a reprodução de vídeo.
    </video>
    </div>
  </section>

  <section className='px-6 my-24 space-x-6 max-w-[1440px] mx-auto md:flex'>
    <div className='order-2 grid space-y-4 items-center content-center md:order-2 md:pl-24'>
    <h2 className='text-white font-gendy text-4xl font-medium animate-fadeIn'>Mais que um banco</h2>
    <h3 className='text-white font-gendy text-7xl font-bold animate-fadeIn'>Seu melhor amigo</h3>
    <p className='text-gray-300 font-muli'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo lorem, luctus a mattis a, aliquam in ex. Nam at interdum ligula, sed congue orci. </p>
      <a href="#" className='animate-fadeIn w-60 text-center items-center px-6 py-2 border border-brandeis rounded-full text-white font-bold uppercase bg-blue-700 hover:bg-white hover:border-white hover:text-black'>Conheça mais</a>
    </div>
    <div className='order-1 md:order-1'>
    <video ref={videoRef}
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
    </div>
    
  );
}

export default Card;
