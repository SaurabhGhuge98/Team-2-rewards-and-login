import React from 'react';
import reward from '../assets/images/rewards-program.png';
import './Rewards.css';

const Banner = () => {
    return (
        <div>
            <div className="banner ">
                <div className="alignCenter" align="center">
                    <img src={reward} className="img-responsive reward-img  " alt="second" />
                </div>
                <div >
                    <div className="alignCenter main-head ">Get thousands of "EduVantages"</div>
                    <div className="sub-head">from India's best loved Brands</div>
                </div>
                <div className="sub-heading firsttext">
                    <span className="make-red">AMAZING DEALS & DISCOUNTS!</span>
                    <span className="sub-heading-divider">|</span>
                    <span className="make-blue"> FREE MEMBERSHIP FOR OUR LEARNERS!</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
