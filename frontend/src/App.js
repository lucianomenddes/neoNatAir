import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Wellcome from './pages/Wellcome';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import CreateLeitos from './pages/CreateLeitos';
import MonitoredEnvironmente from './pages/MonitoredEnvironment';
import Report from './pages/Report';
import UpdateLeito from './pages/UpdateLeito';
import Users from './pages/Users';

import Account from './pages/Account';
import  Login  from './pages/Login';
//import RequireAuth from './services/requireAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/wellcome" element={[<Layout/>,<Wellcome/>]}/> 

        
            <Route path="/leitoform" element={[<Layout/>,<CreateLeitos/>]}/>
            <Route path="/leitoform-update/:id" element={[<Layout/>,<UpdateLeito/>]}/>
            <Route path="/monitored-leitos" element={[<Layout/>,<MonitoredEnvironmente/>]}/>
            <Route path="/report" element={[<Layout/>,<Report/>]}/>
            <Route path="/users" element={[<Layout/>,<Users/>]}/>
            <Route path="/users-update" element={[<Layout/>,<Account/>]}/>
          

       </Routes>
    </div>
  );
}

export default App;
/*<Route element={<RequireAuth/>}> </Route>*/