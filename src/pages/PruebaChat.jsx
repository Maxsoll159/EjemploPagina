import { useEffect, useState } from 'react';
import io from 'socket.io-client';



export const PruebaChat = () => {
    const socket = io('https://desarrolloglobal.pe:8443')



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


    const enviarMensaje = e => {
        e.preventDefault()
        let mensajer = e.target.mensaje.value
        socket.emit('enviar_mensaje', 1001, mensajer)
    }

    socket.on('mostrar_mensaje', data => {
        console.info(data)
    })




    return (
        <form onSubmit={enviarMensaje}>
            <input type='text' placeholder='escriba un mensaje' id="mensaje" />
            <button type='submit'>Enviar</button>
        </form>

    )

}

