import React from 'react'
import sbene from '../assets/images/student-benefits.png';
// import './Rewards.css';
import './Sections.css';

const Sections = () => {
    return (
        <div>
        <section className = "rewards-sec" >
        <div className = "std-benefits sec-pd">
            <div className="container rewards-contwidth">
                <div className="newrow">
                    <div className="col-sm-6">
                        <img src={sbene} className="img-responsive std-benefits-img" alt="second" />
                        <br/><br/>
                    </div>
                    <div className="col-sm-6">
                        <div className="brands-head" >
                            India's Largest Collection of Student Benefits
                        </div>
                        <br/>
                        <div className="brand-sub-head" >
                            With EduVantage Club, we present India’s largest curated selection of student-centric deals and discounts. Free Memberships when you enroll via Eduvanz
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
    )
}

export default Sections
