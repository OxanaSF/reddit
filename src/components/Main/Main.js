import "./Main.css";

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
                  <span className="overlay-title">Kaspersky</span>
                  <br></br>
                  <span className="overlay-paragraph1">
                    Germany's Cyber Authority Tells<br></br>
                  </span>
                  <span className="overlay-paragraph2">
                    Public to Stop Using Kaspersky...
                  </span>
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
                  <span className="overlay-title">All on HBO Max</span>
                  <br></br>
                  <span className="overlay-paragraph1">
                    Stream the latest hit movies and<br></br>
                  </span>
                  <span className="overlay-paragraph2">new originals.</span>
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
                  <span className="overlay-title">Marina Ovsyannikova</span>
                  <br></br>
                  <span className="overlay-paragraph1">
                    Marina Ovsyannikova: Russiand<br></br>
                  </span>
                  <span className="overlay-paragraph2">
                    journalist tells of 14-hour...
                  </span>
                  <div className="overlay-foot">
                    <div className="overlay-foot-text">u/hbomax and more</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="trending-content trending-content2">
              <div className="overlay">
                <div>
                  <span className="overlay-title">Daylight Saving Time</span>
                  <br></br>
                  <span className="overlay-paragraph1">
                    U.S. Senate approves bill that<br></br>
                  </span>
                  <span className="overlay-paragraph2">
                    would make Daylight Savings...
                  </span>
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

        <div className="popular-posts-area">
          <div className="popular-posts-title">Popular posts</div>
          <div className="popular-posts-content">
            <div className="popular-posts-content-main1">
              <div className="popular-main popular-main1">1</div>

              <div className="popular-main popular-main2">
                <div className="top-section"></div>
                <div className="middle-section2"></div>
                <div className="bottom-section"></div>
              </div>

              <div className="popular-main popular-main3">
                <div className="top-section"></div>
                <div className="middle-section3"></div>
                <div className="bottom-section"></div>
              </div>
            </div>

            <div className="popular-posts-content-side">
              <div className="popular-side popular-side1">
                <div className="side1-header">
                  <div className="overlay overlay-side">
                    <p className="side1-header-description">
                      Communities near You
                    </p>
                  </div>
                </div>
                <div className="side1-main">
                  <div className="side1-main-row">
                    <div className="main-row-left">
                      <div className="number">1</div>
                      <img
                        className="sfba-icon"
                        src={`${process.env.PUBLIC_URL}/images/sfba.jpeg`}
                        alt="sfba-icon"
                      />
                      <div className="text">r/bayarea</div>
                    </div>
                    <button className="btn btn-join">Join</button>
                  </div>

                  <div className="side1-main-row">
                    <div className="main-row-left">
                      <div className="number">2</div>
                      <img
                        className="sf-icon"
                        src={`${process.env.PUBLIC_URL}/images/sf.jpeg`}
                        alt="sf-icon"
                      />
                      <div className="text">r/sanfrancisco</div>
                    </div>
                    <button className="btn btn-join">Join</button>
                  </div>

                  <div className="side1-main-row">
                    <div className="main-row-left">
                      <div className="number">3</div>
                      <img
                        className="sfba-icon"
                        src={`${process.env.PUBLIC_URL}/images/berkeley.jpeg`}
                        alt="sfba-icon"
                      />
                      <div className="text">r/berkeley</div>
                    </div>
                    <button className="btn btn-join">Join</button>
                  </div>

                  <div className="side1-main-row">
                    <div className="main-row-left">
                      <div className="number">4</div>
                      <img
                        className="r-icon"
                        src={`${process.env.PUBLIC_URL}/images/r.jpeg`}
                        alt="r-icon"
                      />
                      <div className="text">r/oakland</div>
                    </div>
                    <button className="btn btn-join">Join</button>
                  </div>

                  <div className="side1-main-row">
                    <div className="main-row-left">
                      <div className="number">5</div>
                      <img
                        className="alameda-icon"
                        src={`${process.env.PUBLIC_URL}/images/alameda.jpeg`}
                        alt="alameda-icon"
                      />

                      <div className="text">r/alameda</div>
                    </div>
                    <button className="btn btn-join">Join</button>
                  </div>
                </div>
                <div className="side1-btn">
                  <button className="btn btn-view-all">View All</button>
                </div>
                <div className="side1-footer">
                  <button className="btn btn-side1-foot">Top</button>
                  <button className="btn btn-side1-foot">Aww</button>
                  <button className="btn btn-side1-foot">Sports</button>
                  <button className="btn btn-side1-foot">News</button>
                </div>
              </div>

              <div className="popular-side popular-side2">
                <div className="reddit-premium-paragraph">
                  <img
                    className="reddit-premium-icon"
                    src={`${process.env.PUBLIC_URL}/images/reddit_premium.jpeg`}
                    alt="reddit-premium-icon"
                  />

                  <div className="reddit-premium-text">
                    <p>
                      <span className="premium-title">Reddit Premium </span>{" "}
                      <br></br>The best Reddit experience, with monthly<br></br>
                      Coins
                    </p>
                  </div>
                </div>
                <button className="btn btn-try-now">Try Now</button>
              </div>

              <div className="popular-side popular-side3">
                <div className="side3-header">
                  <div className="side3-header-title">POPULAR COMMUNITIES</div>
                  <div className="side3-header-content">
                    <p>
                      AskReddit NoStupidQuestions <br></br>
                      DestinyTheGame explainlikeimfive
                    </p>
                  </div>
                  <div className="side3-header-see-more">
                    <p>See more</p>
                  </div>
                </div>

                <div className="side3-main">
                  <div className="side3-main-row">
                    <div className="main-row-left">
                      <div className="side3-categories gaming">gaming</div>
                    </div>
                    <img
                      className="r-icon"
                      src={`${process.env.PUBLIC_URL}/images/btn_arrow_down.jpeg`}
                      alt="r-icon"
                    />
                  </div>

                  <div className="side3-main-row">
                    <div className="main-row-left">
                      <div className="side3-categories">sports</div>
                    </div>
                    <img
                      className="r-icon"
                      src={`${process.env.PUBLIC_URL}/images/btn_arrow_down.jpeg`}
                      alt="r-icon"
                    />
                  </div>

                  <div className="side3-main-row">
                    <div className="main-row-left">
                      <div className="side3-categories">tv</div>
                    </div>
                    <img
                      className="r-icon"
                      src={`${process.env.PUBLIC_URL}/images/btn_arrow_down.jpeg`}
                      alt="r-icon"
                    />
                  </div>

                  <div className="side3-main-row">
                    <div className="main-row-left">
                      <div className="side3-categories">travel</div>
                    </div>
                    <img
                      className="r-icon"
                      src={`${process.env.PUBLIC_URL}/images/btn_arrow_down.jpeg`}
                      alt="r-icon"
                    />
                  </div>

                  <div className="side3-main-row">
                    <div className="main-row-left">
                      <div className="side3-categories">health & fitness</div>
                    </div>
                    <img
                      className="r-icon"
                      src={`${process.env.PUBLIC_URL}/images/btn_arrow_down.jpeg`}
                      alt="r-icon"
                    />
                  </div>

                  <div className="side3-main-row">
                    <div className="main-row-left">
                      <div className="side3-categories">fashion</div>
                    </div>
                    <img
                      className="r-icon"
                      src={`${process.env.PUBLIC_URL}/images/btn_arrow_down.jpeg`}
                      alt="r-icon"
                    />
                  </div>
                </div>
              </div>

              <div className="popular-side popular-side4">
                <div className="side4-main">
                  <div className="side4-col side4-help">
                    Help<br></br>
                    Reddit Coins<br></br>
                    Reddit Premium<br></br>
                    Communities<br></br>
                    Rereddit<br></br>
                    Topics<br></br>
                  </div>
                  <div className="side4-about">
                    About<br></br>
                    Careers<br></br>
                    Press<br></br>
                    Advertise<br></br>
                    Blog<br></br>
                    Terms<br></br>
                    Content Policy<br></br>
                    Privacy Policy<br></br>
                    Mod Policy<br></br>
                  </div>
                </div>
                <div className="side4-col side4-footer">
                  Reddit Inc © 2022. All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
