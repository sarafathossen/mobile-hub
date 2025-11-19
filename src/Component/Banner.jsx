import React from 'react';

const Banner = () => {
    return (
        <div className="carousel mx-auto rounded-2xl shadow-lg">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://wallpapers.com/images/hd/pubg-banner-1920-x-1080-background-prs6to3hgrs8nk7x.jpg" className="w-full h-[400px] object-cover" alt="Game 1" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://wallpapers.com/images/featured/clash-of-clans-f88iyeweabo3r6kz.jpg" className="w-full object-cover h-[400px]" alt="Game 2" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://wallpapers.com/images/hd/free-fire-banner-with-complete-cast-5vfv6tj9bc7x37rw.jpg" className="w-full object-cover h-[400px]" alt="Game 3" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;