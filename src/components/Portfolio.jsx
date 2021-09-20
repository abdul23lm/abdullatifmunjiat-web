import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tm_portfolio">
          <div className="tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Creative Portfolio</h3>
              </div>
            </div>
          </div>
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>UI/UX</Tab>
                <Tab>Website</Tab>
                <Tab>Apps</Tab>
                <Tab>Creative</Tab>
              </TabList>
              <div className="list_wrapper">
                <SRLWrapper>
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/game-edukasi-pemahaman-belajar-anak.jpg">
                              <img
                                src="assets/img/portfolio/game-edukasi-pemahaman-belajar-anak.jpg"
                                alt="Portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/bookost.png">
                              <img
                                src="assets/img/portfolio/bookost.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/decodev.png">
                              <img
                                src="assets/img/portfolio/decodev.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/lppm-unsika.png">
                              <img
                                src="assets/img/portfolio/lppm-unsika.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/skripsihunter.png">
                              <img
                                src="assets/img/portfolio/skripsihunter.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/garpstore.png">
                              <img
                                src="assets/img/portfolio/garpstore.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/covid19-website.png">
                              <img
                                src="assets/img/portfolio/covid19-website.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/webgis-pkh.png">
                              <img
                                src="assets/img/portfolio/webgis-pkh.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/lmtour.png">
                              <img
                                src="assets/img/portfolio/lmtour.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/queue-system-for-mobile.png">
                              <img
                                src="assets/img/portfolio/queue-system-for-mobile.png"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/queue-system-for-mobile.png">
                              <img
                                src="assets/img/portfolio/queue-system-for-mobile.png"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/decodev.png">
                              <img
                                src="assets/img/portfolio/decodev.png"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/lppm-unsika.png">
                              <img
                                src="assets/img/portfolio/lppm-unsika.png"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/game-edukasi-pemahaman-belajar-anak.jpg">
                              <img
                                src="assets/img/portfolio/game-edukasi-pemahaman-belajar-anak.jpg"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/garpstore.png">
                              <img
                                src="assets/img/portfolio/garpstore.png"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/decodev.png">
                              <img
                                src="assets/img/portfolio/decodev.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/lppm-unsika.png">
                              <img
                                src="assets/img/portfolio/lppm-unsika.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/bookost.png">
                              <img
                                src="assets/img/portfolio/bookost.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/skripsihunter.png">
                              <img
                                src="assets/img/portfolio/skripsihunter.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/garpstore.png">
                              <img
                                src="assets/img/portfolio/garpstore.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/lmtour.png">
                              <img
                                src="assets/img/portfolio/lmtour.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/webgis-pkh.png">
                              <img
                                src="assets/img/portfolio/webgis-pkh.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/covid19-website.png">
                              <img
                                src="assets/img/portfolio/covid19-website.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/game-edukasi-pemahaman-belajar-anak.jpg">
                              <img
                                src="assets/img/portfolio/game-edukasi-pemahaman-belajar-anak.jpg"
                                alt="Apps"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/vSzv12tcCAU'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/4bFYIBM-tSQ'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/UMOJFWZp8rU'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/fTTx73fnktg'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/k2msWOWAMuU'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/nEPXuzoGsfE'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/pnFtGDUZu6U'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/cilCsMme4I4'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tm_portfolio_animation_wrap">
                            <iframe src='https://www.youtube.com/embed/pS_7RA-OzhM'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen='true'
                                    title='video'
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>
                </SRLWrapper>
              </div>
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
