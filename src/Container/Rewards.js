import React from 'react';
import applynow from '../assets/images/apply-loan.png';
import loandisbursed from '../assets/images/loan-disbursed.png';
import firstpaymentne from '../assets/images/first-payment.png';
import amazingoffers from '../assets/images/amazing-offers.png';
import arrowlogo from '../assets/images/Go-to-Top-(Solid).png';
import Faq from './Faq';
import './Rewards.css';
import Footer from './Footer/Footer';
import Banner from './Banner';
import Upperfooter from './Footer/Upperfooter';
import Sections from './Sections';
import CardsSection from './CardsSection';

export const Rewards = () => (

    <div>
        <div>
            <Banner/>
        </div>
        <section>
            {/* Students benifit Section */}
            <Sections/>
        </section>
        <section>
            {/* EduVantage Membership Component  */}
            <CardsSection applynow = {applynow} loandisbursed={loandisbursed} firstpaymentne={firstpaymentne} amazingoffers={amazingoffers} />
        </section >      
        <section className="rewards-sec pd0">
            <div className="faqbg faq-sec">
                <div className="container rewards-contwidth">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="alignCenter faq-hd">Frequently Asked Questions</div>
                                <Faq/>
                            </div>
                        </div>
                </div>
            </div>
        </section >
        {/* Footer Components */}
        <Upperfooter/> 
        <Footer arrowlogo={arrowlogo}/>
        <div>
        </div>
    </div>
);

export default Rewards;