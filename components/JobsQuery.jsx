"use client"
// import { getLocationData } from "@/utils/dataLoad";
import { useEffect, useState } from "react";
import Select from "react-dropdown-select";

const JobsQuery = () => {
    const [jobLocation, setJobLocation] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState([]);
    const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     getLocationData().then((item) => console.log(item))
    // }, []);

    useEffect(() => {
        setLoading(true)
        fetch('/jobLocation.json')
            .then((res) => res.json())
            .then((data) => {
                setJobLocation(data)
                setLoading(false)
            })
    }, []);

    const [jobCategory, setJobCategory] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('/jobCategory.json')
            .then((res) => res.json())
            .then((data) => {
                setJobCategory(data)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!jobLocation) return <p>No profile data</p>

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-6 p-5 border border-[#24365E]">
            <Select
                placeholder="Category"
                name="category"
                options={jobCategory}
                labelField="category"
                valueField="id"
                onChange={selectedCategory => setSelectedCategory(selectedCategory)}
                keepSelectedInList={false}

            />
            <Select
                placeholder="Country"
                name="country"
                options={jobLocation}
                labelField="country"
                valueField="id"
                onChange={selectedCountry => setSelectedCountry(selectedCountry)}
                keepSelectedInList={false}

            />
            {
                selectedCountry.map((item) => (
                    <Select
                        key={item.id}
                        placeholder="District"
                        name="district"
                        options={item.district}
                        labelField="district"
                        valueField="id"
                        onChange={selectedDistrict => setSelectedDistrict(selectedDistrict)}
                        keepSelectedInList={false}
                    />
                ))
            }

        </div>

    );
};

export default JobsQuery;