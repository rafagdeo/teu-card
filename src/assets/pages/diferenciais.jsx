import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../images/banner-diff.jpg'
import Cartoes from '../images/cards.png'
import Bg from '../video/bg-video.mp4'

const diferenciais = () => {
  return (
    <div>
      <Header />
      <section className='px-6 bg-auto bg-no-repeat h-96 gap-6 bg-right content-center' style={{ backgroundImage: `url(${Banner})` }}>
          <div className='content-center max-w-[1440px] mx-auto flex'>
            <div className='space-y-4 w-1/2'>
            <h2 className='text-white font-gendy text-7xl font-medium animate-fadeIn'>Mais que um banco</h2>
            <p className='text-gray-300 text-font-muli'>Mais liberdade para fazer tudo que quiser </p>
            <form action="" className='space-x-4'>
                  <input type="text" name="" id="text" placeholder='preencha com seu e-mail' className='text-white border border-white px-4 text-md py-2 w-1/2 rounded-lg bg-transparent focus:border-brandeis focus:border hover:border-brandeis'/>
                  <button type="button" className='bg-brandeis border border-brandeis text-white font-bold px-6 py-2 rounded-lg w-2/2 hover:bg-blue-700'>Quero conheçer</button>
            </form>
            <span className='text-gray-300 font-muli pl-4'>Conheça os benefícios do teucard de graça</span>
            </div>
            <div className='w-1/2'>

            </div>
          </div>
        </section>

        <section className='bg-white py-24' style={{ backgroundVideo: `url(${Bg})` }}>
            <div className='content-center max-w-[1440px] mx-auto flex'>
                  <div className='items-center content-center'>
                        <h2 className='text-black font-gendy text-5xl font-medium '>Mais que um banco</h2>
                        <p className='text-black-300 text-xl font-muli'>trazemos total liberdade e segurança para suas compras.</p>
                  </div>
                  <div className='items-center content-center '>
                        <img src={Cartoes} alt="cartão teucard" className='animate-spin duration-100'/>
                  </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default diferenciais
