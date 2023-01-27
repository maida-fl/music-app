import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import data from "./util";
import React, { useState } from "react";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[8]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
