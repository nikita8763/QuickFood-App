import './TopRestaurants.css'
import dominos from '../../assets/dominos.png'
import pizzaHut from '../../assets/pizza hut.png'
import starbucks from '../../assets/starbucks.png'
import burgerking from '../../assets/burger king.png'
import pepsi from '../../assets/pepsi.png'
import subway from '../../assets/subway.png'

const TopRestaurants = () => {
  return (
    <div className='topRestaurantsConatiner'>
        <h2>Top Restaurants</h2>
        <div className='topRestaurantsImageConatiner'>
            <img className='dominosImage' src={dominos}/>
            <img className='pizzahutImage' src={pizzaHut}/>
            <img className='starbucksImage' src={starbucks}/>
            <img className='burgerKingImage' src={burgerking}/>
            <img className='pepsiImage' src={pepsi}/>
            <img className='subwayImage' src={subway}/>
        </div>
    </div>
  )
}

export default TopRestaurants