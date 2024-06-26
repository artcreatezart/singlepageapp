$(document).ready(function () {
    // FULLPAGE Initialization
    new fullpage('#fullpage', {
        // license
        licenseKey: 'gplv3-license', // Open source free license
        // options here
        autoScrolling: true,
        scrollHorizontally: false,
        // turn on navigation arrows
        // navigation: true,
        controlArrows: false,
    });

    fullpage_api.setAllowScrolling(true);


    const pokemon = [{
            id: 1,
            imageLink: "https://pokemondb.net/pokedex/bulbasaur",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif",
            number: "#0001",
            name: "Bulbasaur",
            pronunciation: "BUL-ba-sore",
            type: ["Grass", "Posion"],
            typeImg: ["./img/type/grass.webp", "./img/type/poison.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/bulbasaur.webp",
            secondEvolution: "./img/pokemon/ivysaur.webp",
            thirdEvolution: "./img/pokemon/venusaur.webp",
            weakAgainst: ["./img/type/psychic.webp", "./img/type/flying.webp", "./img/type/ice.webp", "./img/type/fire.webp"],
        }, {
            id: 2,
            imageLink: "https://pokemondb.net/pokedex/ivysaur",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/ivysaur.gif",
            number: "#0002",
            name: "Ivysaur",
            pronunciation: "EYE-vee-sore",
            type: ["Grass", "Posion"],
            typeImg: ["./img/type/grass.webp", "/img/type/poison.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/bulbasaur.webp",
            secondEvolution: "./img/pokemon/ivysaur.webp",
            thirdEvolution: "./img/pokemon/venusaur.webp",
            weakAgainst: ["./img/type/psychic.webp", "./img/type/flying.webp", "./img/type/ice.webp", "./img/type/fire.webp"],
        }, {
            id: 3,
            imageLink: "https://pokemondb.net/pokedex/venusaur",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur-f.gif",
            number: "#0003",
            name: "Venusaur",
            pronunciation: "VEE-nuh-sore",
            type: ["Grass", "Posion"],
            typeImg: ["./img/type/grass.webp", "/img/type/poison.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/bulbasaur.webp",
            secondEvolution: "./img/pokemon/ivysaur.webp",
            thirdEvolution: "./img/pokemon/venusaur.webp",
            weakAgainst: ["./img/type/psychic.webp", "./img/type/flying.webp", "./img/type/ice.webp", "./img/type/fire.webp"],
        },
        {
            id: 4,
            imageLink: "https://pokemondb.net/pokedex/charmander",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif",
            number: "#0004",
            name: "Charmander",
            pronunciation: "CHAR-man-der",
            type: ["Fire"],
            typeImg: "./img/type/fire.webp",
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/charmander.webp",
            secondEvolution: "./img/pokemon/charmeleon.webp",
            thirdEvolution: "./img/pokemon/charizard.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/water.webp", "./img/type/ground.webp"],
        },
        {
            id: 5,
            imageLink: "https://pokemondb.net/pokedex/charmeleon",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmeleon.gif",
            number: "#0005",
            name: "Charmeleon",
            pronunciation: "char-MEE-lee-un",
            type: ["Fire"],
            typeImg: "./img/type/fire.webp",
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/charmander.webp",
            secondEvolution: "./img/pokemon/charmeleon.webp",
            thirdEvolution: "./img/pokemon/charizard.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/water.webp", "./img/type/ground.webp"],
        },
        {
            id: 6,
            imageLink: "https://pokemondb.net/pokedex/charizard",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif",
            number: "#0006",
            name: "Charizard",
            pronunciation: "CHAR-iz-ard",
            type: ["Fire", "Flying"],
            typeImg: ["./img/type/fire.webp", "./img/type/flying.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/charmander.webp",
            secondEvolution: "./img/pokemon/charmeleon.webp",
            thirdEvolution: "./img/pokemon/charizard.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/water.webp", "./img/type/ground.webp"],
        },
        {
            id: 7,
            imageLink: "https://pokemondb.net/pokedex/squirtle",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif",
            number: "#0007",
            name: "Squirtle",
            pronunciation: "SKWIR-tul",
            type: ["Water"],
            typeImg: "./img/type/water.webp",
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/squirtle.webp",
            secondEvolution: "./img/pokemon/wartortle.webp",
            thirdEvolution: "./img/pokemon/blastoise.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/water.webp", "./img/type/ground.webp"],
        },
        {
            id: 8,
            imageLink: "https://pokemondb.net/pokedex/wartortle",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/wartortle.gif",
            number: "#0008",
            name: "Wartortle",
            pronunciation: "WOR-TORE-tul",
            type: ["Water"],
            typeImg: "./img/type/water.webp",
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/squirtle.webp",
            secondEvolution: "./img/pokemon/wartortle.webp",
            thirdEvolution: "./img/pokemon/blastoise.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/water.webp", "./img/type/ground.webp"],
        },
        {
            id: 9,
            imageLink: "https://pokemondb.net/pokedex/blastoise",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif",
            number: "#0009",
            name: "Blastoise",
            pronunciation: "BLAS-toyce",
            type: ["Water"],
            typeImg: "./img/type/water.webp",
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/squirtle.webp",
            secondEvolution: "./img/pokemon/wartortle.webp",
            thirdEvolution: "./img/pokemon/blastoise.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/water.webp", "./img/type/ground.webp"],
        },
        {
            id: 10,
            imageLink: "https://pokemondb.net/pokedex/caterpie",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/caterpie.gif",
            number: "#0010",
            name: "Caterpie",
            pronunciation: "CAT-ur-pee",
            type: ["Bug"],
            typeImg: "./img/type/bug.webp",
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/caterpie.webp",
            secondEvolution: "./img/pokemon/metapod.webp",
            thirdEvolution: "./img/pokemon/butterfree.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 11,
            imageLink: "https://pokemondb.net/pokedex/metapod",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/metapod.gif",
            number: "#0011",
            name: "Metapod",
            pronunciation: "MET-uh-pod",
            type: ["Bug"],
            typeImg: "./img/type/bug.webp",
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/caterpie.webp",
            secondEvolution: "./img/pokemon/metapod.webp",
            thirdEvolution: "./img/pokemon/butterfree.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 12,
            imageLink: "https://pokemondb.net/pokedex/butterfree",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/butterfree.gif",
            number: "#0012",
            name: "Butterfree",
            pronunciation: "BUT-er-free",
            type: ["Bug", "Flying"],
            typeImg: "./img/type/bug.webp",
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/caterpie.webp",
            secondEvolution: "./img/pokemon/metapod.webp",
            thirdEvolution: "./img/pokemon/butterfree.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 13,
            imageLink: "https://pokemondb.net/pokedex/weedle",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/weedle.gif",
            number: "#0013",
            name: "Weedle",
            pronunciation: "WEE-dull",
            type: ["Bug", "Poison"],
            typeImg: ["./img/type/bug.webp", "./img/type/poison.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/weedle.webp",
            secondEvolution: "./img/pokemon/kakuna.webp",
            thirdEvolution: "./img/pokemon/beedrill.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 14,
            imageLink: "https://pokemondb.net/pokedex/kakuna",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/kakuna.gif",
            number: "#0014",
            name: "Kakuna",
            pronunciation: "kah-KOO-na",
            type: ["Bug", "Poison"],
            typeImg: ["./img/type/bug.webp", "./img/type/poison.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/weedle.webp",
            secondEvolution: "./img/pokemon/kakuna.webp",
            thirdEvolution: "./img/pokemon/beedrill.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 15,
            imageLink: "https://pokemondb.net/pokedex/beedrill",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/beedrill.gif",
            number: "#0015",
            name: "Beedrill",
            pronunciation: "BEE-dril",
            type: ["Bug", "Poison"],
            typeImg: ["./img/type/bug.webp", "./img/type/poison.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/weedle.webp",
            secondEvolution: "./img/pokemon/kakuna.webp",
            thirdEvolution: "./img/pokemon/beedrill.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 16,
            imageLink: "https://pokemondb.net/pokedex/pidgey",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgey.gif",
            number: "#0016",
            name: "Pidgey",
            pronunciation: "PIDG-ee",
            type: ["Normal", "Flying"],
            typeImg: ["./img/type/normal.webp", "./img/type/flying.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/pidgey.webp",
            secondEvolution: "./img/pokemon/pidgeot.webp",
            thirdEvolution: "./img/pokemon/pidgeotto.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 17,
            imageLink: "https://pokemondb.net/pokedex/pidgeot",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgeot.gif",
            number: "#0017",
            name: "Pidgeot",
            pronunciation: "PIDG-ee-OH-toe",
            type: ["Normal", "Flying"],
            typeImg: ["./img/type/normal.webp", "./img/type/flying.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/pidgey.webp",
            secondEvolution: "./img/pokemon/pidgeot.webp",
            thirdEvolution: "./img/pokemon/pidgeotto.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 18,
            imageLink: "https://pokemondb.net/pokedex/pidgeotto",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pidgeotto.gif",
            number: "#0018",
            name: "Pidgeotto",
            pronunciation: "PIDG-ee-ott",
            type: ["Normal", "Flying"],
            typeImg: ["./img/type/normal.webp", "./img/type/flying.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/pidgey.webp",
            secondEvolution: "./img/pokemon/pidgeot.webp",
            thirdEvolution: "./img/pokemon/pidgeotto.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },
        {
            id: 19,
            imageLink: "https://pokemondb.net/pokedex/rattata",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/rattata.gif",
            number: "#0019",
            name: "Rattata",
            pronunciation: "RA-TAT-ta",
            type: ["Normal"],
            typeImg: ["./img/type/normal.webp", "./img/type/dark.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/rattata.webp",
            secondEvolution: "./img/pokemon/raticate.webp",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },

        {
            id: 20,
            imageLink: "https://pokemondb.net/pokedex/raticate",
            imageFront: "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif",
            imageBack: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/raticate.gif",
            number: "#0019",
            name: "raticate",
            pronunciation: "RAT-ih-kate",
            type: ["Normal"],
            typeImg: ["./img/type/normal.webp", "./img/type/dark.webp"],
            region: "Kanto",
            generation: "1",
            firstEvolution: "./img/pokemon/rattata.webp",
            secondEvolution: "./img/pokemon/raticate.webp",
            thirdEvolution: "",
            weakAgainst: ["./img/type/rock.webp", "./img/type/fire.webp", "./img/type/flying.webp"],
        },


    ];

    function populateCards(array) {
        $("#results").html = '';



        for (let i = 0; i < array.length; i++) {
            const pokemon = array[i]; 
            $("#results").html += `
                <div class="card-container-flipper">
                <div class="pokemon-card">
                    <div class="front-card">
                        <img src="${pokemon.imageFront}" alt="Front Image">
                        <div class="card-details">
                            <h3>${pokemon.number}</h3>
                            <h4>${pokemon.name}</h4>
                            <img src="${Array.isArray(pokemon.typeImg) ? pokemon.typeImg[0] : pokemon.typeImg}" alt="">
                        ${Array.isArray(pokemon.typeImg) && pokemon.typeImg[1] ? `<img src="${pokemon.typeImg[1]}" alt="">` : ''}
                        </div>
                    </div>
                    <div class="back-card">
                        <img src="${pokemon.imageBack}" alt="back Image">
                        <div class="card-details">
                            <h4>${pokemon.pronunciation}</h4>
                            <h5>Generation ${pokemon.generation}</h5>
                            <div class="weak-types">
                            <h5>Weakness</h5>
                            <img src="${Array.isArray(pokemon.weakAgainst) ? pokemon.weakAgainst[0] : pokemon.weakAgainst}" alt="">
                        ${Array.isArray(pokemon.weakAgainst) && pokemon.weakAgainst[1] ? `<img src="${pokemon.weakAgainst[1]}" alt="">` : ''}
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

    function moveToSection(number) {
        fullpage_api.moveTo(number); 
    }

    $('#goToPokedexFilters').click(function () {
        moveToSection(2);
    });

    $('#applyFiltersBtn').click(function () {
        fullpage_api.moveTo(2, 1);
    });
    $('#backToFiltersButton').click(function () {
        fullpage_api.moveTo(2, 0);
    });

    $("#type").change(function () {
        console.dir($("#type").val());
        filterAndPopulateResults();
    });

    $("#generation").change(function () {
        console.dir($("#generation").val());
        filterAndPopulateResults();
    });


    function filterPokemon() {
        const filteredPokemon = pokemon.filter(pokemon => {
            const pokemonType = Array.isArray(pokemon.type) ? pokemon.type.join(", ").toLowerCase() : pokemon.type.toLowerCase();
            const filterTypeValue = $("#type").val().toLowerCase();
            if (filterTypeValue && !pokemonType.includes(filterTypeValue)) {
                return false
            }

            const filterGenerationValue = $("#generation").val();
            if (filterGenerationValue && parseInt(pokemon.generation) !== parseInt(filterGenerationValue)) {
                return false;
            }

            return true;
        });

        return filteredPokemon;
    };

    $('#removeFiltersBtn').click(function () {
        $("#type").val(''); 
        $("#generation").val(''); 
        
        filterAndPopulateResults();
    });
    

    function filterAndPopulateResults() {
        const filteredPokemon = filterPokemon();
        populateCards(filteredPokemon);
    };

    filterAndPopulateResults();

    function filterRegions() {
        const filteredRegions = region.filter(region => {

        });

        return filteredRegions;
    };
    


    const region = [
        {
            image1: "",
            image2: "",
            image3: "",
            name: "Kanto",
            games: "Pokémon Red, Pokémon Blue, Pokémon Green - FireRed, LeafGreen - Let's Go Pikachu!, Let's Go Evvee!",
            about: "Kanto is home to the Indigo League, the region's official Pokémon League, comprised of eight Gyms and the Elite Four — a title given to trainers considered the best in their region. Trainers who earned all eight Gym Badges can compete in the Indigo League."
        },
        {
            image1: "",
            image2: "",
            image3: "",
            name: "Kanto",
            games: "Pokémon Red, Pokémon Blue, Pokémon Green - FireRed, LeafGreen - Let's Go Pikachu!, Let's Go Evvee!",
            about: "Kanto is home to the Indigo League, the region's official Pokémon League, comprised of eight Gyms and the Elite Four — a title given to trainers considered the best in their region. Trainers who earned all eight Gym Badges can compete in the Indigo League."
        },
    ]

    function filterAndPopulateRegions() {
        const filteredRegions = filterRegions;
        populateRegions(filteredRegions);
    }

    filterAndPopulateRegions();

    function populateRegions(filteredRegions) {
        $("#pokemonRegions").html('');

        if (filteredRegions.length === 0) {
        } else {
            filteredRegions.forEach(region => {
                const regionsHtml = `
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class "region-img-grid">
                                <img src="${region.image1}" alt="${region.name} image 1" class="region-image"
                                value=${region.id}>
                                <img src="${region.image2}" alt="${region.name} image 1" class="region-image"
                                value=${region.id}>
                                <img src="${region.image3}" alt="${region.name} image 1" class="region-image"
                                value=${region.id}>
                            </div>
                            <div class="swiper-slide-details">
                                <h3>${region.name}</h3>
                                <h5>${region.games}</h5>
                                <p> ${region.about}
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                $("#pokemonRegions").append(regionsHtml);

                $('.swiper').each(function() {
                    new Swiper(this, {
                        direction: 'vertical',
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    });
                });
        
    
            })
        }
    }

});