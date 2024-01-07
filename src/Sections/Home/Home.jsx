import deliveryBoy from '../../assets/deliveryBoy.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='homePageConatiner'>
        <div className='homeContentCotainer'>
            <div className='getFasterDeliveryDiv'>Get Faster Delivery of Foods</div>
            <div className='serviceInTownDiv'>Fastest Food <span className='deliveryservicePara'>Delivery Service</span> In Town</div>
            <div className='savorFlavorDiv'>Embark on a Culinary Journey from Your Couch: Bringing the World's Finest Flavors to Your Fingertips. Your Favorite Dishes, Delivered with Precision, Passion, and a Dash of Delight – Because Every Meal Should Be an Experience Worth Savoring.</div>
            <div className='orderNowDiv'>Order now</div>
        </div>
        <div className='deliveryBoyImageDiv'>
            <img className='deliveryImage' src={deliveryBoy}/>
        </div>
    </div>
  )
}

export default Home