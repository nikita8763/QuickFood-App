import React from 'react'
import chef from '../../assets/chef.png'
import './RegisterYourRestaurant.css'

const RegisterYourRestaurant = () => {
  return (
    <div className='registerYourRestaurantContainer'>
        <div className='registerYourRestaurantContentDiv'>
            <p className='becomeOneOfUsDiv'><span className='beStyling'>Be</span>come One of Us</p>
            <div className='willingToDiv'>Willing to</div>
            <div className='startWithUsDiv'>Start with us?</div>
            <p className='registerYourRestaurantPara'>Design of choice for many of the world's leading enterprises end technology challengers. We help businesses elevate the alue ere is custom software to development, products design.</p>
            <button className='registerYourRestaurantButton'>Register Your Restaurant</button>
        </div>
        <div className='chefDiv'>
            <img src={chef}/>
        </div>
    </div>
  )
}

export default RegisterYourRestaurant