// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="page-section">
      <div className=" contact-container">
        <div className=" text-center mb-5">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Reach to us  We value your Feedback.</h3>
        </div>
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row">
            <div className="col-md-6">
              {/* Name input */}
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  required="required"
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              {/* Email input */}
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  required="required"
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              {/* Phone input */}
              <div className="form-group">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  required="required"
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              {/* Subject input */}
              <div className="form-group">
                <input
                  className="form-control"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-md-12">
              {/* Department selection */}
              <div className="form-group">
                <select className="form-control" id="department" name="department">
                  <option value="">Select Department</option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="billing">Billing</option>
                  {/* Add more departments as needed */}
                </select>
              </div>
            </div>
            <div className="col-md-12">
              {/* Message textarea */}
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  required="required"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            {/* Submit button */}
            <div className="col-md-12 text-center">
              <div id="success"></div>
              <button
                className="contact-btn btn-primary btn-xl text-uppercase"
                id="sendMessageButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
