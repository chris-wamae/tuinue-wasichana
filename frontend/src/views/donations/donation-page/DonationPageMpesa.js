import NavBar from "../../../components/navbar/NavBar";
import { useState } from "react";
import "./donation-page-mpesa.css";

function DonationPageMpesa() {
  //Show donation amount form 
  //Form has proceed to payment button
  //Payment options
  //Payment Forms
  return (
    <>
     <NavBar elements={[]} />

      <div className="donation-page">
        <div className="form-container-mpesa">
          <img
              src="/donation-page/2560px-M-PESA_LOGO-01.svg.png"
              alt=""
              id="mpesa-logo"
            ></img>
          <form className="pay-form-mpesa">
            <h4 style={{ margin: "0px" }} id="options-header">
              Payment Options:
            </h4>
            <div className="pay-options">
              <div className="paybill-div">
                <h3 style={{ margin: "0px" }}>Paybill</h3>
                <div className="paybill-details">
                  <div>
                    Paybill: <br></br>12345
                  </div>
                  <div>Account Number: 12345678</div>
                </div>
              </div>
              <div className="send-money">
                <h3 style={{ margin: "0px" }}>Send Money:</h3>
                <div className="send-money-details">
                  <h4 id="mpesa-number" style={{ margin: "0px" }}>
                    Our Mpesa number
                  </h4>

                  <div id="send-number">0712345678</div>
                </div>
              </div>
              <div className="prompt">
                <h3 style={{ margin: "0px" }}>Mpesa prompt</h3>
                <div className="prompt-details">
                  <input
                    type="text"
                    placeholder="Enter your Mpesa number"
                  ></input>
                </div>
                <button id="prompt-button" disabled>
                  Get prompt
                </button>
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
          </form>
        </div>

        <img
          src="/donation-page/pexels-askar-abayev-6189929.jpg"
          alt=""
          id="form-image"
        ></img>
      </div>
    </>
  );
}

export default DonationPageMpesa;
