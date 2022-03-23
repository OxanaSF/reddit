import "./Main.css";
import sunIcon from "./sun-icon.jpeg";
import Side from "../Side/Side"

const Main = () => {
  return (
    <div className="main-page-wrap-middle">
      <div className="main-page-wrap">
        <div className="trending-today-area">
          <div className="trending-today-title">Trending today</div>
          <div className="trending-today-content">
            <div className="trending-content trending-content1">


              <div className="overlay">
                <div>
                  <div className="overlay-title">Kaspersky</div>

                  <div className="overlay-paragraph1">
                    Germany's Cyber Authority Tells<br></br>
                  </div>
                  <div className="overlay-paragraph2">
                    Public to Stop Using Kaspersky...
                  </div>
                  <div className="overlay-foot">
                    <img
                      className="handshake-icon"
                      src={`${process.env.PUBLIC_URL}/images/handshake.jpeg`}
                      alt="handshake-icon"
                    />

                    <div className="overlay-foot-text">
                      r/technology and more
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="trending-content trending-content4">
              <div className="overlay">
                <div>
                  <div className="overlay-title">All on HBO Max</div>
                  <div className="overlay-paragraph1">
                    Stream the latest hit movies and
                  </div>
                  <div className="overlay-paragraph2">new originals.</div>
                  <div className="overlay-foot">
                    <img
                      className="hbomax-icon"
                      src={`${process.env.PUBLIC_URL}/images/hbomax.jpeg`}
                      alt="hbomax-icon"
                    />

                    <div className="overlay-foot-text">u/hbomax and more</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="trending-content trending-content3">
              <div className="overlay">
                <div>
                  <div className="overlay-title">Marina Ovsyannikova</div>
      
                  <div className="overlay-paragraph1">
                    Marina Ovsyannikova: Russiand
                  </div>
                  <div className="overlay-paragraph2">
                    journalist tells of 14-hour...
                  </div>
                  <div className="overlay-foot">
                    <div className="overlay-foot-text">u/hbomax and more</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="trending-content trending-content2">
              <div className="overlay">
                <div>
                  <div className="overlay-title">Daylight Saving Time</div>
                 
                  <div className="overlay-paragraph1">
                    U.S. Senate approves bill that
                  </div>
                  <div className="overlay-paragraph2">
                    would make Daylight Savings...
                  </div>
                  <div className="overlay-foot">
                    <img
                      className="politics-icon"
                      src={`${process.env.PUBLIC_URL}/images/politics.jpeg`}
                      alt="politics-icon"
                    />

                    <div className="overlay-foot-text">r/politics and more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE PART */}

        <div className="popular-posts-area">

          <div className="popular-posts-title">Popular posts</div>

          <div className="popular-posts-content">
            {/* includes middle in side parts */}

            <div className="popular-posts-content-main1">
              {/* middle part */}


              {/* <div className="popular-main-main1-wrap"> */}
              <div className="popular-main1">
                {/* middle top part */}
                <div className="popular-main1-wrap">
                  <div className="popular-main1-left">
                    <button className="main1-left-element btn-hot">
                      <img
                        className="hot-icon"
                        src={`${process.env.PUBLIC_URL}/images/hot.jpeg`}
                        alt="hot-icon"
                      />
                      Hot
                    </button>
                    <button className="main1-left-element btn-everywhere">
                      Everywhere
                    </button>
                    <img
                      className="sun-icon"
                      src={`${process.env.PUBLIC_URL}/images/sun.jpeg`}
                      alt="politics-icon"
                    />
                    <button className="main1-left-element btn-new">New</button>
                    <img
                      className="sun-icon"
                      src={`${process.env.PUBLIC_URL}/images/triple-arrow.jpeg`}
                      alt="politics-icon"
                    />
                    <button className="main1-left-element btn-new">Top</button>
                    <img
                      className="sun-icon"
                      src={`${process.env.PUBLIC_URL}/images/three-dots.jpeg`}
                      alt="politics-icon"
                    />

                    <button className="main1-left-element btn-new"></button>
                  </div>

                  <div className="popular-main1-right">
                    <img
                      className="box-icon"
                      src={`${process.env.PUBLIC_URL}/images/box.jpeg`}
                      alt="box-icon"
                    />
                    {/* <div className="drop_down_arrow"></div> */}
                  </div>
                </div>
              </div>
              {/* </div> */}

              <div className="popular-main popular-main2">
                <div className="left-section">
                  <img
                    className="arrow-up-icon"
                    src={`${process.env.PUBLIC_URL}/images/arrow_up.jpeg`}
                    alt="arrow-up-icon"
                  />
                  <div>30.2k</div>
                  <img
                    className="arrow-down-icon"
                    src={`${process.env.PUBLIC_URL}/images/arrow_down.jpeg`}
                    alt="arrow-down-icon"
                  />
                </div>

                <div className="right-section">
                  <div className="top-section">
                    <div className="top-section-top">
                      <div className="top-section-top-sub">
                        <img
                          className="interasf-icon"
                          src={`${process.env.PUBLIC_URL}/images/interasf.jpeg`}
                          alt="interasf-icon"
                        />
                        <div className="el par1">r/interestingasfuck</div>
                        <div className="el par2">
                          Posted by u/neroina 3 hours ago
                        </div>
                        <img
                          className="handshake-icon"
                          src={`${process.env.PUBLIC_URL}/images/hands.jpeg`}
                          alt="handshake-icon"
                        />
                        <img
                          className="handshake-icon"
                          src={`${process.env.PUBLIC_URL}/images/cat-face.jpeg`}
                          alt="handshake-icon"
                        />
                        3
                        <img
                          className="handshake-icon"
                          src={`${process.env.PUBLIC_URL}/images/heart.jpeg`}
                          alt="handshake-icon"
                        />
                        <img
                          className="handshake-icon"
                          src={`${process.env.PUBLIC_URL}/images/dollar.jpeg`}
                          alt="handshake-icon"
                        />
                        9
                        <img
                          className="something-icon"
                          src={`${process.env.PUBLIC_URL}/images/something.jpeg`}
                          alt="something-icon"
                        />
                      </div>
                      <button className="btn btn-join">Join</button>
                    </div>
                    <div>
                      <div className="top-section top-section-bottom">
                        There is a Mall in China that offers "husband storage"
                        where wives can<br></br> leave their husband while they
                        shop.
                        <button className="main1-left-element btn-r-all">
                          /r/ALL
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="middle-section2"></div>

                  <div className="bottom-section">
                    <div className="bottom-bottom-section1">
                      <img
                        className="chat-area-icon"
                        src={`${process.env.PUBLIC_URL}/images/chat-area.jpeg`}
                        alt="chat-area-icon"
                      />
                      <div>923 Comments</div>
                    </div>

                    <div className="bottom-bottom-section2">
                      <img
                        className="turning-arrow-icon"
                        src={`${process.env.PUBLIC_URL}/images/turning-arrow.jpeg`}
                        alt="turning-arrow-icon"
                      />
                      <div>Share</div>
                    </div>

                    <div className="bottom-bottom-section3">
                      <img
                        className="flag-icon"
                        src={`${process.env.PUBLIC_URL}/images/flag.jpeg`}
                        alt="flag-icon"
                      />
                      <div>Save</div>
                    </div>

                    <img
                      className="handshake-icon"
                      src={`${process.env.PUBLIC_URL}/images/three-dots.jpeg`}
                      alt="handshake-icon"
                    />
                  </div>
                </div>
              </div>

              <div className="popular-main popular-main3">
                <div className="left-section">
                  <img
                    className="arrow-up-icon"
                    src={`${process.env.PUBLIC_URL}/images/arrow_up.jpeg`}
                    alt="arrow-up-icon"
                  />
                  <div>Vote</div>
                  <img
                    className="arrow-down-icon"
                    src={`${process.env.PUBLIC_URL}/images/arrow_down.jpeg`}
                    alt="arrow-down-icon"
                  />
                </div>

                <div className="right-section">
                  <div className="top-section">
                    <div className="top-section-top">
                      <div className="top-section-top-sub">
                        <img
                          className="toyota-icon"
                          src={`${process.env.PUBLIC_URL}/images/toyota.jpeg`}
                          alt="toyota-icon"
                        />
                        <div className="el par1">u/toyotausa</div>
                        <div className="el par2">Promoted</div>
                      </div>
                    </div>
                    <div>
                      <div className="top-section top-section-bottom">
                        Truck life's never a drag.
                      </div>
                    </div>
                  </div>
                  <div className="middle-section3"></div>

                  <div className="pre-bottom-section">
                    The all-new Tundra.<br></br>
                    <span className="toyota">toyota.com</span>
                  </div>

                  <div className="bottom-section">
                    <div className="bottom-bottom-section1">
                      <img
                        className="chat-area-icon"
                        src={`${process.env.PUBLIC_URL}/images/chat-area.jpeg`}
                        alt="chat-area-icon"
                      />
                      <div>0 Comments</div>
                    </div>

                    <div className="bottom-bottom-section2">
                      <img
                        className="turning-arrow-icon"
                        src={`${process.env.PUBLIC_URL}/images/turning-arrow.jpeg`}
                        alt="turning-arrow-icon"
                      />
                      <div>Share</div>
                    </div>

                    <div className="bottom-bottom-section3">
                      <img
                        className="flag-icon"
                        src={`${process.env.PUBLIC_URL}/images/flag.jpeg`}
                        alt="flag-icon"
                      />
                      <div>Save</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

     
          <Side />


            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;