import "./Hero.css";
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
function Hero(){
    const {ref,inView}=useInView({
        triggerOnce:true,
        threshold:0.1,
    })
    return ( <motion.div ref={ref}
        initial={{opacity:0,scale:0.9,zIndex:0}}
        animate={inView?{opacity:1,scale:1,zIndex:1}:{}}
        transition={{duration:0.8}}
    >

    <div className="hero">
        <div className="hero-heading">
           <h1> We Empower Creators, </h1>
           <h1>Transforming vision to <span id="creators-to">Brand success</span></h1>
           </div>
           <div className="subtitle">
            <p>We are a passionate team dedicated to helping creators thrive by unlocking the full potential of their talents.</p>
            <p>Trusted by industry leaders, we’re here to elevate your journey and amplify your impact.</p>
            </div>
        <h3>Already chosen by Leaders</h3>
        <div className="scrolling-image">
            <div className="image-container">
            <img className="images" src="/assets/download.jpeg" alt="image 1" />
            <img className="images" src="../../src/assets/download (1).jpeg" alt="image" />
            <img className="images" src="../../src/assets/download (2).jpeg" alt="image" />
            <img className="images" src="../../src/assets/download (3).jpeg" alt="" />
            <img  className="images"src="../../src/assets/download (4).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (5).jpeg" alt="" />
            <img  className="images" src="../../src/assets/download (6).jpeg" alt="" />
            <img  className="images" src="../../src/assets/download (7).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (8).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (9).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (10).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (11).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (12).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (1).jpeg" alt="image" />
            <img className="images" src="../../src/assets/download (2).jpeg" alt="image" />
            <img className="images" src="../../src/assets/download (3).jpeg" alt="" />
            <img  className="images"src="../../src/assets/download (4).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (5).jpeg" alt="" />
            <img  className="images" src="../../src/assets/download (6).jpeg" alt="" />
            <img  className="images" src="../../src/assets/download (7).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (8).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (9).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (10).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (11).jpeg" alt="" />
            <img className="images" src="../../src/assets/download (12).jpeg" alt="" />
            </div>
           
    
        </div>
           
        </div>
        </motion.div>)
}
export default Hero;