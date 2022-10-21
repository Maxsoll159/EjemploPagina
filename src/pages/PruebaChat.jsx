import { useEffect, useState } from 'react';
import io from 'socket.io-client';



export const PruebaChat = () => {
    const socket = io('https://desarrolloglobal.pe:8443')

    const [mensaje, setMensaje] = useState("")
    const [mensajes, setMensajes] = useState([])

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
        socket.emit("enviar_mensaje", 1001, mensaje);
        setMensaje("");
    };


    useEffect(() => {
        socket.on('mostrar_mensaje', data => {
            setMensajes([...data])
        })
    }, [mensaje])


    useEffect(() => {
        socket.on('mostrar_total_mensajes', data => {
            setMensajes(data)
        })
    }, [])



    return (
        <>
            <div>
                {
                    mensajes !== undefined ? (
                        mensajes.map((men, index)=>(
                            <div key={index}>
                                <p>{men.nombre}</p>
                                <p>{men.contenido}</p>
                            </div>
                        ))
                    ): (<>Error</>)                
                }
            </div>

            <form onSubmit={enviarMensaje}>
                <input type='text' placeholder='escriba un mensaje' value={mensaje} onChange={e => setMensaje(e.target.value)} />
                <button type='submit'>Enviar</button>
            </form>
        </>


    )

}

