import { Link } from 'react-router';
import type { IMovie } from '../../types';
import MovieItem from '../movie-item';
import styles from './movie-list.module.scss';

type Props = {
    movies: IMovie[];
};

function MovieList({ movies }: Props) {
    return (
        <ul className={styles.movieList}>
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <MovieItem {...movie} />
                </Link>
            ))}
        </ul>
    );
}

export default MovieList;
