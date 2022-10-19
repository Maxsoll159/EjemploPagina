import { useEffect, useState } from 'react';
import io from 'socket.io-client';



export const PruebaChat = () =>{
    let Socket = io("https://socketdesarrolloglobal.herokuapp.com/")
    const [mensaje, setMensaje] = useState("")
    const [mensajes, setMensajes] = useState([])

    useEffect(() => {
        Socket.emit("conectado", "Juan");
    }, []);
    console.log(Socket)

    useEffect(() => {
        Socket.on("mensajes", (mensaje) => {
            setMensajes([...mensajes, mensaje]);
        });

        return () => {
            Socket.off();
        };
    }, [mensajes]);

    const submit = (e) => {
        e.preventDefault();
        Socket.emit("mensaje", "Juan", mensaje, "sd");
        setMensaje("");
    };


    console.log(mensajes)
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
                <textarea name="" id="" cols="30" rows="10" value={mensaje} onChange={e => setMensaje(e.target.value)}></textarea>
                <button>Enviar</button>
            </form>
        </div>

    )
}