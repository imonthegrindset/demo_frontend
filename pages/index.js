import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="overflow-x-hidden">
        <section id="home-intro-screen" className='px-4 font-sans min-h-[55rem] text-black lg:px-[18rem]'>
          <Hook />
        </section>
        <section className='px-4 font-sans text-black bg-slate-100 flex justify-center lg:py-8'>
          <DetailsPricing />
        </section>
        <section id="home-intro-screen" className='px-4 py-4 lg:py-0 font-sans min-h-[50rem] text-black flex flex-col justify-center lg:justify-start lg:gap-8'>
          <h1 className='text-3xl font-bold mx-auto mb-5 lg:pt-5 lg:text-4xl lg:mt-8'>Customer Reviews</h1>
          <Reviews />
        </section>
        <section className='px-4 font-sans text-black bg-slate-100 flex justify-center'>
          <Example />
        </section>
        <section className='px-4 font-sans text-black bg- flex justify-center'>
          <Example2 />
        </section>
        <section className='px-4 py-4 font-sans bg-slate-100 text-black bg- flex justify-center min-h-[25rem] max-h-[50rem]'>
          <Faq />
        </section>
      </main>

    </>
  )
}

export function Navbar() {
  return (
    <div id="navbar" className='w-full h-10 bg-black p-7 text-white font-sans flex items-center justify-between lg:p-10 lg:px-[18rem]'>
      <div className='text-2xl font-bold lg:text-3xl'>Randy</div>
      <div className='hidden lg:flex lg:flex-row lg:text-lg lg:gap-4'>
        <div className='ml-16 flex flex-row items-center gap-4 text-white'>Pricing
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div  className='ml-12 flex flex-row items-center gap-4'>Support
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div  className='ml-12 flex flex-row items-center gap-4'> Company
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className='flex-auto flex justify-end items-center gap-3'>
        <div className='text-x lg:hidden'><GiHamburgerMenu /></div>
        <div className='hidden lg:flex lg:text-xl lg:mr-3'>Log In</div>
        <div className='text-sm bg-white shadow-md px-3 py-2 rounded-sm text-black lg:text-lg lg:py-3 lg:px-5'>Start For Free</div>
      </div>
    </div>
  )
}

export function Hook() {
  return (
    <div id="hook-div" className='w-full h-60 px-2 pt-16 flex flex-col gap-16 lg:gap-24'>
      <div className="p-0 lg:pt-32">
        <h6 className="text-[.7rem] tracking-wider pb-2 lg:text-lg">MEET RANDY</h6>
        <h1 className='text-4xl font-bold lg:text-7xl lg:leading-snug'>Create amazing college level essays 10X faster with AI</h1>
      </div>

      <div className='w-full flex flex-col gap-8 lg:flex-row'>
        <p className="lg:text-xl ">Randy is the AI Essay Platform that helps you break through creative blocks to create amazing, original essays 10X faster.</p>
        <button className='w-full bg-black text-white py-3 rounded-[4px]  text-md font-bold border-2 border-black lg:w-[17rem] lg:text-xl lg:p-2'>Start For Free</button>
        <button className='w-full bg-white text-black py-3 rounded-[4px]  text-md font-bold border-2 border-black lg:w-[17rem] lg:text-xl lg:p-2'>Get A Demo</button>
      </div>

    </div>
  )
}

const features = [
  {
    name: 'Near instant essays',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Up to 1000 words',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Citations included',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Citations included',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
]

export function Example() {
  return (
    <div className="bg-slate-100 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">A better way to write essays</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 lg:text-xl">
            Our AI-powered writing tool can generate a high-quality essay in a fraction of the time it would take you to do it yourself.
            Simply input your assignment requirements and let the AI handle the rest.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white sm:shrink-0 lg:w-14 lg:h-14">
                  <feature.icon className="h-8 w-8 lg:h-10 lg:w-10" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900 lg:text-xl">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600 lg:text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Example2() {
  return (
    <div className="bg-white w-full ">
      <div className="mx-auto min-h-[19rem] max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block lg:text-4xl">Ready to dive in?</span>
          <span className="block text-slate-400 lg:text-4xl">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow ">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white hover:bg-slate-700 lg:text-xl lg:mr-1"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-black hover:bg-slate-50 lg:text-xl lg:ml-1"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}




export function Reviews() {
  return (
    <>
      <div className='flex flex-col gap-3 lg:mx-auto lg:gap-8 '>

        <div className="lg:flex lg:flex-row lg:w-[100rem] lg:gap-8 gap-3 flex flex-col">
          <div className='border-[1px] h-40 border-slate-100 p-3 shadow-md rounded-md flex items-center gap-2'>
            <div className='bg-slate-400 rounded-md w-[20rem] h-[90%]'></div>
            <div className='flex flex-col gap-2 p-2 items-between'>
              <p className='text-[0.8rem] lg:text-lg'>This is a review. I am a college kid addicted to free TikTok dopamine and I got finnessed by this company.</p>
              <div className='text-sm lg:text-2xl font-bold'>Sarah Silverman, TikToker</div>
            </div>
          </div>
          <div className='border-[1px] h-40 border-slate-100 p-3 shadow-md rounded-md flex items-center gap-2'>
            <div className='bg-slate-400 rounded-md w-[20rem] h-[90%]'></div>
            <div className='flex flex-col gap-2 p-2 items-between'>
              <p className='text-[0.8rem] lg:text-lg'>This is a review. I am a college kid addicted to free TikTok dopamine and I got finnessed by this company.</p>
              <div className='text-sm lg:text-2xl font-bold'>Sarah Silverman, TikToker</div>
            </div>
          </div>

        </div>

        <div className="lg:flex lg:flex-row lg:w-[100rem] lg:gap-8 gap-3 flex flex-col">
          <div className='border-[1px] h-40 border-slate-100 p-3 shadow-md rounded-md flex items-center gap-2'>
            <div className='bg-slate-400 rounded-md w-[20rem] h-[90%]'></div>
            <div className='flex flex-col gap-2 p-2 items-between'>
              <p className='text-[0.8rem] lg:text-lg'>This is a review. I am a college kid addicted to free TikTok dopamine and I got finnessed by this company.</p>
              <div className='text-sm lg:text-2xl font-bold'>Sarah Silverman, TikToker</div>
            </div>
          </div>
          <div className='border-[1px] h-40 border-slate-100 p-3 shadow-md rounded-md flex items-center gap-2'>
            <div className='bg-slate-400 rounded-md w-[20rem] h-[90%]'></div>
            <div className='flex flex-col gap-2 p-2 items-between'>
              <p className='text-[0.8rem] lg:text-lg'>This is a review. I am a college kid addicted to free TikTok dopamine and I got finnessed by this company.</p>
              <div className='text-sm lg:text-2xl font-bold'>Sarah Silverman, TikToker</div>
            </div>
          </div>

        </div>


        <div className="lg:flex lg:flex-row lg:w-[100rem] lg:gap-8 gap-3 flex flex-col">
          <div className='border-[1px] h-40 border-slate-100 p-3 shadow-md rounded-md flex items-center gap-2'>
            <div className='bg-slate-400 rounded-md w-[20rem] h-[90%]'></div>
            <div className='flex flex-col gap-2 p-2 items-between'>
              <p className='text-[0.8rem] lg:text-lg'>This is a review. I am a college kid addicted to free TikTok dopamine and I got finnessed by this company.</p>
              <div className='text-sm lg:text-2xl font-bold'>Sarah Silverman, TikToker</div>
            </div>
          </div>
          <div className='border-[1px] h-40 border-slate-100 p-3 shadow-md rounded-md flex items-center gap-2'>
            <div className='bg-slate-400 rounded-md w-[20rem] h-[90%]'></div>
            <div className='flex flex-col gap-2 p-2 items-between'>
              <p className='text-[0.8rem] lg:text-lg'>This is a review. I am a college kid addicted to free TikTok dopamine and I got finnessed by this company.</p>
              <div className='text-sm lg:text-2xl font-bold'>Sarah Silverman, TikToker</div>
            </div>
          </div>

        </div>


      </ div>
    </>
  )
}

export function Faq() {
  return (
    <div className='flex flex-col mx-8 '>

      <h1 className='mx-auto font-bold text-3xl py-5 lg:text-5xl lg:py-8'>F.A.Q</h1>

      <div className='relative w-[400px] ml-8 overflow-hidden border-t-[1px]  border-slate-200 lg:w-full lg:mb-5'>

        <input type="checkbox" name="" id="" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
        <div className='bg-transparent h-12 w-full pl-5 flex items-center lg:pl-0 lg:my-5 lg:mb-[-2px]'>
          <h1 className='text-black font-bold lg:text-2xl lg:ml-3'>What is AI?</h1>
        </div>

        <div className="absolute  mr-8 top-3 right-3 text-black transition-transform duration-300 rotate-0 peer-checked:rotate-180 lg:mr-0 lg:top-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-8 lg:h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className="bg-transparent overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
          <div className="p-5 pt-2 text-slate-500 lg:px-3 lg:pt-3">
            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
              Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
            </p>
          </div>
        </div>

      </div>

      <div className='relative w-[400px] ml-8 overflow-hidden border-t-[1px]  border-slate-200 lg:w-full lg:mb-5'>

        <input type="checkbox" name="" id="" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
        <div className='bg-transparent h-12 w-full pl-5 flex items-center lg:pl-0 lg:my-5 lg:mb-[-2px]'>
          <h1 className='text-black font-bold lg:text-2xl lg:ml-3'>What is AI?</h1>
        </div>

        <div className="absolute  mr-8 top-3 right-3 text-black transition-transform duration-300 rotate-0 peer-checked:rotate-180 lg:mr-0 lg:top-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-8 lg:h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className="bg-transparent overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
          <div className="p-5 pt-2 text-slate-500 lg:px-3 lg:pt-3">
            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
              Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
            </p>
          </div>
        </div>

      </div>

      <div className='relative w-[400px] ml-8 overflow-hidden border-t-[1px]  border-slate-200 lg:w-full lg:mb-5'>

        <input type="checkbox" name="" id="" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
        <div className='bg-transparent h-12 w-full pl-5 flex items-center lg:pl-0 lg:my-5 lg:mb-[-2px]'>
          <h1 className='text-black font-bold lg:text-2xl lg:ml-3'>What is AI?</h1>
        </div>

        <div className="absolute  mr-8 top-3 right-3 text-black transition-transform duration-300 rotate-0 peer-checked:rotate-180 lg:mr-0 lg:top-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-8 lg:h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className="bg-transparent overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
          <div className="p-5 pt-2 text-slate-500 lg:px-3 lg:pt-3">
            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
              Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
            </p>
          </div>
        </div>

      </div>

      <div className='relative w-[400px] ml-8 overflow-hidden border-t-[1px]  border-slate-200 lg:w-full lg:mb-5'>

        <input type="checkbox" name="" id="" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
        <div className='bg-transparent h-12 w-full pl-5 flex items-center lg:pl-0 lg:my-5 lg:mb-[-2px]'>
          <h1 className='text-black font-bold lg:text-2xl lg:ml-3'>What is AI?</h1>
        </div>

        <div className="absolute  mr-8 top-3 right-3 text-black transition-transform duration-300 rotate-0 peer-checked:rotate-180 lg:mr-0 lg:top-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-8 lg:h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div className="bg-transparent overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
          <div className="p-5 pt-2 text-slate-500 lg:px-3 lg:pt-3">
            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
              Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
            </p>
          </div>
        </div>

      </div>

    </div>

  )
}

export function DetailsPricing() {
  return (
    <div className='flex flex-col gap-3 items-center p-3 mt-5 lg:gap-8'>
      <div className="text-[.7rem] tracking-wider px-2 py-1 bg-white rounded-[100px] border-[1px] border-slate-100 flex items-center justify-center lg:text-md lg:px-6 lg:py-3">RANDY PRICING</div>
      <div className='flex flex-col gap-3 lg:gap-8'>
        <h1 className='text-2xl text-center lg:text-5xl lg:w-[45rem] lg:font-bold lg:leading-snug'>What amazing essays will you create with AI?</h1>
        <p className='text-sm text-center lg:text-xl'>Discover a pricing plan that works for you.</p>
      </div>
      <button className='w-full bg-black text-white py-3 my-5 rounded-[4px] text-md font-bold border-2 border-black lg:w-1/3 lg:text-xl lg:py-3'>Pricing Details</button>
    </div>

  )
}