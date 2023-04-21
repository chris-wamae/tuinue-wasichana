import "./admninistrator-page.css"
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import DeleteCharity from "../../components/DeleteCharity";
import ReviewCharity from "../../components/ReviewCharity";

function AdministratorPage() {
   const sample = [1,2,3]
   const  [currentFunctionality,setCurrentFunctionality] = useState(false)
   const NavElements = () =>{
    return(
        "All Charities"
    )
}
  return (
    <>
    <NavBar elements={[NavElements]}/>
    {!currentFunctionality ?  <h3 className="admin-header">Pending Reviews</h3> : <h3 className="admin-header">All charities</h3> }
    {sample.map(()=>{
    return(
        <div className="single-charity">
        <div className="content-div">
          <div>
            <h3>Uzima Girl’s Orphanage </h3>
            <h4>Orphanage mission</h4>
            <p>Orphanage description Orphanage description Orphanage description Orphanage description Orphanage description Orphanage description Orphanage description Orphanage description Orphanage description Orphanage description Orphanage description Orphanage description</p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
        </div>
        <div></div>
        <div>{currentFunctionality ? <DeleteCharity/>:<ReviewCharity/>}</div>
      </div>
    )
    })}
 
   
 </>  );
 
}
export default AdministratorPage;
