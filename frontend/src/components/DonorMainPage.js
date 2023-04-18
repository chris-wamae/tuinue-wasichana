import React, { useState } from 'react';
import './DonorMainPage.css';

const DonorMainPage = () => {
    const [charities, setCharities] = useState([
        { id: 1, name: 'Charity 1', description: 'Charity 1 description' },
        { id: 2, name: 'Charity 2', description: 'Charity 2 description' },
        { id: 3, name: 'Charity 3', description: 'Charity 3 description' },
    ]);
    const [selectedCharity, setSelectedCharity] = useState(null);

    const selectCharity = (charity) => {
        setSelectedCharity(charity);
    };

    const unselectCharity = () => {
        setSelectedCharity(null);
    };

    return (
        <div className="donor-main-page">
            {!selectedCharity ? (
                <div className="charities-list">
                    <h2>Charities</h2>
                    <ul>
                        {charities.map((charity) => (
                            <li key={charity.id}>
                                <button onClick={() => selectCharity(charity)}>
                                    {charity.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="charity-details">
                    <h2>{selectedCharity.name}</h2>
                    <p>{selectedCharity.description}</p>
                    <button onClick={unselectCharity}>Back to Charities</button>
                    <hr />
                    <h3>Donate</h3>
                    <button>Donate Now</button>
                </div>
            )}
        </div>
    );
};

export default DonorMainPage;
