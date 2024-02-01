import './CustomerReview.css'
import profile from '../../assets/profile.webp'

const CustomerReview = () => {
    return (
        <div className='CustomerReviewContainer'>
            <h2>What Our Customer Says</h2>
            <div className='cardsConatiner'>
                <div className='cardDiv'>
                    <div className='imgNameCarDiv'>
                        <img src={profile} />
                        <div className='nameRoleCarDiv'>
                            <h3>Nirmala Sen</h3>
                            <p>Art Director</p>
                        </div>
                    </div>
                    <hr></hr>
                    <p className='aboutCardPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='cardDiv'>
                    <div className='imgNameCarDiv'>
                        <img src={profile} />
                        <div className='nameRoleCarDiv'>
                            <h3>Disha Hossain</h3>
                            <p>CEO</p>
                        </div>
                    </div>
                    <hr/>
                    <p className='aboutCardPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='cardDiv'>
                    <div className='imgNameCarDiv'>
                        <img src={profile} />
                        <div className='nameRoleCarDiv'>
                            <h3>Ryan Gosling</h3>
                            <p>Businessman</p>
                        </div>
                    </div>
                    <hr/>
                    <p className='aboutCardPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview