
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/ColdStorage.css";


function BookColdStoragePage() {

  const navigate = useNavigate();

  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLoaction] = useState("");
  const [facilities, setFacilities] = useState([]);
  const [filteredFacilities, setFilteredFacilities] = useState([]);

  function LogisticsPage() {
    navigate("/logisticspage");
  }

  useEffect(() => {
    //Mock Locations since we don't have backend yet

    const mockLocations = ["Lagos", "Abuja", "Port Harcourt", "Kano"];
    const mockFacilities = [
      { id: 1, name: "Fresh Guard Cold Hub", location: "Lagos", distance: "12km away", rating: "⭐4.4", capacity: "20 Ton", price: "₦7,700", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCdKLpuj4PDTbx_R2t5j_i2Yu07RTUivYaR7S44yU5Q&s=10" },
      { id: 2, name: "Agri ChillWarehouse", location: "Abuja", distance: "2.5km away", rating: "⭐4.7", capacity: "30 Ton", price: "₦10,000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCdKLpuj4PDTbx_R2t5j_i2Yu07RTUivYaR7S44yU5Q&s=10"  }, 
      { id: 2, name: "Green Vault Cold Store", location: "Lagos", distance: "20km away", rating: "⭐4.0", capacity: "40 Ton", price: "₦15,000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCdKLpuj4PDTbx_R2t5j_i2Yu07RTUivYaR7S44yU5Q&s=10"  }
      ];

      setLocation(mockLocations);
      setFacilities(mockFacilities);
      setFilteredFacilities(mockFacilities);
  }, []);

  useEffect(() => {
    if (selectedLocation === "") {
      setFilteredFacilities(facilities);
    } else {
      const filtered = facilities.filter(fac => fac.location === selectedLocation);
      setFilteredFacilities(filtered);
    }
  }, [selectedLocation, facilities]);


  return(
    <div className="wrapper">

      <nav className="nav-bar">

        <ul className="navbar-list">

          <li>Home</li>
            
            <li>Marketplace</li>
            
            <li>Booking</li>

            <li><img src="./bell-icon.svg" alt="notification bell" className="navbar-img" /></li>
            
            <li><img src="./user-icon.svg" alt="user icon" className="navbar-img" /></li>

        </ul>

      </nav>

      <div className="content-box">

        <header className="header">
          <h1 className="header-title">Book Cold Storage</h1>

          <p className="header-para">Find and book cold storage facilities near you</p>
      </header>

      <div className="facility-grid">

        <div className="facility-search">
          <img src="./magnifying-glass-icon.svg" alt="location icon" className="search-icon" />
          <p>Search cold storage facility</p>
        </div>

        <div className="facility-search">
          <img src="./location-icon.svg" alt="location icon" />
          <select value={selectedLocation} onChange={(e) => 
            setSelectedLoaction(e.target.value)
          }>
            <option value="" selected>All Locations</option>
            {location.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option> ))}    
          </select>
        </div>

      </div>
        
        <div className="facility-grid">

          {filteredFacilities.length > 0 ? (
            filteredFacilities.map((facility) => (
             
              <div key={facility.id} className="facility-card">

        <div className="card">
        
          <div className="card-img">
            <img src={facility.img} alt={facility.name} />
          </div>

          <div className="card-content">

            <h2 className="faclitity-title">{facility.name}</h2>

            <p className="facility-description"><span>{facility.distance}</span> <span>{facility.rating}</span></p>
            
            <p className="facility-description"><span>Capacity</span><span>Price/Day</span></p>
            
            <p className="facility-description"><span>20 Ton</span><span>{facility.price}</span></p>

          </div>
                  
        </div>
        
        <div className="card-button">

                  <button className="book-button" onClick={LogisticsPage}>Book Now</button>

          </div>

      </div>
              
            ))
          ) : (
            <p className="no-results">No facilites found for this location.</p>
          )}
 
        </div>

      </div>

    </div>
  )
}

export default BookColdStoragePage;