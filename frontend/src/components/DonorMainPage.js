import React, { useState } from 'react';
import './DonorMainPage.css';

function DonorMainPage(){
    const [charities, setCharities] = useState([
        { id: 1, name: ' Brighter Horizons Foundation ', description: ' Empower disadvantaged youth with education and skills for brighter futures.' },
        { id: 2, name: 'Paws & Hearts United', description: 'Aid abandoned animals, encourage responsible pet care and welfare education.' },
        { id: 3, name: 'Green Earth Alliance', description: ' Promote eco-conservation, sustainability, and climate protection.' },
        { id: 4, name: 'Art Revive Collective', description: 'Foster creativity via community art projects for social change.' }

    
    ]);
    const handleClick = (charityId) => {
        console.log(`Clicked on charity with id: ${charityId}`);
        // Add your logic to navigate to the charity details page
    };

    return (
       <div className="donor-main-page">
            <header className="header">
                <h1>Choose a Charity</h1>
            </header>
            <section className="charities-list">
                {charities.map((charity) => (
                    <button key={charity.id} className="charity-card" onClick={() => handleClick(charity.id)}>
                        <h2>{charity.name}</h2>
                        <p>{charity.description}</p>
                        <img
                            src="https://via.placeholder.com/150" // Replace with the actual image URL
                            alt={charity.name}
                            className="charity-image"
                        />
                    </button>
                ))}
            </section>
        </div>
    );
};

export default DonorMainPage;
