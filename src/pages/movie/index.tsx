import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchMovie } from "../../services/movies.service";

function MoviePage() {
    const { id } = useParams();

    const {
        data: movie,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["movie", id],
        queryFn: () => fetchMovie(id),
    });

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    if (error) {
        return <h3>{error.message}</h3>;
    }

    return (
        <>
            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : "/no-movie.png"
                }
                alt=""
            />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </>
    );
}

export default MoviePage;
