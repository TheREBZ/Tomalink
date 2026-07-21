import "../../styles/MainPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faHouse, faTruckMoving, faStore, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import Status from "./Status";
import { useNavigate } from "react-router-dom"; 

const MainPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/main");
  };

  const goToBookings = () => {
    navigate("/logisticspage");
  };

  const goToColdStorage = () => {
    navigate("/bookcoldstoragepag");
  };

  const goToLogistics = () => {
    navigate("/logisticspage");
  };

  const goToMarketplace = () => {
    navigate("/market"); 
  };

  const goToShipment = () => {
    navigate("/shipment");
  };

  return (
    <main className="content">
      <nav className="head">
        <p onClick={goToHome} style={{ cursor: 'pointer' }}>Home</p>
        <p>Market place</p>
        <p onClick={goToBookings} style={{ cursor: 'pointer' }}>Bookings</p>
        <div className="head-icons">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
      </nav>
      
      <section className="greet-user">
        <h1>Good Morning User</h1>
        <p>Here's what's happening on your farm today</p>
      </section>
      
      <section className="card">
        <Status />
      </section>
      
      <section className="actions-marketprice-container">
        <div className="market-price-container">
          <p>Market Price Today (Today)</p>
          <p>N <span>38,000</span>/crate</p>
          <button type="button">View all price</button>
        </div>
        
        <div className="main-action-details-container">
          <p>Quick Actions</p>
          <div className="actions-details-container">
              <div className="actions" onClick={goToColdStorage} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faHouse} className="action-icon"/>
                <p>Book Cold Storage</p>
              </div>
              
              <div className="actions" onClick={goToLogistics} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faTruckMoving} className="action-icon"/>
                <p>Book Logistics</p>
              </div>
              
              <div className="actions" onClick={goToMarketplace} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faStore} className="action-icon"/>
                <p>Marketplace</p>
              </div>
              
              <div className="actions" onClick={goToShipment} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faBarsProgress} className="action-icon"/>
                <p>Track Shipment</p>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
