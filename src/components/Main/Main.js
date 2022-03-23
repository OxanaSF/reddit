import "./Main.css";
import sunIcon from "./sun-icon.jpeg";
import Side from "../Side/Side";
import Middle from "../Middle/Middle";

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
            {/* includes middle and side parts */}

            <Middle />
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
