import React from 'react';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const AppData = ({ data }) => {
  const { id, title, category, ratings,coverPhoto } = data;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      
      navigate('/auth/login', { state: { from: `/game-details/${id}` } });
    } else {
      navigate(`/game-details/${id}`);
    }
  };

  return (
    <div className="">
      <div
        className="card bg-base-200 shadow-md p-4 rounded-xl hover:shadow-lg transition-all duration-300 w-full my-3"
        onClick={handleClick}
      >
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="flex justify-between px-2 text-gray-600">
          <p>{category}</p>
          <p>{ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default AppData;
