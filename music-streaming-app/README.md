# Pulse — Music Streaming Frontend

Pulse is a production-style Spotify-inspired music streaming frontend built with **HTML5, CSS3, and vanilla JavaScript**. It intentionally uses original branding and generated local demo audio rather than copyrighted Spotify assets or recordings.

## Features

- Responsive dark music-streaming UI
- Home, login, register, wishlist, and playlist pages
- LocalStorage registration/login/session state
- Protected pages with login redirect
- 18 local demo tracks with generated WAV audio
- HTML5 Audio player with play/pause, previous/next, seek, volume, mute, shuffle, repeat
- Wishlist persistence per user
- Recently played history (10 tracks)
- Search by title, artist, album, or genre
- Dynamic playlist pages
- Toast notifications
- Keyboard focus states, semantic labels, alt text and ARIA labels
- Mobile navigation and responsive player

## Project structure

```text
music-streaming-app/
├── index.html
├── login.html
├── register.html
├── wishlist.html
├── playlist.html
├── css/
│   ├── style.css
│   ├── auth.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── player.js
│   ├── wishlist.js
│   └── songs.js
├── assets/
│   ├── images/
│   └── music/
└── README.md
```

## Run locally

Because this is a static frontend, it can be opened directly in a browser. For the most reliable local experience, serve the folder with any static HTTP server.

### Python

```bash
cd music-streaming-app
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Demo account flow

There is no pre-seeded password. Use **Register** to create an account. The demo stores the user record in `localStorage`; this is not suitable for real authentication or production credentials.

## Audio

The WAV files in `assets/music/` are short generated demo tones arranged as simple musical phrases. They are included so the HTML5 player works without depending on an external audio host.

## Browser notes

The browser may block autoplay until the user interacts with the page. The first Play action is therefore the reliable way to start audio.

Cross-page uninterrupted audio is not possible with this multi-page static architecture without moving playback into a persistent single-page shell or service architecture. Pulse persists the last track, playback position, volume, shuffle, and repeat state so it can restore the player context after navigation/reload.
