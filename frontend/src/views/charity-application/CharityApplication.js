import NavBar from "../../components/navbar/NavBar";
import "./charity-application.css"
import {useState } from "react";
import { useNavigate } from "react-router-dom";

function CharityApplication() {

const handleSubmit = (e) => {
  e.preventDefault()
  navigate("/application-status")
}

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [passwordConfirm,setPasswordConfirm] = useState("")
const [charityName,setCharityName] = useState("")
const [number,setNumber] = useState("")
const [location,setLocation] = useState("")
const [image,setImage] = useState("")
const [description,setDescription] = useState("")
const [mission,setMission] = useState("")
const navigate = useNavigate()
    return(
     <>
        <NavBar elements={[]} />    
      <h2 className="main-header">
      Use the form below to apply to be a charity on our platform.
        </h2>
      <div className="donation-page">
          <form className="pay-form" onSubmit={handleSubmit}>
            <div>
              <h4>Account Creation</h4>
              <div className="contacts">
                <input type="text" placeholder="Email address"  onChange={(e) =>{setEmail(e.target.value)}}></input>
                <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}></input>
                <input type="text" placeholder="Password confirmation" onChange={(e) => setPasswordConfirm(e.target.value)}></input>
              </div>
            <p>*You’ll be using these credentials to sign in to the platform as a charity</p>
            </div>
            <div>
              <h4>Your Charity Information</h4>
              <div className="payer-details">
                <input type="text" placeholder="Charity name" onChange={(e) => setCharityName(e.target.value)}></input>
                <input type="text" placeholder="Telephone number" onChange={(e) =>setNumber(e.target.value)}></input>
                <input type="text" placeholder="Charity location" onChange={(e) => setLocation(e.target.value)}></input>
                <input type="text" placeholder="Charity image" onChange={(e) => setImage(e.target.value)}></input>
              </div>
            </div>
            <div className="mission-desc">
            <input id="charity-mission" type="text-area" placeholder="Charity Mission" onChange={(e)=>setMission(e.target.value)}></input>
            <input id="charity-description" type="text-area" placeholder="Charity Description" onChange={(e) => setDescription(e.target.value) }></input>
            </div>
            <button className="donate-button" type="submit" >Apply</button>
          </form>
        <img
          src="/donation-page/pexels-askar-abayev-6189929.jpg"
          alt=""
          className="form-image"
        ></img>
      </div>
      </>

    )

}

export default CharityApplication;