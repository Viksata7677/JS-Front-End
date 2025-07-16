function manageSongs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }        
    }

    let songCount = arr.shift();
    let searchedList = arr.pop();

    let songs = [];

    for (const str of arr) {
        let [typeList, songName, duration] = str.split('_');
        let currentSong = new Song(typeList, songName, duration);
        songs.push(currentSong);
    }

    if (searchedList === 'all') {
        songs.forEach(song => {
            console.log(song.name)});
    } else {
        let filteredSongs = songs.filter(song => song.typeList === searchedList);
        filteredSongs.forEach(song => console.log(song.name));
    }
}