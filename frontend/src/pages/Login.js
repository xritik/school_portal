import React, { useState, useEffect } from 'react';
import '../styles/login_page.css';
import boy from '../assets/school_boy.png';
import Navbar from '../components/Navbar';

const Login = () => {
  const [captcha, setCaptcha] = useState(null);

  const getCaptcha = () => {
    setCaptcha(Math.floor(100000 + Math.random() * 900000));
  };
  useEffect(() => {
    getCaptcha();
  }, []);
  
  return (
    <div className='loginSection'>
      <Navbar/>
      <div className='loginPage'>
        <div className='loginPagepart1'>
          <div className='loginFormSection'>
            <h2>Login</h2>
            <div className='loginForm'> 
              <div style={{display:'inline-grid'}}>
                <label className='loginFormLabel'>Email</label>
                <input type='email' placeholder='username@gmail.com'></input>
              </div>
              <div style={{display:'inline-grid'}}>
                <label className='loginFormLabel'>Password</label>
                <input type='password' placeholder='Password'></input>
                <span className='forgetpass'>Forget Password</span>
              </div>
              <div style={{display:'inline-grid'}}>
                <label className='loginFormLabel'>Captcha</label>
                <div style={{display:'flex'}}>
                  <input style={{width:'35%'}} type='text' placeholder='captcha'></input>
                  <div style={{width:'65%', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px'}} className='captcha_section'>
                    <div className='captcha1'>{captcha}</div>
                    <div className='captcha_refresh'><i class='bx bx-refresh' onClick={getCaptcha}></i></div>
                  </div>
                </div>
              </div>
              <button>Sign in</button>
              <div style={{fontSize:'12px', textAlign:'center'}}>Don't have an account <span className='forgetpass'>Register here</span></div>
            </div>
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