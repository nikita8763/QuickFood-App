import Features from '../Sections/Features/Features'
import Header from '../Sections/Header/Header'
import Home from '../Sections/Home/Home'
import TopRestaurants from '../Sections/TopRestaurants/TopRestaurants'

const MainPage = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Features/>
        <TopRestaurants/>
    </div>
  )
}

export default MainPage