import React from 'react';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import State from '../../components/home/State';
import Blog from '../../components/home/Blog';

const Home:React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <State />
            <Blog />
        </div>
    );
};

export default Home;