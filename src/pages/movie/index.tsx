import { useEffect } from "react"
import { useParams } from "react-router"
import { moviesService } from "../../services/movies.service"

function MoviePage() {
    const {id} = useParams()

    useEffect(() => {
        moviesService.getMovie(id)
    }, [])
}

export default MoviePage