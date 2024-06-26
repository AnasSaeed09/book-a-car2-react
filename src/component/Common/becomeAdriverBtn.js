import React from 'react'
import { Link } from 'react-router-dom'

export default function BecomeAdriverBtn() {
  return (
    <>
    <section className="ftco-section ftco-intro" style={{backgroundImage:`url(../../images/bg_3.jpg)`}}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-md-6 heading-section heading-section-white ftco-animate">
            <h2 className="mb-3">Do You Want To Earn With Us? So Don't Be Late.</h2>
            <Link To="#" className="btn btn-primary btn-lg">Become A Driver</Link>
          </div>
				</div>
			</div>
		</section>
    </>
  )
}
