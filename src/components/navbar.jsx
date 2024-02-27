import React from "react";
import Insure from '../assets/logo.svg'



function Navigation (){
    return(
<>
<nav className="navbar">
        <img src={Insure} alt="" class="titre"/>
        <ul className="navli">
            <li className="liste">HOW WE WORK</li>
            <li className="liste">BLOG</li>
            <li className="liste">ACCOUNT</li>
            <button className="btn">VIEW PLANS</button>
        </ul>   
    </nav>
        
</>
 )
}
export default Navigation;