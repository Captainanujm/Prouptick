import React,{createElement, useEffect,useState} from "react";
import "./Calendly.css";
function Calendly(){
    const[clicked,setClicked]=useState(true);
    useEffect(()=>{
        const script=document.createElement("script");
        script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
        script.async=true;
        document.body.appendChild(script);
    },[]);
    return(
    clicked?(<div className="calendly-container">
        <h1 className="schedule-meeting"></h1>
        <div class="calendly-inline-widget" data-url="https://calendly.com/captainanuj2004/30min" style={{minWidth:"320px",height:"700px"}}></div>
    </div>):null);
}
export default Calendly;
