import fastestDelivery from '../../assets/fastDeliveryIcon.svg'
import dailyDiscount from '../../assets/dailydiscountIcon.svg'
import restaurant from '../../assets/restaurantIcon.svg'
import cuisines from '../../assets/cuisinesIcon.svg'
import './Features.css'

const Features = () => {
  return (
    <div className='featuresContainer'>
        <div className='featuresContentDiv'><img src={fastestDelivery}/><div className='featuresDiv'>Fastest Delivery</div></div>
        <div className='featuresContentDiv'><img src={dailyDiscount}/><div className='featuresDiv'>Daily Discounts</div></div>
        <div className='featuresContentDiv'><img src={restaurant}/><div className='featuresDiv'>100+ Restaurants</div></div>
        <div className='featuresContentDiv'><img src={cuisines}/><div className='featuresDiv'>100+ Cuisines</div></div>
    </div>
  )
}

export default Features