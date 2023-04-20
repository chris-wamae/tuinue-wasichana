import NavBar from "../../../components/navbar/NavBar";
import { useState } from "react";
import "./donation-page-credit-card.css";
function DonationPageCreditCard() {
  return (
    <>
      <NavBar elements={[]} />    
      <h2 className="main-header">
          You are just a few steps away from transforming a girl's life
        </h2>
      <div className="donation-page">
    
        <div className="form-container">
          <h3 className="sub-header">Start by picking a payment method:</h3>
          <div className="pay-methods">
            <div className="card-pay-div">
              <svg
                className="card-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path
                  fill="pink"
                  d="M21 8V6H7v2h14m0 8v-5H7v5h14m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h14M3 20h15v2H3a2 2 0 0 1-2-2V9h2v11Z"
                />
              </svg>
              <div>Credit Card</div>
            </div>
            <img
              src="/donation-page/2560px-M-PESA_LOGO-01.svg.png"
              alt=""
              className="mpesa-logo"
            ></img>
            <img
              src="/donation-page/1681713902871.png"
              alt=""
              className="paypal-logo"
            ></img>
          </div>
          <form className="pay-form">
            <div>
              <h4>Contact information</h4>
              <div className="contacts">
                <input type="text" placeholder="Email address"></input>
                <input type="text" placeholder="Telephone number"></input>
              </div>
            </div>
            <div>
              <h4>Shipping address</h4>
              <div className="payer-details">
                <input type="text" placeholder="First name"></input>
                <input type="text" placeholder="Last name"></input>
                <input type="text" placeholder="Address"></input>
                <input type="text" placeholder="Aprtment/Building"></input>
                <input type="text" placeholder="City"></input>
                <input type="text" placeholder="Country"></input>
                <input type="text" placeholder="Postal code"></input>
                <input type="text" placeholder="Phone"></input>
                <input type="text" placeholder="Card number"></input>
                <input type="text" placeholder="CVV"></input>
                <input type="text" placeholder="Expiry date"></input>
              </div>
            </div>
            <div>
              <h4>Donation amount</h4>
              <div>
                <input type="text" placeholder="Enter amount here"></input>
                </div>
                </div>
                <div>
                <h4>Additional options:</h4>
                <div className="additional-options">
                <input type="checkbox"></input>
                <div>Remind me to donate each month</div>
                <input type="checkbox"></input>
                <div>Set up automatic monthly donations for me</div>
                <input type="checkbox"></input>
                <div>I want to donate anonymously</div>
              </div>
            </div>
            <button className="donate-button" disabled>Donate</button>
          </form>
        </div>
        <img
          src="/donation-page/pexels-askar-abayev-6189929.jpg"
          alt=""
          className="form-image"
        ></img>
      </div>
    </>
  );
}

export default DonationPageCreditCard;
