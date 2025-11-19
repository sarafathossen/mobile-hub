import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { Link } from 'react-router';

const AppDetailsCard = ({ appdata }) => {
    console.log(appdata)
    return (
        <div className='flex justify-center my-8 '>
            <div className="max-w-[500px] space-y-5">
                <div className="">
                    <img className='w-full h-[400px] object-cover' src={appdata.coverPhoto} alt="" />
                </div>
                <div className="">
                    <h2 className='text-2xl font-bold'> {appdata.title} </h2>
                </div>
                <div className="flex justify-between font-bold">
                    <p> {appdata.category} </p>
                    <p> {appdata.ratings} </p>
                </div>
                <div className="">
                    <p> <span className='font-bold'> Description: </span> {appdata.description} </p>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <p className='font-bold'> {appdata.developer} </p>
                    </div>
                    <div>
                        <Link to={appdata.downloadLink}>
                            <IoMdDownload className="text-2xl text-blue-600 hover:text-blue-800" />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link className='btn btn-outline' to={`/`}> Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default AppDetailsCard;