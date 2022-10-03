import { useContext } from "react";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FormLogin } from "../components/PagePrincipal/FormLogin";
import { FormRegistro } from "../components/PagePrincipal/FormRegistro";
import { UserContext } from "../context/DarkModeContext";


export const PasarelaPagos = () => {
    const {usuarioLogin } = useContext(UserContext)

    const [{ loginPasa, registroPasa }, setEstados] = useState({
        loginPasa: false,
        registroPasa: false
    })

    /*Recuperar datos del LocalStorage*/

    // datosLocal = localStorage.getItem("usuarioDesarrollo")

    console.log(usuarioLogin)

    const Login = () => {
        return (<>
            <div className="my-4">
                <h2 className="fw-bolder mb-4">¿Ya estas Registrado?</h2>
                <p className="m-0">Ingresa tu email y contraseña para que</p>
                <p className="m-0">puedas pagar de forma segura.</p>
                <FormLogin />
            </div>
        </>)
    }
    const Registrate = () => {
        return (<>
            <div className="my-4">
                <h2 className="fw-bolder mb-4">Soy Nuevo Usuario</h2>
                <FormRegistro />
            </div>
        </>)
    }
    return (
        <div>
            <div className="bg-primary px-5">
                <Container>
                    <div className="px-5 d-flex align-items-center justify-content-between">
                        <img src="/img/DesarrolloGlobalInfo.webp" className="py-3" style={{ width: "250px" }}></img>
                        <div className="d-flex gap-3">
                            <img src="/img/icons/PasarelaIcon.webp" alt="" />
                            <p className="m-0 fw-bolder text-white">Pago Seguro</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="shadow">
                <Container>
                    <Row>
                        <Col className="mx-5">
                            <div className="d-flex align-items-center gap-4 py-3" onClick={() => setEstados({
                                loginPasa: false,
                                registroPasa: false
                            })}>
                                <img src="/img/icons/flechaAtras.webp" alt="" className="img-fluid" />
                                <p className="m-0 fw-bolder text-black-50">Volver atras</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex align-items-center gap-3 h-100">
                                <div className="bg-primary rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                    <img src="/img/icons/VistoBueno.webp" alt="" className="position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <p className="m-0 fw-bold text-primary">Detalle</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex align-items-center gap-3 h-100">
                                {
                                    loginPasa || registroPasa ? (
                                        <div className="bg-primary rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                            <img src="/img/icons/VistoBueno.webp" alt="" className="position-absolute top-50 start-50 translate-middle" />
                                        </div>
                                    ) : (
                                        <div className="border border-primary border-3 rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                            <p className="m-0 fw-bolder text-primary d-flex align-items-center justify-content-center fs-5">2</p>
                                        </div>
                                    )
                                }

                                <p className="m-0 fw-bold text-primary">Completar Datos</p>
                            </div>
                        </Col>
                        <Col><div className="d-flex align-items-center gap-3 h-100">
                            <div className="border border-primary border-3 rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                <p className="m-0 fw-bolder text-primary d-flex align-items-center justify-content-center fs-5">3</p>
                            </div>
                            <p className="m-0 fw-bold text-primary">Método de Pago</p>
                        </div>
                        </Col>
                        <Col><div className="d-flex align-items-center gap-3 h-100">
                            <div className="border border-primary border-3 rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                <p className="m-0 fw-bolder text-primary d-flex align-items-center justify-content-center fs-5">4</p>
                            </div>
                            <p className="m-0 fw-bold text-primary">Pago Realizado</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ background: "#F9FBFC", height: "calc(100vh - 145.48px)" }}>
                <Container>
                    <h2 className="fw-bolder pt-5 mx-5">Detalles</h2>
                    <Row className="shadow  mx-5 mt-4 h-100 my-5">
                        <Col xl={4} style={{ background: "#F9FBFC" }}>
                            <div className="p-5">
                                <p className="fw-bolder text-primary fs-5">Resumen de Compra:</p>
                                <img src="/img/MuestraPrin.webp" alt="" className="img-fluid" />
                                <p className="fw-bolder text-danger m-0">Diploma en vivo</p>
                                <h6 className="fw-bolder">SIGA MEF - En el Nuevo Marco Normativo del Sistema Logístico del Estado 2022 Gestión Pública</h6>
                                <div className="border border-1 border-primary rounded p-1 w-100">
                                    <p className="m-0 text-primary">Inicio: 25 setiembre Hora: 7:00 pm</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8} className="bg-white" >
                            <div className="p-5">
                                {

                                    usuarioLogin.length === 0 ? (
                                        loginPasa ? (Login()) : registroPasa ? (Registrate()) : (<><h4 className="fw-bolder">Bienvenido a la pasarela de pagos</h4>
                                            <p className="m-0">Compra el Programa elegido desde nuestra plataforma de manera segura, puedes iniciar sesión si eres alumno ó regístrate si aún no estas registrado. 🙂</p>
                                            <img src="/img/DesarrolloGlobalInfo.webp" className="mt-4 d-block mx-auto"></img>
                                            <p className="m-0 text-center mt-4">Si ya tienes una cuenta en nuestra plataforma</p>
                                            <button className="btn btn-primary mt-4 w-75 d-block mx-auto py-3 fw-bolder" onClick={() => setEstados({
                                                loginPasa: true,
                                                registroPasa: false
                                            })}>Ingresa aquí</button>
                                            <p className="m-0 text-center mt-4">Si eres nuevo, entonces crea una cuenta aqui</p>
                                            <button className="btn btn-primary mt-4 w-75 d-block mx-auto py-3 fw-bolder" onClick={() => setEstados({
                                                loginPasa: false,
                                                registroPasa: true
                                            })}>Regístrate aquí</button></>)
                                    ) : (<>Soy el Metodo de pago</>)

                                }

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >


    )
}