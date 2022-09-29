import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { ModalInHouse } from "../PageInHouse/ModalInHouse";
export const FinalDiploma = ({ asesores, titulo, precio, testimonios, totalSesionesDiploma, tipo, id }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    let settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <div className="secWhat mt-5 pb-5">
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <h3 className="text-white fw-bolder mt-5">✍Hablemos por Whatsapp</h3>
                            <p className="text-white pb-5">Comunícate con nuestros asesores para brindarte asesoría personalizada.</p>
                            <div className="d-flex gap-3 flex-wrap-resp flex-md-nowrap justify-content-center">
                                {
                                    asesores !== undefined ? (
                                        asesores.map((asesor, index) => (
                                            <div key={index} className="rounded bg-white px-5 py-2 w-100res mt-5">
                                                <img src={asesor.avatar} alt="" width={120} height={120} className="rounded-circle d-block mx-auto" style={{ marginTop: "-60px", border: "4px solid #25d366" }} />
                                                <h6 className="fw-bolder m-0 text-center">{asesor.nombre}</h6>
                                                <p className="m-0 fw-bolder text-center">Asesora Académica</p>
                                                <h3 className="fw-bolder text-center">WHATSAPP</h3>
                                                <a className="d-flex d-flex align-items-center text-decoration-none justify-content-center-res" href={`https://api.whatsapp.com/send?phone=51${asesor.telefono}&text=Hola,%20solicito%20información%20del%20%20diploma:${titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer">
                                                    <img src="/img/iconBancos/WhatsAppIcon.webp" alt="" style={{ zIndex: "1" }} />
                                                    <div className="rounded-pill px-4 py-1" style={{ border: "2px solid #25d366", marginLeft: "-30px" }}>
                                                        <h4 className="m-0 text-center fw-bolder ms-3" style={{ color: "#25d366" }}>{asesor.telefono}</h4>
                                                    </div>
                                                </a>
                                            </div>
                                        ))
                                    ) : (<div></div>)
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-5 mb-5">
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <h4 className="fw-bolder mt-3 text-center">Testimonios de nuestros Alumnos</h4>
                            <p className="fw-bolder text-center">Más de 50,000 alumnos capacitados</p>
                            <div className="bg-transparent d-flex border rounded p-3 tamaño-diplomados justify-content-between align-items-center mb-4 mx-auto w-100res">
                                <img src="/img/icons/iconEstrellas.webp" alt="" width={93} height={16} />
                                <p className="m-0 font-size-14 fw-bolder">4.6 de calificación</p>
                                <img src="/img/icons/iconUsuarios.webp" alt="" width={25} height={16} />
                                <p className="m-0 font-size-14 fw-bolder">1.358 alumnos capacitados en este Diploma</p>
                            </div>
                            <Slider {...settings}>
                                {
                                    testimonios !== undefined ? (
                                        testimonios.map((tes, index) => (
                                            <div key={index}>
                                                <div style={{ border: "2px solid #e5f1ff", width: "95%" }} className="p-4 rounded">
                                                    <img src={tes.avatar} alt="" className="d-block mx-auto rounded-circle" width={100} height={100} />
                                                    <p className="mt-3">"{tes.comentario}"</p>
                                                    <img src="/img/icons/iconEstrellas.webp" alt="" height={15} className="d-block mx-auto" />
                                                    <p className="fw-bolder text-center m-0 mt-3">{tes.usuario}</p>
                                                    <p className="text-center mt-2">Servidor Público</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (<h1>No hay Testimonios</h1>)
                                }

                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ background: "#2000d1", marginTop: "150px" }} className="pb-5">
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="d-flex align-items-center justify-content-around">
                                <img src="/img/iconBancos/ChicaAmarillo.webp" alt="" width={375} height={424} style={{ marginTop: "-100px" }} className="ocultar" />
                                <div className="w-100res padding-5res">
                                    <h3 className="text-white fw-bolder text-end text-center-res">Separa tu <br className="ocultar" />vacante ahora</h3>
                                    <p className="m-0 text-white text-end text-center-res">Aprovecha la oferta <br className="ocultar" />
                                        y regístrate al Diploma</p>
                                </div>

                            </div>
                            <div className="bg-white rounded d-flex align-items-center flex-wrap-resp flex-md-nowrap">
                                <div className="p-5 w-50 w-100res">
                                    <p className="fw-bolder fs-4 mt-4">Qué Incluye el Diploma:</p>
                                    <p className="d-flex gap-3 align-items-center"><img src="/img/icons/IconCer.webp" alt="" width={15} height={15} />Certificación Universitaria</p>
                                    <p className="d-flex gap-3 align-items-center"><img src="/img/icons/IconQrDiploma.webp" alt="" width={15} height={15} />Certificado Digital</p>
                                    <p className="d-flex gap-3 colorRed align-items-center"><img src="/img/icons/IconWifiDiploma.webp" alt="" width={15} height={15} />{"0" + totalSesionesDiploma} sesiones en vivo</p>
                                    <p className="d-flex gap-3 align-items-center"><img src="/img/icons/IconAulaDiploma.webp" alt="" width={15} height={15} />Acceso aula virtual por un año</p>
                                    <p className="d-flex gap-3 align-items-center"><img src="/img/iconsDarkMode/chat.svg" alt="" width={15} height={15} />Soporte durante las clases</p>
                                </div>
                                <div style={{ border: "2px solid #e7f2ff", height: "300px" }} className="ocultar"></div>
                                <div className="p-5 w-50 w-100res padding-5res">
                                    <p className="text-center fs-5 lh-1 align-items-center fw-bolder text-primary">Pagar en línea de manera segura <br />con tarjeta de crédito / débito</p>
                                    {
                                        precio !== undefined ? (
                                            <>
                                                <p className="text-center m-0">Antes: <span className="text-decoration-line-through"> S/ {precio.normal}.00</span></p>
                                                <h3 className="colorRed fw-bolder text-center">S/ {precio.final}.00</h3>
                                            </>
                                        ) : (<h3>Error.....</h3>)
                                    }
                                    <button className="btn text-white fw-bolder w-100 p-3 d-flex justify-content-center align-items-center gap-3" style={{ background: "#0017eb" }}><img src="/img/icons/IconTarjeta.webp" alt="" className="" /> Pagar con tarjeta</button>
                                    <img src="/img/iconBancos/IconTarjetas.webp" alt="" className="mt-3 d-block mx-auto" />
                                    <div className="d-flex align-items-center gap-2 mt-2">
                                        <img src="/img/icons/IconCandado.webp" alt="" width={13} height={16} />
                                        <p className="m-0 font-size-14">Pagos seguros encriptados con seguridad SSL</p>
                                    </div>
                                    <div className="bg-warning rounded-pill p-2 text-center mt-2">
                                        Todos los precios incluyen IGV
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white mt-4 rounded d-flex w-50 mx-auto gap-3 justify-content-center align-items-center p-3 w-100res">
                                <img src="/img/iconBancos/WhatsAppIcon.webp" alt="" width={50} height={50} />
                                <p style={{ color: "#25d366" }} className="fw-bolder m-0 fs-5 lh-1 font-size14-res">Consulte por tarifas corporativas
                                    <br className="ocultar" /> y con orden de servicio (O/S).</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ background: "#14007f" }} className="pb-5">
                <Container>
                    <Row>
                        <Col xl={8}>
                            <h3 className="text-white text-center mt-5 fw-bolder pt-4">Solicita este {tipo} en Modalidad In House</h3>
                            <p className="fw-bolder text-center text-white">Puedes solicitar este programa para llevarlo de manera corporativa</p>
                            <div className="mx-auto w-25 d-block w-50res-tab">
                                <ModalInHouse titulo={titulo} id={id} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}