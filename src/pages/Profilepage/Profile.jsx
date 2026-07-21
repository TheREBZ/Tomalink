
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Profilepage.css";


function Profile() {

  const [user, setUser] = useState({ name: "", email: "", category: "", id: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function coldStoragepage() {
    navigate("/bookcoldstoragepage")
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      if(!response.ok) {
        throw new Error('Failed to fetch user profile data')
      }
      return response.json();
    })
    .then((data) => {
      setUser({
        name: data.name,
        email: data.email,
        id: data.id,
        category: data.category,
        phone: data.phone
      });
      
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return(
      <div className="profile-status-container">
        <div className="spinner"></div>
        <p>Loading profile details..........</p>
      </div>
    );
  }

  if (error) {
    return(
      <div className="profile-status-container">
        <div className="spinner"></div>
        <p>⚠️ Error: {error}</p>
      </div>
    )
  }





  return(

      <div className="profile-wrapper">
        
        <div className="profile-container">
          <header className="profile-header">
            <h2>Profile</h2>
          </header>

          <div className="profile-card">

            <div className="avatar-wrapper">
              <img className="avatar" alt="profile-image" src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" />
            </div>

          </div>

          <div className="profile-info">
            <h1 className="profile-name" id="">{user.name}</h1>
            <p className="profile-email" id="">{user.email}</p>
            <p className="role" id="">ID: {user.id}</p>
            <div className="role-badge">
              <span className="role-badge">Role: Farmer</span></div>
              <span className="role-badge">Phone number: {user.phone}</span>
          </div>

        </div>

        <div className="btn-container">

          <button className="coldStorage-btn" onClick={coldStoragepage}>
            Book Cold Storage
          </button>
          
        </div>

        

      </div>

  )
}

export default Profile;