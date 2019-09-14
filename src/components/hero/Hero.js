import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <header>
      <nav>
        <div className="container">
          <img src="./img/logo.png" alt="logo" className="logo" />
          <ul className="navigation-links">
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li className="active"><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main id="hero" className="container">
        <div className="slogan">
          <span>WE</span>
          <h3>Enlight</h3>
          <h2>CORPORATES'</h2>
          <h2 className="future">FUTURE</h2>
        </div>
        <div className="strategy">
          <div className="box">
            <h2>Strategy Mentoring Workshops</h2>
            <p>
              In These workshops we mentor you & your team in building your
              strategy journy.We not only facilitate to you all the needed tools
              and help you in a step-by-step manner to get instant results from
              it, but we also blend needed skills like team work, time
              management, decision making & project management that we believe
              essential for any strategy to succeed
          </p>
            <a href="#" className="btn">
              <img src="./img/logo-white.png" alt="logo-white" />
              Build Your Strategy Today
          </a>
          </div>
          <a href="#" className="link"
          ><i className="far fa-question-circle"></i> How We Do That</a
          >
        </div>
      </main>
    </header>
  );
}

export default Hero;
