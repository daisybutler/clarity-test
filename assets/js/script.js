$(document).ready(function(){
    // Change the nav dropdown icon to a close icon when open
    $('#nav-collapse-btn').click(function(){
        $(this).toggleClass('navbar-toggler');
        $(this).toggleClass('btn-close');
        $('#toggler-icon').toggleClass('navbar-toggler-icon');
    });
});