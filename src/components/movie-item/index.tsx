import type { IMovie } from "../../types";
import styles from "./movie-item.module.scss";

function MovieItem({ title, poster_path }: IMovie) {
    return (
        <li className={styles.movieItem}>
            <img
                src={
                    poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : "/no-movie.png"
                }
                alt={title}
            />
            <h3 className={styles.movieItem__title}>{title}</h3>
        </li>
    );
}

export default MovieItem;
