import React from 'react';

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: "https://wallpapers.com/images/hd/pubg-banner-1920-x-1080-background-prs6to3hgrs8nk7x.jpg",
      alt: "PUBG Banner"
    },
    {
      id: 2,
      img: "https://wallpapers.com/images/featured/clash-of-clans-f88iyeweabo3r6kz.jpg",
      alt: "Clash of Clans Banner"
    },
    {
      id: 3,
      img: "https://wallpapers.com/images/hd/free-fire-banner-with-complete-cast-5vfv6tj9bc7x37rw.jpg",
      alt: "Free Fire Banner"
    }
  ];

  return (
    <div className="carousel h-[400px] w-full overflow-hidden relative">
      {slides.map((slide, index) => (
        <div key={slide.id} id={`slide${slide.id}`} className="carousel-item relative w-full">
          <img
            src={slide.img}
            alt={slide.alt}
            className="w-full h-60 sm:h-80 md:h-96 lg:h-[550px] object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle bg-black/30 dark:bg-white/30 hover:bg-black/50 dark:hover:bg-white/50 text-white dark:text-black transition-colors duration-300"
            >
              ❮
            </a>
            <a
              href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle bg-black/30 dark:bg-white/30 hover:bg-black/50 dark:hover:bg-white/50 text-white dark:text-black transition-colors duration-300"
            >
              ❯
            </a>
          </div>

          {/* Overlay Text */}
          <div className="absolute bottom-8 left-8 bg-black/40 dark:bg-white/30 p-4 rounded-lg text-white dark:text-black text-lg sm:text-xl md:text-2xl font-semibold">
            {slide.alt}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
