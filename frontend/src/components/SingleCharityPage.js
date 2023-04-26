import React from "react";
import { Link } from "react-router-dom";
import "./SingleCharityPage.css";
import { useSelector } from "react-redux";
import { selectSingleCharityId } from "../features/charity/charitiesSlice";
import NavBar from "./navbar/NavBar";
import { useNavigate } from "react-router-dom";

const SingleCharityPage = (props) => {
  const charityId = useSelector(selectSingleCharityId);
  const navigate  = useNavigate()
  console.log(charityId);
  const charity = {
    id: 1,
    name: " Brighter Horizons Foundation ",
    mission: " Empower disadvantaged youth with education and skills for brighter futures.",
    description: "Brighter Horizons Foundation is a non-profit organization committed to breaking the cycle of poverty by providing underprivileged youth. Through education and skills training, we're providing young people with the tools they need to build brighter futures for themselves and their communities. Our vision is a world where every child has access to the resources and support they need to thrive. Join us in empowering the next generation and building a better tomorrow for us all.",
    image:"https://www.build-africa.org/sites/default/files/build-africa-history.jpg"
  };

  return (
    <>
    <NavBar elements={[]}/>
    <div className="single-charity-page">
      <h1>{charity.name}</h1>
      <h5>{charity.mission}</h5>
      <div className="main-content">
      <div className="text-button">
      <p>{charity.description}</p>
      <button onClick={() => (navigate("/amount-page"))}>Donate to this charity</button>
      </div>
      <img src={charity.image} alt={charity.name} />
      </div>
      
    </div>
    </>
  );
};

export default SingleCharityPage;
