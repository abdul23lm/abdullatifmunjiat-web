import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tm_about">
        <div className="about_image">
          <img src="assets/img/slider/about.jpg" alt="Abdul Latif Munjiat" />
        </div>
        <div className="description">
          <h3 className="name">Abdul Latif Munjiat as a Software Developer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hi there, I am Abdul Latif Munjiat. Director of CV Priatif Digital Studio.
                Founder of decodev.id and hawede.id.
                focusing on the field Software Development especially Front-end.
                I am always thirsty to learn something new about technological developments.
              </p>
              <div className="tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
            </div>
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>Ciamis, 23.10.1997
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>23
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>Berlian Street 40, Jakarta
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">abdul23lm@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">+62 8213 0314 423</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Work:</span>Invesnow, Inarray Indonesia
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Backend Dev Skills</h3>
                  </div>

                  <div className="progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">PHP (Laravel)</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">PHP (Codeigniter)</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 70 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Javascript (ExpressJS)</span>
                        <span className="number">65%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 65 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Go</span>
                        <span className="number">50%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 50 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="about_title">
                    <h3>Frontend Dev Skills</h3>
                  </div>
                  <div className="progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Bootstrap</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">TailwindCSS</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 85 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Javascript (VueJS)</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Javascript (ReactJS)</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 70 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Javascript (React Native)</span>
                        <span className="number">60%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 60 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Java (Android)</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 70 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Dart (Flutter)</span>
                        <span className="number">55%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 55 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts on Programming</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>50+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>25+</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>1M+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="partners">
                <div className="about_title">
                  <h3>My Brands</h3>
                </div>
                <Brand />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default About;
