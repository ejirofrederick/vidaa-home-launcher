/* ------------------------------------------------------------------
   Your settings. Edit this file only, then reload the page.
   Anything left empty stays switched off.
   ------------------------------------------------------------------ */
window.TV_CONFIG = {

  /* Shown after the greeting: "Good afternoon, My TV" */
  tvName: "My TV",

  /* Shown on the clock screen: "Hi Ada". Leave empty for "Hello". */
  userName: "",

  /* Live weather from Open-Meteo (free, no account).
     Find your city's latitude and longitude on any map site. */
  weather: { city: "Lagos", lat: 6.5244, lon: 3.3792 },

  /* Spotify "now playing" and music controls. See README, section "Spotify".
     Needs Spotify Premium and the page opened from an https address. */
  spotify: {
    clientId: ""
    /* , redirectUri: "https://your-site.netlify.app/index.html" */
  },

  /* Smart home through Home Assistant. Leave null for demo mode.
     Never put a token in a copy of the site that is public on the internet.
  homeAssistant: {
    url: "http://homeassistant.local:8123",
    token: "long-lived access token",
    entities: {
      lr: "light.living_room", bl: "light.bedside", fan: "fan.ceiling_fan",
      ac: "climate.bedroom", door: "lock.front_door", gate: "cover.main_gate",
      cur: "cover.living_room_curtains", cam: "switch.cameras"
    }
  },
  */
  homeAssistant: null
};
