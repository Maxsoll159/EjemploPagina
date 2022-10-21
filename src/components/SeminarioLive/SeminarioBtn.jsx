import { useState } from "react"
import { Col } from "react-bootstrap"
import { ModalLive } from "./ModalLive"
import { useEffect } from "react"
import { useRef } from "react"
import { io } from "socket.io-client"
export const SeminarioBtn = (seminarios) => {

    const [{ chat, detalle, promo }, setPartes] = useState({
        chat: true,
        detalle: false,
        promo: false
    })

    /*Recuperar datos de local*/
    let datos = JSON.parse(localStorage.getItem("usuarioDesarrollo"))

    /*Configuracion de Socket*/
    const [socketState, setSocketState] = useState(null)
    const [mensajesChat, setMensajesChat] = useState([])
    const mensajeRef = useRef()

    console.log(datos)

    useEffect(() => {
        const socket = io('https://desarrolloglobal.pe:8443')
        setSocketState(socket)
        let datosUsu 
        if(datos !== null){
            datosUsu = {
                id: datos.id,
                nombre: datos.nombre,
                avatar: datos.avatar
            }
        }
        socket.emit('conectar', 1001, datosUsu)


        socket.on('mostrar_total_mensajes', data => setMensajesChat(data))
        socket.on('mostrar_mensaje', data => { setMensajesChat(msjs => [...msjs, data]) })
    }, [])

    const enviarMensaje = (e) => {
        e.preventDefault();
        socketState.emit("enviar_mensaje", 1001, mensajeRef.current.value);
        mensajeRef.current.value = ""
    };

    const divRef = useRef(null)

    useEffect(()=>{
        divRef.current.scrollIntoView({behavior: 'smooth'})
    })

    console.log(mensajesChat)
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
                            <div className="mx-3 mb-3" style={{ height: "580px", overflow: "auto" }} >
                                {
                                    datos === null ? (<div className="">
                                        Iniciar sesion
                                    </div>) : (
                                        mensajesChat !== [] ? (
                                            mensajesChat.map((men, index) => (
                                                <div className="d-flex w-100 gap-3 align-items-center" key={index}>
                                                    <img src={men.avatar} alt="" width={50} className="rounded rounded-circle" />
                                                    <div className={`p-3 rounded w-100 mt-3 ${men.usuario === datos.id ? "color-chat1" : "color-chat2"}`}>
                                                        <p className="m-0 text-white fw-bolder">{men.nombre}</p>
                                                        <p className="m-0">{men.contenido}</p>
                                                    </div>
                                                </div>
                                            ))
                                            
                                        ) : (<>No hay mensajkes...</>)
                                    )
                                }
                                <div ref={divRef}></div>
                            </div>
                
                            {
                                datos !== null
                                    ? (<form action="" onSubmit={enviarMensaje} className="w-100 px-3">
                                        <div className="w-100 bg-white">
                                            <input type="text" className="p-3 w-75" placeholder="Escribe tu comentario o pregunta..." ref={mensajeRef} />
                                            <button className="btn w-25 btn-primary h-100">Enviar</button>
                                        </div>
                                    </form>) : (<></>)
                            }
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
