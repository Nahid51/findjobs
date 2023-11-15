"use client"
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from "@/styles/paginate.module.css";
import Motion from './Motion';

const AllJobs = ({ setId }) => {
    const [jobsData, setJobsData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    useEffect(() => {
        fetch('/jobs.json')
            .then((res) => res.json())
            .then((data) => {
                setJobsData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!jobsData) return <p>No profile data</p>

    const pageCount = Math.ceil(jobsData.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className='flex flex-col gap-5'>
            {
                jobsData.slice(pagesVisited, pagesVisited + usersPerPage).map((item) => (
                    <Motion motion1={"translate-x-0 duration-500 ease-in-out"} motion2={"translate-x-40 duration-500 ease-in-out"} key={item.id}>
                        <button
                            onClick={() => {
                                setId(item.id)
                            }}
                            className='hover:shadow-xl hover:border-collapse border rounded-xl'
                        >
                            <div className='p-5'>
                                <h2 className='text-xl text-[#24365E] font-bold'>{item.title}</h2>
                                <p className='text-justify my-5'>{item?.desc?.slice(0, 80)}..</p>
                                <div className='flex items-center justify-between my-3'>
                                    <p>Company: {item.company}</p>
                                    <p>Location: {item?.location?.country}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p>Date of Post: {item.dateOfPost}</p>
                                </div>
                            </div>
                        </button>
                    </Motion>
                ))
            }

            < ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={styles.paginationBttns}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={styles.paginationDisabled}
                activeClassName={styles.paginationActive}
            />

        </div>
    );
};

export default AllJobs;