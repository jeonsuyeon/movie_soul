// main.js

$(function(){

    // gnb 열기
    $('.btn-toggle').on('click', function(){
      $('#gnb').addClass('show');
      console.log('click');
    });
  
    // gnb 닫기
    $('.btn-close').on('click', function(){
      $('#gnb').removeClass('show');
    });

  var val = location.href.substr(
        location.href.lastIndexOf('=') + 1
      );
      if(val == 1) {
        $('#synop_popup').addClass('show');
        $('#gnb ul li').removeClass('active');
        $('#gnb ul li').eq(2).addClass('active');
        $('.text_box').css('display', 'none');
        $('title').text('SOUL | 시놉시스');
      } else {
        $('#synop_popup').removeClass('show');
      }
});