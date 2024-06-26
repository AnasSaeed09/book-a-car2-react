import React from 'react'
import Header from '../Common/header'
import BecomeAdriverBtn from '../Common/becomeAdriverBtn'
import Footer from '../Common/footer'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
        
        <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: ('../../images/bg_3.jpg')}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div className="col-md-9 ftco-animate pb-5">
          	<p className="breadcrumbs"><span className="mr-2"><Link To="/">Home <i className="ion-ios-arrow-forward"></i></Link></span> <span>Services <i className="ion-ios-arrow-forward"></i></span></p>
            <h1 className="mb-3 bread">Our Services</h1>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
          	<span className="subheading">Services</span>
            <h2 className="mb-3">Our Latest Services</h2>
          </div>
        </div>
				<div className="row">
					<div className="col-md-3">
						<div className="services services-2 w-100 text-center">
            	<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
            	<div className="text w-100">
                <h3 className="heading mb-2">Wedding Ceremony</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
						<div className="services services-2 w-100 text-center">
            	<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
            	<div className="text w-100">
                <h3 className="heading mb-2">City Transfer</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
						<div className="services services-2 w-100 text-center">
            	<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
            	<div className="text w-100">
                <h3 className="heading mb-2">Airport Transfer</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
						<div className="services services-2 w-100 text-center">
            	<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
            	<div className="text w-100">
                <h3 className="heading mb-2">Whole City Tour</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
					</div>
				</div>
			</div>
		</section>
    <BecomeAdriverBtn/>
  
    </>
  )
}
