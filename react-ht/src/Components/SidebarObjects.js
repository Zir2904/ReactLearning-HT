import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const SidebarObjects = [
    {
        title: "HOME",
        icon: < HomeOutlinedIcon / > ,
        link: "/home"
    },
        {
            title: "TRACK",
            icon: < RouteOutlinedIcon / > ,
            link: "/track"
        },
    {
        title: "ADD",
        icon: < AddOutlinedIcon / > ,
        link: "/add"
    },
    {
        title: "SETTINGS",
        icon: < SettingsOutlinedIcon / > ,
        link: "/settings"
    },
]
