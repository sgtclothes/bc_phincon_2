const fetchGet = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

export default fetchGet;
