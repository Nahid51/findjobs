"use client"
import JobsQuery from './JobsQuery';
import AllJobs from './AllJobs';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Motion from './Motion';

const JobSearchandGet = () => {
    const [id, setId] = useState(Number);
    const [jobsData, setJobsData] = useState([]);
    const [singleJobData, setSingleJobData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/jobs.json')
            .then((res) => res.json())
            .then((data) => {
                setJobsData(data)
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        const singleJob = jobsData.find((item) => item.id === id)
        setSingleJobData(singleJob);
    }, [id, jobsData]);

    if (isLoading) return <p>Loading...</p>
    if (!jobsData) return <p>No profile data</p>

    return (
        <div>
            <div className="text-center">
                <JobsQuery />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10">
                <div className="col-span-1">
                    <AllJobs setId={setId} />
                </div>
                <div className="col-span-2">
                    {
                        jobsData.slice(0, 1).map((item) => (
                            <Motion motion1={"translate-y-0 duration-1000 ease-in-out"} motion2={"translate-y-40 duration-1000 ease-in-out"} key={item.id} className='sticky top-20'>
                                <div className='border rounded-xl p-5'>
                                    {singleJobData ? <h2 className='text-xl text-[#24365E] font-bold'>{singleJobData?.title}</h2> : <h2 className='text-xl text-[#24365E] font-bold'>{item?.title}</h2>}
                                    <div className='flex items-center justify-between mt-5'>
                                        {singleJobData ? <p>Date of Post: {singleJobData?.dateOfPost}</p> : <p>Date of Post: {item?.dateOfPost}</p>}
                                        {singleJobData ?
                                            <Link href={singleJobData?.slug}><button className={`px-4 py-2 flex items-center border rounded bg-[#24365E] hover:bg-[#006AFF] text-white duration-300`}><span>Apply Now</span></button></Link>
                                            :
                                            <Link href={item?.slug}><button className={`px-4 py-2 flex items-center border rounded bg-[#24365E] hover:bg-[#006AFF] text-white duration-300`}><span>Apply Now</span></button></Link>}
                                    </div>
                                    <div className='flex items-center justify-between my-3'>
                                        {singleJobData ? <p>Company: {singleJobData?.company}</p> : <p>Company: {item?.company}</p>}
                                        {singleJobData ? <p>Location: {singleJobData?.location?.country}</p> : <p>Location: {item?.location?.country}</p>}
                                    </div>
                                    {singleJobData ? <p className='text-justify my-5'>{singleJobData?.desc}..</p> : <p className='text-justify my-5'>{item?.desc}..</p>}
                                    {singleJobData ? <p className='text-justify my-5'>{singleJobData?.requirments}..</p> : <p className='text-justify my-5'>{item?.requirments}..</p>}
                                </div>
                            </Motion>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default JobSearchandGet;