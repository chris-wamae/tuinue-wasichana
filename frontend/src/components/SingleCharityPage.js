import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCharityPage.css';

const SingleCharityPage = (props) => {
  const { charity } = props;

  if (!charity) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-charity-page">
      <h1>{charity.name}</h1>
      <p>{charity.description}</p>
      <img src={charity.image} alt={charity.name} />
      <Link to={`/donate/${charity.id}`} className="donate-button">Donate Now</Link>
    </div>
  );
};

export default SingleCharityPage;

