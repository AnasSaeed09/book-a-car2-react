import React from 'react'
import Header from '../Common/header'
import SearchCar from '../Common/searchCar'
import BecomeAdriverBtn from '../Common/becomeAdriverBtn'
import Testimony from '../Common/testimony'
import CarCount from '../Common/CarCount'
import Footer from '../Common/footer'

export default function About() {
  return (
    <>
     <Header/>
     <section class="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: ('images/bg_3.jpg')}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div class="col-md-9 ftco-animate pb-5">
          	<p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>About us <i class="ion-ios-arrow-forward"></i></span></p>
            <h1 class="mb-3 bread">About Us</h1>
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
