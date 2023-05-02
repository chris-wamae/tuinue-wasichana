import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SingleCharityPage.css";
import { useSelector } from "react-redux";
import { selectSingleCharityId } from "../features/charity/charitiesSlice";
import NavBar from "./navbar/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSingleCharity } from "../features/charity/charitiesSlice";
import { selectSingleCharity } from "../features/charity/charitiesSlice";

const SingleCharityPage = () => {
  const dispatch = useDispatch()
  const charityId = useSelector(selectSingleCharityId);
  useEffect(() => {
    dispatch(fetchSingleCharity(charityId))

  },[charityId])
  const getCharity = useSelector(selectSingleCharity)
  const navigate = useNavigate()
  console.log(charityId);
  console.log(getCharity)
  const CHARITY_URL = "https://tuinue-wasichana-api.onrender.com/charities/"
  // const charity = {
  //   id: 1,
  //   name: " Brighter Horizons Foundation ",
  //   mission: " Empower disadvantaged youth with education and skills for brighter futures.",
  //   description: "Brighter Horizons Foundation is a non-profit organization committed to breaking the cycle of poverty by providing underprivileged youth. Through education and skills training, we're providing young people with the tools they need to build brighter futures for themselves and their communities. Our vision is a world where every child has access to the resources and support they need to thrive. Join us in empowering the next generation and building a better tomorrow for us all.",
  //   image: "https://www.build-africa.org/sites/default/files/build-africa-history.jpg"
  // };

  return (
    <>
      <NavBar elements={[]} />
      {getCharity ?
       <div className="single-charity-page">
        <h1>{getCharity[0].charity_name}</h1>
        <h5>{getCharity[0].mission}</h5>
        <div className="main-content">
          <div className="text-button">
            <p>{getCharity[0].about_charity}</p>
            <button onClick={() => (navigate("/amount-page"))}>Donate to this charity</button>
          </div>
          <img src={getCharity[0].charity_image} alt={getCharity[0].charity_name} />
        </div>

      </div> :
      "Loading"}
    </>
  );
};

export default SingleCharityPage;
