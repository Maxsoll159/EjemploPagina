import "../assets/PagePrincipal.css";
import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Beneficios } from "../components/PagePrincipal/Beneficios";
import { Entidades } from "../components/PagePrincipal/Entidades";
import { useNavigate } from "react-router-dom";
import { confeti } from "../helpers/funciones";
import { Informacion } from "../components/CursosDiploma/Infomacion";
import { CartsPagePrin } from "../components/PagePrincipal/CartsPagePrin";
import AOS from 'aos';

export const PagePrincipal = () => {

    let navigate = useNavigate()
    const [botones, setBotones] = useState({
        btnProx: true,
        btnDiplo: false,
        btnCur: false,
    })
    const { btnProx, btnDiplo, btnCur } = botones
    useEffect(() => {
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
            <div>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img src="https://nuevapagina.s3.amazonaws.com/bannerPc.webp" alt="" className="w-100 d-none d-sm-block d-xl-block" height={448} />
                        <img src="https://nuevapagina.s3.amazonaws.com/bannerMovil.webp" alt="" className="w-100 d-sm-none d-xl-none" height={448}/>
                    </Carousel.Item>
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
                                    btnCur: false
                                })}>Proximo Inicios</button>
                                <button className={`btn rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold ${btnDiplo ? "btn-light text-primary" : "contenedorBotonesPrinc text-white"}`} onClick={() => setBotones({
                                    btnProx: false,
                                    btnDiplo: true,
                                    btnCur: false
                                })} >Diplomas</button>
                                <button className={`btn rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold ${btnCur ? "btn-light text-primary" : "contenedorBotonesPrinc text-white"}`} onClick={() => setBotones({
                                    btnProx: false,
                                    btnDiplo: false,
                                    btnCur: true
                                })}>Cursos</button>
                                <button className="btn contenedorBotonesPrinc text-white rounded-pill px-4 py-2 padding-button-principal border-radius-res fw-bold" onClick={() => verMas("diplomados")}>Diplomados</button>
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