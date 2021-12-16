$(function(){
    $('.btn').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.plan-contents').addClass('active');
            $(this).find('p').slideDown();
        } else {
            $('.plan-contents').removeClass('active');
            $(this).find('p').slideUp();
        }
    });
});
