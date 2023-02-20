import React from 'react';
import { Routes,  Route} from "react-router-dom";
import Home from './components/home.jsx';
import CardLab from './components/Lab.jsx'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab/:id" element={<CardLab/>} />
    </Routes>
  );
}

export default App;