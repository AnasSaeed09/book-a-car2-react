import {React,useState}  from 'react';
import styled ,{createGlobalStyle} from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';



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
  .container1 {
  
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .newscreen {
    background: linear-gradient(90deg, #5d54a4, #7c78b8);
    position: relative;
    height: 600px;
    width: 360px;
    box-shadow: 0px 0px 24px #5c5696;
  }

  .newscreen__content {
    z-index: 1;
    position: relative;
    height: 100%;
  }

  .newscreen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    clip-path: inset(0 0 0 0);
  }

  .newscreen__background__shape {
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

  .newlogin {
    width: 320px;
    padding: 30px;
    padding-top: 156px;
  }

  .newlogin__field {
    padding: 20px 0px;
    position: relative;
  }

  .newlogin__icon {
    position: absolute;
    top: 30px;
    color: #7875b5;
  }

  .newlogin__input {
    border: none;
    border-bottom: 2px solid #d1d1d4;
    background: none;
    padding: 10px;
    padding-left: 24px;
    font-weight: 700;
    width: 75%;
    transition: 0.2s;
  }

  .newlogin__input:active,
  .newlogin__input:focus,
  .newlogin__input:hover {
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

  .newbutton__icon {
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

 


`;

export default function SignUp() {
    const navigate=useNavigate();
    const [values , setValues] =useState({
        fname:'',
        lname:'',
        email:'',
        pass:''
    });
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
    const handleValidation=(e)=>{
        e.preventDefault();
        for(let key in values){
            if(values[key]===''){
             alert("Some Fields are msissing.");
            return;
            }
          navigate("/Login");
        }
    }
    const handlepass =(e)=>{
        if(e.target.value === values.pass){
            return;
        }else{
           alert("Password is incorrect");
        }
    } 
  return (
    <>
      
      <Wrapper>
        <div className="container1">
          <div className="newscreen">
            <div className="newscreen__content">
              <form className="newlogin">
                <div className="newlogin__field">
                  <i className="newlogin__icon fas fa-user"></i>
                  <input type="text" name='fname' value={values.fname} onChange={handleChange} className="newlogin__input fst_nm" placeholder="First Name" />
                  <input type="text" name='lname' value={values.lname} onChange={handleChange} className="newlogin__input lst_nm" placeholder="Last Name" />
                  <input type="email" name='email' value={values.email} onChange={handleChange} className="newlogin__input email_nm" placeholder="Email" />
                </div>
                <div className="newlogin__field">
                  <i className="newlogin__icon fas fa-lock"></i>
                  <input type="password" name='pass' value={values.pass} onChange={handleChange} className="newlogin__input pass" placeholder="Password" />
                  <input type="password" className="newlogin__input cpass" onBlur={handlepass} placeholder="Confirm Password" />
                </div>
                <button className="newbutton login__submit " onClick={handleValidation}>
                  <span className="newbutton__text " >Register</span>
                  <i className="newbutton__icon fas fa-chevron-right"></i>
                </button>
              </form>
              
            </div>
            <div className="newscreen__background">
              <span className="newscreen__background__shape screen__background__shape4"></span>
              <span className="newscreen__background__shape screen__background__shape3"></span>
              <span className="mewscreen__background__shape screen__background__shape2"></span>
              <span className="newscreen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
