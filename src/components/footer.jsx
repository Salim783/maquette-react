import React from "react";
import Insure from "../assets/logo.svg"
import Facebook from '../assets/fb.svg'
import Twitter from '../assets/twitter.svg'
import Insta from '../assets/insta.svg'
import Pinter from '../assets/pinterest.svg'

function Footer() {
    return(
<>
<div className="footer">
    <div className="firstfoot">
        <img src={Insure} alt="" className="firstlogofoot"/>
        <div className="iconrsx">
            <img src={Facebook} alt="Facebook" className="logofoot"/>
            <img src={Insta} alt="" className="logofoot"/>
            <img src={Twitter} alt="" className="logofoot"/>
            <img src={Pinter} alt="" className="logofoot"/>
        </div>
    </div>
    <hr className="hrfooter"/>
    <div className="scndfoot">
        <div className="divfootlist">
            <h3 className="hfoot">OUR COMPANY</h3>
            <ul className="listefoot">
                <li className="lifoot">HOW WE WORK</li>
                <li className="lifoot">WHY INSURE?</li>
                <li className="lifoot">VIEW PLANS</li>
                <li className="lifoot">REVIEW</li>
            </ul>
        </div>
        <div className="divfootlist">
            <h3 className="hfoot">HELP ME</h3>
            <ul className="listefoot">
                <li className="lifoot">FAQ</li>
                <li className="lifoot">TERMES OF USE</li>
                <li className="lifoot">PRIVACY POLICY</li>
                <li className="lifoot">COOKIES</li>
            </ul>
        </div>
        <div className="divfootlist">
            <h3 className="hfoot">CONTACT</h3>
            <ul className="listefoot">
                <li className="lifoot">SALES</li>
                <li className="lifoot">SUPPORT</li>
                <li className="lifoot">LIVE CHAT</li>
            </ul>
        </div>
        <div className="divfootlist">
            <h3 className="hfoot">OTHER</h3>
            <ul className="listefoot">
                <li className="lifoot">CAREERS</li>
                <li className="lifoot">PRESS</li>
                <li className="lifoot">LICENSES</li>
            </ul>
        </div>
    </div>
</div>
</>
    )
}
export default Footer;