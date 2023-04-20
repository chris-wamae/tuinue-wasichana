import React from 'react';
import './App.css';
import DonorMainPage from './components/DonorMainPage';
import CharityLogin from './components/CharityLogin';
import CharityBeneficiaryStories from './components/CharityBeneficiaryStories';
import AdministratorLogin from './components/AdministratorLogin';

function App() {
  return (
    <div className="App">
       {/* <DonorMainPage /> */}
       {/* <CharityLogin />  */}
      {/* <CharityBeneficiaryStories /> */}
      <AdministratorLogin />
    </div>
  );
}

export default App;

