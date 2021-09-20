import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/abdul-latif-munjiat.jpg)",
              }}
            ></div>
          </div>
          <div className="details">
            <h3 className="name">Abdul Latif Munjiat</h3>
            <p className="job">
              Software Developer based in Jakarta, Indonesia. Other times I'm a Digital Creator
            </p>
            <Social />
          </div>
        </div>
      </div>

        <div className="tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Services</span>
              <h3>Choose My Services</h3>
            </div>
          </div>
        </div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://lynk.id/abdul_lm/oJNExGb" >
                 Undangan Digital Pernikahan Website
                 </a>
                </button>
              </div>
              <div>&nbsp;</div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://lynk.id/abdul_lm/rDz5mkj" >
                 Undangan Digital Pernikahan Video
                 </a>
                </button>
              </div>
              <div>&nbsp;</div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://lynk.id/abdul_lm/eVOxWb0" >
                 Undangan Digital Pernikahan Image
                 </a>
                </button>
              </div>
              <div>&nbsp;</div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://decodev.id" >
                 Jasa Pembuatan Aplikasi
                 </a>
                </button>
              </div>
              <div>&nbsp;</div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://decodev.id" >
                 Jasa Pembuatan Video & Desain
                 </a>
                </button>
            </div>
              <div>&nbsp;</div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://www.facebook.com/sparkarhub/portfolios/ig/abdul_lm/" >
                 My Instagram Filter Effect
                 </a>
                </button>
            </div>
              <div>&nbsp;</div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://soundcloud.com/abdul_lm" >
                 Listen to My Music (EDM)
                 </a>
                </button>
            </div>
              <div>&nbsp;</div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://api.whatsapp.com/send?phone=6282130314423" >
                 Chat Me via Whatsapp
                 </a>
                </button>
            </div>
              <div>&nbsp;</div>
            <div className="tm_button">
                <button className="ib-button">
                 <a href="https://lynk.id/abdul_lm/s/v8O69r9" >
                 Donate Me (Traktir Kopinya Guys)
                 </a>
                </button>
            </div>
    </>
  );
};

export default Home;
