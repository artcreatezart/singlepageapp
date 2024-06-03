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
        pronunciation: "BUL-ba-sore",
        type: [`./img/type/grass.webp`, `./img/type/poison.webp`],
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/pokemon/bulbasaur.webp",
        secondEvolution: "./img/pokemon/ivysaur.webp",
        thirdEvolution: "./img/pokemon/venusaur.webp",
        weakAgainst: ["./img/type/grass.webp", "./img/type/poison.webp"],
    }, {
        id: 2,
        imageLink: "https://pokemondb.net/pokedex/ivysaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ivysaur.gif",
        number: "#0002",
        name: "Ivysaur",
        pronunciation: "EYE-vee-sore",
        type: ["./img/type/grass.webp", "/img/type/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/pokemon/bulbasaur.webp",
        secondEvolution: "./img/pokemon/ivysaur.webp",
        thirdEvolution: "./img/pokemon/venusaur.webp",
        weakAgainst: ["./img/type/grass.webp", "./img/type/poison.webp"],
    }, {
        id: 3,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        pronunciation: "VEE-nuh-sore",
        type: ["./img/type/grass.webp", "/img/type/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/pokemon/bulbasaur.webp",
        secondEvolution: "./img/pokemon/ivysaur.webp",
        thirdEvolution: "./img/pokemon/venusaur.webp",
        weakAgainst: ["./img/type/grass.webp", "./img/type/poison.webp"],
    },
    {
        id: 4,
        imageLink: "https://pokemondb.net/pokedex/charmander",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif",
        number: "#0004",
        name: "Charmander",
        pronunciation: "CHAR-man-der",
        type: "./img/type/fire.webp",
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/pokemon/charmander.webp",
        secondEvolution: "./img/pokemon/charmeleon.webp",
        thirdEvolution: "./img/pokemon/charizard.webp",
        weakAgainst: ["./img/type/grass.webp", "./img/type/poison.webp"],
    },
    {
        id: 5,
        imageLink: "https://pokemondb.net/pokedex/charmeleon",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmeleon.gif",
        number: "#0005",
        name: "Charmeleon",
        pronunciation: "char-MEE-lee-un",
        type: "./img/type/fire.webp",
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/pokemon/charmander.webp",
        secondEvolution: "./img/pokemon/charmeleon.webp",
        thirdEvolution: "./img/pokemon/charizard.webp",
        weakAgainst: ["./img/type/grass.webp", "./img/type/poison.webp"],
    },
    {
        id: 6,
        imageLink: "https://pokemondb.net/pokedex/charizard",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif",
        number: "#0006",
        name: "Charizard",
        pronunciation: "CHAR-iz-ard",
        type: ["./img/type/fire.webp", "./img/type/flying.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/pokemon/charmander.webp",
        secondEvolution: "./img/pokemon/charmeleon.webp",
        thirdEvolution: "./img/pokemon/charizard.webp",
        weakAgainst: ["./img/type/grass.webp", "./img/type/poison.webp", "./img/type/poison.webp"],
    },

    
];

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
        <div class="pokemon-card">
            <div class="front-card">
                <img src="${pokemon.imageFront}" alt="Front Image">
                <div class="card-details">
                    <h3>${pokemon.number}</h3>
                    <h4>${pokemon.name}</h4>
                    <img src="${pokemon.type}" alt="">
                </div>
            </div>
            <div class="back-card">
                <img src="${pokemon.imageBack}" alt="back Image">
                <div class="card-details">
                    <h4>${pokemon.pronunciation}</h4>
                    <div class="weak-types">
                    <h5>Weakness</h5>
                    <img src="${pokemon.weakAgainst}" alt="">
                    </div>
                    
                    <div class="evolution-line">
                    
                        <img src="${pokemon.firstEvolution}" alt="First Evolution">
                        <i class="fa-solid fa-caret-right"></i>
                        <img src="${pokemon.secondEvolution}" alt="Second Evolution">
                        <i class="fa-solid fa-caret-right"></i>
                        <img src="${pokemon.thirdEvolution}" alt="Final Evolution">
                    </div>
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

// $(document).ready(function () {

    

// });