import "../../styles/LoginOrSignup.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const LoginOrSignup = () => {
  const navigate = useNavigate();

  const goToWelcome = () => {
    navigate("/welcome");
  };

  return (
    <main className="log-sign-container">
      <h1>Log in / Sign up</h1>
      
      <button className="log-btn" onClick={goToWelcome} type="button">
        <FontAwesomeIcon icon={faUser} className="icon" style={{fontSize: "35px"}}/>
        <p>FARMER</p>
      </button>
      
      <button className="log-btn" type="button">
        <FontAwesomeIcon icon={faUser} className="icon" style={{fontSize: "35px"}}/>
        <p>STORAGE FACILITATOR</p>
      </button>
      
      <button className="log-btn" type="button">
        <FontAwesomeIcon icon={faUser} className="icon" style={{fontSize: "35px"}}/>
        <p>BUYER</p>
      </button>
    </main>
  );
};

export default LoginOrSignup;
