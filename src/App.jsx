import react from "react";
import "./App.css";
import Nav from "./NavBar/Nav";
import Hero from "./Hero/Hero";
import Introducing from "./Introducing/Introducing";
import Services from "./Services/Services.jsx";
// import FAQSection from "./FAquestions/FAquestions.jsx";
// import MapComponent from "./MapComponent/Map.jsx";
// import Calendly from "./CalendlyEmbed/Calendly.jsx";
function App(){
    return (<div className="App">
      <Nav/>
      <Hero/>
      <Introducing/>
      <Services/>
    </div>)
}
export default App;