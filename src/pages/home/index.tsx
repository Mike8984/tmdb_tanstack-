import { useQuery } from "@tanstack/react-query";
import { useState, type ChangeEvent } from "react";
import MovieList from "../../components/movie-list";
import { useDebounce } from "../../hooks/useDebounce";
import { fetchMovies } from "../../services/movies.service";
import styles from "./home.module.scss";

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");

    const debouncedSearch = useDebounce(searchTerm, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const {
        isLoading,
        isFetching,
        error,
        data: movies,
    } = useQuery({
        queryKey: ["movies", debouncedSearch],
        queryFn: () => fetchMovies(debouncedSearch),
        enabled: debouncedSearch.length > 2 || debouncedSearch === "",
        refetchOnWindowFocus: false,
        placeholderData: (prev) => prev,
    });

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    if (error) {
        return <h3>{error.message}</h3>;
    }

    return (
        <>
            <h1>Home</h1>
            {isFetching && <p>Searching...</p>}
            <div className={styles.searchInputWrapper}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={searchTerm}
                    placeholder="Search"
                    onChange={handleChange}
                />
            </div>
            <MovieList movies={movies} />
        </>
    );
}

export default HomePage;
