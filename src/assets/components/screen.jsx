import { useState, useEffect } from "react";
import Phone from '../images/checkout.gif';

function Screen() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula o scale baseado no scroll
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0001; // Ajuste a velocidade de crescimento
      setScale(newScale > 2 ? 2 : newScale); // Limite de escala para 2x
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black pt-24 mb-12">
      <div className='p-4 space-y-4 text-center container mx-auto w-[750px]'>
      <span className='text-gray-400 text-md border border-gray-400 py-2 px-6 rounded-full animate-fadeIn'>Conheça</span>
      <h2 className='text-white font-bold text-4xl animate-fadeIn'>Falando mais sobre o TeuCard</h2>
      <p className='text-white animate-fadeIn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo lorem, luctus a mattis a, aliquam in ex. Nam at interdum ligula, sed congue orci.</p>
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
