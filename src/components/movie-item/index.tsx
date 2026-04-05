import type { IMovie } from "../../types";
import styles from "./movie-item.module.css";

function MovieItem({ title, poster_path, release_date }: IMovie) {
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
            <h3>{title}</h3>
            <h4 className={styles.releaseDate}>{release_date}</h4>
        </li>
    );
}

export default MovieItem;
