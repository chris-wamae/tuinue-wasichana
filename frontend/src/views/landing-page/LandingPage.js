import "./landing-page.css"
import NavBar from "../../components/navbar/NavBar"

function LandingPage() {
    const AdminLogin = () =>{
        return(
            "Admin login"
        )
    }
    return (
        <div className="whole-page">
            <NavBar elements={[AdminLogin]}/>
            <div className="hero-div">
            <div>
                    <h2 className="hero-header">Enabling school girls to take charge of their lives</h2>
                    <div className="hero-text">
                    African girls from poor families miss 20 % of school days in a year due to lack of sanitary towels. Our mission is to solve this problem by not just providing sanitary towels but also providing clean water and sanitation facilities such as toilets to ensure they are able to meet the guidelines for proper menstrual hygiene as defined by UNICEF. 
                    </div>
            </div>
                <img className="landing-image" src="/annie-spratt-0cgpyigyIkM-unsplash.jpg"></img>
            </div>
            <h2 className="mission-div">Want to join our mission?</h2>
            <div className="landing-nav">
            <div className="donations-div">
            Donations go to the various charities we work with all over Africa, enabling them to help girls all over the continent.
             <button className="donations-button">Help us through donations</button>
            </div>
            <div className="charity-div">
            As a charity, you’ll recieve financial as well as infastructural  support like labour  from well-wishers and volunteers.
             <button className="charity-button">Join us as a charity</button>
            </div>
            </div>
        </div>
    )
}
export default LandingPage;