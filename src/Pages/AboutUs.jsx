import React, { useEffect } from 'react';
import Footer from '../Component/Footer ';
import Header from '../Component/Header';

const AboutUs = () => {
       useEffect(() => {
            document.title = "About Us | Visit About Us";
          }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
        <Header></Header>
      {/* Header Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10 lg:p-16">
          
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              About Game Hub
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Innovating the world of mobile gaming, one game at a time.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-12 flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <img
                src="https://i.ibb.co/ccxNRTGV/video-games.jpg"
                alt="Our Story"
                className="rounded-xl shadow-lg w-full max-w-md lg:max-w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg">
                Game Hub was founded with a mission to bring the best mobile gaming
                experience to players around the globe. Our passion for creativity
                and innovation drives us to develop games that are immersive, fun,
                and unforgettable.
              </p>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
                From small indie projects to large-scale mobile adventures, we
                focus on delivering high-quality games that players love.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              To redefine mobile gaming by creating engaging, innovative, and
              accessible games for everyone. We aim to inspire, entertain, and
              connect players worldwide through the magic of games.
            </p>
          </div>

          {/* Our Team */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { name: 'John Doe', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
                { name: 'Jane Smith', role: 'Lead Game Designer', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
                { name: 'Mike Johnson', role: 'Lead Developer', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
                { name: 'Emily Davis', role: 'Marketing Head', img: 'https://randomuser.me/api/portraits/women/55.jpg' },
              ].map((member, index) => (
                <div key={index} className="card bg-base-100 shadow-xl p-4 flex flex-col items-center">
                  <figure>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-full w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mb-4"
                    />
                  </figure>
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
