// src/components/Team.js
const Team = () => {
    return (
      <section id="team" className="page-section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            {/* Team member 1 */}
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                <h4>Parveen Anand</h4>
                <p className="text-muted">Lead Designer</p>
                {/* Social links */}
              </div>
            </div>
            {/* Repeat similar structure for other team members */}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non
                quis ad perspiciatis, totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  