import React from 'react'
import Header from '../Common/header'
import SearchCar from '../Common/searchCar'
import BecomeAdriverBtn from '../Common/becomeAdriverBtn'
import Testimony from '../Common/testimony'
import CarCount from '../Common/CarCount'
import Footer from '../Common/footer'

export default function Home() {
  return (
    <>
  
    <div classNameName="hero-wrap ftco-degree-bg" style={{backgroundImage:('../../images/bg_1.jpg')}} data-stellar-background-ratio="0.5">
      <div classNameName="overlay"></div>
      <div classNameName="container">
        <div classNameName="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
          <div classNameName="col-lg-8 ftco-animate">
          	<div classNameName="text w-100 text-center mb-md-5 pb-md-5">
	            <h1 classNameName="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
	            <p style={{fontSize: 18}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
	            <link href="https://vimeo.com/45830194" classNameName="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
	            	<div classNameName="icon d-flex align-items-center justify-content-center">
	            		<span classNameName="ion-ios-play"></span>
	            	</div>
	            	<div classNameName="heading-title ml-5">
		            	<span>Easy steps for renting a car</span>
	            	</div>
	            </link>
            </div>
          </div>
        </div>
      </div>
    </div>

     <section classNameName="ftco-section ftco-no-pt bg-light">
    	<div classNameName="container">
    		<div classNameName="row no-gutters">
    			<div classNameName="col-md-12	featured-top">
    				<div classNameName="row no-gutters">
	  					<div classNameName="col-md-4 d-flex align-items-center">
	  						<form action="#" classNameName="request-form ftco-animate bg-primary">
		          		<h2>Make your trip</h2>
			    				<div classNameName="form-group">
			    					<label for="" classNameName="label">Pick-up location</label>
			    					<input type="text" classNameName="form-control" placeholder="City, Airport, Station, etc"/>
			    				</div>
			    				<div classNameName="form-group">
			    					<label for="" classNameName="label">Drop-off location</label>
			    					<input type="text" classNameName="form-control" placeholder="City, Airport, Station, etc"/>
			    				</div>
			    				<div classNameName="d-flex">
			    					<div classNameName="form-group mr-2">
			                <label for="" classNameName="label">Pick-up date</label>
			                <input type="text" classNameName="form-control" id="book_pick_date" placeholder="Date"/>
			              </div>
			              <div classNameName="form-group ml-2">
			                <label for="" classNameName="label">Drop-off date</label>
			                <input type="text" classNameName="form-control" id="book_off_date" placeholder="Date"/>
			              </div>
		              </div>
		              <div classNameName="form-group">
		                <label for="" classNameName="label">Pick-up time</label>
		                <input type="text" classNameName="form-control" id="time_pick" placeholder="Time"/>
		              </div>
			            <div classNameName="form-group">
			              <input type="submit" value="Rent A Car Now" classNameName="btn btn-secondary py-3 px-4"/>
			            </div>
			    			</form>
	  					</div>
	  					<div classNameName="col-md-8 d-flex align-items-center">
	  						<div classNameName="services-wrap rounded-right w-100">
	  							<h3 classNameName="heading-section mb-4">Better Way to Rent Your Perfect Cars</h3>
	  							<div classNameName="row d-flex mb-4">
					          <div classNameName="col-md-4 d-flex align-self-stretch ftco-animate">
					            <div classNameName="services w-100 text-center">
				              	<div classNameName="icon d-flex align-items-center justify-content-center"><span classNameName="flaticon-route"></span></div>
				              	<div classNameName="text w-100">
					                <h3 classNameName="heading mb-2">Choose Your Pickup Location</h3>
				                </div>
					            </div>      
					          </div>
					          <div classNameName="col-md-4 d-flex align-self-stretch ftco-animate">
					            <div classNameName="services w-100 text-center">
				              	<div classNameName="icon d-flex align-items-center justify-content-center"><span classNameName="flaticon-handshake"></span></div>
				              	<div classNameName="text w-100">
					                <h3 classNameName="heading mb-2">Select the Best Deal</h3>
					              </div>
					            </div>      
					          </div>
					          <div classNameName="col-md-4 d-flex align-self-stretch ftco-animate">
					            <div classNameName="services w-100 text-center">
				              	<div classNameName="icon d-flex align-items-center justify-content-center"><span classNameName="flaticon-rent"></span></div>
				              	<div classNameName="text w-100">
					                <h3 classNameName="heading mb-2">Reserve Your Rental Car</h3>
					              </div>
					            </div>      
					          </div>
					        </div>
					        <p><link href="#" classNameName="btn btn-primary py-3 px-4">Reserve Your Perfect Car</link></p>
	  						</div>
	  					</div>
	  				</div>
				</div>
  		</div>
        </div>
    </section>


    <section classNameName="ftco-section ftco-no-pt bg-light">
    	<div classNameName="container">
    		<div classNameName="row justify-content-center">
          <div classNameName="col-md-12 heading-section text-center ftco-animate mb-5">
          	<span classNameName="subheading">What we offer</span>
            <h2 classNameName="mb-2">Feeatured Vehicles</h2>
          </div>
        </div>
    		<div classNameName="row">
    			<div classNameName="col-md-12">
    				<div classNameName="carousel-car owl-carousel">
    					<div classNameName="item">
    						<div classNameName="car-wrap rounded ftco-animate">
		    					<div classNameName="img rounded d-flex align-items-end" style={{backgroundImage: ('../../images/car-1.jpg')}}>
		    					</div>
		    					<div classNameName="text">
		    						<h2 classNameName="mb-0"><link href="#">Mercedes Grand Sedan</link></h2>
		    						<div classNameName="d-flex mb-3">
			    						<span classNameName="cat">Cheverolet</span>
			    						<p classNameName="price ml-auto">$500 <span>/day</span></p>
		    						</div>
		    						<p classNameName="d-flex mb-0 d-block"><link href="#" classNameName="btn btn-primary py-2 mr-1">Book now</link> <link href="#" classNameName="btn btn-secondary py-2 ml-1">Details</link></p>
		    					</div>
		    				</div>
    					</div>
    					<div classNameName="item">
    						<div classNameName="car-wrap rounded ftco-animate">
		    					<div classNameName="img rounded d-flex align-items-end" style={{backgroundImage: ('../../images/car-2.jpg')}}>
		    					</div>
		    					<div classNameName="text">
		    						<h2 classNameName="mb-0"><link href="#">Mercedes Grand Sedan</link></h2>
		    						<div classNameName="d-flex mb-3">
			    						<span classNameName="cat">Cheverolet</span>
			    						<p classNameName="price ml-auto">$500 <span>/day</span></p>
		    						</div>
		    						<p classNameName="d-flex mb-0 d-block"><link href="#" classNameName="btn btn-primary py-2 mr-1">Book now</link> <link href="#" classNameName="btn btn-secondary py-2 ml-1">Details</link></p>
		    					</div>
		    				</div>
    					</div>
    					<div classNameName="item">
    						<div classNameName="car-wrap rounded ftco-animate">
		    					<div classNameName="img rounded d-flex align-items-end" style={{backgroundImage: ('../../images/car-3.jpg')}}>
		    					</div>
		    					<div classNameName="text">
		    						<h2 classNameName="mb-0"><link href="#">Mercedes Grand Sedan</link></h2>
		    						<div classNameName="d-flex mb-3">
			    						<span classNameName="cat">Cheverolet</span>
			    						<p classNameName="price ml-auto">$500 <span>/day</span></p>
		    						</div>
		    						<p classNameName="d-flex mb-0 d-block"><link href="#" classNameName="btn btn-primary py-2 mr-1">Book now</link> <link href="#" classNameName="btn btn-secondary py-2 ml-1">Details</link></p>
		    					</div>
		    				</div>
    					</div>
    					<div classNameName="item">
    						<div classNameName="car-wrap rounded ftco-animate">
		    					<div classNameName="img rounded d-flex align-items-end" style={{backgroundImage: ('../../images/car-4.jpg')}}>
		    					</div>
		    					<div classNameName="text">
		    						<h2 classNameName="mb-0"><link href="#">Mercedes Grand Sedan</link></h2>
		    						<div classNameName="d-flex mb-3">
			    						<span classNameName="cat">Cheverolet</span>
			    						<p classNameName="price ml-auto">$500 <span>/day</span></p>
		    						</div>
		    						<p classNameName="d-flex mb-0 d-block"><link href="#" classNameName="btn btn-primary py-2 mr-1">Book now</link> <link href="#" classNameName="btn btn-secondary py-2 ml-1">Details</link></p>
		    					</div>
		    				</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
    <SearchCar/>
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
            	<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-wedding-car"></span></div>
            	<div className="text w-100">
                <h3 className="heading mb-2">Wedding Ceremony</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
						<div className="services services-2 w-100 text-center">
            	<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-transportation"></span></div>
            	<div className="text w-100">
                <h3 className="heading mb-2">City Transfer</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
						<div className="services services-2 w-100 text-center">
            	<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-car"></span></div>
            	<div className="text w-100">
                <h3 className="heading mb-2">Airport Transfer</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
					</div>
					<div className="col-md-3">
						<div className="services services-2 w-100 text-center">
            	<div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-transportation"></span></div>
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
    <Testimony/>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry justify-content-end">
              <link href="blog-single.html" className="block-20" style={{backgroundImage: ('../../images/image_1.jpg')}}>
              </link>
              <div className="text pt-4">
              	<div className="meta mb-3">
                  <div><link href="#">Oct. 29, 2019</link></div>
                  <div><link href="#">Admin</link></div>
                  <div><link href="#" className="meta-chat"><span className="icon-chat"></span> 3</link></div>
                </div>
                <h3 className="heading mt-2"><link href="#">Why Lead Generation is Key for Business Growth</link></h3>
                <p><link href="#" className="btn btn-primary">Read more</link></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry justify-content-end">
              <link href="blog-single.html" className="block-20" style={{backgroundImage: ('../../images/image_2.jpg')}}>
              </link>
              <div className="text pt-4">
              	<div className="meta mb-3">
                  <div><link href="#">Oct. 29, 2019</link></div>
                  <div><link href="#">Admin</link></div>
                  <div><link href="#" className="meta-chat"><span className="icon-chat"></span> 3</link></div>
                </div>
                <h3 className="heading mt-2"><link href="#">Why Lead Generation is Key for Business Growth</link></h3>
                <p><link href="#" className="btn btn-primary">Read more</link></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry">
              <link href="blog-single.html" className="block-20" style={{backgroundImage: ('../../images/image_3.jpg')}}>
              </link>
              <div className="text pt-4">
              	<div className="meta mb-3">
                  <div><link href="#">Oct. 29, 2019</link></div>
                  <div><link href="#">Admin</link></div>
                  <div><link href="#" className="meta-chat"><span className="icon-chat"></span> 3</link></div>
                </div>
                <h3 className="heading mt-2"><link href="#">Why Lead Generation is Key for Business Growth</link></h3>
                <p><link href="#" className="btn btn-primary">Read more</link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>	


    <CarCount/>
   
    </>
  )
}
