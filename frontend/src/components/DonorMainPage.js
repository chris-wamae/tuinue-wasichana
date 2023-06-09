import React, { useState,useEffect } from 'react';
import './DonorMainPage.css';
import NavBar from './navbar/NavBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSingleCharityId } from '../features/charity/charitiesSlice';
import { fetchCharities } from '../features/charity/charitiesSlice';
import { useSelector } from 'react-redux';
import { selectCharities } from '../features/charity/charitiesSlice';

function DonorMainPage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() =>{
        dispatch(fetchCharities())
    },[])
    const allCharities = useSelector(selectCharities)
    console.log(allCharities)
    const CHARITIES_URL = "https://tuinue-wasichana-api.onrender.com/charities"
    const [charities, setCharities] = useState([
        // { id: 1, name: ' Brighter Horizons Foundation ', description: ' Empower disadvantaged youth with education and skills for brighter futures.' ,image:"https://www.build-africa.org/sites/default/files/build-africa-history.jpg"},
        // { id: 2, name: 'Msichana Power', description: "A charity focused on improving girls lives", image:"https://www.build-africa.org/sites/default/files/build-africa-charity-fighting-poverty-through-education.jpg" },
        // { id: 3, name: 'Afro Ladies', description: 'Women  empowering women', image:"https://theworldpursuit.com/wp-content/uploads/2017/04/DSCF7091-1024x683.jpg" },
        // { id: 4, name: 'Kigali Womens Mission' , description: 'Caring for street girls in Kigali', image:"https://images.squarespace-cdn.com/content/v1/55cc900ae4b0989acda95cdb/1444138621313-C4FSFWLMVWZBZ2GZVEWH/ZanaAfrica+Foundation+-+Girls+in+Machakos+Reading+Nia+Comics.jpg?format=1500w" }   
    ]);
    const handleClick = (charityId) => {
        console.log(`Clicked on charity with id: ${charityId}`);
        dispatch(changeSingleCharityId(charityId))
        navigate(`/charity`)
        // Add your logic to navigate to the charity details page
    };

    return (
        <>
        <NavBar elements={[]}/>
       <div className="donor-main-page">
           <h3>Charities helping us make a difference</h3> 
            <section className="charities-list">
                {allCharities.map((charity) => (
                    <div key={charity.id} className="charity-card" onClick={() => handleClick(charity.id)}>
                        <h2>{charity.charity_name}</h2>
                    
                        <img
                            src={charity.charity_image} // Replace with the actual image URL
                            alt={charity.charity_name}
                            className="charity-image"
                        />
                        <h5>Mission</h5>
                            <p>{charity.mission}</p>
                    </div>
                ))}
            </section>
        </div>
        </>
    );
};

export default DonorMainPage;
