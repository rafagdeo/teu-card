import * as React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import 'swiper/css';

const Depoimentos = () => {

  return (
    <div className='py-32 items-center container md:w-[950px] mx-auto text-center text-white space-y-12'>
    <h2 className="font-bold md:text-4xl texte-center uppercase">
    O que a galera está falando sobre o Teu Card?
    </h2>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      loop
      autoplay= {true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="text-white"
    >
      <SwiperSlide>
        <h3>Pedro L.</h3>
        <p className="text-gray-400">"Não imagina o quanto o Teu Card facilitou minha vida! Descontos, flexibilidade e sem taxas abusivas. É meu e funciona perfeitamente." </p>
        </SwiperSlide>
        <SwiperSlide>
        <h3>Fernanda S.</h3>
        <p className="text-gray-400">"Agora eu posso aproveitar tudo o que Teu Card tem a oferecer, sem complicação. É tudo tão simples e direto!" </p>
        </SwiperSlide>
        <SwiperSlide>
        <h3>Lucas M.</h3>
        <p className="text-gray-400"> "O Teu Card é uma revolução. Eu sou quem escolho o que quero, sem pegadinhas. Só benefícios que são meus de verdade."  </p>
        </SwiperSlide>
        <SwiperSlide>
        <h3>Lucas M.</h3>
        <p className="text-gray-400"> "O Teu Card é uma revolução. Eu sou quem escolho o que quero, sem pegadinhas. Só benefícios que são meus de verdade."  </p>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Depoimentos
