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
    </>
  );
};

export default Home;
