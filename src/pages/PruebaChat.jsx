import { useRef } from 'react';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';


const socket = io('https://desarrolloglobal.pe:8443')
export const PruebaChat = () => {

    const [mensajesChat, setMensajesChat] = useState([])
    const mensajeRef = useRef()

    useEffect(() => {
        socket.on('connect', () => {
            console.log('==> conectado')
            socket.emit('conectar',
                1001, {
                id: 7,
                nombre: 'Mrtin',
                avatar: 'https://www.google.es'
            }
            )
        })
    }, [])

    const enviarMensaje = (e) => {
        e.preventDefault();
        socket.emit("enviar_mensaje", 1001, mensajeRef.current.value);
    };

    useEffect(()=>{
        socket.on('mostrar_mensaje', data => {
            setMensajesChat(msjs=>[...msjs, data])
        })
    },[mensajeRef])


    socket.on('mostrar_total_mensajes', data => {
        setMensajesChat(data)
    })

    console.log(mensajesChat)
    return (
        <>
            <div>
                {mensajesChat !== undefined ? (
                    mensajesChat.map((men)=>(
                        <div>
                            <p>{men.contenido}</p>
                        </div>
                    ))
                ) : (<>Error</>)}
            </div>

            <form onSubmit={enviarMensaje}>
                <input type='text' placeholder='escriba un mensaje' ref={mensajeRef} />
                <button type='submit'>Enviar</button>
            </form>
        </>


    )

}

