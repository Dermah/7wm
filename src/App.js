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
          <MediaTile
            title="My Kitchen Rules"
            src="https://loremflickr.com/320/240/food,cook,kitchen"
          />
          <MediaTile
            title="All Saints"
            src="https://loremflickr.com/670/400/hospital,ambulance"
          />
          <MediaTile
            title="Harry's Practice"
            src="https://loremflickr.com/670/400/cat,dog,fish,cockateil,golfcap"
          />
        </Shelf>
      </div>
    );
  }
}

export default App;
