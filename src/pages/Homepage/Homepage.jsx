
import { useEffect } from "react";
import "../../styles/Homepage.css";


function Homepage(){
  

  useEffect(() => {
    document.body.className = "homepage-body";

    return () => {
      document.body.className = "";
    }
  }, []);


  return(

      <main className="container">
        
        <section className="homepage">
          <header className="homepage-header">
          
            <img src="/Tomalink-logo.jpeg" alt="TomaLink logo" className="homepage-logo" />

            <h1 className="homepage-title">TomaLink</h1>

          </header>
        </section>

        <section className="homepage-content">

          <p className="tagline">
            Fresh from Farm to Market
          </p>

          <p className="offer">
            🎉 Get <strong>20% off</strong> your first order
          </p>

        </section>
        
      </main>
      
  )
}

export default Homepage;