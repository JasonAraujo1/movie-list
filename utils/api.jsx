// utils/api.js

export const APIURL = "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
export const IMGPATH = "https://image.tmdb.org/t/p/w1280";
export const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

export async function getMovies(url) {
    const resp = await (await fetch(url)).json();
    return resp.results;
}
