import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { fetchMovie } from '../../services/movies.service';
import styles from './movie-page.module.scss';

function MoviePage() {
    const { id } = useParams();

    const {
        data: movie,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['movie', id],
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
                <div className={styles.moviePage__description}>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ul className={styles.moviePage__genres}>
                        {movie.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
