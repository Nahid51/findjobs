import Link from 'next/link';
import Image from 'next/image';
import facebook2 from "@/public/icons/facebook2.png";
import google from "@/public/icons/search.png";
import instagram from "@/public/icons/instagram.png";
import youtube from "@/public/icons/youtube.png";
import linkedin from "@/public/icons/linkedin2.png";
import styles from "@/styles/footer.module.css";
import LazyImage from './LazyImage';
import Motion from './Motion';

const Footer = () => {
    return (
        <div className='md:h-[50vh] h-full flex items-center bg-[#24365E]'>
            <div className='container mx-auto'>
                <div className='md:mx-32 mx-3 py-10'>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-10 text-white'>
                        <div className={`${styles.footerLink}`}>
                            <h4 className='text-xl font-semibold mb-5'>About Us</h4>
                            <ul className='text-sm flex flex-col gap-2'>
                                <Link href="#"><li>About FindSoft</li></Link>
                                <Link href="#"><li>Terms & Conditions</li></Link>
                                <Link href="#"><li>Accessibility Statement</li></Link>
                                <Link href="#"><li>Privacy Policy</li></Link>
                                <Link href="#"><li>Feedback</li></Link>
                                <Link href="#"><li>Contact Us</li></Link>
                            </ul>
                        </div>
                        <div className={`${styles.footerLink}`}>
                            <h4 className='text-xl font-semibold mb-5'>Job Seekers</h4>
                            <ul className='text-sm flex flex-col gap-2'>
                                <Link href="#"><li>Create Account</li></Link>
                                <Link href="#"><li>Video Resume new</li></Link>
                                <Link href="#"><li>My Bdjobs Panel</li></Link>
                                <Link href="#"><li>List of Features</li></Link>
                                <Link href="#"><li>Employability Test</li></Link>
                                <Link href="#"><li>Career Counseling</li></Link>
                                <Link href="#"><li>FAQ</li></Link>
                            </ul>
                        </div>
                        <div className={`${styles.footerLink}`}>
                            <h4 className='text-xl font-semibold mb-5'>Employers</h4>
                            <ul className='text-sm flex flex-col gap-2'>
                                <Link href="#"><li>Create Account</li></Link>
                                <Link href="#"><li>Products/Service</li></Link>
                                <Link href="#"><li>Disability Inclusion Practice</li></Link>
                                <Link href="#"><li>Post a Job</li></Link>
                            </ul>
                        </div>
                        <Motion motion1={"translate-x-0 duration-1000 ease-in-out"} motion2={"translate-x-40 duration-1000 ease-in-out"}>
                            <div className={`${styles.footerLink}`}>
                                <h4 className='text-xl font-semibold mb-5'>Tools & Social Media</h4>
                                <ul className='text-sm flex flex-col gap-2'>
                                    <Link href="#"><li className='flex items-center gap-2'><LazyImage url={facebook2} text={'facebook logo'} x={16} y={16} /> <span>Facebook</span></li></Link>
                                    <Link href="#"><li className='flex items-center gap-2'><LazyImage url={google} text={'facebook logo'} x={16} y={16} /> <span>Google</span></li></Link>
                                    <Link href="#"><li className='flex items-center gap-2'><LazyImage url={instagram} text={'facebook logo'} x={16} y={16} /> <span>Instagram</span></li></Link>
                                    <Link href="#"><li className='flex items-center gap-2'><LazyImage url={youtube} text={'facebook logo'} x={16} y={16} /> <span>Youtube</span></li></Link>
                                    <Link href="#"><li className='flex items-center gap-2'><LazyImage url={linkedin} text={'facebook logo'} x={16} y={16} /> <span>Linkedin</span></li></Link>
                                </ul>
                            </div>
                        </Motion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;