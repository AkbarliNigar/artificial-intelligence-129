import React, {useRef} from 'react'
import logo from '../assets/images/logo.svg'
import './Navbar.css'
import {AiOutlineBars} from 'react-icons/ai'
import Button from './Button'
import {ImCross} from 'react-icons/im'



const Navbar = () => {
  
  const navbarButonu = useRef()
  const overlayDivi = useRef()
   
  const overlayiAch = () => {
    // alert("aaaa bbb cccc")
    overlayDivi.current.classList.add('aktiv')

  }
  
  return (
    <>
    <div className="overlay" ref={overlayDivi}>
      <button className='cross-icon'><ImCross/></button>

      <div className="nav-links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>

    </div>
      {/* <h1>ffff</h1> */}
      {/* <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <div classNameName="container-fluid">
          <a classNameName="navbar-brand" href="#"><img src={logo} alt="" /></a>
          <a classNameName="navbar-brand" href="#">Navbar</a>
          <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <AiOutlineBars />
          </button>
          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <li classNameName="nav-item">
                <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">Link</a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <Button/>
          </div>
        </div>
      </nav> */}

<nav className="navbar navbar-expand-lg wrapper">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button onClick={overlayiAch} ref={navbarButonu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <AiOutlineBars className='icon'/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
       
      </ul>
      {/* props */}
    <Button ichindekiYazi="Sign In" klassAdi="btn-color"/>
    </div>
  </div>
</nav>


    </>
  );
};

export default Navbar;
