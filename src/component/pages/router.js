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


function Routers() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact component={<Home/>} />
        <Route path="/about" component={<About/>} />
        <Route path="/blog" component={<Blog/>} />
        <Route exactpath="/blog/blog-single" component={<Blogsingle/>} />
        <Route path="/car" component={<Car/>} />
        <Route exactpath="/car/car-single" component={<CarSingle/>} />
        <Route path="/services" component={<Services/>} />
        <Route path="/pricing" component={<Pricing/>} />
        <Route path="/contact" component={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default Routers;
