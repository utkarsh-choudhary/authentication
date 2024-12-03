import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = () => {
    navigate('/register'); // Navigate to the /register page
  };

  return (
    <div className='flex items-center justify-center h-48'>
      <div className='text-center'>
        <div className='font-bold text-3xl mb-4'>
          Welcome! Please sign up
        </div>
        <button
          onClick={handleSignup}
          className='bg-customBlue text-white px-4 py-2 rounded hover:bg-customBlue-hover'
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Home;
