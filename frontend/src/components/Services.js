// src/components/Services.js
import Link from "next/link";
const Services = () => {
    return (
      <section id="services" className="page-section">
        <div className="container mt-5 mb-5">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">We offer you various services.</h3>
          </div>
          <div className="row text-center">
            {/* Service 1 */}
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Event Creation</h4>
              <p>
                This is an Event Management Website where variouspeople can create events and advertise to people to attend
                .Swahilipot Event
                 Management System has enabled occurrence of multiple Events<br/>
                 <Link href="/Hosted Events">View Hosted Events</Link>
              </p>
            </div>
            {/* Service 2 */}
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Event Ticketing</h4>
              <p className="text-muted">
                We have various ticketing methods which are user friendly depending on the type of ticket you want to sell or buy
                staarting with the vvip, vip,regular and free ticket depending on the event
              </p>
            </div>
            {/* Service 3 */}
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Events Venue</h4>
              <p className="text-muted">
                We have various events venue where one ca host their events<br/>
                <Link href="/UpComingEvents">Venues</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  