import "../../styles/Shipment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Shipment = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/main");
  };

  const goToBookings = () => {
    navigate("/logisticspage");
  };

  return (
    <div className="shipment-overall-container">
        <nav className="shipment-head">
            <p onClick={goToHome} style={{ cursor: 'pointer' }}>Home</p>
            <p>Market place</p>
            <p onClick={goToBookings} style={{ cursor: 'pointer' }}>Bookings</p>
            <div className="head-icons">
            <FontAwesomeIcon icon={faBell} className="icon" />
            <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
        </nav>
        
        <section className="track-location">
            <h1>Track Shipment</h1>
            <p>Track the location of your order</p>
        </section>
        
        <div className="profile-card">
            <img src="/abiola.png" alt="profile image" width="230px" height="230px"/>
            <div className="profile">
                <p>Abiola David</p>
                <FontAwesomeIcon icon={faStar} />
                <p>4.6</p>
            </div>
        </div>
        
        <div className="map-img">
            <img src="/map.png" width="720px" height="200px" alt="Map track" />
        </div>
        
        <div className="status-text">
            <h1>Live Status</h1>
        </div>

        <section className="tracking-options">
            <div className="live-status-wrapper">
                <div className="status-timeline-section">
                    <h2 className="section-title">Live Status</h2>
                    
                    <ul className="timeline-tree">
                        <li className="timeline-node active">
                            <div className="node-marker"></div>
                            <div className="node-content">
                                <h3>Pickup Confirmed</h3>
                                <p>20 July, 2026. 10:30</p>
                            </div>
                        </li>
                        <li className="timeline-node active">
                            <div className="node-marker"></div>
                            <div className="node-content">
                                <h3>In Transit</h3>
                                <p>20 July, 2026. 02:15</p>
                            </div>
                        </li>
                        <li className="timeline-node active">
                            <div className="node-marker"></div>
                            <div className="node-content">
                                <h3>Arriving</h3>
                                <p>20 July, 2026. 05:30</p>
                            </div>
                        </li>
                        <li className="timeline-node pending">
                            <div className="node-marker"></div>
                            <div className="node-content">
                                <h3>Delivered</h3>
                                <p>Pending</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="actions-sidebar">
                    <button type="button" className="action-green-btn">Call Driver</button>
                    <button type="button" className="action-green-btn">Chat</button>
                    <button type="button" className="action-green-btn">Delivery Receipt</button>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Shipment;
