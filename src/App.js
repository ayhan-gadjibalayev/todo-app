import "./App.css";
import { LuBicepsFlexed } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";
import { FaCarSide } from "react-icons/fa6";

function App() {
  return (
    <div className="App-container">
      <div className="left-container">
        <span className="private">Private</span>
        <div className="list">
          <div className="private-list">
            <div className="list-item">
              <FaHouse className="icons-list" />
              <span className="list-container">Home</span>
            </div>
            <span className="number">8</span>
          </div>
          <div className="private-list">
            <div className="list-item">
              <div className="general-style-icon"></div>
              <span className="list-container">completed</span>
            </div>
            <span className="number">16</span>
          </div>
          <div className="private-list">
            <div className="list-item">
              <div className="general-style-icon"></div>
              <span className="list-container">Personal</span>
            </div>
            <span className="number">4</span>
          </div>
          <div className="private-list">
            <div className="list-item">
              <div className="general-style-icon"></div>
              <span className="list-container">Work</span>
            </div>
            <span className="number">6</span>
          </div>
          <div className="private-list">
            <div className="list-item">
              <LuBicepsFlexed color="yellow" className="icons-list" />
              <span className="list-container">Diet</span>
            </div>
            <span className="number">3</span>
          </div>
          <div className="private-list">
            <div className="list-item">
              <SiBookstack className="icons-list" />
              <span className="list-container">List of book</span>
            </div>
            <span className="number">8</span>
          </div>
          <div className="private-list">
            <div className="list-item">
              <FaCarSide color="red" className="icons-list" />
              <span className="list-container">Road trip list</span>
            </div>
            <span className="number">6</span>
          </div>

          <div className="list-bottom">
            <span style={{ fontSize: "25px", marginLeft: "10px" }}>
              + Create new list
            </span>
            <div style={{ display: "flex" }}>
              <span className="letter-l">⌘</span>
              <span className="letter-l">L</span>
            </div>
          </div>
          <h2 style={{ marginLeft: "10px" }}>Group</h2>
          <div className="top-group">
            <div className="left-group"></div>
            <div className="left-group"></div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="mobal-people">
              <span className="mobal">
                <b>Mobal project</b>
              </span>
              <span className="people">5 people</span>
            </div>
            <div className="mobal-people">
              <span className="mobal">
                <b>Mobal project</b>
              </span>
              <span className="people">5 people</span>
            </div>
          </div>
          <div className="list-bottom">
            <span style={{ fontSize: "25px", marginLeft: "10px" }}>
              + Create new group
            </span>
            <div style={{ display: "flex" }}>
              <span className="letter-l">⌘</span>
              <span className="letter-l">G</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  );
}

export default App;
