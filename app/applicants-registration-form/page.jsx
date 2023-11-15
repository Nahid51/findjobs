import LazyImage from "@/components/LazyImage";
import Motion from "@/components/Motion";
import RegistrationForm from "@/components/RegistrationForm";
import regPhoto from "@/public/images/register.svg";
import Image from "next/image";

export function generateMetadata() {
    return {
        title: 'Applicants Registration Form',
        description: "FindJobs, aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently. This site will also help employers solve many of the problems associated with traditional recruiting methods and allow them to save time and money.",
        alternates: { canonical: '/applicants-registration-form', },
    }
};

const ApplicantsRegistrationForm = () => {

    return (
        <div className="md:h-[70vh] h-full flex items-center justify-center">
            <div className="py-20">
                <div className="flex md:flex-row flex-col-reverse items-center justify-center gap-20">
                    <Motion motion1={"translate-x-0 duration-1000 ease-in-out"} motion2={"-translate-x-40 duration-1000 ease-in-out"}>
                        <LazyImage url={regPhoto} text={"register photo"} />
                    </Motion>
                    <RegistrationForm role={"applicant"} />
                </div>
            </div>
        </div>
    );
};

export default ApplicantsRegistrationForm;