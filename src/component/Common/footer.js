import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <>
  <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2"><Link To="#" className="logo">Car<span>book</span></Link></h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><Link To="#"><span className="icon-twitter"></span></Link></li>
                <li className="ftco-animate"><Link To="#"><span className="icon-facebook"></span></Link></li>
                <li className="ftco-animate"><Link To="#"><span className="icon-instagram"></span></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li><Link To="#" className="py-2 d-block">About</Link></li>
                <li><Link To="#" className="py-2 d-block">Services</Link></li>
                <li><Link To="#" className="py-2 d-block">Term and Conditions</Link></li>
                <li><Link To="#" className="py-2 d-block">Best Price Guarantee</Link></li>
                <li><Link To="#" className="py-2 d-block">Privacy &amp; Cookies Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Customer Support</h2>
              <ul className="list-unstyled">
                <li><Link To="#" className="py-2 d-block">FAQ</Link></li>
                <li><Link To="#" className="py-2 d-block">Payment Option</Link></li>
                <li><Link To="#" className="py-2 d-block">Booking Tips</Link></li>
                <li><Link To="#" className="py-2 d-block">How it works</Link></li>
                <li><Link To="#" className="py-2 d-block">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
                <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><Link To="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></Link></li>
	                <li><Link To="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></Link></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <Link To="https://colorlib.com" target="_blank">Colorlib</Link>
  </p>
          </div>
        </div>
      </div>
    </footer>
    {/* <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> */}
   </>
  )
}
