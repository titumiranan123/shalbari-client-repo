import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/Footer';

const Main:React.FC = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;