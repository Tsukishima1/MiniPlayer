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
})