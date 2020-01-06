$(".music-control-ce input[type=range]").on("input", function (e) {
    e.preventDefault();
    // console.log($(this).val());
    $(".music-control-ce label .progress").css("width", $(this).val() + "%");
    musicNow.currentTime = $(this).val() / 100 * musicNow.duration
});
// 
var playlist = [{
        "name": "カワキヲアメク",
        "singer": "美波",
        "bg": "./img/1.jpg",
        "url": "./songs/美波 - カワキヲアメク.mp3"
    },
    {
        "name": "长生诀",
        "singer": "西瓜kun",
        "bg": "./img/2.jpg",
        "url": "./songs/西瓜JUN - 长生诀.mp3"


    },
    {
        "name": "まふまふ",
        "singer": "鏡花水月",
        "bg": "./img/3.png",
        "url": "./songs/まふまふ - 鏡花水月.mp3"
    }
]


// 导入歌曲列表
$.each(playlist, function (i, ele) {
    // console.log(ele.name);
    $('.box .list ul.music-list').append(
        '<li class="music-list-item">' + ele.name + '</li>')
});
// 
var nowshow = 0
var musicNow = document.querySelector('.music-now')
// 
function playSong(n) {
    $('.music-now').attr('src', playlist[n].url);
    $('.box .top .bg').attr('style', "background-image: url('" + playlist[n].bg + "');");
    $('.box .top .left .music-img img').attr('src', playlist[n].bg);
    $('.box .top .right .music-info').find('.music-info-title').text(playlist[n].name);
    $('.box .top .right .music-info').find('.music-info-name').text(playlist[n].singer);
    // 列表高亮
    $('.box .list ul.music-list .music-list-item').eq(n).addClass('active').siblings().removeClass('active');
    // musicNow.load();
    musicNow.oncanplay = function () {
        $('.box .right .music-control-ce .totalTime').text(Math.round(musicNow.duration / 60) + ':' + Math.round(musicNow.duration % 60));
    }
}
playSong(nowshow);
// 
// 播放 暂停 
var aaa = true
$('.box .music-control .glyphicon-play ').click(function () {
    if (aaa) {
        aaa = false
        musicNow.play();
    } else {
        aaa = true
        musicNow.pause();
    }
})
// 列表切歌
$(".box .list ul.music-list .music-list-item").click(function () {
    playSong($(this).index());
    nowshow = $(this).index();
    setTimeout(function () {
        musicNow.play();
    }, 0);

});
// 上一个
$(".box .music-control .glyphicon-backward").click(function () {
    nowshow--;
    nowshow = nowshow < 0 ? $(".box .list ul.music-list .music-list-item").length - 1 :
        nowshow;
    playSong(nowshow);
    setTimeout(function () {
        musicNow.play();
    }, 0);
})
// 下一个
$(".box .music-control .glyphicon-forward").click(function () {
    nowshow++;
    nowshow = nowshow > $(".box .list ul.music-list .music-list-item").length - 1 ? 0 : nowshow;
    playSong(nowshow);
    setTimeout(function () {
        musicNow.play();
    }, 0);
});
//  单曲循环
$(".box .music-control .glyphicon-refresh").click(function () {
    $('.music-now').attr('loop')
    console.log('单曲循环');
    
});

// timeupdate	当目前的播放位置已更改时触发。
musicNow.ontimeupdate = function () {
    $(".music-control-ce label .progress").css("width", musicNow.currentTime / musicNow.duration * 100 + '%');

    // var t1 = Math.round(musicNow.duration/60)+':'+Math.round(musicNow.duration%60)
    // var t2 = Math.round(musicNow.currentTime/60) +':'+ Math.round(musicNow.currentTime%60)
    // console.log(t1,t2);
    $('.box .right .music-control-ce .nowTime').text(Math.round(musicNow.currentTime / 60) + ':' + Math.round(musicNow.currentTime % 60));
    $('.box .top .left .music-img').css({
        transform: 'rotate(' + 10 * musicNow.currentTime + 'deg)'
    })
}
// 播放or暂停时
musicNow.onplay = function () {
    aaa = false
    $('.music-control-ce .music-control-btns span').eq(1).addClass('glyphicon-pause')
    $('.top .left .music-point').css({
        transform: 'rotate(20deg)'
    })
    $('.box .top .left .music-img').addClass('active')
    $('.box .top .left .music-img').removeClass('pp')
} 
musicNow.onpause = function () {
    aaa = true
    $('.music-control-ce .music-control-btns span').eq(1).removeClass('glyphicon-pause')
    $('.box .top .left .music-img').addClass('pp')
    $('.top .left .music-point').css({
        transform: 'rotate(-15deg)'
    })
};
//  自动下一曲
musicNow.onended = function () {
    nowshow++;
    nowshow = nowshow > $(".box .list ul.music-list .music-list-item").length - 1 ? 0 : nowshow;
    playSong(nowshow);
    setTimeout(function () {
        musicNow.play();
    }, 0);
}