import React from 'react';
import './Faq.css';
import './Rewards.css';
const Faq = () => {
    //     const questions =[[ 1,
    //         "What are EduVantage Club offers?",
    //         "EduVantage Club offers unbeatable discounts for Eduvanz borrowers across 10,000+ brands and 12 categories. These discounts are available all year round on a Pan-India basis."
    //     ],[ 2,
    //         "second What are EduVantage Club offers?",
    //         "EduVantage Club offers unbeatable discountnds and s for Eduvanz borrowers across 10,000+ bra12 categories. These discounts are available all year round on a Pan-India basis."
    //     ]
    // ];
    //     const displaydata = ()=>{
    //         let display=[];
    //         let result=[];
    //         console.log(questions.[0][1])
    //         questions.map(question=>{

    //             return (<div>

    //                 {question.[0]}</div>
    //                 )
    //         });

    //     }
    //            console.log(questions);
    return (
        <div>

            <div className="faq-qa-block" >
                <div className="accordion-tab ">

                    <input id="toggle1" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle1"><h3><span>1.</span>
                        <span className="newtext">What are EduVantage Club offers?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans"> EduVantage Club offers unbeatable discounts for Eduvanz borrowers across 10,000+ brands and 12 categories. These discounts are available all year round on a Pan-India basis. </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="accordion-tab ">

                    <input id="toggle2" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle2"><h3><span>2.</span>
                        <span className="newtext">How to avail the EduVantage Club offers ?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans"> Simply, select the brand name you wish to avail the offer upon and click on ‘Get Deal’.</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="accordion-tab ">

                    <input id="toggle3" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle3"><h3><span>3.</span>
                        <span className="newtext">What is the customer support number? Is there any email ID for the same?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans">You may reach out to the customer support team at +91-8882-870-870. Yes! There is one Email ID dedicated to grievances. You can send us a mail at support@advantageclub.in </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="accordion-tab ">

                    <input id="toggle4" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle4"><h3><span>4.</span>
                        <span className="newtext">Where can I redeem the points I have earned?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans">Redeem the points you have earned across almost all the categories and brands available on your dashboard. All these brands across will appear automatically in a listed format once you select the redeem option.</p>
                        </div>
                    </div>
                </div>
                <br />           <div className="accordion-tab ">

                    <input id="toggle5" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle5"><h3><span>5.</span>
                        <span className="newtext">What is the value per point?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans"> In EduVantage Club app/website, every point equals ₹ 1.</p>
                        </div>
                    </div>
                </div>
                <br />           <div className="accordion-tab ">

                    <input id="toggle6" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle6"><h3><span>6.</span>
                        <span className="newtext">How do I redeem my points?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans">Open the EduVantage Club Deals page and select the wallet section. Click on ‘redeem’. Once done, you will see all the categories across which you can redeem points. Pick a deal of your choice. Add the required amount and click on ‘buy now/ proceed to’ action button to complete the redemption.</p>
                        </div>
                    </div>
                </div>
                <br />           <div className="accordion-tab ">

                    <input id="toggle7" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle7"><h3><span>7.</span>
                        <span className="newtext">Can I club vouchers? If yes, how many at a time?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans"> Yes, you can club vouchers. The number of vouchers you can use at a time solely depends on the brands. It differs from brand to brand. Some offer only one voucher at a time whereas some allow clubbing of unlimited vouchers at a time.</p>
                        </div>
                    </div>
                </div>
                <br />           <div className="accordion-tab ">

                    <input id="toggle8" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle8"><h3><span>8.</span>
                        <span className="newtext">Can I share my vouchers and coupons with family and friends?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans">Yes, you can. All the vouchers and coupons that you buy will appear in the voucher section on the microsite. From there you can share the codes of that particular voucher and coupons with your family and friends. </p>
                        </div>
                    </div>
                </div>
                <br />           <div className="accordion-tab ">

                    <input id="toggle9" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle9"><h3><span>9.</span>
                        <span className="newtext">What should I do if I’m unable to fetch the coupons?</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans">You will be able to view your coupons in the wallet section. If the problem continues, call the customer support team. </p>
                        </div>
                    </div>
                </div>
                <br />           <div className="accordion-tab ">

                    <input id="toggle10" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle10"><h3><span>10.</span>
                        <span className="newtext">How do I check the number of active vouchers on the app?

</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans"> To check anything related to the vouchers, enter the voucher section on the microsite. Under the voucher section, you will be able to see all your active vouchers.</p>
                        </div>
                    </div>
                </div>
                <br />           <div className="accordion-tab ">

                    <input id="toggle11" type="checkbox" className="accordion-toggle" name="toggle" />
                    <label for="toggle11"><h3><span>11.</span>
                        <span className="newtext">Can I get home services too, using the EduVantage Club app?

</span></h3></label>
                    <div className="accordion-content">
                        <div className="answer-block" >
                            <p className="faq-ans">Absolutely! Using the EduVantage Club Offers, you can use the home services depending on your requirements. Just visit the ‘Services’ section on the microsite. </p>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            </div>


    )
};

export default Faq;
