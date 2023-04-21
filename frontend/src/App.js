import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/landing-page/LandingPage";
import DonationPageMpesa from "./views/donations/donation-page-mpesa/DonationPageMpesa";
import DonationPageCreditCard from "./views/donations/donation-page-credit-card/DonationPageCreditCard";
import DonationPagePayPal from "./views/donations/donation-page-paypal/DonationPagePaypal";
import AdministratorPage from "./views/administrator-page/AdministratorPage";
import CharityApplication from "./views/charity-application/CharityApplication";
import { useDispatch } from 'react-redux';
import { fetchCharities } from './features/charity/charitiesSlice.js';
import store from './app/store';
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

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(createCharity({
    //   userId:1,
    //   body:"ajfefaaf",
    //   title:"jdejjdeea"
    // }))
    // dispatch(deleteCharity({ id: 1 }))
    // // dispatch(fetchDonors())
    // dispatch(createDonor({
    //   name:"JohnDoe"
    // }))
    // dispatch(updateDonor({id:1,data:{address:true}}))
    // dispatch(deleteDonor(1))
    // dispatch(fetchBeneficiaries())
    // dispatch(deleteCharity(1))

    dispatch(updateBeneficiary({id:1,data:{usu:"jius"}}))
  }, [])

  let char = useSelector(selectCharities)
  let don = useSelector(selectDonors)
  let ben = useSelector(selectBeneficiaries)
  console.log(char)
  console.log(don)
  console.log(ben)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/credit-card" element={<DonationPageCreditCard />}></Route>
        <Route exact path="/mpesa" element={<DonationPageMpesa />}></Route>
        <Route exact path="/paypal" element={<DonationPagePayPal />}></Route>
        <Route exact path="/admin" element={<AdministratorPage />}></Route>
        <Route exact path="/charity-application" element={<CharityApplication />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
