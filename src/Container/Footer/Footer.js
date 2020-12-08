import React from 'react';
import './Footer.css';
import arrowlogo from '../../assets/images/Go-to-Top-(Solid).png';

const Footer = (props) => {
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   const mybutton = document.getElementById("myBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
    let url="";
    const topFunction = ()=>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
    }
    return (
        <div>
                <footer className="foot footer-top">
                 <div className = "footerLinks">
                     <div className ="col-sm-9 col-sm-push-3 paddingTopBottom20">
                        <a href = {url} className = "paddingLeftRight20">FAQ</a>
                        /
                        <a href = {url} className = "paddingLeftRight20">Blog</a>
                        /<a href =  {url} className = "paddingLeftRight20">Disclaimer</a>
                        /<a href = {url}className = "paddingLeftRight20">Terms & Conditions</a>
                        /<a href = {url} className = "paddingLeftRight20">Privacy Policy</a>
                        /<a href = {url} className = "paddingLeftRight20">Interest Rate Policy</a>
                        /<a href = {url} className = "paddingLeftRight20">Fair Practices Code</a>
                        /<a href = {url} className = "paddingLeftRight20">Activate NACH</a>
                        /<a href = {url} className = "paddingLeftRight20">Pay Now</a>
                        /<a href = {url} className = "paddingLeftRight20">API Terms</a>

                     </div>
                     <div className ="col-sm-3 col-sm-pull-9 paddingTopBottom20">
                         
                         <p className = "copyright"> Copyright of Eduvanz Financing Private Limited, 2020 </p>

                     </div>
                     <button onClick ={topFunction} ><img src={arrowlogo} id="myBtn"  alt="second"  />
                     </button>
                 </div>
             </footer>
 
        </div>
    )
}

export default Footer
