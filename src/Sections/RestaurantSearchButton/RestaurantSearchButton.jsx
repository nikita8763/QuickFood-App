import axios from 'axios';
import './RestaurantSearchButton.css'
import { useEffect, useState } from 'react';

const RestaurantSearchButton = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const result = await axios.get('/restaurant')
        }
    })

  return (
    <div className='RestaurantSearchButtonContainer'>
        <button className='restaurantSearchButton'>Restaurant</button>
    </div>
  )
}

export default RestaurantSearchButton