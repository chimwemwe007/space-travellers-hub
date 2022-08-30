import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import MissionsComponent from './components/MissionsComponents';
import RocketsComponent from './components/RocketsComponent';
import ProfileComponent from './components/ProfileComponents';
import Navbar from './components/Navbar';
import './App.css';

const app = () => (
  <div>
    <Navbar />
    <section className="section">
      <Routes>
        <Route path="/" element={<RocketsComponent />} />
        <Route path="missions" element={<MissionsComponent />} />
        <Route path="profile" element={<ProfileComponent />} />
      </Routes>
    </section>
  </div>
);

export default app;
