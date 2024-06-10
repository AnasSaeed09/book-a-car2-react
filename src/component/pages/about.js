import React from 'react'
import Header from '../Common/header'
import SearchCar from '../Common/searchCar'
import BecomeAdriverBtn from '../Common/becomeAdriverBtn'
import Testimony from '../Common/testimony'
import CarCount from '../Common/CarCount'
import Footer from '../Common/footer'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
     <Header/>
     <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: ('images/bg_3.jpg')}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div className="col-md-9 ftco-animate pb-5">
          	<p className="breadcrumbs"><span className="mr-2"><Link To="index.html">Home <i className="ion-ios-arrow-forward"></i></Link></span> <span>About us <i className="ion-ios-arrow-forward"></i></span></p>
            <h1 className="mb-3 bread">About Us</h1>
          </div>
        </div>
      </div>
    </section>
    <SearchCar/>
    <BecomeAdriverBtn/>
    <Testimony/>
    <CarCount/>
    <Footer/>

    </>
  )
}
