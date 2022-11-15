import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner1 from '../Shared/Banner1/Banner1';
import Footer from '../Shared/Footer/Footer';
import Footer2 from '../Shared/Footer/Footer2';
import Header1 from '../Shared/Header1/Header1';
import Header2 from '../Shared/Header2/Header2';

const Main = () => {
    return (
        <div>
            <Header1></Header1>
            <Banner1></Banner1>
            <Header2></Header2>
            <Outlet></Outlet>
            <Footer></Footer>
            <Footer2></Footer2>
        </div>
    );
};

export default Main;