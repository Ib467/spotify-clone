// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#


export const authEndpoint = 
"https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "737bb0b6cc83444f9538d8eca16902c8"

//crud functionality
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
        })
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;