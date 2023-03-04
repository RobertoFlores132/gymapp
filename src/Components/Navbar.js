import React, { useState }from 'react';
import logo from  '../Images/logo.png'
import { Link } from 'react-scroll';
import './Navbar.css'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
       <div className='navbarcontainer'>
                <div className='logocontainer'>
                    <button className='hamburger' onClick={()=> {setShowMenu(!showMenu)}}>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <Link to='home' spy={true} smooth={true} offset={50} duration={500}><img className='logo' src={logo} alt="logo" /></Link> 
                </div>
                <div  className='navbar'>
                <Link to='home' spy={true} smooth={true} offset={50} duration={500}><p>Home</p></Link>
                        <Link to='benefits' spy={true} smooth={true} offset={50} duration={500}><p>Beneficios</p></Link>
                        <Link to='aboutus' spy={true} smooth={true} offset={50} duration={500}><p>Conocenos</p></Link>
                        <Link to='contact' spy={true} smooth={true} offset={50} duration={500}><p>Contactanos</p></Link>
                </div>
                {showMenu  ? <div className='navbar2'>
                        <Link to='home' spy={true} smooth={true} offset={50} duration={500}><p>Home</p></Link>
                        <Link to='benefits' spy={true} smooth={true} offset={50} duration={500}><p>Beneficios</p></Link>
                        <Link to='aboutus' spy={true} smooth={true} offset={50} duration={500}><p>Conocenos</p></Link>
                        <Link to='contact' spy={true} smooth={true} offset={50} duration={500}><p>Contactanos</p></Link>
                </div> : ''}
        </div>
    );
}

export default Navbar;