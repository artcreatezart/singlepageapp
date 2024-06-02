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


    $('#goToPokedexFilters').click(function () {
        moveToSection(2);
    });

    // Move to slide # - first number is sectin, second is slide - zero indexed for slides
    $('#goToSlide1').click(function () {
        fullpage_api.moveTo(1, 0);
    });


});