import './index.css'
import './App.css'
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Card from './assets/components/card'
import Screen from './assets/components/screen'
import Banner from './assets/images/banner.png'
import Not from './assets/images/not.png'


function App() {

  return (
    <>
    <Header />
    <Card />
    <Screen />
    <section className='pt-8 pb-12 bg-[#F0F0F0] md:mt-52'>
      <div className='space-y-4 md:grid container lg:flex p-4 mx-auto w-[1440px] gap-12'>
        <div className='grid content-center items-center'>
        <h3 className='text-[#212121] font-light text-3xl'>Conheça</h3>
          <h2 className='text-[#0E60F1] font-bold text-5xl uppercase'>Mais texto chamativo informando sobre os beneficios</h2>
          <p className='text-lg text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='gap-4 grid mx-auto container md:grid-cols-2'>
          <div className='p-12 border border-gray-300 rounded-lg items-center content-center hover:border-[#0E60F1] transition-transform transform hover:-translate-y-1 duration-300'>
            <span className='font-bold text-3xl'>+25</span>
            <p className='text-xl'>Anos de experiência</p>
          </div>
          <div className='p-12 border border-gray-300 rounded-lg items-center content-center hover:border-[#0E60F1] transition-transform transform hover:-translate-y-1 duration-300'>
            <span className='font-bold text-3xl'>+25</span>
            <p className='text-xl'>Anos de experiência</p>
          </div>
          <div className='p-12 border border-gray-300 rounded-lg items-center content-center hover:border-[#0E60F1] transition-transform transform hover:-translate-y-1 duration-300'>
            <span className='font-bold text-3xl'>+25</span>
            <p className='text-xl'>Anos de experiência</p>
          </div>
          <div className='p-12 border border-gray-300 rounded-lg items-center content-center hover:border-[#0E60F1] transition-transform transform hover:-translate-y-1 duration-300'>
            <span className='font-bold text-3xl'>+25</span>
            <p className='text-xl'>Anos de experiência</p>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-[#212121] py-24'>
    <div className='grid gap-4 mx-auto w-[1440px] md:flex md:justify-between items-center justify-center text-center'>
          <h2 className='text-white font-bold md:text-4xl texte-center uppercase'>São muitos beneficios para você!</h2>
          <a href="#" className='bg-[#0E60F1] px-6 py-2 rounded-full text-white font-bold hover:bg-white hover:text-black'>Entre em contato</a>
      </div>
      
    </section>

    <section className='bg-[#F0F0F0] py-12'>
      <div className='flex py-4 items-center mx-auto w-[1440px] gap-12'>
        <div className="w-1/2 p-12 content-center items-center bg-cover rounded-lg bg-center space-y-2 transition-transform duration-200 ease-in-out h-[350px] hover:brightness-75"
      style={{
        backgroundImage: `url(${Banner})`,
      }}>
          <h2 className='text-white font-bold text-2xl uppercase'>TeuCard</h2>
          <p className='text-lg text-white'>Lorem ipsum </p>
          <button href="#" className='text-white bg-[#0E60F1] px-6 py-2 rounded-full'>Conheça</button>
        </div>
        <div className="w-1/2 p-12 content-center items-center bg-cover rounded-lg bg-center space-y-2 transition-transform duration-200 ease-in-out h-[350px] hover:brightness-75"
      style={{
        backgroundImage: `url(${Not})`,
      }}>
          <h2 className='text-white font-bold text-2xl uppercase'>TeuCard</h2>
          <p className='text-lg text-white'>Lorem ipsum </p>
          <button href="#" className='text-white bg-[#0E60F1] px-6 py-2 rounded-full'>Conheça</button>
        </div>
      </div>
    </section>   
    <Footer /> 
    </>
  )
}

export default App
