import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Banner from '../../components/Hero/Banner';
import AboutUsSection from '../../components/About Us Home/AboutUsSection';
import Quote from '../../components/Quote/Quote';
import LatestBooks from '../../components/Latest Books/LatestBooks';
import BestBook from '../../components/Best Book/BestBook';
import ResponsiveShowcase from '../../components/Responsiveness/ResponsiveShowcase';
import TopThree from '../../components/Top Three/TopThree';

const Home = () => {
    return (
        <div className="w-full">
            <Banner/>
            <LatestBooks/>
            <Quote/>
            <BestBook/>
            <ResponsiveShowcase/>
            <TopThree/>
            <AboutUsSection/>
        </div>
    );
};

export default Home;