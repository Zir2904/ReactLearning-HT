import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/ShipmentDetail.css';
import shipmentsData from '../Data.json';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from 'leaflet';
import iconUrl from '../Images/marker.png';

const customIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

export const ShipmentDetail = () => {
    const { shipmentId } = useParams();
    const navigate = useNavigate();
    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({
        orderId: '',
        deliveryAddress: '',
        carrier: '',
        billingAddress: ''
    });

    // eslint-disable-next-line
    const shipment = shipmentsData.find(entry => entry.shipments.orderId == shipmentId);

    if (!shipment) {
        return <div>Shipment not found.</div>;
    }

    const { orderId, customerId, deliveryDate, deliveryAddress, carrier, status, customerName, lat, long, billingAddress, estimatedDeliveryTime } = shipment.shipments;

  const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSave = () => {
        console.log("Form Data:", formData);
    };

    return (
        <div className='DetailMain'>
            <Sidebar />
            <div className='content'>
                <div className="shipment-details-container">
                    <div className='title'><h2>SHIPMENT DETAILS - {orderId}</h2></div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="orderId">Order ID</label>
                            <input
                                type="text"
                                className = "form-control"
                                id="orderId"
                                value={formData.orderId || orderId}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerId">Customer ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="customerId"
                                value={customerId}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliveryDate">Delivery Date</label>
                            <input
                                type="text"
                                className="form-control"
                                id="deliveryDate"
                                value={deliveryDate}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliveryAddress">Delivery Address</label>
                            <input
                                type="text"
                                className={`form-control ${isEditable ? 'editable' : ''}`}
                                id="deliveryAddress"
                                value={formData.deliveryAddress || deliveryAddress}
                                disabled={!isEditable}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="carrier">Carrier</label>
                            <input
                                type="text"
                                className={`form-control ${isEditable ? 'editable' : ''}`}
                                id="carrier"
                                value={formData.carrier || carrier}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <input
                                type="text"
                                className="form-control"
                                id="status"
                                value={status}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerName">Customer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="customerName"
                                value={customerName}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="billingAddress">Billing Address</label>
                            <input
                                type="text"
                                className={`form-control ${isEditable ? 'editable' : ''}`}
                                id="billingAddress"
                                value={formData.billingAddress || billingAddress}
                                disabled={!isEditable}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="estimatedDeliveryTime">Estimated Delivery Time</label>
                            <input
                                type="text"
                                className="form-control"
                                id="estimatedDeliveryTime"
                                value={estimatedDeliveryTime}
                                disabled={true}
                            />
                        </div>
                    </form>
                </div>
                <button className="btn btn-primary" onClick={() => {
                    setIsEditable(!isEditable);
                    if (isEditable) {
                        handleSave();
                    }
                }}>
                    {isEditable ? 'Save' : 'Edit'}
                </button>
                <button className="btn btn-secondary" onClick={() => navigate(`/track`)}>
                    Back
                </button>
                <div className="title">Current shipment location</div>
                <div className="map-container">
                    <MapContainer
                        style={{ width: "100%", height: "300px" }}
                        center={[lat, long]}
                        zoom={8}
                    >
                        <TileLayer
                            attribution="Google Maps"
                            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                        />
                        <Marker position={[lat, long]} icon={customIcon}>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default ShipmentDetail;
