import react from "react";
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import "./Introducing.css";
function Introducing(){
    const {ref,inView}=useInView({
        triggerOnce:true,
        threshold:0.3,
    })
    return( <motion.div ref={ref}
        initial={{ opacity: 0, y: 70 }}  
        animate={inView?{ opacity: 1, y: 0} :{} }  
        transition={{ duration: 0.7 }} 
      >
    <div className="intro">
        <div className="heading-intro">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
        <p>INTRODUCING EPIC SOLUTIONS</p>
        </div>
        <div className="intro-content">
       <p> We know what’s going on. You need a </p> 
       <p> top-notch Team to stand out in the</p> 
       <p> Ed.tech world, but hiring in-house Team</p> 
       <p> can be costly and time-consuming. </p>
        <p> That’s when Epic Solutions comes in.</p>
        </div>
       
    </div>
    </motion.div>)
}
export default Introducing;