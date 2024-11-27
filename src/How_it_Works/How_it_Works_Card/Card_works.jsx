import react from "react";
import "./Card-works.css";
function Card_works({Cardkey,heading,content,image}){
return(Cardkey=="2"?(<div className="Card-2">
    <div className="card-logo">
<img src={image} alt="logo-image/"/>
    </div>
    <div className="card-content-how-it-works">
    <h6>{heading}</h6>
    <p>{content}</p>
    </div>
</div>):(<div className="normal-card">
<div className="card-logo">
<img src={image} alt="logo-image/"/>
    </div>
    <div className="card-content-how-it-works">
    <h6>{heading}</h6>
    <p>{content}</p>
    </div>
</div>));
}
export default Card_works;