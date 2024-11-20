import react from "react";
import "./App.css";
import Nav from "./NavBar/Nav";
import Hero from "./Hero/Hero";
import Introducing from "./Introducing/Introducing";
import Services from "./Services/Services.jsx";
import FAQSection from "./FAquestions/FAquestions.jsx";
import MapComponent from "./MapComponent/Map.jsx";
import Calendly from "./CalendlyEmbed/Calendly.jsx";
import How_Works from "./How_it_Works/How_it_Works.jsx";
function App(){
    return (<div className="App">
      <Nav/>
      <Hero/>
      <Introducing/>
      <Services/>
      <How_Works/>
      {/* <MapComponent/>
      <Calendly/>
      <FAQSection/> */}
    </div>)
}
export default App;