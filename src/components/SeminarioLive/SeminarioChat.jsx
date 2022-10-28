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
        if(mensajeRef.current.value === ""){
            alert("Escribe un menasjke")
        }else{
            socketState.emit("enviar_mensaje", idSeminario, mensajeRef.current.value);
            setTimeout(()=>{
                mensajeRef.current.value = ""
            },500)
        }


    };

    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    });
    /*Configuracion de Socket*/
    const mensajeRef = useRef()

    return (
        <>
            <div className="w-100 chatMedi" >
                {
                    mensajesChat !== [] ? (
                        mensajesChat.map((men, index) => (
                            <div className="d-flex gap-4 w-100 px-4 text-break py-2 align-items-start" key={index}>
                                <img src={men.avatar} alt="" width={50} height={50} className="" />
                                <div className={`p-3 rounded mb-1 ${men.usuario === id ? "color-chat2" : "color-chat1"}`} >
                                    <p className="m-0 text-white fw-bolder">{men.nombre}</p>
                                    <p className="m-0">{men.contenido}</p>
                                </div>
                            </div>
                        ))
                    ) : (<>Error...</>)
                }
                <div ref={divRef}></div>
            </div>
            <form action="" onSubmit={enviarMensaje} className="w-100 px-3 py-2">
                <div className="w-100 bg-white d-flex px-3 py-2 rounded justify-content-between align-items-center">
                    <input type="text" className="p-3 w-75 bg-transparent border-0" placeholder="Escribe tu comentario o pregunta..." ref={mensajeRef} style={{outline: "none"}} />
                    <button className="btn btn-primary h-100"><img src="https://nuevapagina.s3.amazonaws.com/btnEnviarChat.webp" alt="" /></button>
                </div>
            </form>
        </>
    )
}