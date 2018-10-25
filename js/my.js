jQuery(document).ready(function () {

    $('.hide-text').hide();

    $('#fadeInText').click(function() {
        $('.hide-btn').hide();
        $('.hide-text').show('4000');
    });

    $('#fadeOutText').click(function() {
        $('.hide-btn').show('4000');
        $('.hide-text').hide();
    });

});
