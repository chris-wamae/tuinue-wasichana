import React from 'react';
import './App.css';
import DonorMainPage from './components/DonorMainPage';
import CharityLogin from './components/CharityLogin';
import CharityBeneficiaryStories from './components/CharityBeneficiaryStories';


function App() {
  return (
    <div className="App">
      {/* <DonorMainPage /> */}
      {/* <CharityLogin /> */}
      <CharityBeneficiaryStories />
    </div>
  );
}

export default App;

