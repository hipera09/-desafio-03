import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
import Img from './imagens/nav-logo.png'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-cont'>
                    <Link to='/' className='navbar-logo'>
                        <img src={Img} id='icon' />Picx
                    </Link>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/why' className='nav-links'>
                                Why
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/produtos' className='nav-links'>
                                Produtos
                            </Link>
                        </li>
                    </ul>

                    {button && <Button className="btn--medium">SIGN UP</Button>}
                </div>


            </nav>
        </>
    )
}

export default Navbar;