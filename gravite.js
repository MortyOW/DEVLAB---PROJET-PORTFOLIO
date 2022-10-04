$(document).ready(function() {

    $('.jGravity').on('click', function() {
        $('body').jGravity({
            target: 'everything',
            ignoreClass: 'ignoreMe',
            weight: 25,
            depth: 2,
            drag: true
        });
    });
});
