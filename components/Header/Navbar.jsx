"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from "@/app/assets/NavItems";
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = ({ setOpen, sticky }) => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const pathName = usePathname();

    return (
        <>
            {navItems.map(link => (
                <div key={link.id}>
                    <div className={`group font-semibold uppercases duration-300 ${sticky && "bg-white"}`} >
                        <Link

                            href={link.path}
                            onClick={() => {
                                heading !== link.title ? setHeading(link.title) : setHeading("");
                                setSubHeading("");
                                link.path && setOpen(false)
                            }
                            }
                            className={`mx-3 flex md:justify-center justify-between items-center hover:md:text-[#282776] ${pathName === link.path ? "md:border-b-2 border-b-0 border-[#282776] text-[#282776]" : ""} ${sticky ? "text-base py-4" : "md:py-6 py-4"}`}>
                            {link.title}
                            <span className="text-xl group-hover:rotate-180">
                                {
                                    link.subMenu && <MdKeyboardArrowDown />
                                }
                            </span>
                        </Link>
                        {link.subMenu && (
                            <div>
                                <div className={`absolute ${sticky ? "top-[3.5rem]" : "top-[8.2rem]"} z-40 hidden group-hover:md:block hover:md:block`}>

                                    <div className={`bg-[#282776] text-white opacity-90 p-2 grid ${link?.subMenu?.length < 5 ? `md:grid-cols-1` : `md:grid-cols-2`}  grid-cols-1 gap-2`}>
                                        {
                                            link.subMenu.map((mysublinks) => (
                                                <div key={mysublinks.id} className={`p-1 group/item`}>
                                                    <Link
                                                        href={mysublinks.path}
                                                        onClick={() => mysublinks.path && setOpen(false)}
                                                        className='flex justify-between hover:bg-white hover:text-[#006AFF] px-2'
                                                    >
                                                        {mysublinks.title}
                                                        <span className="text-xl group-hover/item:rotate-180">
                                                            {
                                                                mysublinks.subMenu && <MdKeyboardArrowDown />
                                                            }
                                                        </span>
                                                    </Link>
                                                    {/* {mysublinks?.subMenu && (
                                                        <div>
                                                            <div className='absolute z-40 hidden group-hover/item:md:block hover:md:block'>
                                                                <div className='py-3'>
                                                                    <div className='w-4 h-4 absolute left-3 mt-1 bg-[#FFB600] rotate-45'></div>
                                                                </div>
                                                                <div className="bg-[#FFB600] text-white text-sm p-2">
                                                                    {
                                                                        mysublinks?.subMenu?.map((mysublink) => (
                                                                            <div key={mysublink.id} className='py-1'>
                                                                                <Link
                                                                                    href={mysublink.path}
                                                                                    onClick={() => mysublink.path && setOpen(false)}
                                                                                >
                                                                                    {mysublink.title}
                                                                                </Link>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )} */}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* mobile menus */}
                    <div
                        className={`
                        ${heading === link.title ? "md:hidden" : "hidden"}
                      `}
                    >
                        {/* sublinks */}
                        {link?.subMenu?.map((slinks) => (
                            <div key={slinks.id}>
                                <div className='group/item z-30'>
                                    <Link
                                        href={slinks.path}
                                        onClick={() => {
                                            subHeading !== slinks.title
                                                ? setSubHeading(slinks.title)
                                                : setSubHeading("");
                                            slinks.path && setOpen(false)
                                        }
                                        }
                                        className="py-2 md:ml-0 ml-5 md:pr-0 pr-3 flex justify-between items-center"
                                    >
                                        {slinks.title}
                                        <span className="text-xl group-hover/item:rotate-180">
                                            {
                                                slinks.subMenu && <MdKeyboardArrowDown />
                                            }
                                        </span>
                                    </Link>

                                    {/* <div
                                        className={`${subHeading === slinks?.title ? "md:hidden" : "hidden"}`}
                                    >
                                        subsublinks
                                        {slinks?.subMenu?.map((slink) => (
                                            <div key={slink.id}>
                                                <div>
                                                    <Link
                                                        href={slink.path}
                                                        onClick={() => {
                                                            subHeading !== slink.title
                                                                ? setSubHeading(slink.title)
                                                                : setSubHeading("");
                                                            slink.path && setOpen(false)
                                                        }
                                                        }
                                                        className="md:ml-0 ml-10 my-2 flex justify-between items-center"
                                                    >
                                                        {slink.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* <div className="flex justify-center items-center gap-6">
                <Link href="/cart" className='md:text-black text-white cart_position'>
                    <RiShoppingBasket2Line size={24} />
                    <span className='bg-indigo-950 text-white'>0</span>
                </Link>
                <Link href="/loginPage">
                    <button className='px-4 py-2 bg-[#1e3a8a] hover:bg-indigo-700 text-white rounded'>Sign Up</button>
                </Link>
            </div> */}
        </>
    );
};

export default Navbar;