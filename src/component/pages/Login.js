import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Wrapper = styled.section`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
     color:black; 
     
  }

  body {
    background: linear-gradient(90deg, #c7c5f4, #776bcc);

  }

  .container {
  
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .screen {
    background: linear-gradient(90deg, #5d54a4, #7c78b8);
    position: relative;
    height: 600px;
    width: 360px;
    box-shadow: 0px 0px 24px #5c5696;
  }

  .screen__content {
    z-index: 1;
    position: relative;
    height: 100%;
  }

  .screen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    clip-path: inset(0 0 0 0);
  }

  .screen__background__shape {
    transform: rotate(45deg);
    position: absolute;
  }

  .screen__background__shape1 {
    height: 520px;
    width: 520px;
    background: #fff;
    top: -50px;
    right: 120px;
    border-radius: 0 72px 0 0;
  }

  .screen__background__shape2 {
    height: 220px;
    width: 220px;
    background: #6c63ac;
    top: -172px;
    right: 0;
    border-radius: 32px;
  }

  .screen__background__shape3 {
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg, #5d54a4, #6a679e);
    top: -24px;
    right: 0;
    border-radius: 32px;
  }

  .screen__background__shape4 {
    height: 400px;
    width: 200px;
    background: #7e7bb9;
    top: 420px;
    right: 50px;
    border-radius: 60px;
  }

  .login {
    width: 320px;
    padding: 30px;
    padding-top: 156px;
  }

  .login__field {
    padding: 20px 0px;
    position: relative;
  }

  .login__icon {
    position: absolute;
    top: 30px;
    color: #7875b5;
  }

  .login__input {
    border: none;
    border-bottom: 2px solid #d1d1d4;
    background: none;
    padding: 10px;
    padding-left: 24px;
    font-weight: 700;
    width: 75%;
    transition: 0.2s;
  }

  .login__input:active,
  .login__input:focus,
  .login__input:hover {
    outline: none;
    border-bottom-color: #6a679e;
  }

  .login__submit {
    background: #fff;
    font-size: 14px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 26px;
    border: 1px solid #d4d3e8;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 100%;
    color: #4c489d;
    box-shadow: 0px 2px 2px #5c5696;
    cursor: pointer;
    transition: 0.2s;
  }

  .login__submit:active,
  .login__submit:focus,
  .login__submit:hover {
    border-color: #6a679e;
    outline: none;
  }

  .button__icon {
    font-size: 24px;
    margin-left: auto;
    color: #7875b5;
  }

  .social-login {
    position: absolute;
    height: 140px;
    width: 160px;
    text-align: center;
    bottom: 0px;
    right: 0px;
    color: #fff;
  }

  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social-login__icon {
    padding: 20px 10px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0px 0px 8px #7875b5;
  }

  .social-login__icon:hover {
    transform: scale(1.5);
  }
 

`;

export default function Login() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" placeholder="User name / Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" placeholder="Password" />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
              <div className="social-login">
                <h3 className='signup'><Link to="/signUp">Sign Up</Link></h3>
                <div className="social-icons">
                  <link href="#" className="social-login__icon fab fa-instagram"></link>
                  <link href="#" className="social-login__icon fab fa-facebook"></link>
                  <link href="#" className="social-login__icon fab fa-twitter"></link>
                </div>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
