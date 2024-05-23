import React from 'react';
import '../Styles/Error.css';
import '../Styles/Sidebar.css';
import logo from '../Images/logo.png';
import Sidebar from '../Components/Sidebar';

export const Home = () => {
    return (
        <div className='Errormain'>
            <Sidebar />
            <div className='ErrorTextHolder'>
                <h1 className='NotFound'>
                    Welcome to HT shipment tracking site!
                </h1>
                <img className="ErrorImage" src={logo} alt='logo' />
                <button className='ErrorBtn' onClick={() => { window.location.pathname = "/track" }}>Shipments</button>
            </div>
        </div>
    );
};
