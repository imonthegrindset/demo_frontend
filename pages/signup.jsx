import { BsGoogle } from 'react-icons/bs'
import { HiOutlineArrowRight } from 'react-icons/hi'

export default function SignUp() {
    return (
        <>
            <div className='lg:flex lg:flex-row lg:w-full'>
                <div className="px-5 min-h-screen flex flex-col justify-center gap-5 lg:w-1/4 lg:px-16">
                    <div className="font-[900] text-2xl">Create your account</div>
                    <button className='flex flex-row gap-3 w-full bg-black text-white py-3 rounded-md items-center justify-center font-bold'><BsGoogle />Continue with Google</button>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <div className='w-1/4 border-[1px] border-slate-300'></div>
                        <div className='w-1/2 text-[.72rem] text-slate-400 font-bold'>Or register with your email</div>
                        <div className='w-1/4 border-[1px] border-slate-300'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[.8rem]' htmlFor="">Email address</label>
                            <input type="text" className='border-[1px] border-slate-300 rounded-md shadow-md p-1 mb-2' />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[.8rem]' htmlFor="">Password</label>
                            <input type="text" className='border-[1px] border-slate-300 rounded-md shadow-md p-1' />

                        </div>
                        <button className='flex flex-row gap-3 w-full bg-white py-2 rounded-md items-center justify-center text-md border-[1px] border-slate-300 rounded-md shadow-md mt-5'>Continue <HiOutlineArrowRight /> </button>
                        <h6 className='text-slate-400 text-[.8rem] mx-auto mt-5'>Already have an account? <span className='text-black'>Log In</span></h6>
                    </div>
                </div>
                <div className='lg:w-3/4 lg:bg-black lg:min-h-screen lg:flex lg:items-center lg:justify-center lg:flex lg:flex-col lg:gap-12'>
                    <div className='hidden lg:block lg:font-bold lg:text-3xl lg:text-white lg:w-[35rem] lg:text-center'>Join over 70,000+ college students writing their essays with Randy</div>
                    <div className='lg:text-2xl lg:text-slate-300 lg:font-bold lg:w-[45rem] lg:text-center'>University Logo - University Logo - University Logo - University Logo - University Logo</div>
                </div>
            </div>

        </>

    )
}