"use client"
import { useForm } from "react-hook-form"
import { MdLocationPin, MdSearch } from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";
import { FaUserTie, FaBuilding } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import Image from "next/image";
import jobSearch from "@/public/icons/job-search.png";
import vacancies from "@/public/icons/vacancy.png";
import conpanies from "@/public/icons/office-building.png";
import newJobs from "@/public/icons/live.png";
import newJobs2 from "@/public/icons/employee.png";
import LazyImage from "./LazyImage";

const JobSearchForm = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <h2 className="text-2xl text-[#24365E] font-bold mb-5">Find the right jobs</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-12 grid-cols-1 gap-5 bg-[#24365E] p-3">
                <div className="col-span-5 flex items-center bg-white text-gray-400 pl-3 border border-gray-300 rounded">
                    <MdSearch size={24} />
                    <input type="text" className="w-full focus:outline-none p-3" placeholder="Job Title or Keywords" {...register("title")} />
                </div>
                <div className="col-span-5 flex items-center bg-white text-gray-400 pl-3 border border-gray-300 rounded">
                    <MdLocationPin size={24} />
                    <input type="text" className="w-full focus:outline-none p-3" placeholder="District" {...register("location")} />
                </div>
                <button type="submit" className="col-span-2 border border-gray-300 rounded w-full bg-white hover:bg-gray-200 duration-300 font-bold">Search</button>
            </form>
            <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-10 mt-5">
                <div className="flex items-center gap-4">
                    {/* <div className="border-2 border-[#282776] rounded-full p-1">
                        <TbLivePhoto size={36} className="bg-[#282776] rounded-full text-white" />
                    </div> */}
                    <LazyImage url={jobSearch} text="job search" x={40} w={40} />
                    <div className="text-[#282776] font-bold">
                        <p>Live Jobs</p>
                        <p>5011</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {/* <div className="border-2 border-[#282776] rounded-full p-1">
                        <FaUserTie size={36} className="bg-[#282776] rounded-full text-white" />
                    </div> */}
                    <LazyImage url={vacancies} text={"job search"} x={48} w={48} />
                    <di className="text-[#282776] font-bold">
                        <p>Vacancies</p>
                        <p>5011</p>
                    </di>
                </div>
                <div className="flex items-center gap-4">
                    {/* <div className="border-2 border-[#282776] rounded-full p-1">
                        <FaBuilding size={40} className="bg-[#282776] rounded-full text-white" />
                    </div> */}
                    <LazyImage url={conpanies} text={"job search"} x={40} w={40} />
                    <div className="text-[#282776] font-bold">
                        <p>Companies</p>
                        <p>5011</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {/* <div className="border-2 border-[#282776] rounded-full p-1">
                        <LuMousePointerClick size={40} className="bg-[#282776] rounded-full text-white" />
                    </div> */}
                    <LazyImage url={newJobs2} text={"job search"} x={48} w={48} />
                    <div className="text-[#282776] font-bold">
                        <p>New Jobs</p>
                        <p>5011</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSearchForm;