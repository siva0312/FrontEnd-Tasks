import React from 'react';
import '../App.css';
import { Route, Routes ,Link } from 'react-router-dom'
import PlaceToVisit from './PlaceToVisit';
import Home from './Home';
import BestTimeToVisit from './BestTimeToVisit';
import Food from './Food';
import Packages from '../TourPackage/Packages';

const Navbar = () => {
  return (
    <header >
      <nav className='navbar navbar-expand-sm'>
        <div className='container'>
          <a className='navbar-brand text-white'><b><h3>TAMILNADU TOURISM</h3></b></a> 
          <ul className='navbar-nav'>
            <Link className='nav-link text-white' to='/Home'><b>Home</b></Link>
            <Link className='nav-link text-white' to="/PlaceToVisit"><b>PlaceToVisit</b></Link>
            <Link className='nav-link text-white' to="/BestTimeToVisit"><b>BestTimeToVisit</b></Link>
            <Link className='nav-link text-white' to="/Packages"><b>Packages</b></Link>
            <Link className='nav-link text-white' to="/Food"><b>Food</b></Link>
          </ul> 
        </div>
      </nav>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/Home' element={<Home/> } />
        <Route path="/PlaceToVisit" element={<PlaceToVisit /> } />
        <Route path="/BestTimeToVisit" element={<BestTimeToVisit /> } />
        <Route path="/Packages" element={<Packages /> } />
        <Route path="/Food" element={<Food /> } />
      </Routes>
    </header>
  )
}

export default Navbar;