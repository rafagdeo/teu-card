import React, { useRef, useEffect } from 'react';
import Video from '../video/card_vd.mp4'
import Cards from '../video/card_home-1.mp4'

function Card () {
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
    <section className='px-6 my-20 space-x-6 container md:w-[1440px] mx-auto md:flex'>
    <div className='order-2 grid gap-4 items-center content-center md:order-1'>
      <h2 className='text-white font-gendy text-5xl font-bold animate-fadeIn'>Teu Card: O cartão que é todo seu</h2>
      <p className='text-gray-300 font-muli animate-fadeIn'>Benefícios, descontos e facilidades na medida do seu estilo. Porque, no final das contas, quem manda é você! </p>
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

  <section className='my-24 space-x-6 container md:w-[1440px] mx-auto md:flex'>
    <div className='order-2 grid space-y-2 items-center content-center md:order-2 md:pl-24'>
    <h2 className='text-white font-gendy text-4xl font-medium animate-fadeIn'>Como funciona?</h2>
    <h3 className='text-white font-gendy text-5xl font-bold animate-fadeIn'> Simples: é tudo teu!</h3>
    <p className='text-gray-300 font-muli'>Você já é protagonista da sua própria história, agora Teu Card é o parceiro ideal para te acompanhar. Sem complicação: </p>
    <p className='text-gray-300 font-muli'>
    <b className='text-primary'>Escolha</b> o que mais combina com seu estilo,
    </p>
    <p className='text-gray-300 font-muli'>
    <b className='text-primary'>Ative</b> o cartão de forma rápida, 
    </p>
    <p className='text-gray-300 font-muli'>
    <b className='text-primary'>Aproveite</b> os melhores descontos e ofertas, tudo do jeitinho que você gosta. 
    Com o Teu Card, a palavra de ordem é liberdade. Teu cartão, Teu jeito!" 
    </p>
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
