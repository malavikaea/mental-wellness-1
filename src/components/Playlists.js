import React from "react";

const playlists = {
  "😊": "https://open.spotify.com/playlist/happy_playlist",
  "😐": "https://open.spotify.com/playlist/neutral_playlist",
  "😞": "https://open.spotify.com/playlist/sad_playlist",
};

function Playlists({ mood }) {
  return mood ? (
    <div>
      <h3>Playlist for Your Mood</h3>
      <a href={playlists[mood]} target="_blank" rel="noopener noreferrer">
        Open Playlist
      </a>
    </div>
  ) : null;
}

export default Playlists;
