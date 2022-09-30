import "../assets/DetalleSeminario.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../context/DarkModeContext';
import { useContext } from "react";
export const DetalleSeminario = () => {
    const { isdark } = useContext(UserContext)
    return (
        <section>
            <div className={`${isdark ? "color-DarkMode-DetalleSeminario" : ""}`}>
                <Container>
                    <Row className="">
                        <Col xl={6} sm={12} md={6}>
                            <div className="d-flex gap-2 mt-5 justify-content-center-res">
                                <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle ${isdark ? "bg-white" : ""}`}>Seminario</div>
                                <div className={`rec rounded-pill color2-detalle fw-bolder text-center d-flex justify-content-center align-items-center gap-2 ${isdark ? "bg-white" : ""}`}><div className="live"></div>En vivo</div>
                            </div>
                            <h1 className={`fw-bolder mt-4 w-75 w-100res ${isdark ? "text-white" : ""}`}>SIGA MEF y el Sistema
                                Nacional de
                                Abastecimiento</h1>
                            <p className={`w-100res ${isdark ? "text-white" : ""}`} style={{ width: "85%" }}>Si, quieres trabajar en el estado, prepárate y actualízate en desarrolloglobal mas de 10 años en programas para la mejora de competencias.</p>
                            <div className="d-flex gap-3 w-100res gap-0-res-tab">
                                <div className="d-flex gap-2 gap-0-res-tab">
                                    <img src="/img/icons/calendarDeta.svg" alt="" />
                                    <p className="fw-bolder m-0 color-prin-detalle">Fecha: Jueves 24 Setiembre</p>
                                </div>
                                <div className="d-flex gap-2 gap-0-res-tab inputDiv">
                                    <img src="/img/icons/ClockDeta.webp" alt="" />
                                    <p className="fw-bolder m-0 color-prin-detalle">7:00 PM</p>
                                </div>
                            </div>
                            <div className="mt-3 d-flex-res gap-3 flex-column-desa">
                                <button className="btn btn-primary p-2 fw-bolder d-flex gap-3 align-items-center w-50 justify-content-center w-100res"><i class="fa fa-telegram fa-2x" aria-hidden="true"></i>Registrarme por Telegram</button>
                                <button className="btn btn-light border border-dark p-2 fw-bolder d-flex align-items-center gap-3 mt-2 w-50 justify-content-center w-100res"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i>Registrame por WhatsApp</button>
                            </div>
                            <div className="d-flex align-items-center gap-2 mt-3 ps-5 justify-content-center-res padding-0 my-4">
                                <p className={`fw-bolder m-0 ${isdark ? "text-white" : "text-dark"}`} >Compartir con un amigo</p>
                                <img src="/img/icons/compartir.webp" alt="" height={18} />
                            </div>
                        </Col>
                        <Col xl={6} sm={12} md={6} className="p-5 padding-detalle-4">
                            <img src="/img/MuestraDetalleSeminario.png" alt="" width={400} className="d-block mx-auto rounded w-100res h-100res" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`color-form ${isdark ? "color-DarkMode-form" : ""}`}>
                <Container>
                    <Row className="py-5">
                        <Col xl={6} sm={12} md={12} className="mt-3">
                            <h3 className={`fw-bolder m-0 ${isdark ? "text-white" : ""}`}>Profesor</h3>
                            <div className="linea-profesor bg-white rounded-pill"></div>
                            <div className={`d-flex gap-4 mx-auto p-4 rounded mt-4 flex-column-desa ${isdark ? "color-DarkMode-DetalleSeminario" : "bg-white border border-2"}`}>
                                <img src="https://archivos-comunes.s3.amazonaws.com/2019/profesores/WILBER-CORONADO.jpg" alt="" width={137} height={137} className="rounded-circle border border-3 border-dark mx-auto " />
                                <div>
                                    <h5 className={`fw-bolder ${isdark ? "text-white" : "text-dark"}`}>C.PC. Richard Cortez</h5>
                                    <p className={`text-profe m-0 ${isdark ? "text-white" : "text-dark"}`}>Especialista en Gestión Pública, Presupuesto por Resultados y Mejora de Procesos en Administración Pública. Capacitador en Programas de Especialización en Sistemas de Gestión Pública, Sistema Integrado de Administración Financiera SIAF, Gestión de Presupuesto Público, Sistema de Contabilidad Gubernamental, Gestión de Tesorería y Finanzas Publicas. Experto en Análisis, Integración y Cierre Financiero y Presupuestal aplicado al SIAF. Especialista en la conducción de los Procesos Presupuestarios en el Sector Publico. Más de 18 años de experiencia en manejo de procedimientos administrativos, instrumentos de gestión pública, planeamiento estratégico, y presupuesto participativo para Gobierno Locales.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} sm={12} md={12} className="mt-3">
                            <Form className="bg-white p-4 mx-auto rounded w-100res form-width" style={{ width: "400px" }}>

                                <h5 className="fw-bolder text-center">Regístrate y participa en esta 👇
                                    transmisión en vivo !Gratuita!</h5>

                                <p className="text-center m-0">Te enviaremos un recordatorio antes del inicio.</p>

                                <div className="d-flex gap-3 mt-2 flex-column-desa align-items-center">
                                    <div className="d-flex gap-2">
                                        <img src="/img/icons/calendarDeta.svg" alt="" />
                                        <p className="fw-bolder m-0 color-prin-detalle">Fecha: Jueves 24 Setiembre</p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <img src="/img/icons/ClockDeta.webp" alt="" />
                                        <p className="fw-bolder m-0 color-prin-detalle">7:00 PM</p>
                                    </div>
                                </div>

                                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Nombres" className="border-0 shadow" style={{ height: "47px" }} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="email" placeholder="Correo Electronico" className="border-0 shadow" style={{ height: "47px" }} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="number" placeholder="Celular o WhatsApp" className="border-0 shadow" style={{ height: "47px" }} />
                                </Form.Group>



                                <Button type="submit" className="w-100 btn btn-primary mt-2 fw-bolder p-2 d-flex justify-content-center align-items-center gap-2">
                                    <img src="/img/icons/BotonDetalleSeminario.webp" alt="" />Registrarme a este Seminario
                                </Button>

                                <p className="text-center m-0 mt-3">Acepto Politicas de <Link to="/" className="text-decoration-none">privacidad de datos</Link></p>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`${isdark ? "color-DarkMode-final" : ""}`}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h3 className={`fw-bolder text-center mt-5 d-block mx-auto w-100res ${isdark ? "text-white" : "text-dark"}`} style={{ width: "35%" }}>Obtén un <span className="text-decoration-underline">Descuento Especial</span>
                                &nbsp;en nuestro <span className="text-decoration-underline" style={{ color: "#CF1F4F" }}>próximo programa</span></h3>
                            <img src="/img/MuestraDetalleSeminario.png" alt="" className="d-block mx-auto rounded mt-4 w-100res w-50res-tab" width={500} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}