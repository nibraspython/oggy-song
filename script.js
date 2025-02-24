let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement("audio");

// Define the tracks that have to be played
let track_list = [
  {
    name: "jhol",
    artist: "Jaz Dhami Feat. Yo Yo Honey Singh",
    image: "https://ik.imagekit.io/eypz/1727596419416_7OfDs2puX.png",
    path: "b60241ef64e3906815f9dd11928deb10.mp3",
  },
  {
    name: "Aziyat",
    artist: "Diljit X Sia",
    image: "oggyx.webp",
    path: "Aziyat - Pratyush Dhiman.mp3",
  },
  {
    name: "Nasheed",
    artist: "Arif Lohar, Deep Jandu",
    image: "aa.webp",
    path: "nasheed.mp3",
  },
  {
    name: "Oggy",
    artist: "SHADOW LADY SCXR SOUL",
    image: "high-heels.webp",
    path: "AUD-20230914-WA0037.mp3",
  },
  {
    name: "Safwan",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img5.webp",
    path: "img11.mp3",
  },
  {
    name: "Musli",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img6.webp",
    path: "AUD-20240624-WA0176..mp3",
  },
  {
    name: "Hanan Shah",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img6.webp",
    path: "AUD-20240624-WA0176..mp3",
  },
  {
    name: "Sulaim",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img6.webp",
    path: "Beevi Rish NK, Zail.mp3",
  },
];

function random_bg_color() {
  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

// Change color every 5 seconds
setInterval(random_bg_color, 3000);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function song1OnClick() {
  loadTrack(0);
  playTrack();
}

function song2OnClick() {
  loadTrack(1);
  playTrack();
}

function song3OnClick() {
  loadTrack(2);
  playTrack();
}

function song4OnClick() {
  loadTrack(3);
  playTrack();
}

function song5OnClick() {
  loadTrack(4);
  playTrack();
}

function song6OnClick() {
  loadTrack(5);
  playTrack();
}

function song7OnClick() {
  loadTrack(6);
  playTrack();
}

function song8OnClick() {
  loadTrack(7);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
