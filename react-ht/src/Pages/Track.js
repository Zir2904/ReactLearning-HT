import Sidebar from '../Components/Sidebar';
import "leaflet/dist/leaflet.css";
import '../Styles/Track.css';
import ShipmentObject from '../Components/ShipmentObject.js';

export const Track = () => {
    return (
        <div className='TrackMain'>
            <Sidebar />
            <div className='TrackMainPage'>
                <div className="container">
                    <div className="title">Shipments</div>
                    <div className="big-square">
                        <ShipmentObject />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Track;
