import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_API_KEY;

const headers = {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
};

export const fetchMovies = async (query: string = "") => {
    const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/movie/popular?language=en-US&page=1`;

    const options = {
        method: "GET",
        url: endpoint,
        headers,
    };

    const { data } = await axios.request(options);
    return data.results;
};

export const fetchMovie = async (id: string) => {
    const endpoint = `${API_BASE_URL}/movie/${id}?language=en-US`;
    const options = {
        method: "GET",
        url: endpoint,
        headers,
    };

    const { data } = await axios.request(options);
    return data;
};
