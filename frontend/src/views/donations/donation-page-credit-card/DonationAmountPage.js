import NavBar from "../../../components/navbar/NavBar";
import { useState } from "react";
import "./donation-page-amount.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDonateAmount } from "../../../features/donor/donorsSlice";

function DonationAmountPage() {
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const [donationAmount, setDonationAmount] = useState(0);
  const [charityId, setCharityId] = useState(undefined);
  const [donatingUser, setDonatingUser] = useState("");
  const [anonymousChecked, setAnonymousChecked] = useState(false);
  const [automaticChecked, setAutomaticChecked] = useState(false);
  const [remindChecked, setRemindChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    nagivate("/donate");
    console.log(donationAmount);
    dispatch(changeDonateAmount(donationAmount));
  };

  const user = {
    id: 2,
    name: "Koir",
  };
  console.log(donatingUser);

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
