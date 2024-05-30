$(document).ready(function () {

    // FULLPAGE Initalisation
    new fullpage('#fullpage', {
        // licence
        licenseKey: 'gplv3-license', // Open source free license
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // turn on navigation arrows
        navigation: true,
        controlArrows: false,
    
    });

    //  Function to move to the specified section
    function moveToSection(number) {
        fullpage_api.moveTo(number); // allows you to move sections or "jump"
    }

    $('#goToSection1').click(function () {
        moveToSection(1);
    });

    $('#goToSection2').click(function () {
        moveToSection(2);
    });

    $('#goToSection3').click(function () {
        moveToSection(3);
    });

    $('#goToSection4').click(function () {
        moveToSection(4);
    });

    // Move to slide # - first number is sectin, second is slide - zero indexed for slides
    $('#goToSlide1').click(function () {
        fullpage_api.moveTo(1, 0);
    });

    $('#goToSlide2').click(function () {
        fullpage_api.moveTo(1, 1);
    });

    // $('#goToSlide3').click(function() {
    //     fullpage_api.moveTo(1, 2);
    // });

    $('#goToSlide4').click(function () {
        fullpage_api.moveTo(1, 3);
    });

    // moveSilently:
    $('#goToSlide3').click(function () {
        fullpage_api.silentMoveTo(1, 2);
    });


});