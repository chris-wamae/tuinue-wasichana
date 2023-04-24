import React, { useState } from 'react';
import './DonorMainPage.css';
import NavBar from './navbar/NavBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSingleCharityId } from '../features/charity/charitiesSlice';

function DonorMainPage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [charities, setCharities] = useState([
        { id: 1, name: ' Brighter Horizons Foundation ', description: ' Empower disadvantaged youth with education and skills for brighter futures.' },
        { id: 2, name: 'Paws & Hearts United', description: 'Aid abandoned animals, encourage responsible pet care and welfare education.' },
        { id: 3, name: 'Green Earth Alliance', description: ' Promote eco-conservation, sustainability, and climate protection.' },
        { id: 4, name: 'Art Revive Collective', description: 'Foster creativity via community art projects for social change.' }

    
    ]);
    const handleClick = (charityId) => {
        console.log(`Clicked on charity with id: ${charityId}`);
        dispatch(changeSingleCharityId(charityId))
        navigate(`/single-charity`)
        // Add your logic to navigate to the charity details page
    };

    return (
        <>
        <NavBar elements={[]}/>
       <div className="donor-main-page">
           <h3>Charities helping us make a difference</h3> 
            <section className="charities-list">
                {charities.map((charity) => (
                    <div key={charity.id} className="charity-card" onClick={() => handleClick(charity.id)}>
                        <h2>{charity.name}</h2>
                    
                        <img
                            src="https://via.placeholder.com/150" // Replace with the actual image URL
                            alt={charity.name}
                            className="charity-image"
                        />
                        <h5>Mission</h5>
                            <p>{charity.description}</p>
                    </div>
                ))}
            </section>
        </div>
        </>
    );
};

export default DonorMainPage;
