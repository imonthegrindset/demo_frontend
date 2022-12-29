import { Navbar } from './index'
import { Faq } from './index'
import { HiCursorClick, HiAcademicCap, HiLightningBolt } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'

export default function Pricing() {
    return (
        <>
            <Navbar />
            <div className='w-full px-10'>
                <h1 className='text-3xl w-full text-center mt-16'>Ready to get started?</h1>
                <h5 className='text-center mt-1'>Join over 80,000 people writing content with Randy</h5>

                <div className='flex flex-row justify-center gap-6 mt-8' >
                    <div className='flex flex-col gap-3'>
                        <div className='text-4xl flex justify-center'><HiAcademicCap /></div>
                        <div className='text-[.7rem] text-center'>Boost grades with better essays</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-4xl flex justify-center'><HiLightningBolt /></div>
                        <div className='text-[.7rem] text-center'>Boost grades with better essays</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-4xl flex justify-center'><HiCursorClick /></div>
                        <div className='text-[.7rem] text-center'>Boost grades with better essays</div>
                    </div>
                </div>
            </div>

            <div>
                <DivPricing />
            </div>

            <div>
                <DivPricing />
            </div>


            <div>
                <DivPricing />
            </div>

            <div className='bg-black text-white py-5'>
                <h1 className='text-2xl font-bold px-5 py-3'>Questions? Answers.</h1>
                <h3 className='text-sm px-5 pb-6'>Don't see your question? E-mail support@randy.ai </h3>

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
                        <div className="p-5 pl-8 pt-2 text-slate-300 lg:px-3 lg:pt-3">
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
                        <div className="p-5 pl-8  pt-2 text-slate-300 lg:px-3 lg:pt-3">
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
                        <div className="p-5  pl-8  pt-2 text-slate-300 lg:px-3 lg:pt-3">
                            <p className="tracking-wide text-sm lg:text-xl lg:w-3/4">Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                                Paragraph. Paragraph. Paragraph. Paragraph. Paragraph. Paragraph.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                
            </div>

        </>
    )
}

export function DivPricing() {
    return (
        <div className='flex flex-col bg-slate-100 rounded-lg h-[40rem] mx-5 my-8 px-5'>
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