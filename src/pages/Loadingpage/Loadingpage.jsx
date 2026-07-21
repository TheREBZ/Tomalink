import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

import "../../styles/Loadingpage.css";


function LoadingPage(){

  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "loading-body";

    return() => {
      document.body.className = "";
    };
  }, []);
  
  const handleGetStarted = () => {
      navigate("/login");
  };

  return(
    <main className="container">
      <section className="loadpage">

        <header className="loadpage-header">

          <img src="./Tomalink-logo.jpeg" alt="TomaLink logo" className="loadpage-logo" title="Load page logo" />

          <h1 className="loadpage-title">TomaLink</h1>

        </header>

        
        
        <p className="tagline">
          <span className="loadpage-tagline">Connect</span> 
          <span className="loadpage-tagline">Store</span>
          <span className="loadpage-tagline">Deliver</span>
        </p>

        <div className="loading-wheel">
          
          <div className="wheel left-up">
            <img src="/person-icon.png" alt="a human consumer" />
          </div>
          <div className="wheel right-up">
            <img src="/tomato-icon.png" alt="a truck icon" />
          </div>
          <div className="wheel right-down">
            <img src="/truck-icon.png" alt="a storage box" />
          </div>
          <div className="wheel left-down">
            <img src="/storage box icon.png" alt="tomatoes joined together" />
          </div>
        </div>

        <Button onClick={handleGetStarted}>
          Get Started
        </Button>
        
      </section>
    </main>
  )
}

export default LoadingPage;