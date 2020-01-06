$('section.works ul li').on('mouseenter', function () {
    $(this).find('.works-mask').addClass('active')
})
$('section.works ul li').on('mouseleave', function () {
    $(this).find('.works-mask').removeClass('active')
})


function qiehuan() {
    var aaa = true
    setInterval(function () {


        if (aaa) {
            aaa = false
            $("section.blog .hihi .blog-centent").css({
                'marginLeft': $('section.blog .hihi .blog-centent .blog-card').outerWidth() * -1
            })
        } else {
            aaa = true
            $("section.blog .hihi .blog-centent").css({
                'marginLeft': 0
            });
        }

    }, 3000);
}
var sreenW = $('body').outerWidth()
if (sreenW < 550) {
    $("section.blog .hihi .blog-centent").css({
        'width': sreenW
    })
    $("section.blog .hihi .blog-centent  .blog-card").css({
        'width': sreenW,'padding':0
    })
    // 
    $('section.works  .works-mask .mask-text').css({
        'padding': '10px'
    })
    $('section.works  .works-mask .mask-text h3').css({
        'margin-top': 0,
        'margin-bottom': 0,
        'font-size': '14px'
    })
    $('section.works  .works-mask .mask-text p').css({
        'font-size': '10px',
        'line-height': 1.4
    })
    $('.container').css({  'padding': 0
    })

} else if (sreenW < 768) {

    $("section.blog .hihi .blog-centent").css({
        'width': sreenW - 40
    })
    $("section.blog .hihi .blog-centent  .blog-card").css({
        'width': (sreenW - 40) / 2
    })
} else {
    qiehuan()
}


var sections = document.querySelectorAll("section");

document.body.onscroll = function () {
    for (var i = 0; i < sections.length; i++) {
        if (
            window.pageYOffset >
            sections[i].offsetTop - window.innerHeight + sections[i].offsetHeight / 5
        ) {


            sections[i].classList.add("active");
        } else {
            sections[i].classList.remove("active");
        }
    }
};
window.scrollTo(0, 1);