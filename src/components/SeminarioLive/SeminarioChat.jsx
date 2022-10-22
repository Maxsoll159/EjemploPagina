import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"
export const SeminarioChat = ({ id, nombre, idSeminario, avatar }) => {

    const [socketState, setSocketState] = useState(null)
    const [mensajesChat, setMensajesChat] = useState([])
    useEffect(() => {
        const socket = io('https://desarrolloglobal.pe:8443')
        setSocketState(socket)
        console.log("llege con datos",)
        socket.emit('conectar', idSeminario, { id, nombre, avatar })
        socket.on('mostrar_total_mensajes', data => setMensajesChat(data))
        socket.on('mostrar_mensaje', data => { setMensajesChat(msjs => [...msjs, data]) })
    }, [])

    const enviarMensaje = (e) => {
        e.preventDefault();
        socketState.emit("enviar_mensaje", idSeminario, mensajeRef.current.value);

    };

    const divRef = useRef(null);
    useEffect(() => {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    });
    /*Configuracion de Socket*/
    const mensajeRef = useRef()

    return (
        <div className="mx-3 mb-3" style={{ height: "580px", overflow: "auto" }} >
            {
                mensajesChat !== [] ? (
                    mensajesChat.map((men, index) => (
                        <div className="d-flex w-100 gap-3 align-items-center" key={index}>
                            <img src={men.avatar} alt="" width={50} height={50} className="rounded rounded-circle" />
                            <div className={`p-3 rounded w-100 mt-3 ${men.usuario === id ? "color-chat1" : "color-chat2"}`}>
                                <p className="m-0 text-white fw-bolder">{men.nombre}</p>
                                <p className="m-0">{men.contenido}</p>
                            </div>
                        </div>
                    ))
                ) : (<>Error...</>)
            }
            <div ref={divRef}></div>
            <form action="" onSubmit={enviarMensaje} className="w-100 px-3">
                <div className="w-100 bg-white">
                    <input type="text" className="p-3 w-75" placeholder="Escribe tu comentario o pregunta..." ref={mensajeRef} />
                    <button className="btn w-25 btn-primary h-100">Enviar</button>
                </div>
            </form>
        </div>
    )
}