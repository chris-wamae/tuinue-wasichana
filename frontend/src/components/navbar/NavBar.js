import "./nav-bar.css"
import GenderIcon from "../gender-icon/GenderIcon";
function NavBar({elements}){
    return(
        <div className="nav">
        <div className="icon-header">
        <GenderIcon/>
        <h1 className="nav-header">Tuinue Wasichana</h1>
        </div>
        <div className="nav-elements">{elements.map((element)=>{
        return element()
        })}</div>
        </div>
    )

}
export default NavBar;