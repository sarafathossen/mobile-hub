import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';

const MyProfile = () => {
   useEffect(() => {
              document.title = "My Profile | Visit My Profile";
            }, []);
  const { user, logOut } = useContext(AuthContext);
  

  return (
    <div className="flex flex-col items-center  py-10">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      <img
        className="h-[200px] w-[200px] rounded-full border shadow-md mb-4 object-cover"
        src={user?.photoURL || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_666201&psig=AOvVaw2gvjB1Ct5dBixusBZ9QnAQ&ust=1761283494785000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCYjLvKuZADFQAAAAAdAAAAABAE"}
        alt={user?.displayName || "User"}
      />

      <h2 className="font-bold text-xl mb-2">
        {user?.displayName || ""}
      </h2>

      <p className="text-gray-500 mb-4">{user?.email}</p>

      {/* <button  >Update Profile</button> */}
      <Link to='/auth/update-profile' className="btn btn-outline my-4 w-[150px] ">Update Profile</Link>
      
    </div>
  );
};

export default MyProfile;
