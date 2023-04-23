import NavBar from "../../../components/navbar/NavBar";
import { useState } from "react";
import "./donation-page-amount.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeDonateAmount } from "../../../features/donor/donorsSlice";

function DonationAmountPage() {
  const nagivate = useNavigate()
  const dispatch = useDispatch()
  const [donationAmount, setDonationAmount] = useState(0)
  const [charityId,setCharityId] = useState(undefined)
  const handleSubmit = (e) => {
    e.preventDefault()
    nagivate("/donate")
    console.log(donationAmount)
    dispatch(changeDonateAmount(donationAmount))
  }

  return (
    <>
      <NavBar elements={[]} />
      <form onSubmit={handleSubmit} className="amount-form">
        <h4 style={{ margin: "10px" }}>Enter donation amount below.</h4>
        <input onChange={(e) => { setDonationAmount(e.target.value) }} required type="number" placeholder="Amount in USD"></input>
        <button className="donate-button" type="submit">Proceed to payment</button>
      </form>
    </>
  );
}

export default DonationAmountPage;
