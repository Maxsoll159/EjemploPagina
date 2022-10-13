import { useContext } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { UserContext } from "../../context/DarkModeContext";
import { parsearFecha, recortarTituloDiplomas } from "../../helpers/funciones";
import { useNavigate } from "react-router-dom";
export const CartsPagePrin = ({ btnCur, btnDiplo, btnProx }) => {
    const { isdark, diplomasLimit, cursosLimit, addToCart, diplomados } = useContext(UserContext)
    let navigate = useNavigate();

    /*recordatndo array*/
    let cursoreRecortado = cursosLimit.slice(0, 4)
    let diplomaRecortado = diplomasLimit.slice(0, 4)
    console.log(diplomasLimit)
    const proximos = [...cursoreRecortado, ...diplomaRecortado]

    let proximosSeminarios = proximos.sort((a, b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime())
    const verDetalles = (etiqueta, tipo) => {
        navigate(`/${tipo}s/${etiqueta}`, { replace: false });
    }

    const irCursos = () => {
        navigate(`/cursos`, { replace: false });
    }

    const irDiplomas = () => {
        navigate(`/diplomas`, { replace: false });
    }

    const irDiplomados = () => {
        navigate(`/diplomados`, { replace: false });
    }

    return (
        <>
            {
                btnProx === true ? (
                    <Row className="mt-4">
                        {
                            proximosSeminarios !== undefined ? (
                                proximosSeminarios.map((proximo) => (
                                    <Col key={proximo.id} xxl={3} xl={4} lg={4} md={6} sm={12}>
                                        <Card style={{ width: '310px' }} className="mt-5 shadow mx-auto" data-aos="fade-up">
                                            <Card.Img loading="lazy" variant="top" src={proximo.imagen} className="cursor-pointer" onClick={() => verDetalles(proximo.etiqueta, proximo.tipo)} alt={proximo.titulo} />
                                            <Card.Body>
                                                <div className="d-flex gap-2 justify-content-center-res">
                                                    <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle bg-white`}>{proximo.tipo}</div>
                                                    <div className={`rec rounded-pill color2-detalle fw-bolder text-center d-flex justify-content-center align-items-center gap-2 bg-white`}><div className="live"></div>En vivo</div>
                                                </div>
                                                <Card.Title className="mt-2 fw-bolder cursor-pointer" style={{ height: "50px" }} onClick={() => verDetalles(proximo.etiqueta, proximo.tipo)}>{recortarTituloDiplomas(proximo.titulo)}</Card.Title>
                                                <div>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <img loading="lazy" src="/img/icons/IconCer.webp" alt="" height={18} />
                                                        <p className="m-0">Certificación Universitaria</p>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-1 mt-1">
                                                        <img loading="lazy" src="/img/icons/IconCalendarPrin.webp" alt="" height={20} width={21} />
                                                        <p className="m-0">Inicia {(proximo.inicio).substring(8,)} {parsearFecha(proximo.inicio)}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-center mt-3" style={{ width: "141px", height: "64px" }}>
                                                        <p className="m-0 text-center" style={{ fontSize: "12px" }}>Normal <span className="text-decoration-line-through">S/ {proximo.precio.normal}.00</span></p>
                                                        <p className="m-0 text-center fw-bolder fs-4">S/ {proximo.precio.final}.00</p>
                                                    </div>
                                                    <div className="colorRed borderRedPrin rounded mt-3 d-flex align-items-center flex-column" style={{ width: "76px", height: "64px" }}>
                                                        <span className="m-0 fs-4 fw-bolder text-center mt-1">{proximo.precio.descuento}%</span>
                                                        <span className="m-0 fw-bolder fs-6 text-center marginNegativo">Dscto</span>
                                                    </div>
                                                </div>
                                                <div className="mt-3 d-flex gap-2">
                                                    <a className="btn btn-light border border-dark w-25 rounded d-flex justify-content-center align-items-center cajaWhap" href={`https://api.whatsapp.com/send?phone=51${proximo.asesores[0].telefono}&text=Hola,%20solicito%20información%20del%20%20${proximo.tipo}:${proximo.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                        <img loading="lazy" src="/img/icons/whatsapp.svg" alt="" />
                                                    </a>
                                                    <button className="btn btn-light border border-dark w-75 rounded d-flex justify-content-center align-items-center" onClick={() => verDetalles(proximo.etiqueta, proximo.tipo)}>
                                                        <p className="m-0 fw-bolder">Más Información</p>
                                                    </button>
                                                    <button onClick={() => addToCart(proximo)} className="btn btn-light border border-dark"><img src="/img/icons/NavCarrito.webp" alt={proximo.titulo} /></button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (<h1>Cargando...</h1>)
                        }
                    </Row>
                ) : btnDiplo === true ? (
                    diplomasLimit !== undefined ? (
                        <Row className="mt-4">
                            {diplomasLimit.map((diplo) => (
                                <Col key={diplo.id} xxl={3} xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
                                    <Card style={{ width: '310px' }} className="mt-5 shadow mx-auto">
                                        <Card.Img loading="lazy" variant="top" src={diplo.imagen} className="cursor-pointer" onClick={() => verDetalles(diplo.etiqueta, diplo.tipo)} alt={diplo.titulo} />
                                        <Card.Body>
                                            <div className="d-flex gap-2 justify-content-center-res">
                                                <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle bg-white`}>{diplo.tipo}</div>
                                                <div className={`rec rounded-pill color2-detalle fw-bolder text-center d-flex justify-content-center align-items-center gap-2 bg-white`}><div className="live"></div>En vivo</div>
                                            </div>
                                            <Card.Title className="mt-2 fw-bolder cursor-pointer" style={{ height: "50px" }} onClick={() => verDetalles(diplo.etiqueta, diplo.tipo)}>{recortarTituloDiplomas(diplo.titulo)}</Card.Title>
                                            <div>
                                                <div className="d-flex align-items-center gap-1">
                                                    <img loading="lazy" src="/img/icons/IconCer.webp" alt="" height={18} />
                                                    <p className="m-0">Certificación Universitaria</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-1 mt-1">
                                                    <img loading="lazy" src="/img/icons/IconCalendarPrin.webp" alt="" height={20} width={21} />
                                                    <p className="m-0">Inicia {(diplo.inicio).substring(8,)} {parsearFecha(diplo.inicio)}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-center mt-3" style={{ width: "141px", height: "64px" }}>
                                                    <p className="m-0 text-center" style={{ fontSize: "12px" }}>Normal <span className="text-decoration-line-through">S/ {diplo.precio.normal}.00</span></p>
                                                    <p className="m-0 text-center fw-bolder fs-4">S/ {diplo.precio.final}.00</p>
                                                </div>
                                                <div className="colorRed borderRedPrin rounded mt-3 d-flex align-items-center flex-column" style={{ width: "76px", height: "64px" }}>
                                                    <span className="m-0 fs-4 fw-bolder text-center mt-1">{diplo.precio.descuento}%</span>
                                                    <span className="m-0 fw-bolder fs-6 text-center marginNegativo">Dscto</span>
                                                </div>
                                            </div>
                                            <div className="mt-3 d-flex gap-2">
                                                <a className="btn btn-light border border-dark w-25 rounded d-flex justify-content-center align-items-center cajaWhap" href={`https://api.whatsapp.com/send?phone=51${diplo.asesores[0].telefono}&text=Hola,%20solicito%20información%20del%20%20${diplo.tipo}:${diplo.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                    <img loading="lazy" src="/img/icons/whatsapp.svg" alt="" />
                                                </a>
                                                <button className="btn btn-light border border-dark w-75 rounded d-flex justify-content-center align-items-center" onClick={() => verDetalles(diplo.etiqueta, diplo.tipo)}>
                                                    <p className="m-0 fw-bolder">Más Información</p>
                                                </button>
                                                <button onClick={() => addToCart(diplo)} className="btn btn-light border border-dark"><img src="/img/icons/NavCarrito.webp" alt={diplo.titulo} /></button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            <Col xl={12}>
                                <div className="mt-5">
                                    <button className="btn btn-primary d-block mx-auto fw-bolder" onClick={irDiplomas}>Ver mas Diplomas</button>
                                </div>
                            </Col>
                        </Row>

                    ) : (<h1>Cargando</h1>)
                ) : btnCur === true ? (
                    cursosLimit !== undefined ? (
                        <Row className="mt-4">
                            {cursosLimit.map((curso) => (
                                <Col key={curso.id} xxl={3} xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
                                    <Card style={{ width: '310px' }} className="mt-5 shadow mx-auto">
                                        <Card.Img loading="lazy" variant="top" src={curso.imagen} className="cursor-pointer" onClick={() => verDetalles(curso.etiqueta, curso.tipo)} alt={curso.titulo} />
                                        <Card.Body>
                                            <div className="d-flex gap-2 justify-content-center-res">
                                                <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle bg-white`}>{curso.tipo}</div>
                                                <div className={`rec rounded-pill color2-detalle fw-bolder text-center d-flex justify-content-center align-items-center gap-2 bg-white`}><div className="live"></div>En vivo</div>
                                            </div>
                                            <Card.Title className="mt-2 fw-bolder cursor-pointer" style={{ height: "50px" }} onClick={() => verDetalles(curso.etiqueta, curso.tipo)}>{recortarTituloDiplomas(curso.titulo)}</Card.Title>
                                            <div>
                                                <div className="d-flex align-items-center gap-1">
                                                    <img loading="lazy" src="/img/icons/IconCer.webp" alt="" height={18} />
                                                    <p className="m-0">Certificación Universitaria</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-1 mt-1">
                                                    <img loading="lazy" src="/img/icons/IconCalendarPrin.webp" alt="" height={20} width={21} />
                                                    <p className="m-0">Inicia {(curso.inicio).substring(8,)} {parsearFecha(curso.inicio)}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-center mt-3" style={{ width: "141px", height: "64px" }}>
                                                    <p className="m-0 text-center" style={{ fontSize: "12px" }}>Normal <span className="text-decoration-line-through">S/ {curso.precio.normal}.00</span></p>
                                                    <p className="m-0 text-center fw-bolder fs-4">S/ {curso.precio.final}.00</p>
                                                </div>
                                                <div className="colorRed borderRedPrin rounded mt-3 d-flex align-items-center flex-column" style={{ width: "76px", height: "64px" }}>
                                                    <span className="m-0 fs-4 fw-bolder text-center mt-1">{curso.precio.descuento}%</span>
                                                    <span className="m-0 fw-bolder fs-6 text-center marginNegativo">Dscto</span>
                                                </div>
                                            </div>
                                            <div className="mt-3 d-flex gap-2">
                                                <a className="btn btn-light border border-dark w-25 rounded d-flex justify-content-center align-items-center cajaWhap" href={`https://api.whatsapp.com/send?phone=51${curso.asesores[0].telefono}&text=Hola,%20solicito%20información%20del%20%20${curso.tipo}:${curso.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                    <img loading="lazy" src="/img/icons/whatsapp.svg" alt="" />
                                                </a>
                                                <button className="btn btn-light border border-dark w-75 rounded d-flex justify-content-center align-items-center" onClick={() => verDetalles(curso.etiqueta, curso.tipo)}>
                                                    <p className="m-0 fw-bolder">Más Información</p>
                                                </button>
                                                <button onClick={() => addToCart(curso)} className="btn btn-light border border-dark"><img src="/img/icons/NavCarrito.webp" alt={curso.titulo} /></button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            <Col xl={12}>
                                <div className="mt-5">
                                    <button className="btn btn-primary d-block mx-auto fw-bolder" onClick={irCursos}>Ver mas Cursos</button>
                                </div>
                            </Col>
                        </Row>
                    ) : (<>Cargando.....</>)
                ) : (diplomados !== undefined ? (
                    <Row className="mt-4">
                        {diplomados.map((diplomado) => (
                            <Col key={diplomado.id} xxl={3} xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
                                <Card style={{ width: '310px' }} className="mt-5 shadow mx-auto">
                                    <Card.Img loading="lazy" variant="top" src={diplomado.imagen} className="cursor-pointer" onClick={() => verDetalles(diplomado.etiqueta, diplomado.tipo)} alt={diplomado.titulo} />
                                    <Card.Body>
                                        <div className="d-flex gap-2 justify-content-center-res">
                                            <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle bg-white`}>{diplomado.tipo}</div>
                                            <div className={`rec rounded-pill color2-detalle fw-bolder text-center d-flex justify-content-center align-items-center gap-2 bg-white`}><div className="live"></div>En vivo</div>
                                        </div>
                                        <Card.Title className="mt-2 fw-bolder diplomador-pointer" style={{ height: "50px" }} onClick={() => verDetalles(diplomado.etiqueta, diplomado.tipo)}>{recortarTituloDiplomas(diplomado.titulo)}</Card.Title>
                                        <div>
                                            <div className="d-flex align-items-center gap-1">
                                                <img loading="lazy" src="/img/icons/IconCer.webp" alt="" height={18} />
                                                <p className="m-0">Certificación Universitaria</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1 mt-1">
                                                <img loading="lazy" src="/img/icons/IconCalendarPrin.webp" alt="" height={20} width={21} />
                                                <p className="m-0">Inicia {(diplomado.inicio).substring(8,)} {parsearFecha(diplomado.inicio)}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-center mt-3" style={{ width: "141px", height: "64px" }}>
                                                <p className="m-0 text-center" style={{ fontSize: "12px" }}>Normal <span className="text-decoration-line-through">S/ {diplomado.precio.normal}.00</span></p>
                                                <p className="m-0 text-center fw-bolder fs-4">S/ {diplomado.precio.final}.00</p>
                                            </div>
                                            <div className="colorRed borderRedPrin rounded mt-3 d-flex align-items-center flex-column" style={{ width: "76px", height: "64px" }}>
                                                <span className="m-0 fs-4 fw-bolder text-center mt-1">{diplomado.precio.descuento}%</span>
                                                <span className="m-0 fw-bolder fs-6 text-center marginNegativo">Dscto</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 d-flex gap-2">
                                            <a className="btn btn-light border border-dark w-25 rounded d-flex justify-content-center align-items-center cajaWhap" href={`https://api.whatsapp.com/send?phone=51${diplomado.asesores[0].telefono}&text=Hola,%20solicito%20información%20del%20%20${diplomado.tipo}:${diplomado.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                <img loading="lazy" src="/img/icons/whatsapp.svg" alt="" />
                                            </a>
                                            <button className="btn btn-light border border-dark w-75 rounded d-flex justify-content-center align-items-center" onClick={() => verDetalles(diplomado.etiqueta, diplomado.tipo)}>
                                                <p className="m-0 fw-bolder">Más Información</p>
                                            </button>
                                            <button onClick={() => addToCart(diplomado)} className="btn btn-light border border-dark"><img src="/img/icons/NavCarrito.webp" alt={diplomado.titulo} /></button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        <Col xl={12}>
                            <div className="mt-5">
                                <button className="btn btn-primary d-block mx-auto fw-bolder" onClick={irDiplomados}>Ver mas Diplomados</button>
                            </div>
                        </Col>
                    </Row>) : (<>Cargando....</>)
                )
            }
        </>
    )
}