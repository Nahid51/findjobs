import LoginRegistrationCard from '@/components/LoginRegistrationCard';

export function generateMetadata() {
    return {
        title: 'Login or Create Account',
        description: "FindJobs, aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently. This site will also help employers solve many of the problems associated with traditional recruiting methods and allow them to save time and money.",
        alternates: { canonical: '/login-page', },
    }
};

const LoginPage = () => {
    return (
        <div className='md:h-[80vh] h-full flex items-center'>
            <div className='container mx-auto'>
                <div className='md:mx-32 mx-3 py-10'>
                    <LoginRegistrationCard />
                </div>
            </div>
        </div >
    );
};

export default LoginPage;