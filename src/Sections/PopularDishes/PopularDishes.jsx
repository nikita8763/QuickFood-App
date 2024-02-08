import RestaurantSearchButton from '../RestaurantSearchButton/RestaurantSearchButton'
import './PopularDishes.css'

const PopularDishes = () => {
  return (
    <div className='popularDishesContainer'>
        <h2>Popular Dishes</h2>
        <RestaurantSearchButton/>
    </div>
  )
}

export default PopularDishes