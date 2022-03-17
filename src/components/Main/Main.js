import "./Main.css";

const Main = () => {
  return (
    <div className="main-page-wrap-middle">
      <div className="main-page-wrap">
        <div className="trending-today-area">
          <div className="trending-today-title">Trending today</div>
          <div className="trending-today-content">
            <div className="trending-content trending-content1">1</div>
            <div className="trending-content trending-content2">2</div>
            <div className="trending-content trending-content3">3</div>
            <div className="trending-content trending-content4">4</div>
          </div>
        </div>

        <div className="popular-posts-area">
          <div className="popular-posts-title">Popular posts</div>
          <div className="popular-posts-content">
            <div className="popular-posts-content-main">
              <div className="popular-main popular-main1">1</div>
              <div className="popular-main popular-main2">2</div>
              <div className="popular-main popular-main3">3</div>
            </div>

            <div className="popular-posts-content-side">
              <div className="popular-side popular-side1">1</div>
              <div className="popular-side popular-side2">2</div>
              <div className="popular-side popular-side3">3</div>
              <div className="popular-side popular-side4">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
