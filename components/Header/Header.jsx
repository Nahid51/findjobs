"use client"
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import { MdMenu, MdClose } from "react-icons/md";
import useAuth from '@/hooks/useAuth';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState("");
    const { user, logOut } = useAuth();

    // for sticky navbar
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);


    const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    return (
        <nav className={`bg-[#F8F9FA] ${sticky} shadow-xl`}>
            <div className='container mx-auto'>
                <div className="flex items-center justify-between md:mx-32 mx-3">
                    <Link href="/">
                        {sticky ?
                            <span className='font-extrabold md:text-2xl text-lg text-[#282776]'>FindJobs</span>
                            :
                            <span className='font-extrabold md:text-3xl text-xl text-[#282776]'>FindJobs</span>
                        }
                    </Link>
                    <div className={`md:hidden flex justify-between items-center ${sticky ? "py-4" : "py-5"}`}>
                        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                            {open ? <MdClose /> : <MdMenu />}
                        </div>
                    </div>

                    <ul className="md:flex hidden items-center">
                        <Navbar setOpen={setOpen} sticky={sticky} />
                        <div className='flex items-center text-sm font-bold'>
                            <div>
                                {user.email ?
                                    <button onClick={logOut} className={`px-4 py-2 flex items-center border rounded bg-[#24365E] hover:bg-[#006AFF] text-white duration-300`}><span>Sign Out</span></button>
                                    :
                                    <Link href="/login-page">
                                        <button className={`px-4 py-2 flex items-center border rounded bg-[#24365E] hover:bg-[#006AFF] text-white duration-300`}><span>Sign In</span></button>
                                    </Link>
                                }
                            </div>
                            <div>
                                {user.email ?
                                    <button className={`px-4 py-2 flex items-center `}><span>Refer to get 10 points</span></button>
                                    :
                                    <Link href="/login-page">
                                        <button className={`px-4 py-2 flex items-center `}><span>Create Account</span></button>
                                    </Link>
                                }
                            </div>
                        </div>
                        <div>
                        </div>
                    </ul>

                    {/* Mobile nav */}
                    <ul
                        className={`md:hidden absolute w-full h-screen ${sticky ? "top-[4rem]" : "top-[4.5rem]"} z-40 bg-white bottom-0 p-2 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
                    >
                        <Navbar setOpen={setOpen} sticky={sticky} />
                        <div className='flex items-center justify-center text-sm font-bold'>
                            <div>
                                {user ?
                                    <button className={`px-4 py-2 flex items-center border rounded bg-[#24365E] hover:bg-[#006AFF] text-white duration-300`}><span>Log out</span></button>
                                    :
                                    <Link href="/login-page">
                                        <button className={`px-4 py-2 flex items-center border rounded bg-[#24365E] hover:bg-[#006AFF] text-white duration-300`}><span>Login</span></button>
                                    </Link>
                                }
                            </div>
                            <div>
                                {user ?
                                    <button className={`px-4 py-2 flex items-center `}><span>Refer to get 10 points</span></button>
                                    :
                                    <button className={`px-4 py-2 flex items-center `}><span>Create Account</span></button>}
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;