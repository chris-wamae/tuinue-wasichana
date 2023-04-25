import React from "react";
import { Link } from "react-router-dom";
import "./SingleCharityPage.css";
import { useSelector } from "react-redux";
import { selectSingleCharityId } from "../features/charity/charitiesSlice";
import NavBar from "./navbar/NavBar";

const SingleCharityPage = (props) => {
  const charityId = useSelector(selectSingleCharityId);
  console.log(charityId);
  const charity = {
    id: 1,
    name: " Brighter Horizons Foundation ",
    mission: " Empower disadvantaged youth with education and skills for brighter futures.",
    description: " Empower disadvantaged youth with education and skills for brighter futures. Empower disadvantaged youth with education and skills for brighter futures.  Empower disadvantaged youth with education and skills for brighter futures.  Empower disadvantaged youth with education and skills for brighter futures."
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
      <button>Donate to this charity</button>
      </div>
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt={charity.name} />
      </div>
      
    </div>
    </>
  );
};

export default SingleCharityPage;
