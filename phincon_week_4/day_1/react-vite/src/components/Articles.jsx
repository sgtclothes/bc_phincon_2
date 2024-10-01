import { useEffect, useState } from "react";
import fetchGet from "../helpers/fetchGet";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../data/api";
import loadingGif from "../assets/loading.gif";

function Articles() {
    const { articles } = useSelector((state) => state.article);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const getArticlesFromAPI = async (url) => {
        const response = await fetchGet(url);
        return response;
    };

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            if (localStorage.getItem("articles") === null) {
                const response = await getArticlesFromAPI(API.nyTimes);
                localStorage.setItem("articles", JSON.stringify(response));
            }
            console.log(JSON.parse(localStorage.getItem("articles")));
            dispatch({ type: "GET ALL ARTICLES", payload: JSON.parse(localStorage.getItem("articles")) });
            setIsLoading(false);
            console.log(articles);
        })();
    }, []);

    return (
        <>
            {!isLoading ? (
                <ul>
                    {articles.response?.docs?.map((article, index) => (
                        <li key={index}>{article.abstract}</li>
                    ))}
                </ul>
            ) : (
                <img src={loadingGif} />
            )}
        </>
    );
}

export default Articles;
