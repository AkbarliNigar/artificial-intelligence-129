import React from 'react'
import Button from './Button'
import icon from '../assets/images/playicon.svg'
import rightSideImg from '../assets/images/introright.svg'
// npmjs.com  react-typed
import Typed from 'react-typed';
const Introduction = () => {
  return (
    <div className='introduction row'>

      <div className="intro-left-side col-12 col-md-6">
        <h6>Next generation platform</h6>
        
        <Typed
         className='text-white intro-h2'
            strings={[
              'Artificial intelligence  Syber security DevOps Engineer Expert ',]}
            typeSpeed={40}
            backSpeed={50}
                   
            loop >
                 
        </Typed>
         
        {/* <h2>Artificial intelligence & Syber security</h2> */}
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
      
        <div className="btn-groups">
          <Button ichindekiYazi="Get Started" klassAdi="btn-color"></Button>
          <Button ichindekiYazi="Watch Video" klassAdi="btn-color" playIsharesi={icon} ></Button>
        </div>
      
      </div>

      <div className="intro-right-side col-12 col-md-6">
          <img src={rightSideImg} alt="" className='right-side-img'/>
      </div>

      




      {/* <Button ichindekiYazi="Get Started" klassAdi="btn-color"/>
      <Button ichindekiYazi="Watch Video" klassAdi="btn-color"/> */}
    </div>
  )
}

export default Introduction