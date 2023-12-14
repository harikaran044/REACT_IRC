import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path ='/' element={<Login/>}/>
    <Route path ='/Signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;