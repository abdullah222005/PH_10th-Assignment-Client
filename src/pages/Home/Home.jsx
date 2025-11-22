import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Banner from '../../components/Hero/Banner';
import AboutUsSection from '../../components/About Us Home/AboutUsSection';
import Quote from '../../components/Quote/Quote';

const Home = () => {
    return (
        <div className="w-full">
            <Banner/>
            <Quote/>
            <AboutUsSection/>
        </div>
    );
};

export default Home;