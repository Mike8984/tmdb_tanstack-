import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchMovie } from "../../services/movies.service";
import styles from './movie-page.module.css'

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
        <div className={styles.moviePage}>
            <div className={styles.moviePage__content}>
                <img
                    className={styles.moviePage__poster}
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : '/no-movie.png'
                    }
                    alt={movie.title}
                />
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
