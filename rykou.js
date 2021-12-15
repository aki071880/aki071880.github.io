$(function(){
    $('.btn').click(function(){
        var $plan = $(this).find('.plan-contents')
        if($plan.hasClass('open')){
            $plan.removeClass('open');
            $plan.slideUp();
        }else{
            $plan.addClass('open');
            $plan.slideDown();
        };
    });
    $('.plan').slideUp(slow);
});
