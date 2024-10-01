function Playlist() {
  this.songs = [];
  this.idx = 0;
  this.isPlaying = false;
}

function Song(songName, singer) {
  this.songName = songName;
  this.singer = singer;
}

Playlist.prototype.add = function (someSong) {
  this.songs.push(someSong);
};

Playlist.prototype.play = function () {
  const song = this.songs[this.idx].songName;
  this.isPlaying = true;
  return `${song} started to play`;
};

Playlist.prototype.stop = function () {
  const song = this.songs[this.idx].songName;
  this.isPlaying = false;
  return `${song} stopped`;
};

Playlist.prototype.next = function () {
  this.isPlaying = true;
  if (this.idx === this.songs.length - 1) {
    this.idx = 0;
    const thisSong = this.songs[this.idx].songName;
    const prevSong = this.songs[this.songs.length - 1].songName;
    return `${prevSong} stopped,${thisSong} started`;
  }

  this.idx += 1;
  const thisSong = this.songs[this.idx].songName;
  const prevSong = this.songs[this.idx - 1].songName;
  return `${prevSong} stopped,${thisSong} started`;
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

console.log(playlist.play());
console.log(playlist.next()); 
console.log(playlist.next()); 
console.log(playlist.stop()); 
console.log(playlist.play()); 