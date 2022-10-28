import { useEffect } from "react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useContador from "../../hooks/useContador"
import useObserver from "../../hooks/useObserver"


export const AlertaSeminario = ({seminario}) => {
    let navigate = useNavigate()

    const [fecha, setFecha] = useState("")
    let location = useLocation()
    let [seminarioOrdenado, setSeminarioOrdenado] = useState([])
    useEffect(() => {
        if(seminario !== undefined || seminario !== []){
            let ordenado = seminario.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
            if(ordenado[0] !== undefined){
                setFecha(new Date(`${ordenado[0].fecha} ${ordenado[0].hora}`))
            }
            setSeminarioOrdenado(ordenado)
        }

    }, [seminario])

    let fechaparseada
    const [timerDays, timerHours, timerMinutes, timerSeconds] = useContador(
        fechaparseada = String(new Date(fecha)).split(" ")
    )
    
    const irSeminario = (title) => {
        navigate(`seminariosInfo/${title}`, { replace: false })
    }

    const [observe, setElements, entries] = useObserver({
        threshold: 0.100,
        root: null
    })

    const [prueba, setPrueba] = useState(true)

    useEffect(() => {
        const intersector = document.querySelectorAll("#intersector")
        setElements(intersector)
    }, [setElements,location.pathname ])

    useEffect(() => {
        entries.forEach(element => {
            setPrueba(element.isIntersecting)
        });
    }, [entries, observe, location.pathname])
    return (
        <>
            {
                seminarioOrdenado[0] !== undefined ? (
                    new Date(`${seminarioOrdenado[0].fecha} ${seminarioOrdenado[0].hora}`) > new Date()? (
                        <div style={{ background: "#2C3C67" }} className={`${!prueba ? "d-lg-none d-xl-none" : "d-xl-block d-xl-block"}`} id="alertaEnVivo">
                            <div className="d-flex align-items-center justify-content-center flex-wrap py-3 py-xl-0 py-lg-0 flex-md-nowrap w-100">
                                <p className="fw-bolder text-center m-0 text-white">🚀 Nuestro Proximo seminario gratuito inicia en: </p>
                                <div className="d-flex gap-3 px-lg-5 px-xl-5 px-sm-5 py-1 align-items-center">
                                    <div className="d-flex gap-3 d-xl-flex my-2">
                                        <div className="bg-danger rounded px-3">
                                            <p className="m-0 fw-bolder text-center text-white fs-3">{timerDays}</p>
                                            <p className="m-0 mb-1 fw-bolder text-center text-white font-size-11">Dias</p>
                                        </div>
                                        <div className="bg-danger rounded px-3">
                                            <p className="m-0 fw-bolder text-center text-white fs-3">{timerHours}</p>
                                            <p className="m-0 mb-1 fw-bolder text-center text-white font-size-11">Horas</p>
                                        </div>
                                        <div className="bg-danger rounded px-3">
                                            <p className="m-0 fw-bolder text-center text-white fs-3">{timerMinutes}</p>
                                            <p className="m-0 mb-1 fw-bolder text-center text-white font-size-11">Minutos</p>
                                        </div>
                                        <div className="bg-danger rounded px-3">
                                            <p className="m-0 fw-bolder text-center text-white fs-3">{timerSeconds}</p>
                                            <p className="m-0 mb-1 fw-bolder text-center text-white font-size-11">Segundos</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success fw-bolder" onClick={() => irSeminario(seminarioOrdenado[0].etiqueta)}>Registrate Aquí</button>
                            </div>
                        </div>) : (<div className='bg-danger d-flex justify-content-center align-items-center gap-3 py-3 flex-column flex-xl-row flex-lg-row flex-md-row flex-sm-row' id="alertaEnVivo">
                            <p className="fw-bolder m-0 text-white text-center">🚀 Entamos transmitiendo en vivo en este momento</p>
                            <button className="btn text-danger fw-bolder bg-white"><Link to={`/seminarios/${seminarioOrdenado[0].etiqueta}`} className="text-danger text-decoration-none" ><img src="/img/icons/LiveSeminario.webp" alt="" /> Ver Seminario</Link></button>
                        </div>
                    )
                ) : (<></>)
            }
        </>

    )
}