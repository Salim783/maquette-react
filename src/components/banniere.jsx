import React from "react";
import Img from '../assets/imgbaniere.jpg'
import Imgg from '../assets/img2.svg'
import Imgimg from '../assets/img3.svg'


function Banniere(){
    return(
<>
<div className="container">
    <div className="baniere">
        <div className="imgban">
            <img src={Img} alt=""/>
        </div>
        <div className="svgright">
            <img src={Imgg} alt=""/>
        </div>
    <div className="bnr">
        <div className="ban">
            <hr className="hr"/>
            <h1 className="titreban">Humanizing <br/> your insurance.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            <br/> Voluptates illo enim mollitia laboriosam minima sint nihil
            <br/> sunt iusto, a nesciunt obcaecati .</p>
            <button className="btn">VIEW PLANS</button>
        </div>
    </div>
    <div>
        <img src={Imgimg} alt="" className="svgleft"/>
    </div>
    </div>
</div>      
</>
    )
}
export default Banniere;