const input = document.getElementById("input-text");
const button = document.getElementById("button");



// To get the song name, album & artist

button.addEventListener("click", function(){
    
    fetch('https://api.lyrics.ovh/suggest/'+input.value+'')
    .then(res => res.json())
    .then(data => {
    
        console.log(data);
        // first-search-result
        document.getElementById("album1").innerText = data.data[0].album.title;
        document.getElementById("artist1").innerText = data.data[0].artist.name;
        document.getElementById("song-name1").innerText = input.value;

        document.getElementById("lyrics1").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist1").innerText+'/'+document.getElementById("song-name1").innerText+'')
            .then(res => res.json())
            .then(data => {
    
                console.log(data);
                
                document.getElementById("lyrics12").innerText = lyrics.lyrics;
        })

    })

        // second-search-result
        document.getElementById("album2").innerText = data.data[1].album.title;
        document.getElementById("artist2").innerText = data.data[1].artist.name;
        document.getElementById("song-name2").innerText = input.value;

        // third-search-result
        document.getElementById("album3").innerText = data.data[2].album.title;
        document.getElementById("artist3").innerText = data.data[2].artist.name;
        document.getElementById("song-name3").innerText = input.value;

        // forth-search-result
        document.getElementById("album4").innerText = data.data[3].album.title;
        document.getElementById("artist4").innerText = data.data[3].artist.name;
        document.getElementById("song-name4").innerText = input.value;

        // fifth-search-result
        document.getElementById("album5").innerText = data.data[4].album.title;
        document.getElementById("artist5").innerText = data.data[4].artist.name;
        document.getElementById("song-name5").innerText = input.value;

        // sixth-search-result
        document.getElementById("album6").innerText = data.data[5].album.title;
        document.getElementById("artist6").innerText = data.data[5].artist.name;
        document.getElementById("song-name6").innerText = input.value;

        // seventh-search-result
        document.getElementById("album7").innerText = data.data[6].album.title;
        document.getElementById("artist7").innerText = data.data[6].artist.name;
        document.getElementById("song-name7").innerText = input.value;

        // eighth-search-result
        document.getElementById("album8").innerText = data.data[7].album.title;
        document.getElementById("artist8").innerText = data.data[7].artist.name;
        document.getElementById("song-name8").innerText = input.value;

        // ninth-search-result
        document.getElementById("album9").innerText = data.data[8].album.title;
        document.getElementById("artist9").innerText = data.data[8].artist.name;
        document.getElementById("song-name9").innerText = input.value;
        
        // last-search-result
        document.getElementById("album10").innerText = data.data[9].album.title;
        document.getElementById("artist10").innerText = data.data[9].artist.name;
        document.getElementById("song-name10").innerText = input.value;
});





});




