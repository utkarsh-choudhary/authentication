import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Use the navigate hook for redirection

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://deploy-1-smms.onrender.com/api/auth/register', {
                name,
                email,
                password,
            });
            setSuccessMessage('Registration successful! Redirecting to login...');
            setErrorMessage('');
            setTimeout(() => {
                navigate('/login'); 
            }, 2000); 
        } catch (err) {
            setErrorMessage('Registration failed. Please try again.');
            setSuccessMessage('');
            console.error(err);
        }
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-0"
            
        >
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex flex-col items-center mb-6">
                <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Signup</h2>
                </div>

                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Create Your New Account</h2>
                    <p className="text-gray-500 text-center text-sm sm:text-base">
                        Already have an account?{' '}
                        <Link to={"/login"} className="text-customBlue hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
                {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button
                        type="submit"
                        className="w-full bg-customBlue text-white font-medium py-2 rounded-md hover:bg-customBlue-hover transition"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
