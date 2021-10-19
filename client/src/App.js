import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './views/Home';
import Doctor from './views/Doctor';
import Laboratory from './views/Laboratory';
import Pharmacy from './views/Pharmacy';
import DocList from './views/DocList';
import LaboratoryList from './views/LaboratoryList';
import PharmacyList from './views/PharmacyList';
import Auth from './views/components/Auth';
import DocProfile from './views/DocProfile';
import LabProfile from './views/LabProfile';
import PharmacyProfile from './views/PharmacyProfile';
import Patient from './views/Patient';
import Appointments from './views/Appointments';
import EditProfile from './views/EditProfile';
import Aboutus from './views/Aboutus';
import Contactus from './views/Contactus';
import PaymentComponent from './views/components/payment/paymentComponent';
import PharmacyOrders from './views/PharmacyOrders';
import VideoCall from './views/VideoCall';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/auth" exact component={() => <Auth />} />
          <Route path="/doctor" exact component={() => <Doctor />} />
          <Route path="/patient" exact component={() => <Patient />} />
          <Route path="/laboratory" exact component={() => <Laboratory />} />
          <Route path="/pharmacy" exact component={() => <Pharmacy />} />
          <Route path="/contact-us" exact component={() => <Contactus />} />
          <Route path="/about-us" exact component={() => <Aboutus />} />
          <Route path="/appointments" exact component={() => <Appointments />} />
          <Route path="/doc-list" exact component={() => <DocList />} />
          <Route path="/laboratory-list" exact component={() => <LaboratoryList />} />
          <Route path="/pharmacy-list" exact component={() => <PharmacyList />} />
          <Route path="/edit-profile" exact component={() => <EditProfile />} />
          <Route path="/doc-profile" exact component={() => <DocProfile />} />
          <Route path="/lab-profile" exact component={() => <LabProfile />} />
          <Route path="/pharmacy-profile" exact component={() => <PharmacyProfile />} />
          <Route path="/pharmacy-orders" exact component={() => <PharmacyOrders />} />
          <Route path="/video-call" exact component={() => <VideoCall />} />
          <Route path="/checkout">
            <PaymentComponent
              keys={{
                stripe: "pk_test_51Jb2uWJnnXXD2F4yYEOxsJMkVo7mJh2RF1t3JekVcsgpZfb66MnLXBTCzKsaFxmQFQCOmT5IAD4yk3toZ8NFOcBc005KCLwy8K",
              }}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
