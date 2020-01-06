
var nowshow
$('.gallery .row .row img').click(function () {
    $('#myModal').modal('toggle')
    $('#myModal .modal-content .modal-body').find('img').attr('src', $(this).attr('src'))
    nowshow = $(this)
})

$('#myModal .modal-content .modal-footer').find('span').eq(0).click(function () {
    if (nowshow.parent().prev().find('img')[0]) {
        nowshow = nowshow.parent().prev().find('img')
        $('#myModal .modal-content .modal-body').find('img').attr('src', nowshow.attr('src'))
    }


})

$('#myModal .modal-content .modal-footer').find('span').eq(1).click(function () {
    if (nowshow.parent().next().find('img')[0]) {
        nowshow = nowshow.parent().next().find('img')
        $('#myModal .modal-content .modal-body').find('img').attr('src', nowshow.attr('src'))
    }


})
