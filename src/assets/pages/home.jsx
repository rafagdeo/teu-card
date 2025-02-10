import React from 'react'
import Card from '../components/card'
import Screen from '../components/screen'
import Banner from '../images/banner-diff.jpg'
import Gonbank from '../images/banner.png'
import Not from '../images/not.png'
import Depoimentos from '../components/Depoimentos'
import FAQAccordion from '../components/FAQAccordion'


const home = () => {
  return (
    <div>
    <Card />
    <Screen />
    <section className='pt-8 pb-12 bg-[#F0F0F0]'>
      <div className='space-y-4 md:grid container lg:flex p-4 mx-auto w-[1440px] gap-12'>
        <div className='grid content-center items-center'>
        <h3 className='text-[#212121] font-light text-3xl animate-fadeIn'>Benefícios que são só teus</h3>
          <h2 className='text-black font-bold text-5xl uppercase animate-fadeIn'>Mais texto chamativo informando sobre os</h2>
          <h2 className='bg-gradient-to-r from-brandeis via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold text-7xl uppercase animate-fadeIn'>benefícios</h2>
        </div>
        <div className='gap-4 grid mx-auto container md:grid-cols-2'>
          <div className='p-12 border border-gray-300 rounded-lg items-center content-center hover:border-brandeis transition-transform transform hover:-translate-y-1 duration-300'>
            <span className='font-bold text-2xl'>Descontos Exclusivos:</span>
            <p className='text-md'>Só para quem tem o Teu Card</p>
          </div>
          <div className='p-12 border border-gray-300 rounded-lg items-center content-center hover:border-brandeis transition-transform transform hover:-translate-y-1 duration-300'>
            <span className='font-bold text-2xl'>Comodidade:</span>
            <p className='text-md'>Na hora de pagar, é tudo fácil e rápido – do seu jeito. </p>
          </div>
          <div className='p-12 border border-gray-300 rounded-lg items-center content-center hover:border-brandeis transition-transform transform hover:-translate-y-1 duration-300'>
            <span className='font-bold text-2xl'>Total Liberdade:</span>
            <p className='text-md'>Porque você merece fazer escolhas com liberdade, sem limitações. O que é Teu deve ser aproveitado da melhor forma." </p>
          </div>
          <div className='p-12 border border-gray-300 rounded-lg items-center content-center hover:border-brandeis transition-transform transform hover:-translate-y-1 duration-300'>
            <span className='font-bold text-2xl'>Sem burocracia:</span>
            <p className='text-md'>O que você precisa é ter um cartão Teu, sem enrolação.</p>
          </div>
        </div>
      </div>
    </section>


    <section className='bg-[#212121] py-24'>
    <div className='grid gap-4 mx-auto container md:w-[1440px] md:flex md:justify-between items-center justify-center '>
      <div className='container mx-auto grid gap-4'>
          <h2 className='text-white font-bold md:text-4xl uppercase'>Quer ter o seu Teu Card? é fácil assim!</h2>
          <p className='text-md text-white'>Você já sabe: o Teu Card é seu! E para garantir o seu, é só escolher o plano que mais combina com a sua rotina. Em instantes, você estará aproveitando todos os benefícios que preparamos para você. Sem taxas escondidas, sem enrolação. O que é seu, é seu – e o Teu Card chegou para facilitar sua vida.</p>
          </div>
          <div className='container mx-auto text-right'>
          <a href="#" className='bg-brandeis px-6 py-2 rounded-full text-white font-bold hover:bg-white hover:text-black'>Quero meu Teu Card agora!</a>
          </div>
      </div>
      </section>

      <Depoimentos />

      <section className='container md:w-[750px] mx-auto pb-32 space-y-4'>
        <h2 className='text-center text-7xl text-primary font-bold'>FAQ</h2>
        <h3 className='text-white font-bold md:text-4xl text-center uppercase '>Tira Suas Dúvidas Sobre o Teu Card</h3>
        <p className='text-md text-white'>Quer saber como o Teu Card funciona? Aqui você encontra as respostas para tudo que você precisa! </p>
          <FAQAccordion />
      </section>
      
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

    <section className='bg-[#F0F0F0] py-12'>
      <div className='flex py-4 items-center mx-auto container md:w-[1440px] gap-12'>
        <div className="w-1/2 p-12 content-center items-center bg-cover rounded-lg bg-center space-y-2 transition-transform duration-200 ease-in-out h-[350px] hover:brightness-75"
      style={{
        backgroundImage: `url(${Gonbank})`,
      }}>
          <h2 className='text-white font-bold text-2xl uppercase'>GonBank</h2>
          <button href="https://gonbank.com.br" className='text-white bg-brandeis px-6 py-2 rounded-full'>Conheça agora</button>
        </div>
        <div className="w-1/2 p-12 content-center items-center bg-cover rounded-lg bg-center space-y-2 transition-transform duration-200 ease-in-out h-[350px] hover:brightness-75"
      style={{
        backgroundImage: `url(${Not})`,
      }}>
          <h2 className='text-white font-bold text-2xl uppercase'>Solicite agora</h2>
          <button href="#" className='text-white bg-brandeis px-6 py-2 rounded-full'>Conheça</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default home
