import React, { useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer ";
import { Link, useLoaderData } from "react-router";
import AppData from "../Component/AppData";

const AllGame = () => {
    useEffect(() => {
        document.title = "All Game | Visit All Game";
    }, []);

    const appsData = useLoaderData();

    return (
        <div className="bg-base-100 dark:bg-gray-900 min-h-screen transition-colors duration-300 text-base-content dark:text-gray-200">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="py-6">
                <div className="w-11/12 mx-auto">

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-base-content dark:text-gray-200">
                        Our Popular Games
                    </h2>

                    {/* Games Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                        {appsData.map((data) => (
                            <AppData key={data.id} data={data}></AppData>
                        ))}
                    </div>

                    {/* Back Home Button */}
                    <div className="flex justify-center my-5">
                        <Link className="btn btn-outline dark:text-gray-200 dark:border-gray-400 dark:hover:bg-gray-700" to="/">
                            Back Home
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AllGame;
