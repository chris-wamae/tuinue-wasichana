import "./admninistrator-page.css"
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import DeleteCharity from "../../components/DeleteCharity";
import ReviewCharity from "../../components/ReviewCharity";

function AdministratorPage() {
  const PENDING_CHARITIES = "https://tuinue-wasichana-api.onrender.com/admin/pending_charities"
  const APPROVE_CHARITY = "https://tuinue-wasichana-api.onrender.com/admin/:id/approve"
  const REJECT_CHARITY = "https://tuinue-wasichana-api.onrender.com/admin/:id/reject"
  const DELETE_CHARITY = "https://tuinue-wasichana-api.onrender.com/admin/charities/:id"
  const VIEW_APPROVED = "https://tuinue-wasichana-api.onrender.com/admin/approved_charities"

  const [currentFunctionality,setCurrentFunctionality] = useState(false)
   const sample = [{ id: 1, name: ' Brighter Horizons Foundation ', mission: ' Empower disadvantaged youth with education and skills for brighter futures.' ,image:"https://www.build-africa.org/sites/default/files/build-africa-history.jpg", description: "Brighter Horizons Foundation is a non-profit organization committed to breaking the cycle of poverty by providing underprivileged youth. Through education and skills training, we're providing young people with the tools they need to build brighter futures for themselves and their communities. Our vision is a world where every child has access to the resources and support they need to thrive. Join us in empowering the next generation and building a better tomorrow for us all."},
    {
      id: 2,
      name: 'Msichana Power',
      mission: 'A charity focused on improving girls lives',
      image: 'https://www.build-africa.org/sites/default/files/build-africa-charity-fighting-poverty-through-education.jpg',
      description: 'Msichana Power is a non-profit organization dedicated to empowering girls and young women in Tanzania. Through education, mentorship, and community outreach programs, we aim to provide girls with the skills and confidence they need to become leaders in their communities and break the cycle of poverty.'
    },
    {
      id: 3,
      name: 'Afro Ladies',
      mission: 'Women empowering women',
      image: 'https://theworldpursuit.com/wp-content/uploads/2017/04/DSCF7091-1024x683.jpg',
      description: 'Afro Ladies is a community-based organization committed to promoting gender equality and empowering women in Uganda. We provide education, training, and support to help women build skills and self-confidence, and we advocate for policies and programs that advance women’s rights and opportunities.'
    },
    {
      id: 4,
      name: 'Kigali Womens Mission',
      mission: 'Caring for street girls in Kigali',
      image: "https://images.squarespace-cdn.com/content/v1/55cc900ae4b0989acda95cdb/1444138621313-C4FSFWLMVWZBZ2GZVEWH/ZanaAfrica+Foundation+-+Girls+in+Machakos+Reading+Nia+Comics.jpg?format=1500w",
      description: 'Kigali Womens Mission is a grassroots organization that provides shelter, education, and support to girls and young women who have been living on the streets of Kigali, Rwanda. Our mission is to help these girls build better futures for themselves by providing them with the resources and opportunities they need to succeed.'
    }
  ]
  
   const NavElements = () =>{
    return(
      !currentFunctionality ? <span onClick={() => setCurrentFunctionality(true)}>All Charities</span>  :  <span onClick={() => setCurrentFunctionality(false)}>Review Charities</span>
    )
}
  return (
    <>
    <NavBar elements={[NavElements]}/>
    {!currentFunctionality ?  <h3 className="admin-header">Pending Reviews</h3> : <h3 className="admin-header">All charities</h3> }
    {sample.map((eachSample)=>{
    return(
        <div className="single-charity">
        <div className="content-div">
          <div>
            <h3>{eachSample.name}</h3>
            <h4>{eachSample.mission}</h4>
            <p>{eachSample.description}</p>
          </div>
          <img src={eachSample.image}></img>
        </div>
        <div></div>
        <div>{currentFunctionality ? <DeleteCharity charity={"charity"}/>:<ReviewCharity charity={"charity"}/>}</div>
      </div>
    )
    })}
 
   
 </>  );
 
}
export default AdministratorPage;
