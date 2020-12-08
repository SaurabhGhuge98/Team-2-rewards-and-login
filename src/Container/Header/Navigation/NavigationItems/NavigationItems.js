import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => {
    
    return(
    <ul className={classes.NavigationItems}>
        


        <NavigationItem link="/" >HOME</NavigationItem>
        <NavigationItem link="/about">ABOUT US</NavigationItem> 
        <NavigationItem link="/impact">OUR IMPACT</NavigationItem> 
        <NavigationItem link="/contact">CONTACT US</NavigationItem> 
        <NavigationItem link="/rewards">REWARDS</NavigationItem> 
        <NavigationItem link="/faq">FAQs</NavigationItem> 
        <NavigationItem link="/si">SIGN IN </NavigationItem>
        <button id="btn3" className={classes.btnApplyNowHeader}>Apply Now</button>

    </ul>
    );
    }

export default navigationItems;