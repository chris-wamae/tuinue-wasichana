import React, { useState } from 'react';
//import charity.css from
const donations = [
  { name: 'John', amount: 500, anonymous: false },
  { name: 'Mary', amount: 100, anonymous: false },
  { name: 'Anonymous', amount: 200, anonymous: true },
  { name: 'Bob', amount: 250, anonymous: false },
  { name: 'Anonymous', amount: 150, anonymous: true },
  { name: 'Alice', amount: 750, anonymous: false },
  { name: 'Judy', amount: 750, anonymous: false },
  { name: 'Hannah', amount: 750, anonymous: false },
  { name: 'Phylis', amount: 750, anonymous: false },
  { name: 'Samuel', amount: 750, anonymous: false },
  { name: 'Anonymous', amount: 1000, anonymous: true },
];

const CharityPage = () => {
  const [nonAnonymousDonors, setNonAnonymousDonors] = useState([]);
  const [anonymousDonations, setAnonymousDonations] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);
  // const [charityInfo, setCharityInfo] = useState('.');

  // Filter non-anonymous donors and their donations
  const filterNonAnonymousDonors = () => {
    const nonAnonymous = donations.filter(donation => !donation.anonymous);
    setNonAnonymousDonors(nonAnonymous);
  };

  // Filter anonymous donations
  const filterAnonymousDonations = () => {
    const anonymous = donations.filter(donation => donation.anonymous);
    setAnonymousDonations(anonymous); 
  };

  // Calculate and set the total donation amount
  const calculateTotalDonation = () => {
    const total = donations.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalDonation(total);
  };

  return (
    <div>
      <h2>Uzima Orphanage</h2>
      <p>The Uzima Orphanage was founded with a mission to provide a safe and nurturing home for children who had lost their parents or were abandoned. The orphanage was located in a small village in Kenya and was run by a dedicated team of staff and volunteers.

The mission of the Uzima Orphanage was to not only provide basic necessities like food, clothing, and shelter but also to provide the children with education and life skills. The staff believed that education was the key to breaking the cycle of poverty, and so they provided the children with access to quality education and tutoring services.

In addition to education, the orphanage also provided healthcare services to the children, including regular check-ups and access to medical treatment. The staff also organized various activities and programs to promote the children's mental and emotional well-being, such as sports, music, and art classes.

The orphanage's mission was to provide a loving and supportive environment where the children could grow and thrive, and they were committed to ensuring that each child had a chance to reach their full potential. Through their hard work and dedication, the staff of the Uzima Orphanage were able to provide a better future for the children in their care.</p>
      <button onClick={filterNonAnonymousDonors}>View non-anonymous donors and their donations</button>
      {nonAnonymousDonors.map(donation => (
        <div key={donation.name}>
          {donation.name}: {donation.amount}
        </div>
      ))}

      <button onClick={filterAnonymousDonations}>View donations of anonymous donors</button>
      {anonymousDonations.map(donation => (
        <div key={donation.name}>
          Anonymous: {donation.amount}
        </div>
      ))}

      <button onClick={calculateTotalDonation}>View total amount donated</button>
      {totalDonation > 0 && <div>Total amount donated: {totalDonation}</div>}
    </div>
  );
};




export default CharityPage;