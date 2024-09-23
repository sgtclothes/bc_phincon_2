const BASE_URL = "https://pokeapi.co/api/v2";

const container = document.getElementById("container");

/**
 *
 * @param {*} url
 * @returns
 */
const fetchGet = async (url) => {
    try {
        const response = await fetch(url); //this response variable is for fetch get url
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};
const data = await fetch("https://pokeapi.co/api/v2/pokemon");
console.log(data);

/**
 *
 * @param {string} url
 * @param {object} parameters
 * @returns {object}
 * This function is used to get pokemon from response API
 *
 * url : https://pokeapi.co/pokemon
 * parameters : {name: 'pikachu', nickname: 'mighty-pikachu'}
 * returns : {status: 'success', message: 'Successfully get all pokemon', code : 200}
 */
let getPokemonsFromResponseAPI = async (url, parameters) => {
    const pokemons = await fetchGet(url + "/pokemon");
    return pokemons;
};

/**
 *
 * @param {string} url
 * @param {object} data
 * @param {object} param
 */
class Animals {
    constructor(url, data, param) {}
    /**
     *
     */
    getAnimal() {}
}

let appendDataToContainerFromAPI = (results, container) => {
    results.forEach(async (result) => {
        const pokemonDetail = await fetchGet(result.url);
        const img = document.createElement("img");
        img.src = pokemonDetail.sprites.front_default;
        container.append(img);
    });
};

getPokemons(BASE_URL);

const buttonContainer = document.getElementById("btn-number-container");

function generateButtons(status) {
    const buttonsHTML = document.getElementsByName("button");
    let buttons = [];
    buttonsHTML.forEach((buttonHTML) => {
        buttons.push(Number(buttonHTML.textContent));
    });
    buttonContainer.textContent = "";
    if (status === "next") {
        buttons = buttons.map((current) => current + 1);
    } else if (status === "prev") {
        buttons = buttons.map((current) => current - 1);
    }
    console.log(buttons);
    buttons.forEach((buttonNumber) => {
        const button = document.createElement("button");
        button.textContent = buttonNumber;
        button.name = "button";
        buttonContainer.append(button);
    });
}

["next", "prev"].forEach((data) => {
    document.getElementById(data).addEventListener("click", () => {
        generateButtons(data);
    });
});
