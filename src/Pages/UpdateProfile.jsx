import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = "Update Profile | Visit Update Profile";
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name && !photo) {
      toast('⚠️ Please fill at least one field to update!');
      return;
    }

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        setMessage('✅ Profile updated successfully!');
        setTimeout(() => navigate('/auth/my-profile'), 1500);
      })
      .catch((error) => {
        console.error(error);
        setMessage(`❌ ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 dark:bg-gray-900 px-4 py-10 md:py-16 transition-colors duration-300">
      <div className="card w-full max-w-md md:max-w-lg shadow-2xl rounded-2xl p-6 md:p-10 bg-base-200 dark:bg-gray-800 text-base-content dark:text-gray-200 transition-colors duration-300">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Update Profile</h2>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <label className="label font-semibold">Name</label>
          <input
            type="text"
            className="input input-bordered w-full text-lg dark:bg-gray-700 dark:text-gray-200"
            placeholder="Update Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label font-semibold">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full text-lg dark:bg-gray-700 dark:text-gray-200"
            placeholder="Update Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          {message && (
            <p
              className={`text-center mt-2 ${
                message.includes('✅') ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-neutral w-full mt-4 h-14 text-lg dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
