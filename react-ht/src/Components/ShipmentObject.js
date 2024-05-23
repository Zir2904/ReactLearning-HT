import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import shipmentsData from '../Data.json';
import '../Styles/ShipmentObject.css';

function getStatusColor(status) {
    switch (status) {
        case 'In transit':
            return 'in-transit';
        case 'Pending':
            return 'pending';
        case 'Delivered':
            return 'delivered';
        default:
            return 'default-color';
    }
}

function ShipmentObject() {
    const [searchQuery, setSearchQuery] = useState('');
    const [startIndex, setStartIndex] = useState(0);
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortCount, setSortCount] = useState(0);
    const [shipments, setShipments] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        setShipments(shipmentsData.map(entry => entry.shipments));
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setStartIndex(0);
    };

    const handleVisibilityClick = (shipmentId) => {
        navigate(`/details/${shipmentId}`);
    };

    const handleSort = (category) => {
        if (sortBy === category) {
            if (sortCount === 2) {
                setSortBy('');
                setSortOrder('asc');
                setSortCount(0);
                return;
            }
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            setSortCount(sortCount + 1);
        } else {
            setSortBy(category);
            setSortOrder('asc');
            setSortCount(1);
        }
    };

    const sortedShipments = [...shipments].sort((a, b) => {
        if (sortBy === '') return 0;
        const comparison = sortOrder === 'asc' ? 1 : -1;
        return comparison * (a[sortBy] > b[sortBy] ? 1 : -1);
    });

    const handleNextClick = () => {
        setStartIndex(startIndex + 25);
    };

    const handlePrevClick = () => {
        setStartIndex(Math.max(0, startIndex - 25));
    };

    return (
        <div className='ShipTable'>
            <div className='searchBar'>
                <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                    <input type='text' placeholder='Search..' value={searchQuery} onChange={handleSearchChange}></input>
                </form>
                <div className='btnsHolder'>
                    <button className='btnD' onClick={handlePrevClick} disabled={startIndex === 0}>Previous</button>
                    <button className='btnD' onClick={handleNextClick} disabled={startIndex + 25 >= shipments.length}>Next</button>
                </div>
                <span className="searchInfo">Search shipments by orderId, customerId or status. Show next/previous set of shipments. Sort shipments by clicking the header.</span>
            </div>
            <ul className='ShipTableList'>
                <li className='ShipTableHeader'>
                    <div className="table-cell" onClick={() => handleSort('orderId')}>
                        Order ID {sortBy === 'orderId' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </div>
                    <div className="table-cell" onClick={() => handleSort('customerId')}>
                        Customer ID {sortBy === 'customerId' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </div>
                    <div className="table-cell" onClick={() => handleSort('deliveryDate')}>
                        Date {sortBy === 'deliveryDate' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </div>
                    <div className="table-cell" onClick={() => handleSort('deliveryAddress')}>
                        Delivery address {sortBy === 'deliveryAddress' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </div>
                    <div className="table-cell" onClick={() => handleSort('carrier')}>
                        Carrier {sortBy === 'carrier' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </div>
                    <div className="table-cell" onClick={() => handleSort('status')}>
                        Status {sortBy === 'status' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </div>
                    <div id="btns" style={{ color: "#e20074 "}}>
                        <EditOutlinedIcon />
                        <VisibilityOutlinedIcon />
                        <DeleteOutlineOutlinedIcon />
                    </div>
                </li>
                {sortedShipments
                    .filter(val => {
                        const orderIdMatch = val.orderId.toString().toLowerCase().includes(searchQuery);
                        const customerIdMatch = val.customerId.toString().toLowerCase().includes(searchQuery);
                        const statusMatch = typeof val.status === 'string' && val.status.toLowerCase().includes(searchQuery);
                        return orderIdMatch || customerIdMatch || statusMatch;
                    })
                    .slice(startIndex, startIndex + 25) 
                    .map((val, key) => (
                        <li key={key} className='ShipTableOption'>
                            <div className="table-cell" id="orderId">{val.orderId}</div>
                            <div className="table-cell" id="customerId">{val.customerId}</div>
                            <div className="table-cell" id="date">{val.deliveryDate}</div>
                            <div className="table-cell" id="address">{val.deliveryAddress}</div>
                            <div className="table-cell" id="carrier">{val.carrier}</div>
                            <div className="table-cell" id="status">
                                <div className={`dot ${getStatusColor(val.status)}`}></div>{val.status}
                            </div>
                            <div id="btns">
                                <EditOutlinedIcon style={{ color: "green", cursor: "pointer" }} onClick={() => handleVisibilityClick(val.orderId)}/>
                                <VisibilityOutlinedIcon style={{ color: "black", cursor: "pointer" }} onClick={() => handleVisibilityClick(val.orderId)} />
                                <DeleteOutlineOutlinedIcon style={{ color: "red", cursor: "pointer" }} />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ShipmentObject;
