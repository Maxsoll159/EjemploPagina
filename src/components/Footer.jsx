import { useState, useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
export const Footer = () => {
    const [ancho, setAncho] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setAncho(window.innerWidth)
        })
    }, [])
    let navigate = useNavigate()
    const verCertificado = () =>{
        navigate("buscar_certificado")
    }


    const [isActive, setActive] = useState(true)
    return (
        <>
            <div className="color-DarkMode-DetalleSeminario h-100" >
                {ancho <= 600 ? (
                    <Container>
                        <Accordion bsPrefix className="pt-4 pb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="text-white p-3" onClick={() => setActive(!isActive)}>
                                    <div className="d-flex justify-content-between w-100 align-items-center">
                                        <p className="m-0 text-white fw-bolder fs-3">Nosotros</p>
                                        <p className="fw-bolder text-primary m-0 fs-4 text-white">{!isActive ? '-' : '+'}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="p-4">
                                    <img loading="" src="https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png" alt="" width={200} />
                                    <p className="text-white mt-3 font-size-14">Más de 11 años Capacitación para
                                        Funcionarios y Servidores Públicos ❤️️</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="text-white p-3">
                                    <div className="d-flex justify-content-between w-100 align-items-center">
                                        <p className="m-0 text-white fw-bolder fs-3">Certificados</p>
                                        <p className="fw-bolder text-primary m-0 fs-4 text-white">{!isActive ? '-' : '+'}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="p-3">
                                    <p className="text-white font-size-14">Verifica la validez de tu certificado
                                        a traves de este botón.</p>
                                    <button className="btn btn bg-white" onClick={verCertificado}>Verificar Certificado</button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="text-white p-3">
                                    <div className="d-flex justify-content-between w-100 align-items-center">
                                        <p className="m-0 text-white fw-bolder fs-3">Ayuda</p>
                                        <p className="fw-bolder text-primary m-0 fs-4 text-white">{!isActive ? '-' : '+'}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="p-3">
                                    <Link to="politicas-de-privacidad/proteccion-datos" className="text-decoration-none text-white font-size-14">Políticas de Protección de Datos</Link><br />
                                    <Link to="politicas-de-privacidad/terminos-servicios" className="text-decoration-none text-white font-size-14">Terminos de servicio</Link><br />
                                    <Link to="politicas-de-privacidad/politicas-cookies" className="text-decoration-none text-white font-size-14">Políticas de Cookies</Link><br />
                                    <Link to="politicas-de-privacidad/politicas-calidad" className="text-decoration-none text-white font-size-14">Política de la Calidad</Link><br />
                                    <Link to="politicas-de-privacidad/libro-reclamaciones" className="text-decoration-none text-white font-size-14">Libro de Reclamaciones</Link>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="text-white p-3">
                                    <div className="d-flex justify-content-between w-100 align-items-center">
                                        <p className="m-0 text-white fw-bolder fs-3">ISO 9001-2015</p>
                                        <p className="fw-bolder text-primary m-0 fs-4 text-white">{!isActive ? '-' : '+'}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="p-3">
                                    <p className="text-white font-size-14">COD N°. CO18.00048/U</p>
                                    <img src="/img/imaganesPaginas/Iso9001.webp" alt="" width={150} />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="text-white p-3">
                                    <div className="d-flex justify-content-between w-100 align-items-center">
                                        <p className="m-0 text-white fw-bolder fs-3">Contactanos</p>
                                        <p className="fw-bolder text-primary m-0 fs-4 text-white">{!isActive ? '-' : '+'}</p>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="p-3">
                                    <p className="text-white m-0 font-size-14 ">Visítanos:</p>
                                    <p className="text-white m-0 font-size-14">Av. Julio Cesar Tello 741 - Lince</p>
                                    <p className="text-white m-0 font-size-14">Fijo: (01) 555 6005</p>
                                    <p className="text-white m-0 font-size-14">info@desarrolloglobal.pe</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div>
                            <div style={{ borderBottom: "2px solid white" }}></div>
                            <img src="https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png" alt="" width={200} className="d-block mx-auto mt-3" />
                            <p className="text-white text-center py-3 m-0">&copy; Todos los derechos reservados © 2011 - 2022 CENTRO DE CAPACITACIÓN Y DESARROLLO GLOBAL</p>
                        </div>
                    </Container>

                ) : (
                    <Container>
                        <Row className="">
                            <Col xl md={4} sm={6} className="py-5">
                                <img loading="" src="https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png" alt="" width={200} />
                                <p className="text-white mt-3 font-size-14">Más de 11 años Capacitación para
                                    Funcionarios y Servidores Públicos ❤️️</p>
                            </Col>
                            <Col className="py-5">
                                <h4 className="text-white fw-bolder">Certificado</h4>
                                <p className="text-white font-size-14">Verifica la validez de tu certificado
                                    a traves de este botón.</p>
                                <button className="btn btn bg-white" onClick={verCertificado}>Verificar Certificado</button>
                            </Col>
                            <Col xl md={4} sm={6} className="py-5">
                                <h4 className="text-white fw-bolder">Ayuda</h4>
                                <Link to="politicas-de-privacidad/proteccion-datos" className="text-decoration-none text-white font-size-14">Políticas de Protección de Datos</Link><br />
                                <Link to="politicas-de-privacidad/terminos-servicios" className="text-decoration-none text-white font-size-14">Terminos de servicio</Link><br />
                                <Link to="politicas-de-privacidad/politicas-cookies" className="text-decoration-none text-white font-size-14">Políticas de Cookies</Link><br />
                                <Link to="politicas-de-privacidad/politicas-calidad" className="text-decoration-none text-white font-size-14">Política de la Calidad</Link><br />
                                <Link to="politicas-de-privacidad/libro-reclamaciones" className="text-decoration-none text-white font-size-14">Libro de Reclamaciones</Link>
                            </Col>
                            <Col xl md={4} sm className="py-5">
                                <h4 className="text-white fw-bolder">ISO 9001:2015</h4>
                                <p className="text-white font-size-14">COD N°. CO18.00048/U</p>
                                <img src="/img/imaganesPaginas/Iso9001.webp" alt="" width={150} />
                            </Col>
                            <Col xl md={4} sm className="py-5"   >
                                <h4 className="text-white fw-bolder">Contáctanos</h4>
                                <p className="text-white m-0 font-size-14 ">Visítanos:</p>
                                <p className="text-white m-0 font-size-14">Av. Julio Cesar Tello 741 - Lince</p>
                                <p className="text-white m-0 font-size-14">Fijo: (01) 555 6005</p>
                                <p className="text-white m-0 font-size-14">info@desarrolloglobal.pe</p>
                            </Col>
                            <Col xl={12} md={4} sm={6}>
                                <div style={{ borderBottom: "2px solid white" }}></div>
                                <p className="text-white text-center py-3 m-0">&copy; Todos los derechos reservados © 2011 - 2022 CENTRO DE CAPACITACIÓN Y DESARROLLO GLOBAL (DESARROLLO GLOBAL)</p>
                            </Col>
                        </Row>

                    </Container>
                )}
            </div>
        </>
    )
}