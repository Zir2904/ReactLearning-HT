import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {Home} from './Pages/Home';
import { Settings } from './Pages/Settings';
import { Track } from './Pages/Track';
import Add from './Pages/Add';
import { ErrorPage } from './Pages/ErrorPage';
import { ShipmentDetail } from './Pages/ShipmentDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/add" element={<Add />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/details/:shipmentId" element={<ShipmentDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
