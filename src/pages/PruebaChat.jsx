import { useEffect, useState } from 'react';
import io from 'socket.io-client';



export const PruebaChat = () => {
    let Socket = io("https://desarrolloglobal.pe:8443")

    const [mensajes, setMensajes] = useState([])
    const [datos, setDatos] = useState(
        { id: 3, nombre: "Chupet", avatar: "wwww.hola.com" }
    )
    useEffect(() => {
        Socket.on('connect', () => {
            Socket.emit('conectar',
                1001, {id: 8, nombre: "Martin", avatar: "google.com"}
            )
        })
    }, [])


    useEffect(() => {
        Socket.on('mostrar_total_mensajes', data => (
            setMensajes([...data])
        ))
    }, [mensajes])

    const submit = (e) => {
        e.preventDefault()
        let mensaje = e.target.mensaje.value
        Socket.emit('enviar_mensaje', 1001, mensaje)
    }
    console.log("asdasd", mensajes)
    return (
        <div>
            <div>
                {mensajes.map((e, index) => (
                    <div key={index}>
                        <img src={e.avatar} alt="" width={50} />
                        <div>{e.nombre}</div>
                        <div>{e.mensaje}</div>
                    </div>
                ))}
            </div>


            <form onSubmit={submit}>
                <label htmlFor="">Escriba su mensaje</label>
                <textarea name="" cols="30" rows="10" id="mensaje"></textarea>
                <button>Enviar</button>
            </form>
        </div>

    )
}