import Header from '@/components/Header/Header';
import '../styles/globals.css';
import { Open_Sans } from 'next/font/google';
import HeaderTop from '@/components/HeaderTop';
import Footer from '@/components/Footer';
import AuthProvider from '@/context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://findjobs.com'),
  title: {
    template: '%s | FindJobs',
    default: 'FindJobs | Findjobs.com is now a leading career management site in Bangladesh', // a default is required when creating a template
  },
  description: "FindJobs, aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently. This site will also help employers solve many of the problems associated with traditional recruiting methods and allow them to save time and money.",
  alternates: { canonical: 'https://findjobs.com', },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={openSans.className}>
          <HeaderTop />
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </AuthProvider>
    </html>
  )
}
