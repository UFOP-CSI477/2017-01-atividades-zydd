$(document).ready(function(){
    $('#navbar').load('navbar.html',function(){
        $('ul.nav > li > a').each(function(){
            if ($(this).attr('href') == location.href.split('/').slice(-1)[0].split('?')[0]) {
                $(this).parent().addClass('active');
            }
        })
        $('body').css('padding-top', '70px')
    })
})

