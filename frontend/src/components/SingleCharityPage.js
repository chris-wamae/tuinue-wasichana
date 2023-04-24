import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCharityPage.css';
import { useSelector } from 'react-redux';
import { selectSingleCharityId } from '../features/charity/charitiesSlice';

const SingleCharityPage = (props) => {
  const charityId = useSelector(selectSingleCharityId)
  console.log(charityId)
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

