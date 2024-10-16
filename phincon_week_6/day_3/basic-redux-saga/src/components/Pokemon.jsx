import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "../features/pokemon/pokemonSlice";

const Pokemon = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    return (
        <ul>
            {data?.results?.map((result, index) => (
                <li key={index}>{result.name}</li>
            ))}
        </ul>
    );
};

export default Pokemon;
