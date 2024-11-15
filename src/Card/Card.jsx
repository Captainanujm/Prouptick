import "./Card.css";
function Card({image,paragraph,heading}){
return(<div className="Card">
        <img className="my-image" src={image} alt="card-image"/>
    {/* <div className="card-content">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
    </div> */}
   
</div>)
}
export default Card;