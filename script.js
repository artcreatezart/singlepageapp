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
        firstEvolution: "./img/bulbasaur.webp",
        secondEvolution: "./img/ivysaur.webp",
        thirdEvolution: "./img/venusaur.webp",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    }, {
        id: 2,
        imageLink: "https://pokemondb.net/pokedex/ivysaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ivysaur.gif",
        number: "#0002",
        name: "Ivysaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/bulbasaur.webp",
        secondEvolution: "./img/ivysaur.webp",
        thirdEvolution: "./img/venusaur.webp",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    }, {
        id: 3,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/bulbasaur.webp",
        secondEvolution: "./img/ivysaur.webp",
        thirdEvolution: "./img/venusaur.webp",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 4,
        imageLink: "https://pokemondb.net/pokedex/charmander",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif",
        number: "#0004",
        name: "Charmander",
        type: "/img/fire.webp",
        region: "Kanto",
        generation: "1",
        firstEvolution: "./img/charmander.webp",
        secondEvolution: "./img/charmeleon.webp",
        thirdEvolution: "./img/charizard.webp",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 5,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 6,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 7,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 8,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 9,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 10,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 11,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 12,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 13,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 14,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 15,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 16,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 17,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 18,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 19,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
    },
    {
        id: 20,
        imageLink: "https://pokemondb.net/pokedex/venusaur",
        imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
        imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
        number: "#0003",
        name: "Venusaur",
        type: ["/img/grass.webp", "/img/poison.webp"],
        region: "Kanto",
        generation: "1",
        firstEvolution: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        secondEvolution: "https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png",
        thirdEvolution: "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
        weakAgainst: ["/img/grass.webp", "/img/poison.webp"],
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
                    <div class="weak-types">
                    <p>Weakness</p>
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