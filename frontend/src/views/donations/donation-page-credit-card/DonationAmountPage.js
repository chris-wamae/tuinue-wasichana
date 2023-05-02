import NavBar from "../../../components/navbar/NavBar";
import { useState } from "react";
import "./donation-page-amount.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDonateAmount } from "../../../features/donor/donorsSlice";
import { createDonation } from "../../../features/donor/donorsSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/authentication/authenticationSlice";
import { selectSingleCharityId } from "../../../features/charity/charitiesSlice";

function DonationAmountPage() {
  const CREATE_DONATION_URL = "https://tuinue-wasichana-api.onrender.com/donors/:id/donations"
  const GET_DONATIONS = "https://tuinue-wasichana-api.onrender.com/donors/:id/donations"
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const [donationAmount, setDonationAmount] = useState(0);
  const [donatingUser, setDonatingUser] = useState("");
  const [anonymousChecked, setAnonymousChecked] = useState(false);
  const [automaticChecked, setAutomaticChecked] = useState(false);
  const [remindChecked, setRemindChecked] = useState(false);
  const user = useSelector(selectUser)
  const charityId = useSelector(selectSingleCharityId)
  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault();
    nagivate("/donate");

    console.log(donationAmount);
    dispatch(changeDonateAmount(donationAmount));
    dispatch(createDonation({id:10,data:{
      donor_id:user[0].user.id,
      charity_id:charityId,
      amount:Number(donationAmount),
      anonymous:anonymousChecked,
      is_monthly:remindChecked
    }}))
  };


  return (
    <>
      <NavBar elements={[]} />
      <form onSubmit={handleSubmit} className="amount-form">
        <h4 style={{ margin: "10px" }}>Enter donation amount below.</h4>
        <input
          onChange={(e) => {
            setDonationAmount(e.target.value);
          }}
          required
          type="number"
          placeholder="Amount in USD"
        ></input>
        <div className="options">
          <h4>Additional options:</h4>
          <div id="additional-options">
            <input
              type="checkbox"
              checked={automaticChecked}
              onChange={() => {
                setAutomaticChecked(!automaticChecked);
              }}
            ></input>
            <div>Remind me to donate each month</div>
            <input
              type="checkbox"
              checked={remindChecked}
              onChange={() => {
                setRemindChecked(!remindChecked);
              }}
            ></input>
            <div>Set up automatic monthly donations for me</div>
            <input
              type="checkbox"
              checked={anonymousChecked}
              onChange={() => {
                setAnonymousChecked(!anonymousChecked);
                !anonymousChecked
                  ? setDonatingUser(`Anonymous${user.id}`)
                  : setDonatingUser(user.name);
              }}
            ></input>
            <div>I want to donate anonymously</div>
          </div>
        </div>
        <button className="donate-button" type="submit">
          Proceed to payment
        </button>
      </form>
    </>
  );
}

export default DonationAmountPage;
