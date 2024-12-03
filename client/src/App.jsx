import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { APIProvider } from './contexts/APIContext';

import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Router>
       
    );
};



export default App;
