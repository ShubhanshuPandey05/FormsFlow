/**
 * SkillsSection Component
 */
import React, { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingContext";
// import "./SkillsSection.css"; // Optional: Add your CSS file for styling4

const SkillsSection = () => {
    const [stats,setStats] = useState({});
    const { showLoading, hideLoading } = useLoading();

    useEffect(() => {
        const getData = async () => {
            // const response = await fetch('https://formsflow.onrender.com/api/getdata', {
            // const response = await fetch('https://forms-flow-api.vercel.app/api/getdata', {
            showLoading();

            const response = await fetch('/api/getdata', {
            // const response = await fetch('http://localhost:3000/api/getdata', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })
            const data = await response.json()
            console.log(data);
            
            setStats(data)

            hideLoading();
        }

        getData();
    },[])
    return (
        <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
            <div className="row pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-xxl-2 mt-md-3 mt-lg-0">

                <div className="col-lg-7 col-xl-10 offset-xl-1">
                    <div className="row row-cols-1 row-cols-sm-4 g-3 g-md-4">
                        <StatsCard
                            bgColor="bg-primary"
                            count={stats.totalUser}
                            description="Total Users"
                        />
                        <StatsCard
                            bgColor="bg-info"
                            count={stats.totalMail}
                            description="Total Mails"
                        />
                        <StatsCard
                            bgColor="bg-warning"
                            count={stats.totalForm}
                            description="Total Forms"
                        />
                        <StatsCard
                            bgColor="bg-danger"
                            count={stats.totalMailSent}
                            description="Total Form-Submission"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const MarketButton = ({ link, lightImage, darkImage, altText }) => {
    return (
        <a className="btn btn-dark btn-lg px-3 py-2 me-3" href={link}>
            <img
                className="d-dark-mode-none mx-1"
                src={lightImage}
                width="136"
                alt={altText}
            />
            <img
                className="d-none d-dark-mode-block mx-1"
                src={darkImage}
                width="136"
                alt={altText}
            />
        </a>
    );
};

const StatsCard = ({ bgColor, count, description }) => {
    return (
        <div className="col">
            <div
                className={`d-flex flex-column h-100 ${bgColor} bg-opacity-10 rounded-3 text-center p-4`}
            >
                <div className="h3 display-5 mt-1 mb-0">{count}</div>
                <div className="fs-lg mb-1">{description}</div>
            </div>
        </div>
    );
};

export default SkillsSection;
