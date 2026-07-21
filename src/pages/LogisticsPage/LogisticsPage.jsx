import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import "../../styles/LogisticsPage.css";
import { useNavigate } from "react-router-dom";

function LogisticsPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/main");
  };

  const goToBookings = () => {
    navigate("/logisticspage");
  };

  return (
    <div className="wrapper">

        <div className="head">
          <p onClick={goToHome} style={{ cursor: 'pointer' }}>Home</p>
          <p>Marketplace</p>
          <p onClick={goToBookings} style={{ cursor: 'pointer' }}>Booking</p>
          <FontAwesomeIcon icon={faBell} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>

        <div className="content-box">
          <header className="header">
            <h1 className="header-title">Book Logistics</h1>
            <p className="header-para">Find and book logistics near you</p>
          </header>
        </div>

        <div className="form-container">
          <form action="">
            <label htmlFor="pickup-loc" id="pickup-loc">Pickup Location </label>
            <input type="text" placeholder="Enter your location" />

            <label htmlFor="destination" id="destination">Destination</label>
            <input type="text" placeholder="Enter your Destination" />

            <label htmlFor="quantity" id="quantity">Quantity</label>
            <input type="text" placeholder="Enter Quantity to purchase" />

            <label htmlFor="pickup-date" id="pickup-date">Preferred Pickup Date</label>
            <input type="date" />

            <div className="veh-price-box">
              <div className="veh-box">
                <h3 className="title">Vehicle Type</h3>
                <p className="vehicle-type border"><span>Refrigerated Truck</span><span>10 Ton</span></p>
              </div>

              <div className="price-box">
                <h3 className="title">Price</h3>
                <p className="price border">₦120,000</p>
              </div>
            </div>      
          </form>
        </div>

        <div className="form-button">
          <button type="button" className="request-button">Request Refrigerated Truck</button>
        </div>

    </div>
  );
}

export default LogisticsPage;
