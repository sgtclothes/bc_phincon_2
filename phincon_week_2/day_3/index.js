// const BASE_URL = "https://pokeapi.co/api/v2";

// /** Ini cara untuk mendapatkan semua nama pokemon beserta image nya terlebih dahulu  sebelum di fetch ke tag html*/
// const showPokemon = async (url) => {
//     let pokemons = [];
//     let promises = [];
//     const responseListPokemon = await fetch(url + "/pokemon");
//     const listPokemons = await responseListPokemon.json();
//     listPokemons.results.forEach((pokemon) => {
//         promises.push(
//             (async () => {
//                 const responseDetailPokemon = await fetch(pokemon.url);
//                 const detailPokemon = await responseDetailPokemon.json();
//                 const responseFormPokemon = await fetch(detailPokemon.forms[0].url);
//                 const formPokemon = await responseFormPokemon.json();
//                 const pokemonImageUrl = formPokemon.sprites.front_default;
//                 pokemons.push({
//                     name: pokemon.name,
//                     image: pokemonImageUrl,
//                 });
//             })()
//         );
//     });
//     await Promise.all(promises);
//     const body = document.getElementsByTagName("body")[0];
//     let length = pokemons.length;

//     // const container = document.createElement("div");
//     // container.className = "flex-container";
//     // let div = document.createElement("div");
//     // div.className = "flex-item";
//     // div.textContent = 1;
//     // container.append(div);
// };

// showPokemon(BASE_URL);

function car2(name, brand) {}

function Car(name, brand) {
    this.name = name;
    this.brand = brand;
    console.log(this);
}
Car.prototype.klakson = () => {
    return "Pim";
};

let car = new Car("Avanza", "Daihatsu");
car.klakson();
console.log(car.name);

class Animal {
    constructor(name, category) {
        this.name = name;
        this.category = category;
        this.sound = null;
    }
    makeSound() {
        this.getSound();
        let self = this;
        function testSound() {
            console.log("testSound", self);
        }
        testSound();
    }
    getSound() {

    }
}

let animal = new Animal("kucing", "mamalia");
animal.makeSound();

function test() {
    console.log(this);
}

test();
