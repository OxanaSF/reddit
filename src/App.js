import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";


function App() {
  const topCards = [
    {
      title: "Kaspersky",
      paragraph1: "Germany's Cyber Authority Tells",
      paragraph2: "Public to Stop Using Kaspersky...",
      imgSrc: `${process.env.PUBLIC_URL}/images/handshake.jpeg`,
      footText: "r/technology and more",
      cssStyle: "trending-content1",
    },

    {
      title: "All on HBO Max",
      paragraph1: "Stream the latest hit movies and",
      paragraph2: "new originals.",
      imgSrc: `${process.env.PUBLIC_URL}/images/hbomax.jpeg`,
      footText: "u/hbomax and more",
      cssStyle: "trending-content4",
    },
    {
      title: "Marina Ovsyannikova",
      paragraph1: "Marina Ovsyannikova: Russiand",
      paragraph2: " journalist tells of 14-hour...",
      imgSrc: `${process.env.PUBLIC_URL}/images/transparent.jpeg`,
      footText: "",
      cssStyle: "trending-content3",
    },

    {
      title: "Daylight Saving Time",
      paragraph1: "U.S. Senate approves bill that",
      paragraph2: "would make Daylight Savings...",
      imgSrc: `${process.env.PUBLIC_URL}/images/politics.jpeg`,
      footText: "r/politics and more",
      cssStyle: "trending-content2",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Main topCards={topCards} />
    </div>
  );
}

export default App;
