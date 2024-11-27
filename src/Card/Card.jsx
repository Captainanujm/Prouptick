import "./Card.css";
function Card({image,paragraph,heading,isList}){
    const items=["Social Media"
,"Offline Activations",
"YouTube",
"Website & Landing Pages",]
return(<div className="Card">
        <img className="my-image" src={image} alt="card-image"/>
    <div className="card-content">
        <h3>{heading}</h3>
        {isList==false?<div className="content-para">
            <p>{paragraph}</p>
        </div>:<div className="list">
            <p>We craft designs, across all platforms:
            </p>
            <ul type="disc">
            {items.map((item)=>{
                return(<li>{item}</li>)
            })}
            </ul>
            </div>}
    </div>
   
</div>)
}
export default Card;