import React from 'react';
import Loading from './components/loading';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Loading />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;