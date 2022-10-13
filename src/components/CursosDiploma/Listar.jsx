import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { recortarTituloDiplomas, parsearFecha } from "../../helpers/funciones";
import { useNavigate } from "react-router-dom";
import { DarkModeProvider, UserContext } from "../../context/DarkModeContext";
export const Listar = ({ tipo, envivo, grabados }) => {

    {/*USECONTEXT PARA CARRITO*/ }
    const { addToCart } = useContext(UserContext)

    console.log(tipo)

    let navigate = useNavigate();
    const [{ Apivivo, Apigrabado }, setInformacion] = useState({
        envivo: [],
        grabados: []
    })
    const [{ btnVivo, btnGrabado }, setCursoEstado] = useState({
        btnVivo: true,
        btnGrabado: false
    })
    useEffect(() => {
        setInformacion({
            Apivivo: envivo,
            Apigrabado: grabados
        })
    }, [envivo, grabados])

    const verDetalles = (etiqueta) => {
        navigate(`/${tipo}/${etiqueta}`, { replace: false });
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h2 className="fw-bolder text-center mt-5">¿En qué {tipo} deseas capacitarte?</h2>
                        <h6 className="fw-bolder text-center">Más de 50,000 alumnos capacitados</h6>
                    </Col>
                    <Col xl={12}>
                        <div className="d-flex justify-content-center mt-3 w-100res">
                            <div className="color-informacion p-2 rounded-pill d-flex gap-2">
                                <button className={`btn rounded-pill px-xl-5 py-xl-2 fw-bolder d-flex align-items-center gap-3 ${!btnVivo ? "" : "btn-danger"}`} onClick={() => setCursoEstado({
                                    btnVivo: true,
                                    btnGrabado: false
                                })}>
                                    {
                                        btnVivo ? (<img src="/img/icons/LiveDiploCur.webp" alt="" />) : (<img src="/img/icons/LiveSeminario.webp" alt="" />)
                                    } {tipo} en Vivo</button>
                                <button className={`btn rounded-pill px-xl-5 py-xl-2 fw-bolder d-flex align-items-center gap-3 ${!btnGrabado ? "" : "btn-danger"}`} onClick={() => setCursoEstado({
                                    btnVivo: false,
                                    btnGrabado: true
                                })}>{
                                        btnGrabado ? (<img src="/img/icons/SeminarioRealizado.webp" alt="" />) : (<img src="/img/icons/GraDiploCur.webp" alt="" />)
                                    }
                                    {tipo} Grabados</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                {
                    btnVivo === true ? (<Row className="pb-5">
                        {
                            Apivivo === [] || Apivivo === "" || Apivivo === undefined ? (<Spinner animation="grow" variant="primary" />) : (
                                Apivivo.map((curvivo) => (
                                    <Col xl={3} lg={4} md={6} key={curvivo.id}>
                                        <Card style={{ width: '310px' }} className="mt-5 shadow mx-auto" data-aos="zoom-in">
                                            <Card.Img loading="lazy" variant="top" src={curvivo.imagen} className="cursor-pointer" onClick={() => verDetalles(curvivo.etiqueta)} />
                                            <Card.Body>
                                                <div className="d-flex gap-2 justify-content-center-res">
                                                    <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle bg-white`}>{tipo}</div>
                                                    <div className={`rec rounded-pill color2-detalle fw-bolder text-center d-flex justify-content-center align-items-center gap-2 bg-white`}><div className="live"></div>En vivo</div>
                                                </div>
                                                <Card.Title className="mt-2 fw-bolder cursor-pointer" style={{ height: "63px" }} onClick={() => verDetalles(curvivo.etiqueta)}>{recortarTituloDiplomas(curvivo.titulo)}</Card.Title>
                                                <div>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <img loading="lazy" src="/img/icons/IconCer.webp" alt="" height={18} />
                                                        <p className="m-0">Certificación Universitaria</p>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-1 mt-1">
                                                        <img loading="lazy" src="/img/icons/IconCalendarPrin.webp" alt="" height={20} width={21} />
                                                        <p className="m-0">Inicia {(curvivo.inicio).substring(8,)} {parsearFecha(curvivo.inicio)}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-center mt-3" style={{ width: "141px", height: "64px" }}>
                                                        <p className="m-0 text-center" style={{ fontSize: "12px" }}>Normal <span className="text-decoration-line-through">S/ {curvivo.precio.normal}.00</span></p>
                                                        <p className="m-0 text-center fw-bolder fs-4">S/ {curvivo.precio.final}.00</p>
                                                    </div>
                                                    <div className="colorRed borderRedPrin rounded mt-3 d-flex align-items-center flex-column" style={{ width: "76px", height: "64px" }}>
                                                        <span className="m-0 fs-4 fw-bolder text-center mt-1">{curvivo.precio.descuento}%</span>
                                                        <span className="m-0 fw-bolder fs-6 text-center marginNegativo">Dscto</span>
                                                    </div>
                                                </div>
                                                <div className="mt-3 d-flex gap-2">
                                                    <a className="btn btn-light border border-dark w-25 rounded d-flex justify-content-center align-items-center cajaWhap" href={`https://api.whatsapp.com/send?phone=51${curvivo.asesores[0].telefono}&text=Hola,%20solicito%20información%20del%20%20${curvivo.tipo}:${curvivo.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                        <img loading="lazy" src="/img/icons/whatsapp.svg" alt={curvivo.titulo} />
                                                    </a>
                                                    <button className="btn btn-light border border-dark w-75 rounded d-flex justify-content-center align-items-center" onClick={() => verDetalles(curvivo.etiqueta)}>
                                                        <p className="m-0 fw-bolder">Más Información</p>
                                                    </button>
                                                    <button onClick={() => addToCart(curvivo)} className="btn btn-light border border-dark"><img src="/img/icons/NavCarrito.webp" alt={curvivo.titulo} /></button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))

                            )
                        }
                    </Row>) : (<Row className="pb-5">
                        {
                            Apigrabado === [] || Apigrabado === "" || Apigrabado === undefined ? (<h1>Cargando....</h1>) : (
                                Apigrabado.map((grabado) => (
                                    <Col xl={3} lg={4} md={6} key={grabado.id}>
                                        <Card style={{ width: '310px' }} className="mt-5 shadow mx-auto" data-aos="zoom-in">
                                            <Card.Img loading="lazy" variant="top" src={grabado.imagen} onClick={() => verDetalles(grabado.etiqueta)} className="cursor-pointer"/>
                                            <Card.Body>
                                                <div className="d-flex gap-2 justify-content-center-res">
                                                    <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle bg-white`}>{tipo}</div>
                                                    <div className={`rec rounded-pill fw-bolder text-center d-flex justify-content-center align-items-center gap-2 color-black back-black text-white border border-dark`}>{
                                                        <img loading="lazy" src="/img/iconsDarkMode/GrabadosIconDark.svg" alt="" width={19} />
                                                    }Realizado</div>
                                                </div>
                                                <Card.Title className="mt-2 fw-bolder cursor-pointer" style={{ height: "50px" }} onClick={() => verDetalles(grabado.etiqueta)}>{recortarTituloDiplomas(grabado.titulo)}</Card.Title>
                                                <div>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <img loading="lazy" src="/img/icons/IconCer.webp" alt="" height={18} />
                                                        <p className="m-0">Certificación Universitaria</p>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-1 mt-1">
                                                        <img loading="lazy" src="/img/icons/IconCalendarPrin.webp" alt="" height={20} width={21} />
                                                        <p className="m-0">Inicia {(grabado.inicio).substring(8,)} {parsearFecha(grabado.inicio)}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-center mt-3" style={{ width: "141px", height: "64px" }}>
                                                        <p className="m-0 text-center" style={{ fontSize: "12px" }}>Normal <span className="text-decoration-line-through">S/ {grabado.precio.normal}.00</span></p>
                                                        <p className="m-0 text-center fw-bolder fs-4">S/ {grabado.precio.final}.00</p>
                                                    </div>
                                                    <div className="colorRed borderRedPrin rounded mt-3 d-flex align-items-center flex-column" style={{ width: "76px", height: "64px" }}>
                                                        <span className="m-0 fs-4 fw-bolder text-center mt-1">{grabado.precio.descuento}%</span>
                                                        <span className="m-0 fw-bolder fs-6 text-center marginNegativo">Dscto</span>
                                                    </div>
                                                </div>
                                                <div className="mt-3 d-flex gap-2">
                                                    <a className="btn btn-light border border-dark w-25 rounded d-flex justify-content-center align-items-center cajaWhap" href={`https://api.whatsapp.com/send?phone=51${grabado.asesores[0].telefono}&text=Hola,%20solicito%20información%20del%20%20${grabado.tipo}:${grabado.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                        <img loading="lazy" src="/img/icons/whatsapp.svg" alt="" />
                                                    </a>
                                                    <button className="btn btn-light border border-dark w-75 rounded d-flex justify-content-center align-items-center" onClick={() => verDetalles(grabado.etiqueta)}>
                                                        <p className="m-0 fw-bolder">Más Información</p>
                                                    </button>
                                                    <button onClick={() => addToCart(grabado)} className="btn btn-light border border-dark"><img src="/img/icons/NavCarrito.webp" alt={grabado.titulo} /></button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            )
                        }
                    </Row>)
                }
            </Container>
        </div>
    )
}