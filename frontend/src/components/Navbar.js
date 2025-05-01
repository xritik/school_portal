import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className='navbarSection'>
        <div className='nav1'><span><i style={{marginTop:'50px'}} class='bx bxs-graduation'></i></span> Mera LMS</div>
        <div className='nav2'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='nav3'>
            <button>Subscription <span><i class='bx bxs-shopping-bag'></i></span></button>
        </div>
    </header>
  )
}

export default Navbar