// src/components/Clients.js
const Clients = () => {
    return (
      <div className="py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img className="img-fluid img-brand d-block mx-auto" src="images/logo.png" alt="..." aria-label="Microsoft Logo" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img className="img-fluid img-brand d-block mx-auto" src="images/logo.png" alt="..." aria-label="Microsoft Logo" />
              </a>
            </div>

            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img className="img-fluid img-brand d-block mx-auto" src="images/logo.png" alt="..." aria-label="Microsoft Logo" />
              </a>
            </div>
            {/* Repeat similar structure for other client logos */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Clients;
  