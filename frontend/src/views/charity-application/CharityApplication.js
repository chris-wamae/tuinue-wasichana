import NavBar from "../../components/navbar/NavBar";
import "./charity-application.css"

function CharityApplication() {

    return(
     <>
        <NavBar elements={[]} />    
      <h2 className="main-header">
      Use the form below to apply to be a charity on our platform.
        </h2>
      <div className="donation-page">
          <form className="pay-form">
            <div>
              <h4>Account Creation</h4>
              <div className="contacts">
                <input type="text" placeholder="Email address"></input>
                <input type="text" placeholder="Password"></input>
                <input type="text" placeholder="Password confirmation"></input>
              </div>
            <p>*You’ll be using these credentials to sign in to the platform as a charity</p>
            </div>
            <div>
              <h4>Your Charity Information</h4>
              <div className="payer-details">
                <input type="text" placeholder="Charity name"></input>
                <input type="text" placeholder="Telephone number"></input>
                <input type="text" placeholder="Charity location"></input>
                <input type="text" placeholder="Charity image"></input>
              </div>
            </div>
            <div className="mission-desc">
            <input id="charity-mission" type="text-area" placeholder="Charity Mission"></input>
            <input id="charity-description" type="text-area" placeholder="Charity Description"></input>
            </div>
            <button className="donate-button" disabled>Donate</button>
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