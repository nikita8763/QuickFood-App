import axios from 'axios';
import './RestaurantSearchButton.css'
import { useEffect, useState } from 'react';

const RestaurantSearchButton = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect (() => {
        fetch('api/restaurant/view/${id}')
    }, []);

  return (
    <div className='RestaurantSearchButtonContainer'>
        <button className='restaurantSearchButton'>Restaurant</button>
    </div>
  )
}

export default RestaurantSearchButton