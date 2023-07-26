import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

import purpleBall from "./assets/purpleBall.svg";
import redBall from "./assets/redBall.svg";
import redBallMini from "./assets/redBallMini.svg";

function App() {
  return (
    <>
      <div className="purpleLight"></div>
      <div className="redLight"></div>
      <img src={purpleBall} className="purpleBall"></img>
      <img src={redBall} className="redBall"></img>
      <img src={redBallMini} className="redBallMini"></img>
      <div className="glass"></div>
      <div style={{ position: "absolute", maxWidth: "100%" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
