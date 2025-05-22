import React, { useState, useEffect } from 'react';
import '../styles/login_page.css';
import boy from '../assets/school_boy.png';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  const [captcha, setCaptcha] = useState(null);
  const [filledCaptcha, setFilledCaptcha] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const getCaptcha = () => {
    setCaptcha(Math.floor(100000 + Math.random() * 900000));
  };
  useEffect(() => {
    getCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(captcha==filledCaptcha){
      setMessage('');
    }else{
      setMessage('Captcha is incorrect. Please try again.');
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }
  }

  return (
    <div className='loginSection'>
      <Navbar/>
      <div className='loginPage'>
        <div className='loginPagepart1'>
          <div className='loginFormSection'>
            {message &&
              <p className='alertMessage'>{message}</p>
            }
            <h2>Login</h2>
            <form className='loginForm' onSubmit={handleSubmit}> 
              <div style={{display:'inline-grid'}}>
                <label className='loginFormLabel'>Email</label>
                <input type='email' placeholder='username@gmail.com' required></input>
              </div>
              <div style={{display:'inline-grid'}}>
                <label className='loginFormLabel'>Password</label>
                <div className='passfield' style={{display:'flex', background:'white', height:'35.5px'}}>
                  <input
                    type={showPassword? 'text' : 'password'} 
                    placeholder='Password' 
                    required 
                    style={{width:'90%', background:'transparent', padding:'0', margin:'0'}}
                  />
                  <div style={{width:'10%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'3px'}}><i className={showPassword? 'bx bx-show' : 'bx bx-hide'} style={{cursor:'pointer'}} onClick={() => setShowPassword(!showPassword)}></i></div>
                </div>
                <span className='forgetpass'>Forget Password</span>
              </div>
              <div style={{display:'inline-grid'}}>
                <label className='loginFormLabel'>Captcha</label>
                <div style={{display:'flex'}}>
                  <input style={{width:'35%'}} type='text' placeholder='6-digit captcha' maxLength={6} required value={filledCaptcha} onChange={(e) => setFilledCaptcha(e.target.value)}></input>
                  <div style={{width:'65%', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px'}} className='captcha_section'>
                    <div className='captcha1'>{captcha}</div>
                    <div className='captcha_refresh'><i className='bx bx-refresh' onClick={getCaptcha}></i></div>
                  </div>
                </div>
              </div>
              <button>Login</button>
              <div style={{fontSize:'12px', textAlign:'center'}}>Don't have an account? <Link to={'/register'}>Register here</Link></div>
            </form>
          </div>
        </div>
        <div className='loginPagepart2'>
          <img src={boy} />
        </div>
      </div>
    </div>
  )
}

export default Login