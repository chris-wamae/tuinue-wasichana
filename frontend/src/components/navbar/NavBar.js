import "./nav-bar.css"
import GenderIcon from "../gender-icon/GenderIcon";
import {Link} from "react-router-dom"
function NavBar({elements}){
    return(
        <div className="nav">
        <div className="icon-header">
        <Link exact to="/">
        <GenderIcon/>
        </Link>
        <h1 className="nav-header">Tuinue Wasichana</h1>
        
        </div>
        <div className="nav-elements">{elements.map((element)=>{
        return element()
        })}</div>
        </div>
    )

}
export default NavBar;