import React from 'react';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';

const Home:React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
        </div>
    );
};

export default Home;