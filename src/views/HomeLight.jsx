import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import News from "../components/News";
import Contact from "../components/Contact";

const HomeLight = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/logo.svg" alt="brand" />
                </Link>
              </div>

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <span className="menu_content">News</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                </ul>
              </div>

              <div className="copyright">
                <p>
                  &copy; {new Date().getFullYear()} <br/> Abdul Latif Munjiat
                </p>
              </div>
            </div>
          </div>
        </TabList>

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tm_section">
              <div className="container">
                <TabPanel>
                  <Home />
                </TabPanel>

                <TabPanel>
                  <About />
                </TabPanel>

                <TabPanel>
                  <Portfolio />
                </TabPanel>

                <TabPanel>
                  <News />
                </TabPanel>

                <TabPanel>
                  <Contact />
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default HomeLight;
