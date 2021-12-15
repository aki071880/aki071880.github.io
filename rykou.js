$(function(){
    $('.btn').click(function(){
        var $plan = $(this).find('p')
        if($plan.hasClass('open')){
            $plan.removeClass('open');
            $plan.slideUp();
        }else{
            $plan.addClass('open');
            $plan.slideDown();
        }
    })
})