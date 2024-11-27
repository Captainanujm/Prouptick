import react from "react";
import "./Services.css";
import Card from "../Card/Card";
function Services(){
    return(<div className="services">
        <div className="service-heading">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
        <p className="get">What you'll get</p>
        </div>
        <div className="service-body">
            <div className="service-body-text">
            <h6>We resolve problems associated with</h6>
            <h6>Creative procedures.</h6>
            </div>
            <div className="Card-container">
                <Card
  heading="Social media Management" 
  image="../../src/assets/Black Modern Profile Picture Facebook Post Square.png"
  paragraph="We go beyond managing accounts—we transform them into dynamic platforms that captivate audiences and build vibrant, engaged communities."
  isList={false} />
                <Card
  heading="Video Editing" 
  image="../../src/assets/Black Modern Profile Picture Facebook Post Square-2.png" 
  paragraph="We bring your vision to life by turning raw footage into polished, captivating videos that leave a lasting impression."
isList={false} />
                <Card
  image="../../src/assets/Black Modern Profile Picture Facebook Post Square-3.png"
  paragraph="We craft designs that leave a lasting impression, ensuring your brand stands out across all platforms:

Social Media: Eye-catching visuals that drive engagement.
Offline Activations: Memorable designs for impactful experiences.
YouTube: Custom graphics that enhance your channel’s identity.
Website & Landing Pages: Stunning layouts that captivate and convert."
  heading="Graphic Designing"
  isList={true}/>
    <Card
  image="../../src/assets/Black Modern Profile Picture Facebook Post Square-4.png"
  paragraph="Comprehensive support covering strategy, post-production, operations, and analytics—designed to fuel your channel’s growth and ensure lasting success."
  heading="360° YouTube Management"
  isList={false}/>
    <Card
  image="../../src/assets/Black Modern Profile Picture Facebook Post Square-5.png"
  paragraph="PROUPTICK  Media is your creative powerhouse, specializing in video production, content creation, design, and animation."
  heading="Media Productions"
  isList={false}/>
    {/* <Card
  image="../../src/assets/Black Modern Profile Picture Facebook Post Square-6.png"
  paragraph="This is a paragraph."
  heading="Heading for Type 3 Card"/> */}
            </div>
        </div>
        <div className="chhote-card">
          <div className="sec-1">
          <div className="sec-1-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
<p>Pre-Production</p>
          </div>
          <div className="sec-1-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
<p>Post-Production</p>
          </div>
          <div className="sec-1-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
<p>Content Strategies</p>
          </div>
          <div className="sec-1-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
<p>Content Plans</p>
          </div>
          </div>
          <div className="sec-2">
          <div className="sec-1-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
<p>Advertisement</p>
          </div>
          <div className="sec-1-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
<p>Community Building</p>
          </div>
          <div className="sec-1-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg>
<p>Sponsership Management</p>
          </div>
          </div>
        </div>

    </div>)
}
export default Services;