import { useNavigate } from "react-router-dom"

export const Page404 = () =>{
    let navigate = useNavigate()
    const volver = () =>{
        navigate("/", {replace: true})
    }
    return(
        <>
            <h1 className="fw-bolder text-center mt-5">Ruta no encontrada</h1>
            <img src="https://cdn.dribbble.com/users/272763/screenshots/4576659/astronaut-600x800.gif" alt="" className="d-block mx-auto" />
            <button className="btn btn-danger fw-bolder d-block mx-auto my-5 w-25" onClick={volver}>Volver a Desarrollo Global</button>
        </>
    )
}