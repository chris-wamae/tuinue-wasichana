import React from 'react';
import './App.css';
import DonorMainPage from './components/DonorMainPage';
import CharityLogin from './components/CharityLogin';
import CharityBeneficiaryStories from './components/CharityBeneficiaryStories';
import AdministratorLogin from './components/AdministratorLogin';
import SingleCharityPage from './components/SingleCharityPage';

function App() {
  return (
    <div className="App">
       {/* <DonorMainPage /> */}
       {/* <CharityLogin />  */}
      {/* <CharityBeneficiaryStories /> */}
      {/* <AdministratorLogin /> */}
      <SingleCharityPage/>
    </div>
  );
}

export default App;

