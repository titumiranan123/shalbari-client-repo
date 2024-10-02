import React from 'react';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import State from '../../components/home/State';

const Home:React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <State />
        </div>
    );
};

export default Home;