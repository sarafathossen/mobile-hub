import React from 'react';

import { Outlet } from 'react-router';
import Banner from '../Component/Banner';
import NewsLater from '../Component/NewsLater';
import { useNavigation } from 'react-router';
import Loading from '../Pages/Loading';
import BlogSection from '../Component/BlogSection';
import TestimonialSection from '../Component/TestimonialSection';
import Header from '../Component/Header';
import Footer from '../Component/Footer ';

const HomeLayout = () => {
    const { state } = useNavigation();

    return (
        <div className="bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-200 transition-colors duration-500">
            
            <header>
                <Header />
            </header>

            <main className="w-11/12 mx-auto min-h-screen transition-colors duration-500">
                <Banner />
                {state === "loading" ? <Loading /> : <Outlet />}
                <NewsLater />
                <TestimonialSection />
                <BlogSection />
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
};

export default HomeLayout;
