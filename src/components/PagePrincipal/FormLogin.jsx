import { LoginUsuario } from "../../helpers/ApiLogin";
import { Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../../context/DarkModeContext";
import { useLocation } from "react-router-dom";

export const FormLogin = () => {
    const { setUsuarioLogin } = useContext(UserContext)
    const location = useLocation()
    const Swal = require('sweetalert2')
    const login = (e) => {
        e.preventDefault()
        const correo = e.target.correo.value
        const contraseña = e.target.contraseña.value
        if (correo === "" || contraseña === "") {
            Swal.fire(
                'Algo salio mal Ops..!',
                'Por favor llene todo los campos',
                'error'
            )
        } else {
            const data = new FormData()
            data.append('correo', correo)
            data.append('clave', contraseña)
            LoginUsuario(data).then((res) => {
                if (res !== false) {
                    Swal.fire(
                        'Bienvenido',
                        'Bienvenido a Desarrollo Global 😃',
                        'success'
                    )
                    localStorage.setItem("usuarioDesarrollo", JSON.stringify(res))
                    document.cookie = `token=${res.token};domain=.desarrolloglobal.pe`;
                    setUsuarioLogin(res)
                    setTimeout(() => {
                        if (!location.pathname.includes("/pasarela-pagos")) {
                           // window.location.href = "https://aula.desarrolloglobal.pe/aula/#tab_tablero"
                        }
                    }, 1000)

                } else {
                    Swal.fire(
                        'Algo salio mal Ops..!',
                        'Usario y contraseña Incorrecta',
                        'error'
                    )
                }
            })
        }

    }

    const [flagEye, setflagEye] = useState(true)
    const MostrarContraseña = () => {
        console.log("asd")
        let cambio = document.getElementById("contraseña");
        if (cambio.type === "password") {
            cambio.type = "text";
            setflagEye(!flagEye)
        } else {
            cambio.type = "password";
            setflagEye(!flagEye)
        }
    }

    return (
        <Form className="mt-4 p-0" onSubmit={login}>
            <div className="py-2 w-100 border border-1 rounded ps-3 inputDiv">
                <input type="email" className="border-0 inputContraseña" id="correo" placeholder="Correo Electronico" />
            </div>

            <div className="py-2 w-100 border border-1 rounded ps-3 inputDiv mt-3 pe-2">
                <input type="password" className="border-0 inputContraseña" id="contraseña" placeholder="Contraseña" />
                <span className="border-0 bg-transparent cursor-pointer" onClick={MostrarContraseña}>
                    {
                        flagEye ? (<i className="fa fa-eye-slash" aria-hidden="true"></i>) : (<i className="fa fa-eye" aria-hidden="true"></i>)
                    }
                </span>
            </div>

            <div className="d-flex justify-content-between mt-4">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar Contraseña" />
                </Form.Group>
                <p className="m-0 text-primary">¿Ólvidate contraseña?</p>
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox2sd">
                <Form.Check type="checkbox" label="Acepto Términos y Condiciones y las políticas de Privacidad de Datos" defaultChecked={true} />
            </Form.Group>
            <button className="btn btn-primary fw-bolder w-100 py-2 shadow">Iniciar Sesión</button>
        </Form>
    )
}