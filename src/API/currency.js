/*
async function connectAPI() {
    const url = "http://data.fixer.io/api";
    const key = "?access_key=d439b9df2fdd6de31b668092e5760e7c";

    return await fetch(`${url}/latest${key}`).then(data => data.json());
}
*/

async function connectAPI() {
    const url = "https://api.fastforex.io/fetch-all?api_key=";
    const key = "e1af6effca-08e9b6b2d5-qqnhjs";

    return await fetch(`${url}${key}`).then(data => data.json());
}

export default connectAPI;