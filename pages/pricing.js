import { Navbar } from './index'
import { Faq } from './index'
import { HiCursorClick, HiAcademicCap, HiLightningBolt } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'
import { GiStarsStack } from 'react-icons/gi'
import hottie from '../public/hottie.jpg'
import review from '../public/review.svg'
import behind from '../public/behind.svg'
import Image from 'next/image'

export default function Pricing() {
    return (
        <>
            <Navbar />
            <div className='w-full px-10 lg:pt-16'>
                <h1 className='text-3xl w-full text-center mt-16 lg:text-5xl'>Ready to get started?</h1>
                <h5 className='text-center mt-1 lg:text-lg lg:mt-5'>Join over 80,000 people writing content with Randy</h5>

                <div className='flex flex-row justify-center gap-6 mt-8 lg:gap-8 lg:my-12' >
                    <div className='flex flex-col gap-3'>
                        <div className='text-4xl flex justify-center'><HiAcademicCap /></div>
                        <div className='text-[.7rem] text-center lg:text-[.9rem]'>Boost grades with better essays</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-4xl flex justify-center'><HiLightningBolt /></div>
                        <div className='text-[.7rem] text-center lg:text-[.9rem]'>Boost grades with better essays</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-4xl flex justify-center'><HiCursorClick /></div>
                        <div className='text-[.7rem] text-center lg:text-[.9rem]'>Boost grades with better essays</div>
                    </div>
                </div>
            </div>

            <div className='lg:w-full lg:flex lg:flex-row lg:justify-center lg:items-center lg:pb-16'>
                <div className='lg:w-1/5'>
                    <DivPricing />
                </div>

                <div className='lg:w-1/5'>
                    <DivPricing2/>
                </div>
                <div className='lg:w-1/5'>
                    <DivPricing />
                </div>
            </div>


            <div className='bg-black text-white py-5 lg:px-80 lg:py-16'>
                <h1 className='text-2xl font-bold px-5 py-3 lg:text-5xl'>Questions? Answers.</h1>
                <h3 className='text-sm px-5 pb-6 lg:text-xl'>Don't see your question? E-mail support@randy.ai </h3>

                <div className='relative w-full overflow-hidden lg:w-full lg:mb-5'>

                    <input type="checkbox" name="" id="" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                    <div className='bg-transparent h-12 w-full pl-5 flex items-center lg:pl-0 lg:my-5 lg:mb-[-2px]'>
                        <h1 className='text-white font-bold px-3 lg:text-2xl lg:ml-3'>What is AI?</h1>
                    </div>

                    <div className="absolute  mr-8 top-3 right-3 text-white transition-transform duration-300 rotate-0 peer-checked:rotate-180 lg:mr-0 lg:top-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-8 lg:h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    <div className="bg-transparent overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
                        <div className="p-5 pt-2 pl-8 text-slate-300 lg:px-3 lg:pt-3">
                            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                                Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='relative w-full overflow-hidden lg:w-full lg:mb-5'>

                    <input type="checkbox" name="" id="" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                    <div className='bg-transparent h-12 w-full pl-5 flex items-center lg:pl-0 lg:my-5 lg:mb-[-2px]'>
                        <h1 className='text-white font-bold px-3 lg:text-2xl lg:ml-3'>What is AI?</h1>
                    </div>

                    <div className="absolute  mr-8 top-3 right-3 text-white transition-transform duration-300 rotate-0 peer-checked:rotate-180 lg:mr-0 lg:top-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-8 lg:h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    <div className="bg-transparent overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
                        <div className="p-5 pl-8 pt-2 text-slate-300 lg:px-6 lg:pt-3">
                            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                                Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='relative w-full overflow-hidden lg:w-full lg:mb-5'>

                    <input type="checkbox" name="" id="" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                    <div className='bg-transparent h-12 w-full pl-5 flex items-center lg:pl-0 lg:my-5 lg:mb-[-2px]'>
                        <h1 className='text-white font-bold px-3 lg:text-2xl lg:ml-3'>What is AI?</h1>
                    </div>

                    <div className="absolute  mr-8 top-3 right-3 text-white transition-transform duration-300 rotate-0 peer-checked:rotate-180 lg:mr-0 lg:top-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-8 lg:h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    <div className="bg-transparent overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
                        <div className="p-5 pl-8  pt-2 text-slate-300 lg:px-6  lg:pt-3">
                            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                                Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='relative w-full overflow-hidden lg:w-full lg:mb-5'>

                    <input type="checkbox" name="" id="" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                    <div className='bg-transparent h-12 w-full pl-5 flex items-center lg:pl-0 lg:my-5 lg:mb-[-2px]'>
                        <h1 className='text-white font-bold px-3 lg:text-2xl lg:ml-3'>What is AI?</h1>
                    </div>

                    <div className="absolute  mr-8 top-3 right-3 text-white transition-transform duration-300 rotate-0 peer-checked:rotate-180 lg:mr-0 lg:top-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-8 lg:h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    <div className="bg-transparent overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-40">
                        <div className="p-5  pl-8  pt-2 text-slate-300 lg:px-6  lg:pt-3">
                            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                                Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <SocialProof />
            </div>

            <div>
                <Reminder />
            </div>

        </>
    )
}

export function DivPricing() {
    return (
        <div className='flex flex-col bg-slate-100 rounded-lg h-[40rem] mx-5 my-8 px-5 shadow-md'>
            <h3 className='font-bold text-xl mx-auto mt-5'>Starter</h3>
            <h5 className='mx-auto p-4 text-sm border-b-[1px] border-slate-300'>For the hobbyist just getting started</h5>

            <div className='flex flex-col gap-3 items-center mt-5'>

                <h4 className='text-4xl font-bold'>$9.99</h4>
                <h3 className='text-2xl '>10 Essays</h3>
                <button className='bg-black text-white w-full py-3 rounded-[.2rem] mx-3 mt-3'>Start Free</button>
                <h6 className='text-[.6rem] text-slate-400'>This is small grey text which cites some legal things.</h6>
            </div>

            <div className='flex flex-col gap-5'>
                <h5 className='font-bold mt-8'>Quick Overview:</h5>
                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>
                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>

                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>

                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>

                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>
                <h6 className='text-[.7rem] underline'>See all features</h6>


            </div>
        </div>
    )
}

export function DivPricing2() {
    return (
        <div className='flex flex-col bg-slate-100 rounded-lg h-[40rem] mx-5 my-8 px-5 shadow-md lg:border-2 lg:border-black lg:shadow-xl lg:scale-105'>
            <h3 className='font-bold text-xl mx-auto mt-5'>Starter</h3>
            <h5 className='mx-auto p-4 text-sm border-b-[1px] border-slate-300'>For the hobbyist just getting started</h5>

            <div className='flex flex-col gap-3 items-center mt-5'>

                <h4 className='text-4xl font-bold'>$9.99</h4>
                <h3 className='text-2xl '>10 Essays</h3>
                <button className='bg-black text-white w-full py-3 rounded-[.2rem] mx-3 mt-3'>Start Free</button>
                <h6 className='text-[.6rem] text-slate-400'>This is small grey text which cites some legal things.</h6>
            </div>

            <div className='flex flex-col gap-5'>
                <h5 className='font-bold mt-8'>Quick Overview:</h5>
                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>
                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>

                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>

                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>

                <div className='flex flex-row gap-2 items-center text-md'>
                    <AiOutlineCheck className='text-green-400' />
                    <div>This is a feature</div>
                </div>
                <h6 className='text-[.7rem] underline'>See all features</h6>


            </div>
        </div>
    )
}

export function Reminder() {
    return (
        <div className='w-full h-80 flex justify-center items-center flex-col bg-gradient-to-b from-white to-blue-200 lg:gap-2'>
            <div className='text-2xl text-black font-bold text-center lg:text-5xl lg:w-[50rem]'>Ready for your AI sidekick Randy to write your essays? </div>
            <h6 className='text-lg mt-2 lg:text-2xl'>Boost your grades & save time with AI</h6>
            <button className='bg-black text-white w-1/2 py-3 rounded-[.2rem] mx-3 mt-8 lg:w-[13rem] lg:text-lg'>Choose Your Plan</button>
        </div>

    )
}

export function SocialProof() {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-4 my-5 lg:gap-8 lg: my-24'>
            <div className='text-[0.8rem] flex flex-row items-center gap-2 border-2 border-black rounded-[100px] p-2 lg:p-2 lg:text-lg lg:px-6'><GiStarsStack /> Rated 4.8/5 stars in 800+ reviews</div>
            <h1 className='text-2xl font-bold px-5 text-center lg:text-5xl lg:w-[70rem]'>Randy is rated the #1 platform for college students and essays</h1>
            <div className='relative'>
                <Image
                    className='rounded-md z-10 lg:w-[30rem]'
                    src={review}
                    alt="Picture of the author"
                    width={250}
                    height={250}
                />
            </div>

        </div>
    )
}