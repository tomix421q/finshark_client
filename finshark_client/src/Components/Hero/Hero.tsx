import React from 'react'
import hero from './hero.png'
import { Link } from 'react-router-dom'

interface Props {}
const Hero: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <section id='hero'>
      <div className='container flex flex-col-reverse mx-auto p-8 lg:flex-row h-screen justify-center items-center'>
        <div className='flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52'>
          <h1 className='text-5xl font-bold text-center lg:text-6xl lg:max-w-lg lg:text-left lg:text-[80px]'>
            Financial data with no news.
          </h1>
          <p className='text-2xl text-center text-gray-400 lg:max-w-lg lg:text-left xl:text-[40px] leading-snug'>
            Search relevant financial documents without fear mongering and fake news.
          </p>
          <div className='mx-auto lg:mx-0'>
            <Link
              to='/search'
              className='py-5 px-10 text-2xl font-bold text-white bg-lightGreen rounded lg:py-4 hover:opacity-70 shadow-lg shadow-black'
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className='mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2 '>
          <img className='xl:w-[400px]' src={hero} alt='image' />
        </div>
      </div>
    </section>
  )
}
export default Hero
