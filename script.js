$(document).ready(function () {

    // FULLPAGE Initialization
    new fullpage('#fullpage', {
        // license
        licenseKey: 'gplv3-license', // Open source free license
        // options here
        autoScrolling: true,
        scrollHorizontally: true,
        // turn on navigation arrows
        // navigation: true,
        controlArrows: false,
    });

    const pokemon = [{
        id: 1,
        imageLink: "https://pokemondb.net/pokedex/bulbasaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif",
        number: "#0001",
        name: "Bulbasaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "",
        thirdEvolution: "",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    }];

    // Populate cards - no sorting just populating
    function populateCards(array) {
        // Clear out any results first:
        const results = document.getElementById('results');
        results.innerHTML = '';
        // Loop over the Pokémon and create a card for each one
        for (let i = 0; i < array.length; i++) {
            const pokemon = array[i]; // Get current Pokémon object
            // Populate card
            results.innerHTML += `
            <div class="card-container-flipper">
            <div class="flipper">
                <div class="front-card">
                    <img src="${pokemon.imageFront}" alt="Front Image">
                    <div class="card-details">
                        <h4>${pokemon.name}</h4>
                        <h3>${pokemon.number}</h3>
                        <!-- Add more details as needed -->
                    </div>
                </div>
                <div class="back-card">
                    <img src="${pokemon.imageBack}" alt="Back Image">
                    <div class="card-details">
                        <h4>${pokemon.name}</h4>
                        <h3>${pokemon.number}</h3>
                        <!-- Add more details as needed -->
                    </div>
                </div>
            </div>
        </div>
        
            `;
        }
    }

    populateCards(pokemon);

    // Function to move to the specified section
    function moveToSection(number) {
        fullpage_api.moveTo(number); // Allows you to move sections or "jump"
    }

    $('#goToPokedexFilters').click(function () {
        moveToSection(2);
    });

    // Move to slide # - first number is section, second is slide - zero indexed for slides
    $('#goToResults').click(function () {
        fullpage_api.moveTo(2, 1);
    });

});
