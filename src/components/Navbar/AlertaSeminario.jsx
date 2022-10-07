import { useEffect } from "react"
import { useState } from "react"
import useContador from "../../hooks/useContador"


export const AlertaSeminario = (prop) => {
    const [fecha, setFecha] = useState("")

    useEffect(() => {
        if (prop[0] !== undefined) {
            setFecha(prop[0].fecha)
        }
    }, [prop])
    console.log("que honda  ", fecha)

    let fechaparseada
    const [timerDays, timerHours, timerMinutes, timerSeconds] = useContador(
        fechaparseada = String(new Date(fecha).toUTCString()).split(" ")
    )

    return (
        <>
            {
                prop !== undefined ? (
                    timerDays === "00" && timerDays === "00" && timerMinutes === "00" && timerSeconds === "00" && timerHours === "00" ? (
                        <div className="bg-danger d-flex justify-content-center align-items-center gap-3 py-3 flex-column flex-xl-row flex-lg-row flex-md-row flex-sm-row">
                            <p className="fw-bolder m-0 text-white text-center">🚀 Entamos transmitiendo en vivo en este momento</p>
                            <button className="btn text-danger fw-bolder bg-white"><a href="https://aula.desarrolloglobal.pe/prox-seminario/sistemas-administrativos-del-estado-10081" className="text-danger text-decoration-none"> <img src="/img/icons/LiveSeminario.webp" alt="" /> Ver Seminario</a></button>
                        </div>) : (
                        <div style={{ background: "#2C3C67" }}>
                            <div className="d-flex align-items-center justify-content-center">
                                <p className="fw-bolder text-center m-0 text-white">🚀 Nuestro Proximo seminario gratuito inicia en: </p>
                                <div className="d-flex gap-3 px-5 py-1 align-items-center">
                                    <div className="d-flex gap-3 d-lg-none d-xl-flex my-2">
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
                                <button className="btn btn-success fw-bolder">Registrate Aquí</button>
                            </div>
                        </div>)
                ) : (<></>)
            }
        </>

    )
}