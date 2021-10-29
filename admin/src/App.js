import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './views/components/Navbar';
import Appointments from './views/Appointments';
import Dashboard from './views/Dashboard';
import Doctor from './views/Doctor';
import Pharmacy from './views/Pharmacy';
import Laboratory from './views/Laboratory';
import Patients from './views/Patients';
import Auth from './views/components/Auth';


function App() {

  const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <Router>
      <Navbar />
      <Switch>
        {!user?.result?.name ? <Route exact path="/" component={Auth} /> : <Route path="/dashboard" exact component={Dashboard} />}
        <Route path="/dashboard" exact component={() => <Dashboard />} />
        <Route path="/appointments" exact component={() => <Appointments />} />
        <Route path="/doctors" exact component={() => <Doctor />} />
        <Route path="/patients" exact component={() => <Patients />} />
        <Route path="/laboratories" exact component={() => <Laboratory />} />
        <Route path="/pharmacies" exact component={() => <Pharmacy />} />
      </Switch>
    </Router>
  );
}

export default App;
