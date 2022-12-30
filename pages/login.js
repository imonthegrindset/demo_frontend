import { BsGoogle } from 'react-icons/bs'

export default function LogIn() {
    return (
        <div className="px-5 min-h-screen flex flex-col justify-center gap-5 lg:px-[49.7rem]">
            <div className="font-[900] text-2xl">Sign in to your account</div>
            <button className='flex flex-row gap-3 w-full bg-black text-white py-3 rounded-md items-center justify-center font-bold'><BsGoogle />Continue with Google</button>
            <div className='flex flex-row justify-center items-center gap-2'>
                <div className='w-1/4 border-[1px] border-slate-300'></div>
                <div className='w-1/2 text-[.75rem] text-slate-400 font-bold'>Or sign in with your email</div>
                <div className='w-1/4 border-[1px] border-slate-300'></div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[.8rem]' htmlFor="">Email address</label>
                    <input type="text" className='border-[1px] border-slate-300 rounded-md shadow-md p-1' />

                </div>
                <button className='flex flex-row gap-3 w-full bg-white py-2 rounded-md items-center justify-center text-md border-[1px] border-slate-300 rounded-md shadow-md mt-5'>Continue with email</button>
                <h6 className='text-slate-400 text-[.8rem] mx-auto mt-5'>Don't have an account yet? <span className='text-black'>Get started here</span></h6>
            </div>
        </div>
    )
}