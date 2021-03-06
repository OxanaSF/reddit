import "./Main.css";
import sunIcon from "./images/sun-icon.jpeg";
import Side from "../Side/Side";
import Middle from "../Middle/Middle";
import Top from "../Top/Top";

const Main = (props) => {
  return (
    <div className="main-page-wrap-middle">
      <div className="main-page-wrap">
        <div className="trending-today-area">
          <div className="trending-today-title">Trending today</div>

          <Top topCards={props.topCards} />
        </div>

        <div className="popular-posts-area">
          <div className="popular-posts-title">Popular posts</div>

          <div className="popular-posts-content">
            <Middle />
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
