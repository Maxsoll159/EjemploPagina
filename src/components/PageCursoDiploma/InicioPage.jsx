import { Container, Row, Col, Card, Form, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import useObserver from "../../hooks/useObserver";
import { parsearFecha } from "../../helpers/funciones";
import useContador from "../../hooks/useContador";
import { ApiInformacion, getLocalizacion } from "../../helpers/CursosDiplomas";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
export const InicioPage = ({ id, tipo, titulo, imagen, precio, fecha, descripcion, alumnos, color, totalSesionesDiploma, asesores }) => {
    const [geo, setGeo] = useState()
    let location = useLocation()
    let colorFondo = {
        background: color
    }

    /*CONTADOR*/
    let dataParseada

    const [timerDays, timerHours, timerMinutes, timerSeconds] = useContador(
        dataParseada = String(new Date(fecha).toUTCString()).split(" ")
    )

    /*UseObserver*/
    const [observe, setElements, entries] = useObserver({
        threshold: 0.100,
        root: null
    })

    const [prueba, setPrueba] = useState(true)

    useEffect(() => {
        const intersector = document.querySelectorAll("#intersector")
        setElements(intersector)
    }, [setElements])

    useEffect(() => {
        entries.forEach(element => {
            setPrueba(element.isIntersecting)
        });
    }, [entries, observe])

    /* PARA EL FORMULARIO */
    useEffect(() => {
        getLocalizacion().then((datas) => setGeo(datas.city));
    }, [])

    const Swal = require('sweetalert2')
    const handlerFrom = (e) => {
        e.preventDefault()
        const nombres = e.target.nombre.value
        const correo = e.target.correo.value
        const telefono = e.target.celular.value
        const titulo_tipo = titulo
        const id_titulo = id
        const ciudad = geo
        const contenido = `Buenas tardes deseo informacion del ${tipo} ${titulo}`
        const pagina = "https://www.desarrolloglobal.pe" + location.pathname

        if (nombres === "" || correo === "" || telefono === "" || telefono.length < 9 || telefono.length > 9) {
            Swal.fire(
                'Revisar bien sus datos',
                'Debe completar todos los campos!',
                'error'
            )
        } else {
            const data = new FormData()
            data.append('nombres', nombres)
            data.append('correo', correo)
            data.append('telefono', telefono)
            if (tipo === "Diploma" || tipo === "diploma") {
                data.append('diploma', titulo_tipo)
                data.append('id_diploma', id_titulo)
            } else {
                data.append('curso', titulo)
                data.append('id_curso', id_titulo)
            }
            data.append('ciudad', ciudad)
            data.append('contenido', contenido)
            data.append('pagina', pagina)

            ApiInformacion(data).then((resp) => {
                if (resp === true) {
                    Swal.fire(
                        'Buen Trabajo!',
                        'Datos enviados correctamente!',
                        'success'
                    )
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
    /**orueba */
    const [asesors, setAsesors] = useState()
    useEffect(() => {
        if (asesores !== undefined) {
            setAsesors(asesores[0].telefono)
        }
    }, [asesores])

    return (
        <>
            <Helmet>
                <title>{titulo}</title>

                <meta name={titulo} content={descripcion} />

                <meta name="author" content="Centro de Capacitación y Desarrollo Global" />
                <meta name="google-signin-client_id" content="740073627785-npq9orne985ob2cs6j5qlb9m2sdsl2lg.apps.googleusercontent.com" />
                <meta name="google-site-verification" content="hWAwX4vVYax5SPwJoWF6AzsqmoKcV1XmuWQgHgqoD44" />
                <link rel="alternate" hreflang="es" href="https://aula.desarrolloglobal.pe/" />

                <meta property="og:site_name" content="Centro de Capacitación y Desarrollo Global" />
                <meta property="fb:app_id" content="226972427818042" />

                <meta property="og:title" content={titulo} />
                <meta property="og:description" content={descripcion} />

                <meta property="og:image" content={imagen} />
                <meta property="og:image:secure_url" content={imagen} />

            </Helmet>
            <div className="color-diploma" >
                <div className={`w-100 bg-primary position-fixed top-0 z-index100 ocultar d-md-none ${!prueba ? "d-lg-block" : "d-none"}`}>
                    <Container fluid>
                        <Row>
                            <Col xl={8} lg={8} md={12} sm={12}>
                                <div className="d-flex gap-3 px-5 py-xxl-3 py-3 align-items-center">
                                    <img loading="lazy" src="https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png" alt="" width={190} className="d-xl-none d-xxl-block" />
                                    <img loading="lazy" src={imagen} alt="" width={171} height={70} className="rounded" />
                                    <p className="text-white fw-bolder m-0 lh-1 w-50">{titulo}</p>
                                    <div className="d-flex gap-3 me-5 d-lg-none d-xl-flex">
                                        <div className="bg-danger rounded px-3">
                                            <p className="m-0 fw-bolder text-center text-white fs-3">{timerDays}</p>
                                            <p className="m-0 mb-1 fw-bolder text-center text-white font-size-11">Dias</p>
                                        </div>
                                        <div className="bg-danger rounded px-3">
                                            <p className="m-0 fw-bolder text-center text-white fs-3">{timerHours}</p>
                                            <p className="m-0 mb-1 fw-bolder text-center text-white font-size-11">Horas</p>
                                        </div>
                                        <div className="bg-danger rounded px-3">
                                            <p className="m-0 fw-bolder text-center text-white fs-3">{timerMinutes}</p>
                                            <p className="m-0 mb-1 fw-bolder text-center text-white font-size-11">Minutos</p>
                                        </div>
                                        <div className="bg-danger rounded px-3">
                                            <p className="m-0 fw-bolder text-center text-white fs-3">{timerSeconds}</p>
                                            <p className="m-0 mb-1 fw-bolder text-center text-white font-size-11">Segundos</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`w-100 bg-white position-fixed  z-index100 shadow ocultar mt-4 mt-lg-0 mt-xl-4 d-md-none ${!prueba ? "d-lg-block" : "d-none"}`}>
                    <Container>
                        <Row>
                            <Col xl={8} lg={8} md={12} sm={12}>
                                <div className="d-flex justify-content-around py-2">
                                    <a href="#temario" className="text-decoration-none text-dark fw-bolder">Temario</a>
                                    <a href="#profesores" className="text-decoration-none text-dark fw-bolder">Profesores</a>
                                    <a href="#certificado" className="text-decoration-none text-dark fw-bolder">Certificado</a>
                                    <a href="#beneficios" className="text-decoration-none text-dark fw-bolder">Beneficios</a>
                                    <a href="#pagar" className="text-decoration-none text-dark fw-bolder">Pagar en Linea</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12} className="my-4">
                            <h5 className="color-l-diplomados fw-bolder w-100res">{tipo} de Alta Especializacion</h5>
                            <div></div>
                            <h1 className="text-white fw-bolder tamaño-diplomados w-100res">{titulo}</h1>
                            <p className="text-white tamaño-diplomados w-100res">{descripcion}</p>
                            <div className="bg-transparent d-flex border rounded p-3 tamaño-diplomados justify-content-between align-items-center mb-4 w-100res flex-column-desa">
                                <div className="d-flex align-items-center gap-2 gap-response-0">
                                    <img src="/img/icons/iconEstrellas.webp" alt="" width={93} height={16} />
                                    <p className="text-white m-0 font-size-14 fw-bolder">4.6 de calificación</p>
                                </div>
                                <div className="d-flex align-items-center gap-2 gap-response-0">
                                    <img src="/img/icons/iconUsuarios.webp" alt="" width={25} height={16} />
                                    <p className="text-white m-0 font-size-14 fw-bolder">{alumnos} alumnos capacitados en este Diploma</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4}>
                            <div className="position-fixed mt-5 mt-lg-5 z-index100 d-block position-static-res marging-top-res mb-5">
                                <Card style={{ width: '20rem' }} className={`d-block mx-auto animacion ${!prueba ? "top-card" : ""}`}>
                                    {
                                        !prueba ? ("") : (<Card.Img variant="top" src={imagen} height={200} className="ocultar d-md-none d-lg-block" />)
                                    }
                                    <Card.Body>
                                        <Card.Title className="text-center fw-bolder fs-4 m-0">Matricúlate AHORA</Card.Title>
                                        <p className="fw-bolder text-center m-0">con un descuento especial 👇</p>
                                        <div className="d-flex align-items-center">
                                            {precio !== undefined ? (
                                                <> <div className="w-50">
                                                    <p className="lh-1 mt-2"><span className="fs-3 fw-bolder m-0">S/ {precio.final}.</span><span className="fs-6 lh-1 fw-bolder">00</span><br />
                                                        <span className="colorRed font-size-14">Normal: <span className="text-decoration-line-through lh-1">
                                                            S/ {precio.normal}.00</span></span>
                                                    </p>
                                                </div>
                                                    <div className="w-50">
                                                        <div className="bg-danger rounded py-1 px-2 d-flex align-items-center gap-2 shadow justify-content-center">
                                                            <p className="text-white fw-bolder fs-3 m-0">{precio.descuento}%</p>
                                                            <p className="text-white fw-bolder m-0">Dsct</p>
                                                        </div>
                                                    </div></>
                                            ) : (<Spinner animation="grow" variant="primary" className="mx-auto" />)}
                                        </div>
                                        <div>
                                            <Form className="mt-2" onSubmit={handlerFrom}>
                                                <Form.Group className="mb-2 border border-dark rounded" controlId="nombre">
                                                    <Form.Control type="text" placeholder="Nombres" />
                                                </Form.Group>

                                                <Form.Group className="mb-2 border border-dark rounded" controlId="correo" >
                                                    <Form.Control type="email" placeholder="Correo Electronico" />
                                                </Form.Group>

                                                <Form.Group className="mb-2 border border-dark rounded" controlId="celular">
                                                    <Form.Control type="text" placeholder="Celular o WhatsApp" pattern="[0-9]{9}" />
                                                </Form.Group>

                                                <Form.Group className="m-2 d-flex align-items-center" controlId="formBasicCheckbox" >
                                                    <input type="checkbox" className="form-check-input rounded-circle" id="exampleCheck1" defaultChecked={true} />
                                                    <span className="form-check-label ms-2" style={{ fontSize: "12px" }}>Acepto políticas de <a href="ASD">privacidad o datos</a></span>
                                                </Form.Group>
                                                <button className="btn btn-primary w-100 d-flex gap-2 align-items-center justify-content-center p-2 fw-bolder">
                                                    <img src="/img/icons/IconLapizDiplomado.webp" alt="" />
                                                    Solicitar Informacion
                                                </button>
                                            </Form>
                                            <a className="btn w-100 gap-1 d-flex align-items-center justify-content-center mt-2" href={`https://api.whatsapp.com/send?phone=51${asesors}&text=Hola,%20solicito%20información%20del%20%20${tipo}:${titulo},%20mi%20correo%20es:`} style={{ background: "#25D366" }} target="_blank" rel="noreferrer">
                                                <img src="/img/icons/IconWhatsAppBlanco.webp" alt="" width={30} />
                                                <p className="text-white fw-bolder m-0 w-100 lh-1" style={{ fontSize: "11px" }}>Clic para Solicitar mas Información <span className="fs-4">WHATSAPP</span></p>
                                            </a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ backgroundColor: "#ecf5ff" }} className="shadow">
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12} className="d-flex justify-content-between px-4 py-3 flex-wrap-resp gap-3" id="intersector">
                            <div className="d-flex align-items-center gap-3 width-45-res">
                                <img src="/img/icons/IconCalenDiploma.webp" alt="" width={32} height={34} />
                                <div>
                                    {
                                        fecha !== undefined || fecha === "" ? (<p className="m-0 fw-semibold lh-sm font-size-14">Inicio<br />{(fecha).substring(8,)} de {parsearFecha(fecha)}</p>) : (<Spinner animation="grow" variant="primary" className="mx-auto" />)
                                    }
                                </div>
                            </div>
                            <div style={{ borderLeft: "1px solid #dddddd" }}></div>
                            <div className="d-flex align-items-center gap-3 width-45-res">
                                <img src="/img/icons/IconRelojDiploma.webp" alt="" width={32} height={34} />
                                <div>
                                    <p className="m-0 fw-semibold lh-sm font-size-14">Cantidad<br />{"0" + totalSesionesDiploma} Sesiones</p>
                                </div>
                            </div>
                            <div style={{ borderLeft: "1px solid #dddddd" }} className="ocultar"></div>
                            <div className="d-flex align-items-center gap-3 width-45-res">
                                <img src="/img/icons/IconCertiDiploma.webp" alt="" width={36} height={34} />
                                <div>
                                    <p className="m-0 fw-semibold lh-sm font-size-14">Certificacion<br />Universitaria</p>
                                </div>
                            </div>
                            <div style={{ borderLeft: "1px solid #dddddd" }}></div>
                            <div className="d-flex align-items-center gap-3 width-45-res">
                                <img src="/img/icons/IconLiveDiploma.webp" alt="" width={68} height={34} />
                                <div>
                                    <p className="m-0 fw-semibold lh-sm font-size-14">Clases<br />en Vivo</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}