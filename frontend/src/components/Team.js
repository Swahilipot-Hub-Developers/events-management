import React from 'react';

const Team = () => {
  return (

    <section id="team" className="page-section bg-light mt-5 mb-5 pl-5">
      <section className="team-section">
        <div className="container-fluid">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Git Clone to Find Us.</h3>
          </div>
          <div className="row mt-5">
            {/* Team member 1 */}
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/images/background.jpg" alt="..." />
                <h4>Jilo</h4>
                <p className="text-muted">Full Stack Dev</p>
                {/* Social links */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/images/background.jpg" alt="..." />
                <h4>Lugogo</h4>
                <p className="text-muted">Network Engineer</p>
                {/* Social links */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/images/background.jpg" alt="..." />
                <h4>Willex</h4>
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
    </section>

  );
};

export default Team;
