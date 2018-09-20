import React, { Component } from "react";
import "./App.css";

import MediaTile from "./components/MediaTile";
import Shelf from "./components/Shelf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shelf>
          <MediaTile title="Home And Away" src="./tile.jpg" />
        </Shelf>
      </div>
    );
  }
}

export default App;
