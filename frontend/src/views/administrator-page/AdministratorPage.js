import "./stylesheets/administrator-page.css"
import { useState } from "react";
import NavBar from "../components/NavBar";
import DeleteCharity from "../components/DeleteCharity";
import ReviewCharity from "../components/ReviewCharity";

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
