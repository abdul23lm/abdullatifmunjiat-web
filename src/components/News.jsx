import React, { useState } from "react";
import Modal from "react-modal";
// import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tm_news">
        <div className="tm_title">
          <div className="title_flex">
            <div className="left">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
          </div>
        </div>

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/article-1.jpg)",
                  }}
                ></div>
              </div>
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Abdul Latif Munjiat</a>
                    <span>16 August 2021</span>
                  </p>
                </div>

                <h3 className="title" onClick={toggleModalOne}>
                  Mengenal TALL Stack (TailwindCSS, AlpineJS, Laravel, dan Livewire)
                </h3>
                <div className="tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/article-1.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/article-1.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                        <p className="date">
                            By <a href="#">Abdul Latif Munjiat</a>
                            <span>16 August 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Mengenal TALL Stack (TailwindCSS, AlpineJS, Laravel, dan Livewire)
                        </h3>
                      </div>
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Akhir - akhir ini TALL Stack ramai diperbincangkan yang merupakan sebuah preset untuk Frontend Laravel.
                            Preset ini diyakini dapat membuat pekerjaan frontend dengan cepat karena menggunakan
                            TailwindCSS untuk membuat tampilan antarmukanya. Jika Anda tidak terbiasa dengan namanya,
                            ini adalah akronim yang menjelaskan teknologi utama yang terlibat dalam TALL Stack, yaitu:
                          </p>
                            <p>1. TailwindCSS</p>
                            <p>2. AlpineJS</p>
                            <p>3. Laravel</p>
                            <p>4. Livewire</p>
                          <p>
                            TALL Stack ini dipopulerkan oleh Matt Stauffer saat ia membuat <a href="tallstack.dev">tallstack.dev</a>.
                            Adapun fitur penting yang terdapat pada TALL Stack yaitu:
                          </p>
                            <p>1. Memiliki frontend assets seperti TailwindCSS dan AlpineJS yang sudah dipersiapkan dengan Laravel Mix.</p>
                            <p>2. Sudah tersedia UI dan kostum Form dari Tailwind sehingga pengembangan frontend menjadi lebih cepat.</p>
                          <p>3. Dengan TALL Stack, developer dapat melakukan pengembangan secara
                            Full-Stack karena dapat mengembangkan frontend dan backend secara bersamaan.

                          </p>
                          <p>
                            Jika anda ingin menginstall atau mencoba preset ini, bisa mengunjungi link <a href="https://github.com/laravel-frontend-presets/tall">github</a>.
                            Pada link tersebut juga terdapat dokumentasi dan langkah-langkah untuk melakukan
                            instalasi preset tersebut.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Kesimpulannya, dahulu sebelum ada preset ini membuat sebuah aplikasi
                              Full-Stack tidaklah mudah. Setelah itu menjadi mudah dengan adanya VueJS.
                              Tetapi, berkat adanya TALL Stack dapat membuat aplikasi Laravel menjadi lebih menyenangkan.
                              Bagian Frontend dapat bersinergi dengan Backend berkat  Livewire. Menambahkan interaksi Javascript
                              dengan sangat mudah berkat AlpineJS.
                              Dan terakhir, mendesain antarmuka yang cantik menjadi lebih mudah dari sebelumnya berkat TailwindCSS.
                            </p>
                          </div>                          
                        </div>
                        {/* <div className="news_share">
                          <span>Share:</span>
                          <Social />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
