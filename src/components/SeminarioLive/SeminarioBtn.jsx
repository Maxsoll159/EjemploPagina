import { useState } from "react"
import { Col } from "react-bootstrap"
import { ModalLive } from "./ModalLive"
import { io } from 'socket.io-client'
import { useEffect } from "react"
export const SeminarioBtn = (seminarios) => {

    const [{ chat, detalle, promo }, setPartes] = useState({
        chat: true,
        detalle: false,
        promo: false
    })
    const [idUsuario, setIdUsuario] = useState(2005)

    /*Configuracion de Socket*/
    const [mensajes, setMensajes] = useState([])
    const [mensaje, setMensaje] = useState('')
    const socket = io('http://desarrolloglobal.pe:3035')
    useEffect(() => {
        socket.on('connect', () => {
            const user = { id: 2005, name: 'Martin' }
            socket.emit('conectado',
                1001, //id seminario
                user
            )
        })
    }, [socket])

    useEffect(() => {
        if (mensaje !== '') {
            socket.emit('enviar_mensaje', {
                room: 1001, //id seminario
                user: 2005,
                content: mensaje
            })
        }
    }, [mensaje])

    socket.on('mostrar_mensajes', mensajes => {
        setMensajes(mensajes)
    })

    socket.on('mostrar_usuarios', usuarios => {
        
    })

    const enviar = (e) => {
        e.preventDefault()
        setMensaje(e.target.mensaje.value)
    }
    console.log("oe nad",socket)
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
                        <div className='res resTablet'>
                            <div className="mx-3 mb-3">
                                {
                                    mensajes !== [] ? (
                                        mensajes.map((men) => (
                                            <div>
                                                <img src="" alt="" />
                                                <div className={`p-3 rounded ${idUsuario !== men.user ? "color-chat1" : "color-chat2"}`}>
                                                    <p className="m-0 text-white fw-bolder">{men.name}</p>
                                                    <p className="m-0">{men.message}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (<>No hay mensajkes...</>)
                                }
                            </div>
                            <form action="" onSubmit={enviar} className="w-100">
                                <input type="text" id="mensaje" className="rounded p-3 w-75" placeholder="Escribe tu comentario o pregunta..." />
                                <button className="btn w-25 btn-primary h-100">Enviar</button>
                            </form>
                        </div>
                    ) : detalle === true ? (
                        <div className='p-4 res resTablet'>
                            <h4 style={{ color: "#3C86F4" }} className="fw-bold">Tema del Seminario</h4>
                            <p className={`fw-bolder fs-5 text-white`}>{seminarios.titulo}</p>
                            <h4 style={{ color: "#3C86F4" }} className="mt-3 fw-bolder">¿Quien es el docente?</h4>
                            <div className='text-dark p-2 rounded d-flex align-items-center gap-3'>
                                <img loading='lazy' src={seminarios.profesor.perfil} alt="" width={100} className="rounded-circle" />
                                <h3 className={`text-white`}>{seminarios.profesor.nombre}</h3>
                            </div>
                            <p className={`mt-3 text-justify text-white`}> {seminarios.profesor.descripcion}</p>
                        </div>
                    ) : (
                        <div className='p-4 res resTablet'>
                            <img loading='lazy' src={seminarios.banner.promocion} alt="" className='rounded' style={{ width: "100%" }} />
                            <div>
                                <h5 className='text-center mt-3'>Estamos en Linea 😃</h5>
                                <a className='btn btn-success w-100 p-2 fs-4 fw-bold' href={`https://api.whatsapp.com/send?phone=51${seminarios.asesor[0].telefono}&text=Hola,%20solicito%20información%20del%20%20diploma:${seminarios.titulo},%20mi%20correo%20es:`}><i class="fa fa-whatsapp" aria-hidden="true"></i> {seminarios.asesor[0] === undefined ? (983495578) : (seminarios.asesor[0].telefono)}</a>
                                <ModalLive imagen={seminarios.banner.promocion} titulo={seminarios.titulo} fecha={seminarios.fecha} />
                            </div>
                        </div>
                    )
                }
            </div>

        </Col>
    )
}