import React from 'react';
import Header from '../Common/header';
import SearchCar from '../Common/searchCar';
import BecomeAdriverBtn from '../Common/becomeAdriverBtn';
import Testimony from '../Common/testimony';
import CarCount from '../Common/CarCount';
import Footer from '../Common/footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Header />
      <div className="hero-wrap ftco-degree-bg" style={{ backgroundImage: 'url(../../images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
            <div className="col-lg-8 ftco-animate">
              <div className="text w-100 text-center mb-md-5 pb-md-5">
                <h1 className="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
                <p style={{ fontSize: 18 }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                <Link to="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="ion-ios-play"></span>
                  </div>
                  <div className="heading-title ml-5">
                    <span>Easy steps for renting a car</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section ftco-no-pt bg-light">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-12 featured-top">
              <div className="row no-gutters">
                <div className="col-md-4 d-flex align-items-center">
                  <form action="#" className="request-form ftco-animate bg-primary">
                    <h2>Make your trip</h2>
                    <div className="form-group">
                      <label htmlFor="" className="label">Pick-up location</label>
                      <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="label">Drop-off location</label>
                      <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                    </div>
                    <div className="d-flex">
                      <div className="form-group mr-2">
                        <label htmlFor="" className="label">Pick-up date</label>
                        <input type="text" className="form-control" id="book_pick_date" placeholder="Date" />
                      </div>
                      <div className="form-group ml-2">
                        <label htmlFor="" className="label">Drop-off date</label>
                        <input type="text" className="form-control" id="book_off_date" placeholder="Date" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="label">Pick-up time</label>
                      <input type="text" className="form-control" id="time_pick" placeholder="Time" />
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Rent A Car Now" className="btn btn-secondary py-3 px-4" />
                    </div>
                  </form>
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <div className="services-wrap rounded-right w-100">
                    <h3 className="heading-section mb-4">Better Way to Rent Your Perfect Cars</h3>
                    <div className="row d-flex mb-4">
                      <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="services w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
                          <div className="text w-100">
                            <h3 className="heading mb-2">Choose Your Pickup Location</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="services w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-handshake"></span></div>
                          <div className="text w-100">
                            <h3 className="heading mb-2">Select the Best Deal</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="services w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-rent"></span></div>
                          <div className="text w-100">
                            <h3 className="heading mb-2">Reserve Your Rental Car</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p><Link to="#" className="btn btn-primary py-3 px-4">Reserve Your Perfect Car</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">What we offer</span>
              <h2 className="mb-2">Featured Vehicles</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-car owl-carousel">
                <div className="item">
                  <div className="car-wrap rounded ftco-animate">
                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(../../images/car-1.jpg)' }}>
                    </div>
                    <div className="text">
                      <h2 className="mb-0"><Link to="#">Mercedes Grand Sedan</Link></h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Chevrolet</span>
                        <p className="price ml-auto">$500 <span>/day</span></p>
                      </div>
                      <p className="d-flex mb-0 d-block"><Link to="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link to="#" className="btn btn-secondary py-2 ml-1">Details</Link></p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="car-wrap rounded ftco-animate">
                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(../../images/car-2.jpg)' }}>
                    </div>
                    <div className="text">
                      <h2 className="mb-0"><Link to="#">Mercedes Grand Sedan</Link></h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Chevrolet</span>
                        <p className="price ml-auto">$500 <span>/day</span></p>
                      </div>
                      <p className="d-flex mb-0 d-block"><Link to="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link to="#" className="btn btn-secondary py-2 ml-1">Details</Link></p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="car-wrap rounded ftco-animate">
                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(../../images/car-3.jpg)' }}>
                    </div>
                    <div className="text">
                      <h2 className="mb-0"><Link to="#">Mercedes Grand Sedan</Link></h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Chevrolet</span>
                        <p className="price ml-auto">$500 <span>/day</span></p>
                      </div>
                      <p className="d-flex mb-0 d-block"><Link to="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link to="#" className="btn btn-secondary py-2 ml-1">Details</Link></p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="car-wrap rounded ftco-animate">
                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(../../images/car-4.jpg)' }}>
                    </div>
                    <div className="text">
                      <h2 className="mb-0"><Link to="#">Mercedes Grand Sedan</Link></h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Chevrolet</span>
                        <p className="price ml-auto">$500 <span>/day</span></p>
                      </div>
                      <p className="d-flex mb-0 d-block"><Link to="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link to="#" className="btn btn-secondary py-2 ml-1">Details</Link></p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="car-wrap rounded ftco-animate">
                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(../../images/car-5.jpg)' }}>
                    </div>
                    <div className="text">
                      <h2 className="mb-0"><Link to="#">Mercedes Grand Sedan</Link></h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Chevrolet</span>
                        <p className="price ml-auto">$500 <span>/day</span></p>
                      </div>
                      <p className="d-flex mb-0 d-block"><Link to="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link to="#" className="btn btn-secondary py-2 ml-1">Details</Link></p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="car-wrap rounded ftco-animate">
                    <div className="img rounded d-flex align-items-end" style={{ backgroundImage: 'url(../../images/car-6.jpg)' }}>
                    </div>
                    <div className="text">
                      <h2 className="mb-0"><Link to="#">Mercedes Grand Sedan</Link></h2>
                      <div className="d-flex mb-3">
                        <span className="cat">Chevrolet</span>
                        <p className="price ml-auto">$500 <span>/day</span></p>
                      </div>
                      <p className="d-flex mb-0 d-block"><Link to="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link to="#" className="btn btn-secondary py-2 ml-1">Details</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SearchCar />
      <BecomeAdriverBtn />
      <Testimony />
      <CarCount />
      <Footer />
    </>
  );
}
