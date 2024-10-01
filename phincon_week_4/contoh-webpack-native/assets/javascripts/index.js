(async () => {
    const response = await fetch("https://api.restful-api.dev/objects");
    const json = await response.json();
    console.log(json);
})();
