import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddAdmin from './components/AddAdmin';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;  
