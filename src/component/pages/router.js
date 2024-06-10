import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Common/header';

import Home from './Home';

import Blog from './Blog';
import About from './about';
import Blogsingle from './Blog-single';
import Car from './Car';
import CarSingle from './Car-single';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';
import Login from './Login';
import SignUp from './SignUp';
import Footer from '../Common/footer';


function Routers() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route exactpath="/blog/blog-single" element={<Blogsingle/>} />
        <Route path="/car" element={<Car/>} />
        <Route exactpath="/car/car-single" element={<CarSingle/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default Routers;
