import React from 'react'
import Header from '../Common/header'
import Footer from '../Common/footer'
import { Link } from 'react-router-dom'

export default function Car() {
  return (
    <>
  
      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: `url('../../images/bg_3.jpg')`}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div className="col-md-9 ftco-animate pb-5">
          	<p className="breadcrumbs"><span className="mr-2"><Link To="/">Home <i className="ion-ios-arrow-forward"></i></Link></span> <span>Cars <i className="ion-ios-arrow-forward"></i></span></p>
            <h1 className="mb-3 bread">Choose Your Car</h1>
          </div>
        </div>
      </div>
    </section>
		

		<section className="ftco-section bg-light">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-1.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Mercedes Grand Sedan</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Cheverolet</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-2.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Range Rover</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Subaru</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-3.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Mercedes Grand Sedan</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Cheverolet</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>

    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-4.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Mercedes Grand Sedan</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Cheverolet</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-5.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Range Rover</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Subaru</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-6.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Mercedes Grand Sedan</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Cheverolet</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>

    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-7.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Mercedes Grand Sedan</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Cheverolet</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-8.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Range Rover</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Subaru</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-9.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Mercedes Grand Sedan</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Cheverolet</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>

    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-10.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Mercedes Grand Sedan</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Cheverolet</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-11.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Range Rover</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Subaru</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="car-wrap rounded ftco-animate">
    					<div className="img rounded d-flex align-items-end" style={{backgroundImage: `url('../../images/car-12.jpg')`}}>
    					</div>
    					<div className="text">
    						<h2 className="mb-0"><Link To="/car/car-single">Mercedes Grand Sedan</Link></h2>
    						<div className="d-flex mb-3">
	    						<span className="cat">Cheverolet</span>
	    						<p className="price ml-auto">$500 <span>/day</span></p>
    						</div>
    						<p className="d-flex mb-0 d-block"><Link To="#" className="btn btn-primary py-2 mr-1">Book now</Link> <Link To="/car/car-single" className="btn btn-secondary py-2 ml-1">Details</Link></p>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li><Link To="#">&lt;</Link></li>
                <li className="active"><span>1</span></li>
                <li><Link To="#">2</Link></li>
                <li><Link To="#">3</Link></li>
                <li><Link To="#">4</Link></li>
                <li><Link To="#">5</Link></li>
                <li><Link To="#">&gt;</Link></li>
              </ul>
            </div>
          </div>
        </div>
    	</div>
    </section>

    </>
  )
}
