import React from "react";
import Snappy from '../assets/snappy.svg'
import Aford from '../assets/affordable.svg'
import People from '../assets/people.svg'
import Imagebas from '../assets/img4.svg'


function Contenu(){
    return(
<>
<div className="parent">
    <div className="containertwo">
        <hr className="hrr"/>
        <h1>We're different</h1>
    </div>
    <div className="containerthree">
        <div className="card">
            <img src={Snappy} alt=""/>
            <h2>Snappy Process</h2>
            <p> Lorem ipsum, dolor sit amet consectetur adncir.
                <br/>Quo laudantium odio autem quaerat optio eum ea .
                <br/>Earum, eligendi libero!
                </p>
        </div>
        <div className="card">
            <img src={Aford} alt=""/>
            <h2>Affordable Prices</h2>
            <p> Lorem ipsum, dolor sit amet consectetur adncir.
                <br/>Quo laudantium odio autem quaerat optio eum ea .
                <br/>Earum, eligendi libero!
                </p>
        </div>
        <div className="card">
            <img src={People} alt=""/>
            <h2>People First</h2>
            <p> Lorem ipsum, dolor sit amet consectetur adncir.
                <br/>Quo laudantium odio autem quaerat optio eum ea .
                <br/>Earum, eligendi libero!
                </p>
        </div>
    </div>
</div>
<div className="miniban">
    <h1 className="titreban">Find out more <br/>
    about how we work</h1>
    <button class="btnminiban">HOW WE WORK</button>
    <img src={Imagebas} alt="" className="imgminiban"/>
</div>
</>
    )
}
export default  Contenu; 