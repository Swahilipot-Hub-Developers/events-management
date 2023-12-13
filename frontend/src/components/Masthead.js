import { images } from "../../next.config";

// // src/components/Masthead.js
const Masthead = () => {
    return (
    
      <header className="masthead">
        <section className="masthead text-align-left">
          <div className="masthead-heading text-uppercase text-align-left">Welcome To Our Events Management App,<br/> A better way to manage
your events</div>
<div className="fluid-container">
<div className=" masthead-section">
<ul className="masthead-container mt-5">
  <li className="masthead-subheading text-lowercase">Create Events </li>
  <li className="masthead-subheading text-lowercase">Book Upcoming Events </li>
  <li className="masthead-subheading text-lowercase">Engage Atendees </li>
  <li className="masthead-subheading text-lowercase">Find Event Venue </li>
</ul>
  <img className="masthead-image"
          src={'/images/background.jpg'} // Replace "yourImage" with the appropriate key to access your image from the images object
          alt="Your Image Alt Text"
        />
  

</div>
</div>
       
  </section>
    
        
      </header>
    );
  };
  
  export default Masthead;
  