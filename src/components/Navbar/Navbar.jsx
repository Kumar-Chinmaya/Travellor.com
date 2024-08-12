import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MenuItems } from '../MenuItems'
import { useState } from 'react'

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(prevClicked => !prevClicked);
    };

  return (
    <nav className='container navbar'>
        <Link to='/'><h1 className='navbar-logo'>Travellor</h1></Link>
        <div className="menu-bar" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active":"nav-menu"}>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link to={item.url} className={item.cName}><i class={item.icon}></i>{item.title}</Link>
                    </li>
                )
            })} 
            <button className='btn'>Sign Up</button>
        </ul>  
    </nav>
  )
}

export default Navbar