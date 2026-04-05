import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_API_KEY;

export const moviesService = {
    fetchMovies: async (query: string = "") => {
        const endpoint = query
            ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
            : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const options = {
            method: "GET",
            url: endpoint,
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
        };

        const { data } = await axios.request(options);
        return data.results;
    },

    getMovie: async (id: number) => {
        const endpoint = `${API_BASE_URL}/movie/${id}`
        const options = {
            method: "GET",
            url: endpoint,
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
        };

        const {data} = await axios.request(options)
        return data
    }
};
