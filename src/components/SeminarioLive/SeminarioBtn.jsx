import { useState } from "react"
import { Col } from "react-bootstrap"
import { ModalLive } from "./ModalLive"
import { useEffect } from "react"
import { useRef } from "react"
import { SeminarioChat } from "./SeminarioChat"
export const SeminarioBtn = (props) => {

    const [{ chat, detalle, promo }, setPartes] = useState({
        chat: false,
        detalle: false,
        promo: true
    })


    useEffect(() => {
        if (props.tipo === "TERMINADO") {
            setPartes({
                chat: false,
                detalle: false,
                promo: true
            })
        } else {
            setPartes({
                chat: true,
                detalle: false,
                promo: false
            })
        }
    }, [])

    /*Recuperar datos de local*/
    let datos = JSON.parse(localStorage.getItem("usuarioDesarrollo"))


    return (
        <Col xl={3} sm={12} className={`p-0 color-live`}>
            <div>
                <div className='d-flex mt-3'>
                    <button className={`cajas-live ms-1 p-3 text-white fw-bolder ${chat === true ? "activate" : ""}`} onClick={() =>
                        setPartes({
                            chat: true,
                            detalle: false,
                            promo: false
                        })
                    }><img loading='lazy' src="/img/icons/chat.png" alt="" className='d-block mx-auto' /><p>Chat en Vivo</p></button>
                    <button className={`cajas-live ms-1 p-3 text-white fw-bolder ${detalle === true ? "activate" : ""}`} onClick={() => setPartes({
                        chat: false,
                        detalle: true,
                        promo: false
                    })
                    }><img loading='lazy' src="/img/icons/detalles.png" alt="" className='d-block mx-auto' /><p>Detalles</p></button>
                    <button className={`cajas-live ms-1 p-3 text-white fw-bolder ${promo === true ? "activate" : ""}`} onClick={() => setPartes({
                        chat: false,
                        detalle: false,
                        promo: true
                    })}><img loading='lazy' src="/img/icons/promo.png" alt="" className='d-block mx-auto' /><p>Promocion</p></button>
                </div>
            </div>

            <div className='text-white'>
                {
                    chat === true ? (
                        <div className='res resTablet' >
                            {
                                datos === null ? (
                                    <div className="position-relative chatMedi2">
                                        <div className="position-absolute bg-danger w-100 bottom-0 start-50 translate-middle-x p-2">
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="bg-white p-2 rounded w-auto">
                                                    <img src="/img/imaganesPaginas/NosotrosDesarrollo.webp" alt="" width={40} />
                                                </div>
                                                <h5 className="fw-bold m-0">Reglas del Chat</h5>

                                            </div>
                                            <ul className="m-2">
                                                <li>Sigue nuestro Código de Conducta</li>
                                                <li>No toleramos comentarios racistas, sexistas o abusivos</li>
                                                <li>Sé respetuoso, no opines sobre la apariencia física de las personas</li>
                                                <li>Genera una conversación positiva con preguntas claras y <strong>sin spam</strong></li>
                                            </ul>
                                        </div>
                                    </div>


                                ) : (
                                    <SeminarioChat idSeminario={props.id} {...datos} />
                                )
                            }
                        </div>
                    ) : detalle === true ? (
                        <div className='p-4 res resTablet'>
                            <h4 style={{ color: "#3C86F4" }} className="fw-bold">Tema del Seminario</h4>
                            <p className={`fw-bolder fs-5 text-white`}>{props.titulo}</p>
                            <h4 style={{ color: "#3C86F4" }} className="mt-3 fw-bolder">¿Quien es el docente?</h4>
                            <div className='text-dark p-2 rounded d-flex align-items-center gap-3'>
                                <img loading='lazy' src={props.profesor.perfil} alt="" width={100} className="rounded-circle" />
                                <h3 className={`text-white`}>{props.profesor.nombre}</h3>
                            </div>
                            <p className={`mt-3 text-justify text-white`}> {props.profesor.descripcion}</p>
                        </div>
                    ) : (
                        <div className='p-4 res resTablet'>
                            <a href={`https://api.whatsapp.com/send?phone=51${props.asesor[0].telefono}&text=Hola,%20solicito%20información%20del%20%20diploma:${props.titulo},%20mi%20correo%20es:`}><img loading='lazy' src={props.banner.promocion} alt="" className='rounded' style={{ width: "100%" }} /></a>
                            <div>
                                <h5 className='text-center mt-3'>Estamos en Linea 😃</h5>
                                <a className='btn btn-success w-100 p-2 fs-4 fw-bold' href={`https://api.whatsapp.com/send?phone=51${props.asesor[0].telefono}&text=Hola,%20solicito%20información%20del%20%20diploma:${props.titulo},%20mi%20correo%20es:`}><i class="fa fa-whatsapp" aria-hidden="true"></i> {props.asesor[0] === undefined ? (983495578) : (props.asesor[0].telefono)}</a>
                                <ModalLive imagen={props.banner.promocion} titulo={props.titulo} fecha={props.fecha} />
                            </div>
                        </div>
                    )
                }
            </div>

        </Col>
    )
}   