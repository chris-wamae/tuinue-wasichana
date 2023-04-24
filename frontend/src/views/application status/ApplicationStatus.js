import "./application-status.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

function ApplicationStatus (){
    const [applicationPending,setApplicationPending] = useState(true)
    const navigate = useNavigate()
return(
    <>
    <NavBar elements={[]}/>
    {
    applicationPending ? 
    <div className="status-card">
        <h3 className="status-title">Application Status</h3>
        <p className="status-message">Your application is pending review from the administrator</p>
        <p className="status-message">Please check back later....</p>
        <div className="button">
        <Link to="/">
        <button className="button">Back to homepage</button>
        </Link>
        </div>
    </div> 
    :
    <div className="status-card">
    <h3 className="status-title">Application Status</h3>
    <p className="status-message">Unfortunately, your application to our platform has been rejected</p>
    <p className="status-message">Please give us a call for more information....</p>
    <div className="button">
    <Link to="/">
    <button className="button">Back to homepage</button>
    </Link>
    </div>
</div>}
</>
)
}
export default ApplicationStatus;