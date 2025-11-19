
import Header from '../Component/Header';
import Footer from '../Component/Footer ';
import { useLoaderData, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import AppDetailsCard from '../Component/AppDetailsCard';

const GameDetails = () => {
     useEffect(() => {
                document.title = "Game Details | Visit Game Details";
              }, []);
    const data=useLoaderData()
    const {id}=useParams()
    const [appdata,setAppData]=useState({})
    console.log(data,id,appdata)
    useEffect(()=>{
        const dataDetails=data.find((singelNews)=>singelNews.id==id)
        setAppData(dataDetails)
    },[data,id])
    return (
        <div className=''>
            <Header></Header>
            <div className="w-11/12 mx-auto">
                
                <AppDetailsCard appdata={appdata} ></AppDetailsCard>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default GameDetails;