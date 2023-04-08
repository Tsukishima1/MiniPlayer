window.addEventListener('load',function() {
    var play = document.querySelector('.play');
    var on = document.querySelector('.on');
    var off = document.querySelector('.off');
    play.addEventListener('click', function() {
        if (on.style.display==='block') {
            on.style.display='none';
            off.style.display='block';
        }
        else {
            on.style.display='block';
            off.style.display='none';            
        }
    })
    var lyrics = document.querySelector('.lyrics');
    var cover = document.querySelector('.cover');
    var mirror = document.querySelector('.mirror');
    lyrics.addEventListener('click', function(){
        showLyrics=!showLyrics;
        if (showLyrics) {
            lyrics_more.style.WebkitTransform='translateY(0px)';
            console.log(lyrics_more.style.transform);
        }
        else {
            lyrics_more.style.WebkitTransform='translateY(100%)';
        }
    })
    cover.addEventListener('click', function() {
        showLyrics=!showLyrics;
        if (showLyrics) {
            lyrics_more.style.WebkitTransform='translateY(0px)';
            console.log(lyrics_more.style.transform);
        }
        else {
            lyrics_more.style.WebkitTransform='translateY(100%)';
        }
    })
    var showLyrics = false;
    var lyrics_more = document.querySelector('.lyrics_more');
    
})