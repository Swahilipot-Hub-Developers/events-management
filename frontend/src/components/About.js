// src/components/About.js
const About = () => {
    return (
      <section id="about" className="page-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            {/* Timeline item 1 */}
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
                    reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                    laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            {/* Repeat similar structure for other timeline items */}
          </ul>
        </div>
      </section>
    );
  };
  
  export default About;
  