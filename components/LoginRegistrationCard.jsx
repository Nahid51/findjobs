"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import briefcasePhoto from "@/public/icons/briefcase.png";
import managerPhoto from "@/public/icons/manager.png";
import { MdClose } from 'react-icons/md';
import useAuth from '@/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import LazyImage from './LazyImage';
import Motion from './Motion';

const LoginRegistrationCard = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [popup, setPopup] = useState(false);
    const { user, googleSignIn, logOut } = useAuth();
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();

    const onSubmitApplicant = (data) => console.log(data);
    const onSubmitEmployee = (data) => console.log(data);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ email: "", password: "" })
        }
    }, [isSubmitSuccessful, reset]);

    const handleGoogleSignIn = () => {
        googleSignIn(pathname, router)
    };

    const handleSignOut = () => {
        logOut()
    };

    return (
        <div>
            {
                popup &&
                <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#24365E] p-10 z-20'>
                    <button onClick={() => setPopup(false)} className="absolute right-1 top-1 bg-white px-1 py-1"><MdClose /></button>
                    <form onSubmit={handleSubmit(onSubmitApplicant)} className='flex flex-col gap-3 w-80'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            {...register("email", { required: true })}
                            className='p-2 focus:outline-none text-sm'
                        />

                        {errors.email && <span className='text-white text-sm'>*Please provide valid email address!</span>}
                        {/* { pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/ } */}

                        <input
                            type='password'
                            placeholder='Enter your password'
                            {...register("password", { required: true })}
                            className='p-2 focus:outline-none text-sm'
                        />

                        {errors.password && <span className='text-white text-sm'>*Please provide valid password!</span>}

                        <button
                            type="submit"
                            className=' hover:bg-[#3e8eff] bg-[#006AFF] text-white duration-300 py-2'
                        >
                            Login
                        </button>

                    </form>

                    <p className='text-white text-center my-3'>or</p>

                    <button onClick={handleGoogleSignIn} className='w-full hover:bg-[#ff6055] bg-[#E94235] text-white duration-300 py-2'>Sign In with Google</button>
                </div>
            }
            {
                popup &&
                <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#24365E] p-10 z-20'>
                    <button onClick={() => setPopup(false)} className="absolute right-1 top-1 bg-white px-1 py-1"><MdClose /></button>
                    <form onSubmit={handleSubmit(onSubmitEmployee)} className='flex flex-col gap-3 w-80'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            {...register("email", { required: true })}
                            className='p-2 focus:outline-none text-sm'
                        />

                        {errors.email && <span className='text-white text-sm'>*Please provide valid email address!</span>}
                        {/* { pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/ } */}

                        <input
                            type='password'
                            placeholder='Enter your password'
                            {...register("password", { required: true })}
                            className='p-2 focus:outline-none text-sm'
                        />

                        {errors.password && <span className='text-white text-sm'>*Please provide valid password!</span>}

                        <button
                            type="submit"
                            className=' hover:bg-[#3e8eff] bg-[#006AFF] text-white duration-300 py-2'
                        >
                            Login
                        </button>

                    </form>

                    <p className='text-white text-center my-3'>or</p>

                    <button onClick={handleGoogleSignIn} className='w-full hover:bg-[#ff6055] bg-[#E94235] text-white duration-300 py-2'>Sign In with Google</button>
                </div>
            }
            <div className='flex md:flex-row flex-col items-center justify-center gap-20 shadow-xl md:p-20 p-0 rounded-lg'>
                <Motion motion1={"translate-y-0 duration-1000 ease-in-out"} motion2={"translate-y-40 duration-1000 ease-in-out"}>
                    <div className='flex items-start gap-5 shadow-lg p-10 rounded-lg hover:shadow-2xl'>
                        <LazyImage url={briefcasePhoto} text={'briefcase photo'} x={80} w={80} />
                        <div>
                            <h4 className='text-xl font-bold'>Applicants</h4>
                            <p className='text-gray-500 py-3'>Sign in or create your Find Jobs account to manage your profile</p>
                            <div className='flex flex-row items-center gap-6'>

                                {user.email ?
                                    <button onClick={handleSignOut} className='px-4 py-2 bg-[#24365E] hover:bg-[#006AFF] text-white rounded'>Sign Out</button>
                                    :
                                    <button onClick={() => setPopup(true)} className='px-4 py-2 bg-[#24365E] hover:bg-[#006AFF] text-white rounded'>Sign In</button>}

                                <Link href="applicants-registration-form" className='hover:text-[#006AFF]'>Create Account</Link>
                            </div>
                        </div>
                    </div>
                </Motion>
                <Motion motion1={"translate-y-0 duration-1000 ease-in-out"} motion2={"translate-y-40 duration-1000 ease-in-out"}>

                    <div className='flex items-start gap-5 shadow-lg p-10 rounded-lg hover:shadow-2xl'>
                        <LazyImage url={managerPhoto} text={'manager photo'} x={80} w={80} />
                        <div>
                            <h4 className='text-xl font-bold'>Employeers</h4>
                            <p className='text-gray-500 py-3'>Sign in or create account to find the best candidates in the fastest way</p>
                            <div className='flex flex-row items-center gap-6'>

                                {user.email ?
                                    <button onClick={handleSignOut} className='px-4 py-2 bg-[#24365E] hover:bg-[#006AFF] text-white rounded'>Sign Out</button>
                                    :
                                    <button onClick={() => setPopup(true)} className='px-4 py-2 bg-[#24365E] hover:bg-[#006AFF] text-white rounded'>Sign In</button>}

                                <Link href="/employeers-registration-form" className='hover:text-[#006AFF]'>Create Account</Link>
                            </div>
                        </div>
                    </div>
                </Motion>
            </div>
        </div>
    );
};

export default LoginRegistrationCard;