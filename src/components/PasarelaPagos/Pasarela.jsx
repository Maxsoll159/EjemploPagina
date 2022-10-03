import { useState } from "react"

export const Pasarela = () => {

    const [estados, setEstados] = useState({
        loginPasa: true,
        registroPasa: false
    })

    const {loginPasa, registroPasa} = setEstados

    localStorage.setItem("loginPasa", loginPasa)
    localStorage.setItem("loginPasa", registroPasa)
    return (

        <div className="p-5">
            <h4 className="fw-bolder">Bienvenido a la pasarela de pagos</h4>
            <p className="m-0">Compra el Programa elegido desde nuestra plataforma de manera segura, puedes iniciar sesión si eres alumno ó regístrate si aún no estas registrado. 🙂</p>
            <img src="/img/DesarrolloGlobalInfo.webp" className="mt-4 d-block mx-auto"></img>
            <p className="m-0 text-center mt-4">Si ya tienes una cuenta en nuestra plataforma</p>
            <button className="btn btn-primary mt-4 w-75 d-block mx-auto py-3 fw-bolder" onClick={() => setEstados({
                loginPasa: true,
                registroPasa: false
            })}>Ingresa aquí</button>
            <p className="m-0 text-center mt-4">Si eres nuevo, entonces crea una cuenta aqui</p>
            <button className="btn btn-primary mt-4 w-75 d-block mx-auto py-3 fw-bolder" onClick={() => setEstados({
                loginPasa: true,
                registroPasa: false
            })}>Regístrate aquí</button>
        </div>

    )
}