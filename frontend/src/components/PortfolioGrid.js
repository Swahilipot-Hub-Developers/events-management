// src/components/PortfolioGrid.js
const PortfolioGrid = () => {
    return (
      <section id="portfolio" className="page-section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            {/* Portfolio item 1 */}
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Threads</div>
                  <div className="portfolio-caption-subheading text-muted">Illustration</div>
                </div>
              </div>
            </div>
            {/* Repeat similar structure for other portfolio items */}
          </div>
        </div>
      </section>
    );
  };
  
  export default PortfolioGrid;
  