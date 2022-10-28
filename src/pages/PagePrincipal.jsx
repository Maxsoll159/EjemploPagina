import "../assets/PagePrincipal.css";
import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Beneficios } from "../components/PagePrincipal/Beneficios";
import { Entidades } from "../components/PagePrincipal/Entidades";
import { useNavigate } from "react-router-dom";
import { ChatBurbuja, confeti } from "../helpers/funciones";
import { Informacion } from "../components/CursosDiploma/Infomacion";
import { CartsPagePrin } from "../components/PagePrincipal/CartsPagePrin";
import AOS from 'aos';
import { Helmet } from "react-helmet";
export const PagePrincipal = () => {

    let navigate = useNavigate()
    const [botones, setBotones] = useState({
        btnProx: true,
        btnDiplo: false,
        btnCur: false,
        btnDiplomado: false,
    })


    const { btnProx, btnDiplo, btnCur, btnDiplomado} = botones
    useEffect(() => {
        ChatBurbuja()
        setTimeout(() => {
            confeti()
        }, 500)
    }, [])

    const verMas = (para) => {
        navigate(`/${para}`)
    }


    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);


    let banner = {
        backgroundImage: 'url("https://images.thedirect.com/media/article_full/deadpool-3-creator-disney.jpg")',
        height: '100%',
        width: "100%"
    }
    return (
        <>

            <Helmet>
                <title>Centro de Capacitación y Desarrollo Global</title>
                <meta
                    name="Desarrollo Global"
                    content="Desarrollo Global con mas de 11 años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9001-2015."
                />

                <meta name="author" content="Centro de Capacitación y Desarrollo Global" />
                <meta name="google-signin-client_id" content="740073627785-npq9orne985ob2cs6j5qlb9m2sdsl2lg.apps.googleusercontent.com" />
                <meta name="google-site-verification" content="hWAwX4vVYax5SPwJoWF6AzsqmoKcV1XmuWQgHgqoD44" />
                <link rel="alternate" hreflang="es" href="https://aula.desarrolloglobal.pe/" />

                <meta property="og:site_name" content="Centro de Capacitación y Desarrollo Global" />
                <meta property="fb:app_id" content="226972427818042" />

                <meta property="og:title" content="Planeamiento y Presupuesto en la Gestión Pública" />
                <meta property="og:description" content="Desarrollo Global con mas de 11 años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9001-2015." />
                {/*
                    <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/05/PLANEAMIENTO%20Y%20PRESUPUESTO.png" />
                    <meta property="og:image:secure_url" content="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/05/PLANEAMIENTO%20Y%20PRESUPUESTO.png" />
                */}
                
                <meta property="article:tag" content="Desarrollo global, centro de capacitaciones, cursos, diplomas" />
            </Helmet>

            <div>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <div className="bannerStyle banner1">
                            <Container>
                                <Row className="pt-5">
                                    <Col xl={6} lg={5} data-aos="zoom-in">
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="/img/DesarrolloGlobalInfo.webp" alt="" width={300} height={73} className="" />
                                            <img src="/img/Certificacion.webp" alt="" height={93} className="d-none d-xl-block" />
                                        </div>
                                        <h1 className="text-white fw-bolder mt-4">Centro de Capacitación
                                            y Desarrollo Global 🎯</h1>
                                        <p className="text-white w-75 w-100res mt-5 mt-lg-3">Mas de 11 años brindando programas virtuales; Somos una empresa educativa que cuenta con certificación de calidad ISO 9001-2015.</p>
                                    </Col>
                                    <Col xl={6} lg={7} data-aos="zoom-in">
                                        <img src="/img/genteIndex.webp" alt="" height={400} className="d-none d-sm-none d-md-none d-lg-block d-xl-block" />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <div className="bannerStyle banner2">
                            <Container>
                                <Row>
                                    <Col xl={6} lg={6}>
                                        <h4 className="text-white pt-4">Tenemos programas enfocados al
                                            desarrollo de tus capacidades.</h4>
                                        <Row className="gap-2 mt-5 mx-auto align-items-center">
                                            <Col xl={4} className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="/img/InHouseEjemplo.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Sistema Integrado
                                                de Administración
                                                Financiera</p></div></Col>
                                            <Col xl className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="/img/IconSIGA.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Sistema Integrado
                                                de Gestión
                                                Administrativa</p></div></Col>
                                            <Col xl className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="/img/IconSEASE.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Sistema Electrónico
                                                de Contrataciones
                                                del Estado</p></div></Col>
                                            <Col xl={4} className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="/img/IconCompras.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Central de
                                                Compras Públicas
                                                PERÚ COMPRAS</p></div></Col>
                                            <Col xl className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="/img/IconGestion.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Administración
                                                y Gestión
                                                Pública</p></div></Col>
                                            <Col xl className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="/img/IconInvierte.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Sistema Nacional de
                                                Gestión de Inversiones
                                                INVIERTE.PE</p></div></Col>
                                            <Col xl={4} className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="/img/IconEstado.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Gestión de
                                                Contrataciones
                                                del Estado</p></div></Col>
                                            <Col xl className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="https://nuevapagina.s3.amazonaws.com/IconInicio7.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Gestión de
                                                Contrataciones
                                                del Estado</p></div></Col>
                                            <Col xl className="col-3 mx-auto"><div className="bg-white rounded d-flex align-items-center gap-2 p-2"><img src="https://nuevapagina.s3.amazonaws.com/IconInicio6.webp" alt="" width={45} className="d-block mx-auto" /><p className="m-0 font-size-11 d-none d-lg-none d-xl-block">Gestión de
                                                Contrataciones
                                                del Estado</p></div></Col>
                                        </Row>
                                        <p className="text-white m-0 fs-5  mt-3">Aprende y Certifícate en mas de 90 programas</p>
                                    </Col>
                                    <Col xl={6} lg={6}>
                                        <img src="/img/HombreIndex.webp" alt="" className="d-none d-sm-none d-md-none d-lg-block d-xl-block img-fluid" />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <Informacion />
                <div>
                    <Container>
                        <Row>
                            <h3 className="fw-bolder text-center mt-5">Categoria de Programas</h3>
                            <div className="contenedorBotonesPrinc rounded-pill p-2 mx-auto d-flex gap-2 justify-content-around w-75 mt-5 flex-wrap-resp border-radius-res w-100res scroll">
                                <button className={`btn rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold ${btnProx ? "btn-light text-primary" : "contenedorBotonesPrinc text-white"}`} onClick={() => setBotones({
                                    btnProx: true,
                                    btnDiplo: false,
                                    btnCur: false,
                                    btnDiplomado: false,
                                })}>Proximo Inicios</button>
                                <button className={`btn rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold ${btnDiplo ? "btn-light text-primary" : "contenedorBotonesPrinc text-white"}`} onClick={() => setBotones({
                                    btnProx: false,
                                    btnDiplo: true,
                                    btnCur: false,
                                    btnDiplomado: false,
                                })} >Diplomas</button>
                                <button className={`btn rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold ${btnCur ? "btn-light text-primary" : "contenedorBotonesPrinc text-white"}`} onClick={() => setBotones({
                                    btnProx: false,
                                    btnDiplo: false,
                                    btnCur: true,
                                    btnDiplomado: false,
                                })}>Cursos</button>
                                <button className={`btn rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold ${btnDiplomado ? "btn-light text-primary" : "contenedorBotonesPrinc text-white"}`} onClick={() => setBotones({
                                    btnProx: false,
                                    btnDiplo: false,
                                    btnCur: false,
                                    btnDiplomado: true,
                                })}>Diplomados</button>
                                <button className="btn contenedorBotonesPrinc text-white rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold" onClick={() => verMas("inhouse")}>InHouse</button>
                                <button className="btn contenedorBotonesPrinc text-white rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold" onClick={() => verMas("seminarios")}>Seminarios Gratuitos</button>
                            </div>
                        </Row>
                        <CartsPagePrin {...botones} />
                    </Container>
                </div>
            </div>
            <Beneficios />
            <Entidades />
        </>
    )
}