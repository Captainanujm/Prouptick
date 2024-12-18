import react from "react";
import Card_works from "./How_it_Works_Card/Card_works.jsx";
import "./How_it_Works.css";
function How_Works(){
    return(<div className="how-works-heading">
        <div className="head">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
<p>How it Works</p>
</div>
<div className="title">
    <p>Top Notch Work,</p>
    <p>delivered at your doorstep.</p>
</div>
<div className="how-it-works-card">
<Card_works Cardkey="1" heading="Tell us your vision" content="Git Bash may behave differently than Command Prompt or PowerShell. 
Make sure you’re using the terminal appropriate for your environment."/>
<Card_works Cardkey="2" heading="Tell us your vision" content="Git Bash may behave differently than Command Prompt or PowerShell. 
Make sure you’re using the terminal appropriate for your environment."/>
<Card_works Cardkey="3" heading="Tell us your vision" content="Git Bash may behave differently than Command Prompt or PowerShell. 
Make sure you’re using the terminal appropriate for your environment."/>
</div>
        </div>
)
}
export default How_Works;