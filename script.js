$(document).ready(function() {
    $('#width-fix').click(function() {
        $('.rect').each(function() {
            if ($(this).width() < 200) {
                $(this).width(200);
            }
        });
    });
});