"use client"
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegistrationForm = ({ role }) => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();
    const pathname = usePathname();
    const router = useRouter()
    const { user, userRegistration, isLoading, error, googleSignIn } = useAuth();
    console.log(role);

    const onSubmitApplicant = (data) => {
        if (data.password === data.confirmPassword) {
            toast.warning('Your password did not match!')
            return
        }
        userRegistration(data?.email, data.name, data?.password, pathname, router);

    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ name: "", email: "", password: "", confirmPassword: "" })
        }
    }, [isSubmitSuccessful, reset]);


    return (
        <div className='bg-[#24365E] p-5 rounded-xl'>
            <h4 className='text-white mb-4 font-bold'>Create an account</h4>
            <form onSubmit={handleSubmit(onSubmitApplicant)} className='flex flex-col gap-3 w-80'>
                <input
                    type='text'
                    placeholder='Enter your full name'
                    {...register("name", { required: true })}
                    className='p-3 focus:outline-none text-sm bg-gray-100 rounded'
                />

                {errors.name && <span className='text-red-400 text-sm'>*Please provide your full name!</span>}

                <input
                    type='email'
                    placeholder='Enter your email'
                    {...register("email", { required: true })}
                    className='p-3 focus:outline-none text-sm bg-gray-100 rounded'
                />

                {errors.email && <span className='text-red-400 text-sm'>*Please provide valid email address!</span>}
                {/* { pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/ } */}

                <input
                    type='password'
                    placeholder='Password'
                    {...register("password", { required: true })}
                    className='p-3 focus:outline-none text-sm bg-gray-100 rounded'
                />

                {errors.password && <span className='text-red-400 text-sm'>*Please provide a strong password!</span>}

                <input
                    type='password'
                    placeholder='Confirm password'
                    {...register("confirmPassword", { required: true })}
                    className='p-3 focus:outline-none text-sm bg-gray-100 rounded'
                />

                {errors.confirmPassword && <span className='text-red-400 text-sm'>*Please provide confirm password!</span>}

                <button
                    type="submit"
                    className=' hover:bg-[#3e8eff] bg-[#006AFF] text-white duration-300 py-2 focus:outline-none rounded'
                >
                    Create an account
                </button>

            </form>
            <h4 className='text-sm text-white text-center mt-6'>Already have an account? <Link href="/login-page" className='text-[#006AFF] font-semibold'>Sign in now</Link></h4>
        </div>
    );
};

export default RegistrationForm;