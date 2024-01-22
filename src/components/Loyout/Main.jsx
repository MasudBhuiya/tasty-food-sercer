import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='bg-[#FEF7E5]'>
            <div className='bg-opacity-20 bg-slate-700'>
            <Header></Header>
            </div>
            <Outlet></Outlet>
            <div className='relative top-0 bottom-0'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;