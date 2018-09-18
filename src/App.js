import React, { Component } from "react";
import "./App.css";
import MediaTile from "./components/MediaTile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MediaTile title="Home And Away" />
      </div>
    );
  }
}

export default App;
