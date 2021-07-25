import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="mb-4">
      <div class="container">
        <div className="row">
          <h2 className="title-h">
            <b>Contact Us</b>
          </h2>
          <div className="col-md-6">
            <img 
              className="img-fluid"
              src={window.location.origin + `/Assets/image/contactus.png`}
              alt="."
            />
          </div>
          <form class="my-form col-md-6">
            <div className="mt-5">
              <ul>
                <li>
                  <select>
                    <option selected disabled>
                      -- Please choose an option --
                    </option>
                    <option>Request Quote</option>
                    <option>Send Resume</option>
                    <option>Other</option>
                  </select>
                </li>
                <li>
                  <div class="grid grid-2">
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Surname" required />
                  </div>
                </li>
                <li>
                  <div class="grid grid-2">
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Phone" />
                  </div>
                </li>
                <li>
                  <textarea
                    className="message-box"
                    placeholder="Message"
                  ></textarea>
                </li>
                {/* <li>
                        <input type="checkbox" id="terms" />
                        <label for="terms">I have read and agreed with <a href="">the terms and conditions.</a></label>
                    </li>   */}
                <li>
                  <div class="grid grid-3">
                    <div class="required-msg">REQUIRED FIELDS</div>
                    <button class="btn-grid" type="submit">
                      <span class="back">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                          alt=""
                        />
                      </span>
                      <span class="front">SUBMIT</span>
                    </button>
                    <button class="btn-grid" type="reset">
                      <span class="back">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                          alt=""
                        />
                      </span>
                      <span class="front">RESET</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </form>

        </div>
      </div>
      <div>
        <iframe
          className="container col-md-12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8177430947662!2d85.32267461534886!3d27.72291303141398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1910b3ea2d5d%3A0x1ceb83ceb9f146df!2sYagiten%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1626684413461!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
