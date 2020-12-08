import React from 'react'
import backgroundim from '../assets/images/rewards-background-bottom.png';
import './Rewards.css';

const CardsSection = (props) => {
    return (
        <div>
            <div className="rewards-sec">
                <div className="steps-sec sec-pd">
                    <div className="stepsbg"
                        style={{
                            backgroundImage: "url(" + backgroundim + ")",

                        }}
                    >

                        <div className="container">
                            <div className="row">
                                <div className="alignCenter steps-block">
                                    <div className="brands-head">Unlock your EduVantage <br /> Membership</div>
                                    <div className="steps-cont">In 4 easy steps you can unlock thousands of offers from <br />
your favourite brands</div>

                                    <br />
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-sm-5 col-sm-pull-7">
                                                <img src={props.applynow} alt="second" />


                                            </div>
                                            <div className="col-sm-7 col-sm-push-5">
                                                <div className="loan-process-head">1
                                </div>
                                                <div className="loan-process-subhead">Apply for Loan
                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <br />
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-sm-5 col-sm-pull-7">
                                                <img src={props.loandisbursed} alt="second" />


                                            </div>
                                            <div className="col-sm-7 col-sm-push-5">
                                                <div className="loan-process-head">2
                                </div>
                                                <div className="loan-process-subhead">Get the Loan Disbursed
                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <br />

                                    <div className="card">
                                        <div className="row">
                                            <div className="col-sm-5 col-sm-pull-7">
                                                <img src={props.firstpaymentne} alt="second" />


                                            </div>
                                            <div className="col-sm-7 col-sm-push-5">
                                                <div className="loan-process-head">3
                                </div>
                                                <div className="loan-process-subhead">Make Your First Payment
                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <br />

                                    <div className="card">
                                        <div className="row">
                                            <div className="col-sm-5 col-sm-pull-7">
                                                <img src={props.amazingoffers} alt="second" />


                                            </div>
                                            <div className="col-sm-7 col-sm-push-5">
                                                <div className="loan-process-head">4
                                </div>
                                                <div className="loan-process-subhead">Avail the Amazing Offers
                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <br />

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardsSection
