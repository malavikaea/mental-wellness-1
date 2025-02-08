//import React from "react";
import { useParams } from "react-router-dom";

const playlists = {
  happy: "https://open.spotify.com/playlist/happy_playlist",
  neutral: "https://open.spotify.com/playlist/neutral_playlist",
  sad: "https://open.spotify.com/playlist/sad_playlist",
};

function Playlists() {
  const { mood } = useParams(); // Get mood from URL

  const playlistLink = playlists[mood] || "https://open.spotify.com/playlist/default_playlist";

  return (
    <div>
      <h3>Playlist for Your Mood</h3>
      <p>Detected Mood: <strong>{mood}</strong></p>
      <a href={playlistLink} target="_blank" rel="noopener noreferrer">
        Open {mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist
      </a>
    </div>
  );
}

export default Playlists;
