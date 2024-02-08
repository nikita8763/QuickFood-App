import CustomerReview from '../Sections/CustomerReview/CustomerReview'
import Features from '../Sections/Features/Features'
import Header from '../Sections/Header/Header'
import Home from '../Sections/Home/Home'
import PopularDishes from '../Sections/PopularDishes/PopularDishes'
import TopRestaurants from '../Sections/TopRestaurants/TopRestaurants'

const MainPage = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Features/>
        <TopRestaurants/>
        <PopularDishes/>
        <CustomerReview/>
    </div>
  )
}

export default MainPage