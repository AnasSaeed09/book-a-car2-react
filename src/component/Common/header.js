import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper =styled.div.attrs({
  className:'login-logo'
})`
*{
color:white;
font-weight:bolder;

}

.login-logo{
position:relative;
background:linear-gradient(90deg,#928fcc, #190c7c);
width:50px;
height:30px;
text-align:center;
border-radius:35px;
top:10px;
}
.login-logo span{
background:linear-gradient(90deg,red,blue);
border-radius:35px;

}
.login:hover{
color:yellow;
}
.login:active{
color:black;
}
`
export default function Header() {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">Car<span>Book</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item active"><Link to="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
              <li className="nav-item"><Link to="/pricing" className="nav-link">Pricing</Link></li>
              <li className="nav-item"><Link to="/car" className="nav-link">Cars</Link></li>
              <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
               <li className="nav-item">
               <div className='login-logo'>
                <span><Link to="/Login" className='login'>Login</Link></span>
              </div>
               </li>

            </ul>
          </div>
        </div>
      </nav>
     
    </Wrapper>
  );
}
