$(document).on("click", ".mainCategory .headPanel", function() {
    $(this).toggleClass('opened');
    $(this).next().stop(true, true).slideToggle('fast');
    $('.mainCategory .headPanel').not(this).removeClass('opened').next().stop(true, true).slideUp('fast');
    $('.subCategory .subStats').removeClass('opened').next().stop(true, true).slideUp('fast')
});
$(document).on("click", ".subCategory .subStats", function() {
    $(this).toggleClass('opened');
    $(this).next().stop(true, true).slideToggle('fast');
    $('.subCategory .subStats').not(this).removeClass('opened').next().stop(true, true).slideUp('fast');
})

