import React from 'react';
import './Upperfooter.css';
import gplay from '../../assets/images/google.png';

export const Upperfooter = () => {
    let url="";

    return (

        <div>
            <footer>
            <div className = ""></div>

            <div className = "row footer-top">
                <div className = "row footer-up">
                    <div className = "container">
                        <div className = "col-md-6 first">
                        {/* <img loading="lazy" src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/blogo.png" alt="Eduvanz" title="Eduvanz" height="40px" width="170px" className="img-responsive"> */}
                        <img src={"https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/blogo.png"} className="img-responsive" height="40px" width="170px" alt = ""/>
                        <br/>
                        <p className="last">Eduvanz was founded in 2016 with the mission to empower students to make educated and informed decisions by providing free financial resources and unbiased advice.</p>
                        </div>
                        <div className="col-md-3 downloadEduvanzApp" >
                            <p className="downloadText">Download </p>
                            <div><br/></div>
                            <p className="eduvanzApp">the Eduvanz App</p>
                           
                            <img  src={gplay}  className="img-responsive scanner footerlogoimg" height="80px" width="180px" alt = ""/>
                        </div>
                        <div className="col-md-3" align="center">
                        <p className="downloadText">Follow Us</p>
                        <p className="eduvanzApp" id="eduvanzApp">on Social Media</p>
                        <a href={url} title="Facebook" className="icon-facebook-f smGlobalBtn" id="icon-facebook" target="blank">f</a>
                        <a href="https://twitter.com/eduvanz_finance?lang=en" title="Twitter" className="icon-twitter smGlobalBtn" id="icon-twitter" target="blank">t</a>
                        <a href="https://in.linkedin.com/company/eduvanz" title="LinkedIn" className="icon-linkedin-in smGlobalBtn" id="icon-linkedin" target="blank">li</a>
                        <a href="https://www.youtube.com/channel/UCCshyHARlwo17oYmKrLzvrw" title="YouTube" className=" icon-youtube smGlobalBtn" id="icon-youtube" target="blank">YT</a>

                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}
export default Upperfooter
