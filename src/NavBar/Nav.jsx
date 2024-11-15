import react from "react";
import "./Nav.css";
function Nav(){
    function handleServiceClick(){
        document.getElementsByClassName("services")[0].scrollIntoView({behavior:"smooth"});
    }
    return(<div className="nav">
        <div className="name">
        <span id="name-id" className="name">Prouptick</span>
        </div>
        <div className="content">
            <p>Our call</p>
            <p onClick={handleServiceClick}>Our Services</p>
            <p>Testimonials</p>
            <p>Book a call</p>
        </div>
        <button className="nav-button">Start Now</button>
    </div>)
}
export default Nav;