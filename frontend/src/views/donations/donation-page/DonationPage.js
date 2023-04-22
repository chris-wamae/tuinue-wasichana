import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./donation-page.css";
import NavBar from "../../../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";

function DonationPage() {
  const PAYPAL_CLIENT_ID ="AVl_4h4qgIEMqPj4Pja3KMbnNhZtU1PQdXILl8Osb5Voh1yqKZYLKL57SX1cAsJr5kK9tFD8pvllQ_dy";
  const navigate = useNavigate()
  return (
    <>
    <NavBar elements={[]} />
    <h2 className="main-header">
          You are just a few steps away from transforming a girl's life
    </h2>
    <div className="page-container">
    <div className="pay-methods-container">
    <h3 id="choose-pay">Start by picking a payment method.</h3>
    <div className="payment-methods">
     <button id="mpesa-button" onClick={() => navigate("/mpesa")}><img id="button-image" src="/donation-page/1UCUl2bSj2RCyq6H.jpg"></img></button>
      <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID }}>
        <PayPalButtons />
      </PayPalScriptProvider>
    </div>
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
export default DonationPage;
