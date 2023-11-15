import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const HeaderTop = () => {
    return (
        <div className='bg-[#006AFF] md:flex hidden'>
            <div className='container mx-auto'>
                <div className='md:mx-32 mx-3'>
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center justify-between gap-5 text-gray-200">
                            <Link href="#"><FaFacebookSquare size={20} /></Link>
                            <Link href="#"><FaLinkedin size={20} /></Link>
                            <Link href="#"><FaTwitterSquare size={20} /></Link>
                            <Link href="#"><FaYoutubeSquare size={20} /></Link>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <button className="px-4 py-2 border border-gray-200 text-white font-semibold text-sm duration-300 hover:text-gray-700 hover:bg-gray-200 rounded-md">Drop Your CV</button>
                            <button className="px-4 py-2 border border-gray-200 text-white font-semibold text-sm duration-300 hover:text-gray-700 hover:bg-gray-200 rounded-md">Post A Job</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;