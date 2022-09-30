
import { useContext } from "react";
import { useState } from "react";
import { Row, Col, Modal, Form } from "react-bootstrap";
import { UserContext } from "../../context/DarkModeContext";
import { LoginUsuario } from "../../helpers/ApiLogin";

export const BtnLogin = () => {
    const { setUsuarioLogin } = useContext(UserContext)
    const Swal = require('sweetalert2')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                        window.location.href = "https://aula.desarrolloglobal.pe/aula/#tab_tablero"
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
        <>
            <button className="color-informacion text-primary rounded border-0 py-2 px-4 fw-bolder shadow w-100res" onClick={handleShow}>Ingreso al Aula Virtual</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="xl"
            >
                <Modal.Body className="m-0 p-0">
                    <Row>
                        <Col xl={6} className="bg-primary rounded p-5 d-none d-xl-block">
                            <img src='https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png' width={180} alt="desarrolloGlobal" />
                            <img src="/img/imaganesPaginas/LoginRegistro.webp" alt="" className="w-100 mt-5" height={290} />
                            <h2 className="text-white mt-5 w-50">Plataforma de Aprendizaje</h2>
                        </Col>
                        <Col xl={6} lg={12} className="p-5">
                            <div className="px-0 px-xl-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="fw-bolder">Bienvenido 🙂</h2>
                                    <button className="btn-close" onClick={handleClose}></button>
                                </div>
                                <h4 className="fw-bolder mt-4">Iniciar Sesión</h4>
                                <p>Ingresa tu email y contraseña para que ingresar al aula virtual</p>
                                <Form className="mt-4 p-0" onSubmit={login}>


                                    <div className="py-2 w-100 border border-1 rounded ps-3 inputDiv">
                                        <input type="email" className="border-0 inputContraseña" id="correo" placeholder="Correo Electronico"/>
                                    </div>

                                    <div className="py-2 w-100 border border-1 rounded ps-3 inputDiv mt-3 pe-2">
                                        <input type="password" className="border-0 inputContraseña" id="contraseña" placeholder="Contraseña" />
                                        <span className="border-0 bg-transparent cursor-pointer" onClick={MostrarContraseña}>
                                            {
                                                flagEye  ? (<i className="fa fa-eye-slash" aria-hidden="true"></i>) : (<i className="fa fa-eye" aria-hidden="true"></i>)
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
                                <p className="text-center text-primary mt-3">No tengo cuenta, Quiero registrarme</p>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}