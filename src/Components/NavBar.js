import { React } from "react";
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';

function NavBar() {

  //Returning what will be seen in the Navigation bar area. (Home page, Scanner page, Claim Viewing page & the Login page)
  return (
    <>
      <nav className='navbar'>
       
        <ul className= 'nav-menu'>
           
           {/* NavBar Home */}
          <li className='nav-item'>
            <NavLink exact to='/' activeStyle={{ color:'red' }} className='nav-links'> Home </NavLink>
          </li>
      
           {/* NavBar encryption */}
          <li className='nav-item'>
            <NavLink exact to='/encryption' activeStyle={{ color:'red' }} className='nav-links'  > Encryption </NavLink>
          </li>
        
           {/* NavBar steganography */}
          <li className='nav-item'>
              <NavLink exact to='/steganography' activeStyle={{ color:'red' }} className='nav-links'  > Steganography </NavLink>
          </li>

          {/* NavBar about */}
          <li className='nav-item'>
              <NavLink exact to='/about' activeStyle={{ color:'red' }} className='nav-links'  > About </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
