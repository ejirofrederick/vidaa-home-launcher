# VIDAA Home Launcher

An Apple TV-style home screen for Hisense VIDAA TVs, and any smart TV with a web browser. It's one HTML page: no framework, no build step, no app store.

![Clock screen and home screen](docs/screenshot.png)

## Features

- Greeting with your TV's name, over a nature scene that follows the time of day
- App tiles with tvOS-style focus effects: zoom, 3D tilt and shine
- A preview panel for each app when you focus its tile
- Live weather from Open-Meteo (free, no key)
- Spotify now playing, plus play, pause and skip (optional)
- A Smart Home tab for lights, AC, locks, gate and curtains, with scenes (demo mode, or real devices through Home Assistant)
- A minimal clock screen when idle: analog clock, greeting, month calendar, music controls
- Works with arrow keys and with the pointer that VIDAA's browser uses
- A built-in diagnostic screen that checks what your TV's browser supports

## Why a web page?

VIDAA is Hisense's own operating system. It doesn't let you replace the home screen or install your own apps, and apps only come from Hisense's curated store. VIDAA's store apps are themselves HTML5 web apps, though, so a web page opened in the TV browser behaves almost like one.

## Quick start

1. Download this repository and unzip it.
2. Add your app logos to `logos/clean/` (see `logos/README.md`). The tiles work without them.
3. Edit `config.js`: your TV's name, your name and your city.
4. Host the folder. The easiest free option is to drag it onto [app.netlify.com/drop](https://app.netlify.com/drop). You get an address like `https://your-site.netlify.app`.
5. Open that address in your TV's browser and bookmark it.

To try it on a computer first, open `index.html` in Chrome. Spotify login only works from an https address.

## Using it

| Key | Action |
| --- | --- |
| Arrows | Move between tiles |
| OK / Enter | Open the app or switch the device |
| Back | Return to the Home tab |
| Any key on the clock screen | Return to the home screen (Left and Right skip tracks, OK plays or pauses) |
| Click "Home" 3 times, press D or the red button | Open the diagnostic screen |

On VIDAA the browser remote moves a pointer: point at a tile and press OK.

## Apps

Each tile opens the service's website (YouTube's TV site, Netflix, Prime Video, Showmax, Spotify, YouTube Music). Edit the `APPS` list in `index.html` to change the tiles or their links. The first five appear on the Home tab.

Only services with a public API can show live data. Spotify can; Netflix, YouTube, Prime Video and Showmax can't, so their preview panels show sample titles. A web page also can't open the TV's installed apps. If a site won't play video in your TV's browser, use that service's own TV app.

## Spotify

1. Log in at [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard) and create an app with **Web API** ticked.
2. Add your page's exact address as a Redirect URI, for example `https://your-site.netlify.app/index.html`.
3. Put the Client ID (and that address as `redirectUri`) in `config.js`, then upload again.
4. On each screen, focus the Music tile and press OK once to log in.

It uses the PKCE login flow, so no secret is stored. Spotify requires Premium for apps in development mode, and allows up to 5 users per app. The music controls steer whichever Spotify app is currently playing.

## Smart home

The Smart Home tab runs in demo mode by default. To control real devices, set up [Home Assistant](https://www.home-assistant.io/), create a long-lived access token and fill in the `homeAssistant` block in `config.js`. Serve the page from the same network as Home Assistant, for example from its `config/www` folder. Never publish a copy that contains your token.

## Compatibility

Tested on a Hisense VIDAA TV with an Opera-based browser on Chromium 84 (1280 x 720 at 1.5x). The code avoids newer JavaScript and CSS on purpose. Use the diagnostic screen to check your TV.

## Trademarks

Apple TV and tvOS are trademarks of Apple. Hisense and VIDAA are trademarks of their owners. Netflix, YouTube, Prime Video, Spotify and Showmax are trademarks of their owners. This project isn't affiliated with any of them and ships no brand logos.

## License

MIT. See `LICENSE`. Built with help from Claude.
