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

document.getElementById("lyrics1").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist1").innerText+'/'+document.getElementById("song-name1").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-first").innerText = data.lyrics;
        })
});

document.getElementById("lyrics2").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist2").innerText+'/'+document.getElementById("song-name2").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-second").innerText = data.lyrics;
            });
        });

document.getElementById("lyrics3").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist3").innerText+'/'+document.getElementById("song-name3").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-third").innerText = data.lyrics;
            });
        }); 
        //  
        document.getElementById("lyrics4").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist4").innerText+'/'+document.getElementById("song-name4").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-forth").innerText = data.lyrics;
            });
        });  

        document.getElementById("lyrics5").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist5").innerText+'/'+document.getElementById("song-name5").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-fifth").innerText = data.lyrics;
            });
        });  

        document.getElementById("lyrics6").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist6").innerText+'/'+document.getElementById("song-name6").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-sixth").innerText = data.lyrics;
            });
        });  
        document.getElementById("lyrics7").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist7").innerText+'/'+document.getElementById("song-name7").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-seventh").innerText = data.lyrics;
            });
        });  
        
        document.getElementById("lyrics8").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist8").innerText+'/'+document.getElementById("song-name8").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-eighth").innerText = data.lyrics;
            });
        });  
        
        document.getElementById("lyrics9").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist9").innerText+'/'+document.getElementById("song-name9").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-ninth").innerText = data.lyrics;
            });
        });  
        
        document.getElementById("lyrics10").addEventListener("click", function(){
            fetch('https://api.lyrics.ovh/v1/'+document.getElementById("artist10").innerText+'/'+document.getElementById("song-name10").innerText+'')
            .then(res => res.json())
            .then(data => {
        
                console.log(data);
                
                document.getElementById("lyrics-tenth").innerText = data.lyrics;
            });
        });  

        
