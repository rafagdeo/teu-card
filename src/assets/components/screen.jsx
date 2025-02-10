import { useState, useEffect } from "react";
import Phone from '../images/checkout.gif';

function Screen() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0001;
      setScale(newScale > 2 ? 2 : newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-24 overflow-hidden">
      <div className='p-4 text-center container mx-auto w-[750px] overflow-hidden'>
      <span className='text-gray-400 text-md border border-gray-400 py-2 px-6 rounded-full animate-fadeIn'>Benefícios Que São Só Teus</span>
      <p className='text-primar animate-fadeIn mt-4'>O Teu Card é mais do que um simples cartão de benefícios. </p>
      <p className='text-white animate-fadeIn'>Ele é feito para você, do jeitinho que você merece.</p>
    </div>
    <div style={{ transform: `scale(${scale})` }} className="p-0 md:pt-32">
    <img
          src={Phone}
          alt="Tela do APP"
          className="transition-transform duration-75"
          loading="lazy"
        />
    </div>
        
    </div>
  );
}

export default Screen;
