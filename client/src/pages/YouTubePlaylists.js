// client/src/pages/YouTubePlaylists.js
import React from "react";

const playlists = [
  { subject: "Quantitative Aptitude", link: "https://www.youtube.com/playlist?list=XXXX" },
  { subject: "English", link: "https://www.youtube.com/playlist?list=YYYY" },
  { subject: "General Awareness", link: "https://www.youtube.com/playlist?list=ZZZZ" },
  { subject: "Reasoning", link: "https://www.youtube.com/playlist?list=AAAA" },
];

function YouTubePlaylists() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>YouTube Playlists</h2>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>
            <strong>{playlist.subject}:</strong>{" "}
            <a href={playlist.link} target="_blank" rel="noopener noreferrer">
              Watch Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YouTubePlaylists;
