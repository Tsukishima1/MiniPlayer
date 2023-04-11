window.addEventListener('load',function() {
    var play = document.querySelector('.play');
    var on = document.querySelector('.on');
    var off = document.querySelector('.off');
    play.addEventListener('click', function() {
        if (on.style.display==='block') {
            on.style.display='none';
            off.style.display='block';
            audio.play();
        }
        else {
            on.style.display='block';
            off.style.display='none';
            audio.pause();           
        }
    })
    var lyrics = document.querySelector('.lyrics');
    var cover = document.querySelector('.cover');
    var mirror = document.querySelector('.mirror');
    var arrow = document.querySelector('.arrow');
    lyrics.addEventListener('click', function(){
        isShowLyrics();
    })
    cover.addEventListener('click', function() {
        isShowLyrics();
    })
    var showLyrics = false;
    var lyrics_more = document.querySelector('.lyrics_more');
    
    // 箭头消失
    function arrowShowOff() {
        var timer = setInterval(() => {
            arrow.style.display='none';
            clearInterval(timer);
        }, 500);
    }
    // 箭头出现
    function arrowShowOn() {
        var timer = setInterval(() => {
            arrow.style.display='block';
            clearInterval(timer);
        }, 700);       
    }
    // 是否展示歌词
    function isShowLyrics() {
        showLyrics=!showLyrics;
        if (showLyrics) {
            lyrics_more.style.WebkitTransform='translateY(0px)';
            arrowShowOn();
        }
        else {
            arrowShowOff();
            lyrics_more.style.WebkitTransform='translateY(100%)';
        }
    }

    arrow.addEventListener('click', ()=>{
        isShowLyrics();
    })

    var audio = document.querySelector('audio');

})