import NavBar from "../../../components/navbar/NavBar";
import { useState } from "react";
import "./donation-page-amount.css";
import { useNavigate } from "react-router-dom";

function DonationAmountPage() {
const nagivate = useNavigate()

const handleSubmit = (e) =>{
e.preventDefault()
nagivate("/donate")

}

  return (
    <>
      <NavBar elements={[]} />    
          <form onSubmit={handleSubmit} className="amount-form">
              <h4 style={{margin:"10px"}}>Enter donation amount below.</h4>
                <input required type="text" placeholder="Amount in Ksh."></input>
            <button className="donate-button" type="submit">Proceed to payment</button>
          </form>
    </>
  );
}

export default DonationAmountPage;
