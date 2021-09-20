import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";

const Contact = () => {
  const [viewport, setViewport] = useState({
    latitude: -6.1804272,
    longitude: 106.8824800,
    zoom: 12,
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i7it0dh",
        "template_qh2qjld",
        e.target,
        "user_SM7PygqobwgnuR7Cs6z4y"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className="tm_contact">
        <div className="tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>

        <div className="map_wrap">
          <div className="map">
            <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>

        <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li>

                <li>
                  <input type="email" name="user_email" placeholder="Email" />
                </li>

                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
              </ul>
            </div>
            <div className="tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
