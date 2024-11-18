import react from "react";
import "./App.css";
import Nav from "./NavBar/Nav";
import Hero from "./Hero/Hero";
import Introducing from "./Introducing/Introducing";
import Services from "./Services/Services.jsx";
import FAQSection from "./FAQ/FAQ.jsx";
// import MapComponent from "./MapComponent/Map.jsx";
// import Calendly from "./CalendlyEmbed/Calendly.jsx";
function App(){
    return (<div className="App">
      <Nav/>
      <Hero/>
      <Introducing/>
      <Services/>
      <FAQSection/>
    </div>)
}
export default App;