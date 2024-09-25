import { useEffect, useState } from "react";
import { fetchGet } from "../helper/helperFetch";
const BASE_URL = "https://pokeapi.co/api/v2";
const BASE_URL_POKEMON = BASE_URL + "/pokemon";
const BASE_URL_IMAGE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export default function PokemonList() {
    const [dataPokemons, setDataPokemons] = useState({});
    const [idPokemons, setIdPokemons] = useState([]);
    const offset = 0;
    const [limit, setLimit] = useState(5);
    const selectLimits = [5, 10, 20, 30, 100];
    const getAllPokemons = async (url) => {
        const responseDataPokemons = await fetchGet(url);
        const tempIdPokemons = [];
        responseDataPokemons.results.forEach((responseDataPokemon) => {
            tempIdPokemons.push(getIDPokemonFromUrl(responseDataPokemon.url));
        });
        setIdPokemons(tempIdPokemons);
        setDataPokemons(responseDataPokemons);
    };
    const getIDPokemonFromUrl = (string) => {
        return string.split("/")[6];
    };
    const nextPokemon = () => {
        getAllPokemons(dataPokemons.next);
    };
    const previousPokemon = () => {
        if (dataPokemons.previous !== null) {
            getAllPokemons(dataPokemons.previous);
        }
    };
    const handleChangeLimit = (value) => {
        setLimit(value);
        getAllPokemons(BASE_URL_POKEMON + `?offset=${offset}&limit=${value}`);
    }
    useEffect(() => {
        getAllPokemons(BASE_URL_POKEMON + `?offset=${offset}&limit=${limit}`);
    }, []);

    return (
        <>
            <ul>
                {dataPokemons.results ? (
                    dataPokemons.results?.map((dataPokemon, index) => (
                        <li key={index}>
                            Nama Pokemon : {dataPokemon.name}, Url Detail : {dataPokemon.url}
                        </li>
                    ))
                ) : (
                    <li>No Data</li>
                )}
            </ul>
            <div>
                Set limit
                <select onChange={(e) => handleChangeLimit(e.target.value)} value={limit}>
                    {selectLimits.map((selectLimit, index) => (
                        <option key={index} value={selectLimit}>{selectLimit}</option>
                    ))}
                </select>
            </div>
            {idPokemons.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-4 g-4 p-4">
                    {idPokemons.map((idPokemon, index) => (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <img src={BASE_URL_IMAGE + "/" + idPokemon + ".png"} alt="#" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{dataPokemons.results[index]?.name}</h5>
                                    <p className="card-text">
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No Data</div>
            )}
            <div className="text-center">
                <button
                    disabled={dataPokemons.previous === null ? true : false}
                    onClick={previousPokemon}
                    className="btn btn-primary me-2"
                >
                    Previous
                </button>
                <button
                    disabled={dataPokemons.next === null ? true : false}
                    onClick={nextPokemon}
                    className="btn btn-primary"
                >
                    Next
                </button>
            </div>
        </>
    );
}
