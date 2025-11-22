import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Banner from '../../components/Hero/Banner';
import AboutUsSection from '../../components/About Us Home/AboutUsSection';
import Quote from '../../components/Quote/Quote';
import LatestBooks from '../../components/Latest Books/LatestBooks';
import BestBook from '../../components/Best Book/BestBook';

const Home = () => {
    return (
        <div className="w-full">
            <Banner/>
            <LatestBooks/>
            <Quote/>
            <BestBook/>
            <AboutUsSection/>
        </div>
    );
};

export default Home;