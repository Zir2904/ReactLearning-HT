import React from 'react';
import '../Styles/Error.css';
import '../Styles/Sidebar.css';
import logo from '../Images/logo.png';
import Sidebar from '../Components/Sidebar';

export const Settings = () => {
    return (
        <div className='Errormain'>
            <Sidebar />
            <div className='ErrorTextHolder'>
                <h1 className='NotFound'>
                    Nothing to see here...
                </h1>
                   <h1 className='ErrorTitle'>
                For now!
            </h1>
                <img className="ErrorImage" src={logo} alt='logo' />
                <button className='ErrorBtn' onClick={() => { window.location.pathname = "/home" }}>Home</button>
            </div>
        </div>
    );
};
