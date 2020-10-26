(function($){
    $('#container').load('main.html #content');
    $('.logo a').on('click', function(e){
        e.preventDefault();
        url = this.href;
        $('#content').remove();
        $('#container').load(url + ' #content')
    })
    $('.quickMenu a').on('click', function(e){
        e.preventDefault();
        url = this.href;
        $('#content').remove();
        $('#container').load(url +' #content');
    })
    $('.hbr').on('click', function(){
        $('.gnb').addClass('on');
        console.log('여기')
    })
    $('.exit').on('click', function(){
        $('.gnb').removeClass('on');
        console.log('출력')
    })
})(jQuery)