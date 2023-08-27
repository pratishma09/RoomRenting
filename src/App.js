import { BrowserRouter, Routes, Route } from "react-router-dom"
import React,{useState,useEffect} from 'react';
import './index.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RoomPost from './pages/RoomPost';
import Search from './pages/Search';
import Admin from"./pages/Admin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='RoomPost' element={<RoomPost/>}/>
          <Route path='search/:search?/:minprice?/:maxprice?' element={<Search/>}/>
          <Route path='Admin' element={<Admin/>}/>
          <Route path='forgotPassword' element={<ForgotPassword/>}/>
          <Route path='resetPassword' element={<ResetPassword/>}/>
          </Routes>
            
        
      </BrowserRouter>
      </div>
  );
}

export default App;
