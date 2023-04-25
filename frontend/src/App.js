

import React from 'react';
import './App.css';
import DonorMainPage from './components/DonorMainPage';
import SingleCharityPage from './components/SingleCharityPage';
// import './App.css';
 import CharityLogin from './components/CharityLogin';
 import CharityBeneficiaryStories from './components/CharityBeneficiaryStories';
 import AdministratorLogin from './components/AdministratorLogin';
//import LoginForm from './components/Login';
import SignForm from './components/SignForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/landing-page/LandingPage";
import DonationPageMpesa from "./views/donations/donation-page/DonationPageMpesa";
import DonationAmountPage from "./views/donations/donation-page-credit-card/DonationAmountPage";
import DonationPagePayPal from "./views/donations/donation-page-paypal/DonationPagePaypal";
import AdministratorPage from "./views/administrator-page/AdministratorPage";
import CharityApplication from "./views/charity-application/CharityApplication";
import DonationPage from "./views/donations/donation-page/DonationPage";
import { useDispatch } from 'react-redux';
import { fetchCharities } from './features/charity/charitiesSlice.js';
import { useEffect } from 'react';
import { selectCharities } from './features/charity/charitiesSlice.js';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchSingleCharity } from './features/charity/charitiesSlice.js';
import { createCharity } from './features/charity/charitiesSlice.js';
import { deleteCharity } from "./features/charity/charitiesSlice.js";
import { fetchDonors, selectDonors } from "./features/donor/donorsSlice";
import { createDonor } from "./features/donor/donorsSlice";
import { updateDonor } from "./features/donor/donorsSlice";
import { fetchBeneficiaries } from "./features/beneficiaries/beneficiariesSlice";
import { deleteDonor } from "./features/donor/donorsSlice";
import { selectBeneficiaries } from "./features/beneficiaries/beneficiariesSlice";
import { deleteBeneficiary } from "./features/beneficiaries/beneficiariesSlice";
import { updateBeneficiary } from "./features/beneficiaries/beneficiariesSlice";
import { selectUser } from "./features/authentication/authenticationSlice";
import { loginUser } from "./features/authentication/authenticationSlice";
import { logoutUser } from "./features/authentication/authenticationSlice";
import CharityBeneficiariesManagement from './components/CharityBeneficiariesManagement';
import LoginForm from './components/Login';
import ApplicationStatus from './views/application status/ApplicationStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/amount-page" element={<DonationAmountPage/>}></Route>
        <Route exact path="/mpesa" element={<DonationPageMpesa />}></Route>
        <Route exact path="/donate" element={<DonationPage/>}></Route>
        <Route exact path="/paypal" element={<DonationPagePayPal />}></Route>
        <Route exact path="/admin" element={<AdministratorPage />}></Route>
        <Route exact path="/charity-application" element={<CharityApplication />}></Route>
        {/* <Route exact path="/card" element={<CardComponent/>}></Route> */}
        {/* <Route exact path="/charity-page" element={<CharityPage/>}></Route> */}
        <Route exact path="/management" element={<CharityBeneficiariesManagement />}></Route>
        <Route exact path="/login" element={<LoginForm />}></Route>
        <Route exact path="/sign-up" element={<SignForm />}></Route>
        <Route exact path="/status" element={<ApplicationStatus />}></Route>
        <Route exact path="/charity-login" element={<CharityLogin />}></Route>
        <Route exact path="/stories" element={<CharityBeneficiaryStories />}></Route>
        <Route exact path="/admin-login" element={<AdministratorLogin />}></Route>
        <Route exact path="/charities" element={<DonorMainPage />}></Route>
        <Route exact path="/single-charity" element={<SingleCharityPage />}></Route>
      </Routes>
    </Router>
  );
} 


export default App;

