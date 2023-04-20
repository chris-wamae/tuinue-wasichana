import logo from './logo.svg';
import './App.css';
import LandingPage from './views/landing-page/LandingPage';
import DonationPageMpesa from './views/donations/donation-page-mpesa/DonationPageMpesa';
import DonationPageCreditCard from './views/donations/donation-page-credit-card/DonationPageCreditCard';
import DonationPagePayPal from './views/donations/donation-page-paypal/DonationPagePaypal';
import AdministratorPage from './views/administrator-page/AdministratorPage';
import CharityApplication from './views/charity-application/CharityApplication';
import store from './app/store';

function App() {
  return (
    <>
     <LandingPage/>
     <DonationPageCreditCard/>
     <DonationPageMpesa/>
     <DonationPagePayPal/>
     <AdministratorPage/>
     <CharityApplication/>
     </>
  );
}

export default App;
