import "../../styles/Welcome-back.css";
import MainPage from "../MainPage/MainPage";
import { useNavigate } from "react-router-dom";

const WelcomeBack = () => {
    const navigate = useNavigate();
    const handleLoginNavigation = () => {
    navigate("/main");
    };
  return (
    <main className="main-container">
        <div className="page-logo">
            <img src="/Tomalink-logo.jpeg" width="120px" height="auto" />
        </div>
        <header className="welcome-text">
            <h1>WELCOME BACK!</h1>
        </header>
        <section className="log-or-sign">
            <form method="get">
                <div className="email-phone">
                    <label htmlFor="email_or_phone">Email or Phone:</label>
                        <input className="custom-input" type="text" name="email_or_phone" id="email_or_phone" placeholder="Email or Phone number" pattern="^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|([0-9]{10,15})$" autoComplete="on" required autoFocus/>
                </div>
                    <div className="password">
                        <label htmlFor="password">Password:</label>
                            <input className="custom-input" type="password" name="password" id="password" minLength="8" required />
                    </div>
                <div className="forgot-pass">
                <p>Forgot Password?</p>
                </div>
                <div className="login-btn-container">
                <button onClick={handleLoginNavigation} className="login-btn" type="button">Log in</button>
                </div>
                <div className="create-acc-container">
                    <button type="button" className="create-acc-btn">Create account</button>
                </div>
                <div className="divider">
                    <span>or continue with</span>
                </div>
                <div className="google-container">
                    <p>Google</p>
                </div>
            </form>
        </section>
    </main>
  )
}

export default WelcomeBack