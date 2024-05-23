import React from 'react'
import '../Styles/Sidebar.css';
import {SidebarObjects} from  './SidebarObjects'
import logo from '../Images/logo.png';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <ul className='SidebarList'>
        {SidebarObjects.map((val,key) => {
            return (
                <li key={key} className='SidebarOption' id={window.location.pathname === val.link ? "active" : ""} onClick={() => {window.location.pathname = val.link}}>
                    {" "}
                    <div id="icon">{val.icon}</div>{" "}
                    <div id="title" className={window.location.pathname === val.link ? "active" : ""}>{val.title}</div>
                </li>
            )
        })}
        </ul>
        <div className='imgHolder'><img className="logo" src={logo} alt='Logo' /></div>
        
    </div>
  )
}

export default Sidebar