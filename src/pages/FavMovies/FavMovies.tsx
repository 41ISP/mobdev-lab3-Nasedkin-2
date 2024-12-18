import { useNavigate } from "react-router-dom"


const FavMovies = () => {

    const navigate = useNavigate();

    const clickBack = () => {
        navigate(-1)
    }

    return(
        <div>
            <button onClick={clickBack}>Back</button>
        </div>
    )
}

export default FavMovies