import "../assets/DetalleSeminario.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { UserContext } from '../context/DarkModeContext';
import { useContext, useEffect } from "react";
import { postSeminario, seminarioId } from "../helpers/SeminariosApi";
import { useState } from "react";
import { parsearFecha, parsearHora } from "../helpers/funciones";
import { Helmet } from "react-helmet";

export const DetalleSeminario = () => {
    const location = useLocation()
    const Swal = require('sweetalert2')
    const { isdark } = useContext(UserContext)

    let { name } = useParams()
    const [detalleSeminario, setDetalleSeminario] = useState([])
    useEffect(() => {
        seminarioId(name).then((resp) =>
            setDetalleSeminario(resp)
        )
    }, [name])

    const botones = () => {
        return `<div class="mt-3 d-flex-res gap-3 flex-column-desa justify-content-center">
        <a class="btn btn-primary p-2 fw-bolder d-flex gap-3 align-items-center w-100 justify-content-center w-100res" href="https://t.me/DesarrolloGlobal" target="_blank" rel="noreferrer"><i class="fa fa-telegram fa-2x" aria-hidden="true"></i>Registrarme por Telegram</a>
        <a class="btn btn-light border border-dark p-2 fw-bolder d-flex align-items-center gap-3 mt-2 w-100 justify-content-center w-100res" href="https://chat.whatsapp.com/Lgx182kXXFCJEnJtwvYg4w" target="_blank" rel="noreferrer"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i>Registrame por WhatsApp</a>
    </div>`
    }

    const infoSeminario = (e) => {
        e.preventDefault()
        const nombres = e.target.nombre.value
        const correo = e.target.correo.value
        const telefono = e.target.telefono.value

        if (nombres === "" || correo === "" || telefono === "") {
            Swal.fire(
                'Algo salio mal Ops..!',
                'Por favor llene todos los campos!',
                'error'
            )
        } else {
            const data = new FormData()
            data.append('titulo', detalleSeminario.titulo)
            data.append('fecha_seminario', detalleSeminario.fecha)
            data.append('correo', correo)
            data.append('nombres', nombres)
            data.append('telefono', telefono)

            postSeminario(data).then((resp) => {
                if (resp.sta !== false) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registro Exitoso 😄',
                        text: 'Something went wrong!',
                        html: `<div><p class="fw-bolder">Hemos recibido tus datos de manera satisfactoria, te enviaremos un recordatorio por WhatsApp, unete a nuestro grupo y no pierdas las transmision.</p>${botones()}</div>`,
                        showCancelButton: false, // There won't be any cancel button
                        showConfirmButton: false
                    })
                } else {
                    Swal.fire(
                        'Algo salio mal Ops..!',
                        'Los datos no fueron enviados!',
                        'error'
                    )
                }
            })
        }

    }

    return (
        <>
            <Helmet>

                <title>{detalleSeminario.titulo}</title>
                <meta name={detalleSeminario.titulo} content={detalleSeminario.descripcion} />

                <meta name="author" content="Centro de Capacitación y Desarrollo Global" />
                <meta name="google-signin-client_id" content="740073627785-npq9orne985ob2cs6j5qlb9m2sdsl2lg.apps.googleusercontent.com" />
                <meta name="google-site-verification" content="hWAwX4vVYax5SPwJoWF6AzsqmoKcV1XmuWQgHgqoD44" />
                <link rel="alternate" hreflang="es" href="https://aula.desarrolloglobal.pe/" />

                <meta property="og:site_name" content="Centro de Capacitación y Desarrollo Global" />
                <meta property="fb:app_id" content="226972427818042" />

                <meta property="og:title" content={detalleSeminario.titulo} />
                <meta property="og:description" content={detalleSeminario.descripcion} />
                <Helmet>
                    {
                        detalleSeminario.banner !== undefined ? (
                            <>
                                <meta property="og:image" content={detalleSeminario.banner.seminario} />
                                <meta property="og:image:secure_url" content={detalleSeminario.banner.seminario} />
                            </>
                        ) : (<></>)
                    }
                </Helmet>
            </Helmet>

            <section>
                <div className={`${!isdark ? "color-DarkMode-DetalleSeminario" : ""}`}>
                    <Container>
                        <Row className="align-items-center">
                            <Col xl={6} sm={12} md={6}>
                                <div className="d-flex gap-2 mt-5 justify-content-center-res">
                                    <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle ${!isdark ? "bg-white" : ""}`}>Seminario</div>
                                    <div className={`rec rounded-pill color2-detalle fw-bolder text-center d-flex justify-content-center align-items-center gap-2 ${!isdark ? "bg-white" : ""}`}><div className="live"></div>En vivo</div>
                                </div>
                                <h1 className={`fw-bolder mt-4 w-75 w-100res ${!isdark ? "text-white" : ""}`}>{detalleSeminario.titulo}</h1>
                                <p className={`w-100res ${!isdark ? "text-white" : ""}`} style={{ width: "85%" }}>{detalleSeminario.descripcion}</p>
                                <div className="d-flex gap-5 w-100res  justify-content-start">
                                    <div className="d-flex gap-2 gap-0-res-tab">
                                        <img src="/img/icons/calendarDeta.svg" alt="" />
                                        <p className="fw-bolder m-0 color-prin-detalle">Fecha: {detalleSeminario.fecha !== undefined ? ((detalleSeminario.fecha).substring(8, 10)) : (<>sdsd</>)} {detalleSeminario.fecha !== undefined ? (parsearFecha(detalleSeminario.fecha)) : (<></>)}</p>
                                    </div>
                                    <div className="d-flex gap-2 gap-0-res-tab">
                                        <img src="/img/icons/ClockDeta.webp" alt="" />
                                        <p className="fw-bolder m-0 color-prin-detalle">{parsearHora(detalleSeminario.hora)}</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-2 mt-3 justify-content-center-res padding-0 my-4">
                                    <p className={`fw-bolder m-0 ${!isdark ? "text-white" : "text-dark"}`} >Compartir con un amigo</p>
                                    <img src="/img/icons/compartir.webp" alt="" height={18} />
                                </div>
                            </Col>
                            <Col xl={6} sm={12} md={6} className="p-5 padding-detalle-4 d-none d-sm-block">
                                <Form className="bg-white p-4 mx-auto rounded w-100res form-width shadow" style={{ width: "400px" }} onSubmit={infoSeminario}>

                                    <h5 className="fw-bolder text-center">Regístrate y participa en esta 👇
                                        transmisión en vivo !Gratuita!</h5>

                                    <p className="text-center m-0">Te enviaremos un recordatorio antes del inicio.</p>

                                    <div className="d-flex gap-3 mt-2 flex-column-desa align-items-center justify-content-center">
                                        <div className="d-flex gap-2">
                                            <img src="/img/icons/calendarDeta.svg" alt="" />
                                            <p className="fw-bolder m-0 color-prin-detalle">Fecha: {detalleSeminario.fecha !== undefined ? ((detalleSeminario.fecha).substring(8, 10)) : (<>sdsd</>)} {detalleSeminario.fecha !== undefined ? (parsearFecha(detalleSeminario.fecha)) : (<></>)}</p>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <img src="/img/icons/ClockDeta.webp" alt="" />
                                            <p className="fw-bolder m-0 color-prin-detalle">{parsearHora(detalleSeminario.hora)}</p>
                                        </div>
                                    </div>

                                    <Form.Group className="mb-3 mt-3" controlId="nombre">
                                        <Form.Control type="text" placeholder="Nombres" className="border-0 shadow" style={{ height: "47px" }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="correo">
                                        <Form.Control type="email" placeholder="Correo Electronico" className="border-0 shadow" style={{ height: "47px" }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="telefono">
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
                <div className={`color-form ${!isdark ? "color-DarkMode-form" : ""}`}>
                    <Container>
                        <Row className="py-5 align-items-center">
                            <Col xl={6} sm={12} md={6} className="mt-3">
                                <h3 className={`fw-bolder m-0 ${!isdark ? "text-white" : ""}`}>Profesor</h3>
                                <div className="linea-profesor bg-white rounded-pill"></div>
                                <div className={`d-flex gap-4 mx-auto p-4 rounded mt-4 flex-column flex-xl-row flex-lg-row ${!isdark ? "color-DarkMode-DetalleSeminario" : "bg-white border border-2"}`}>
                                    {
                                        detalleSeminario.profesor !== undefined ? (
                                            <>
                                                <img src={detalleSeminario.profesor.perfil} alt="" width={137} height={137} className="rounded-circle border border-3 border-dark mx-auto " />
                                                <div>
                                                    <h5 className={`fw-bolder ${!isdark ? "text-white" : "text-dark"}`}>{detalleSeminario.profesor.nombre}</h5>
                                                    <p dangerouslySetInnerHTML={{ __html: detalleSeminario.profesor.descripcion }}></p>
                                                </div>
                                            </>) : (<></>)
                                    }
                                </div>
                            </Col>
                            <Col xl={6} sm={12} md={6} className="mt-3">
                                <div>
                                    <div className="">
                                        <img src={detalleSeminario.banner !== undefined ? (detalleSeminario.banner.seminario) : (<></>)} alt="" width={400} className="d-block mx-auto rounded w-100res h-100res" />
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={`${!isdark ? "color-DarkMode-final" : ""}`}>
                    <Container>
                        <Row>
                            <Col xl={12}>
                                <h3 className={`fw-bolder text-center mt-5 d-block mx-auto w-100res ${!isdark ? "text-white" : "text-dark"}`} style={{ width: "35%" }}>Obtén un <span className="text-decoration-underline">Descuento Especial</span>
                                    &nbsp;en nuestro <span className="text-decoration-underline" style={{ color: "#CF1F4F" }}>próximo programa</span></h3>
                            </Col>
                            {
                                location.pathname.includes("conciliacion-entre-las-cuentas-contables-y-reportes-de-presupuestales-10086") ? (
                                    <>
                                        <Col xl={6}>
                                            {
                                                detalleSeminario.asesor !== undefined ? (
                                                    <a href={`https://api.whatsapp.com/send?phone=51${detalleSeminario.asesor[0].telefono}&text=Hola,%20solicito%20información%20del%20%20Seminario:${detalleSeminario.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                        <img loading="lazy" src={detalleSeminario.banner !== undefined ? (detalleSeminario.banner.promocion) : (<></>)} alt="" width={500} className="d-block mx-auto rounded my-5 img-fluid" />
                                                    </a>
                                                ) : (<></>)
                                            }

                                        </Col>
                                        <Col xl={6}>
                                            <a href={`https://api.whatsapp.com/send?phone=51944551059&text=Hola,%20solicito%20información%20del%20%20Curso:CONTABILIDAD GUBERNAMENTAL EN EL SIAF RP,%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                <img loading="lazy" src="https://nuevapagina.s3.amazonaws.com/curso-contabilidad-webp.webp" alt="" width={500} className="d-block mx-auto rounded my-5 img-fluid" />
                                            </a>
                                        </Col>
                                    </>
                                ) : (
                                    <Col xl={12}>
                                        {
                                            detalleSeminario.asesor !== undefined ? (
                                                <a href={`https://api.whatsapp.com/send?phone=51${detalleSeminario.asesor[0].telefono}&text=Hola,%20solicito%20información%20del%20%20Seminario:${detalleSeminario.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                    <img loading="lazy" src={detalleSeminario.banner !== undefined ? (detalleSeminario.banner.promocion) : (<></>)} alt="" width={500} className="d-block mx-auto rounded my-5 img-fluid" />
                                                </a>
                                            ) : (<></>)
                                        }
                                        <h2 className="text-center fw-bolder my-5">No te pierdas la transmisión!!!!!</h2>
                                    </Col>
                                )
                            }

                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}