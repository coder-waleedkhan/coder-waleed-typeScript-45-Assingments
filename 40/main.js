function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating three variables with different values
var album1 = make_album("waleed", "album title. 1");
var album2 = make_album("waleed khan", "album title. 2");
// calling a make_album function with third parameter
var album3 = make_album("waleed khan khattak ", "album title. 1", 10);
// printing values of object created my function
console.log(album1);
console.log(album2);
console.log(album3);
