import React from 'react'
import TopNav from '../Component/Navigations/TopNav';
import SideNav from '../Component/Navigations/SideNav';
import BottomNav from '../Component/Navigations/BottomNav';

//Main navigation file
// TODO:
//1. creating multiple navigations
//  1.1 There are three navigation in design system ui
//      1.1.1 top navigation /
//      1.1.2 side navigation
//      1.1.3 bottom navigation
// HINTS:
//1) All Navigations will fixed at thier postion

const Navbar = () => {
    return (<>    
        <TopNav />
        <SideNav />
        <BottomNav/>     
    </>
    );
}

export default Navbar
