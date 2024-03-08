import CustomerReview from '../Sections/CustomerReview/CustomerReview'
import Features from '../Sections/Features/Features'
import Footer from '../Sections/Footer/Footer'
import Header from '../Sections/Header/Header'
import Home from '../Sections/Home/Home'
import PopularDishes from '../Sections/PopularDishes/PopularDishes'
import RegisterYourRestaurant from '../Sections/RegisterYourRestaurant/RegisterYourRestaurant'
import RestaurantSearchButton from '../Sections/RestaurantSearchButton/RestaurantSearchButton'
import TopRestaurants from '../Sections/TopRestaurants/TopRestaurants'

const MainPage = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Features/>
        <TopRestaurants/>
        {/* <PopularDishes/> */}
        <CustomerReview/>
        <RegisterYourRestaurant/>
        <Footer/>
    </div>
  )
}

export default MainPage