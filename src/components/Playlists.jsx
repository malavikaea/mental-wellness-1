import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Playlists.css"; // Import styles

const playlists = {
  "😊": { name: "Happy Vibes", link: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC?si=mM0R93L6SbKNxTzUar_IPg&pi=TDnQO27nRgOxm" },
  "😌": { name: "Chill & Relax", link: "https://open.spotify.com/playlist/37i9dQZF1DWWNKU278VyNu?si=BXSrMaC4Ti22-AzG7dOUNA&pi=v0ifKpdlR3-uX" },
  "😢": { name: "Mood Booster", link: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=C9UFSrCHSYakmE_t8f-0-w&pi=sVqYwlWYQTGFh" },
  "🧘🏻‍♀️": { name: "Meditatiion", link: "https://open.spotify.com/playlist/37i9dQZF1DWZqd5JICZI0u?si=eO68Zy84R16n0TjtSxWMqQ&pi=5xxhWrY4SUyhi" },
  "💖": { name: "Love & Romance", link: "https://open.spotify.com/playlist/37i9dQZF1DWY7EoqMbT7wZ?si=JH0gTKUURw2melT2uN8WLg&pi=7e0mLUdARYmK-" },
};

function Playlists() {
  const [selectedMood, setSelectedMood] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="playlist-container">
      <h2>🎵 Pick a Mood to Get a Playlist</h2>
      <div className="emoji-selection">
        {Object.keys(playlists).map((emoji) => (
          <button key={emoji} className="emoji-button" onClick={() => setSelectedMood(emoji)}>
            {emoji}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="playlist-link">
          <h3>{playlists[selectedMood].name}</h3>
          <a href={playlists[selectedMood].link} target="_blank" rel="noopener noreferrer">
            🎧 Open Playlist
          </a>
        </div>
      )}

      <button className="back-button" onClick={() => navigate("/")}>
        ⬅️ Go Back
      </button>
    </div>
  );
}

export default Playlists;
