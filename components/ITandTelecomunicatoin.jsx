"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import itPhoto from "../public/icons/web-development.png";
import LazyImage from "./LazyImage";
import Motion from "./Motion";

const ITandTelecomunicatoin = () => {
    const [jobCategory, setJobCategory] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('/itandtelecommunication.json')
            .then((res) => res.json())
            .then((data) => {
                setJobCategory(data)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!jobCategory) return <p>No profile data</p>

    return (
        <div>
            <div className="flex items-center gap-x-3 mb-6">
                <LazyImage url={itPhoto} text={"it photo"} x={30} y={30} />
                <h4 className="font-bold text-xl text-[#24365E]">IT and Telecommunication</h4>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
                {
                    jobCategory.map((item) => (
                        <Motion key={item.id} motion1={"translate-x-0 duration-1000 ease-in-out"} motion2={"translate-x-40 duration-1000 ease-in-out"}>
                            <div className="flex items-start justify-between border border-gray-300 p-6 hover:scale-105 duration-300">
                                <LazyImage url={item?.photo} text={"logo"} x={50} y={50} />
                                <div>
                                    <h4>{item.title} ({item.openignPosition})</h4>
                                    <h4>Location: {item.location}</h4>
                                </div>
                            </div>
                        </Motion>
                    ))
                }
            </div>
        </div>
    );
};

export default ITandTelecomunicatoin;