import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import {useNavigate } from 'react-router-dom';
import '../Styles/ShipmentDetail.css';
import shipmentsData from '../Data.json';

const Add = () => {
    const [formData, setFormData] = useState(shipmentsData.map(item => item.shipments)[0]);
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSave = () => {
        console.log(formData);
    };

    return (
        <div className='DetailMain'>
            <Sidebar />
            <div className='content'>
                <div className="shipment-details-container">
                    <div className='title'><h2>ADD NEW SHIPMENT</h2></div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="orderId">Order ID</label>
                            <input
                                type="number"
                                className={`form-control`}
                                id="orderId"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerId">Customer ID</label>
                            <input
                                type="number"
                                className="form-control"
                                id="customerId"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliveryDate">Delivery Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="deliveryDate"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliveryAddress">Delivery Address</label>
                            <input
                                type="text"
                                className={`form-control`}
                                id="deliveryAddress"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="carrier">Carrier</label>
                            <input
                                type="text"
                                className={`form-control `}
                                id="carrier"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerName">Customer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="customerName"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="billingAddress">Billing Address</label>
                            <input
                                type="text"
                                className={`form-control`}
                                id="billingAddress"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="estimatedDeliveryTime">Estimated Delivery Time</label>
                            <input
                                type="time"
                                className="form-control"
                                id="estimatedDeliveryTime"
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>
                </div>
                <button className="btn btn-primary" onClick={handleSave}>
                    Save
                </button>
                <button className="btn btn-secondary" onClick={() => navigate(`/track`)}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default Add;
