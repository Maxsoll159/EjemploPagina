import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from 'aos';
import "../assets/PageNosotros.css"
import { EntidadesInHouse } from "../components/PageInHouse/EntidadesInHouse";
import { useEffect } from "react";
import { VideoPresen } from "../components/CompoVideo/VideoPresen";
export const PageNosotros = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <>
            <div className="color-informacion h-100Tablet" style={{ height: "448px" }}>
                <Container>
                    <Row className="align-items-lg-baseline align-items-xl-start">
                        <Col xl={6} lg={6} className="col-12 px-5 pb-5 p-xl-5 pb-xl-0" data-aos="zoom-in">
                            <h1 className="fw-bolder m-0 mt-4">Centro de Capacitación
                                y <span style={{ color: "#0757CD" }}>Desarrollo Global 🎯</span></h1>
                            <p className="fw-bolder m-0 mt-3 letrasNostros">Mas de 11 años formando servidores públicos</p>
                            <Row>
                                <Col xl={6} className="col-6">
                                    <div className="d-flex align-items-center mt-4 gap-2 flex-column flex-xl-row">
                                        <div className="w-25 w-100res">
                                            <img src="https://nuevapagina.s3.amazonaws.com/NosotrosDesarrollo.webp" alt="" width={47} className="d-block mx-auto" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-size-14 letrasNostros text-center">Capacitando</p>
                                            <h3 className="fw-bolder m-0 letrasNostros text-center">+ 11 años</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} className="col-6">
                                    <div className="d-flex align-items-center mt-4 gap-2 flex-column flex-xl-row">
                                        <div className="w-25 w-100res">
                                            <img src="/img/imaganesPaginas/NosoIcon2.webp" alt="" width={70} className="d-block mx-auto" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-size-14 letrasNostros text-center">Alumnos Virtuales</p>
                                            <h3 className="fw-bolder m-0 letrasNostros text-center">+ 7,000</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} className="col-6">
                                    <div className="d-flex align-items-center mt-4 gap-2 flex-column flex-xl-row">
                                        <div className="w-25 w-100res">
                                            <img src="/img/imaganesPaginas/NosoIcon3.webp" alt="" width={60} className="d-block mx-auto" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-size-14 letrasNostros text-center">Alumnos Presenciales</p>
                                            <h3 className="fw-bolder m-0 letrasNostros text-center">+ 4,000</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} className="col-6">
                                    <div className="d-flex align-items-center mt-4 gap-2 flex-column flex-xl-row">
                                        <div className="w-25 w-100res">
                                            <img src="/img/imaganesPaginas/NosoIcon4.webp" alt="" width={40} className="d-block mx-auto"/>
                                        </div>
                                        <div>
                                            <p className="m-0 font-size-14 letrasNostros text-center">Alumnos Certificados</p>
                                            <h3 className="fw-bolder m-0 letrasNostros text-center">+ 14,000</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6} lg={6} className="d-none d-lg-block" data-aos="zoom-in">
                            <div className="position-relative pt-4 d-flex justify-content-center">
                                <img src="/img/imaganesPaginas/LogoNosotros.webp" alt="" height={476} className="position-absolute" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="color-header-inhouse">
                <Container>
                    <Row className="py-4 align-items-center p-xl-2 p-lg-2">
                        <Col xl={3} lg={3} className="col-6" data-aos="zoom-in">
                            <p className="text-white m-0 d-block mx-auto w-100res" style={{ width: "67%" }}>Nuestra empresa cuenta con la
                                "Certificación de calidad"
                                ISO 9001-2015</p>
                        </Col>
                        <Col xl={3} lg={3} className="col-6" data-aos="zoom-in">
                            <img src="/img/DesarrolloGlobalInfo.webp" alt="" className="img-fluid d-block mx-auto" width={270} />
                        </Col>
                        <Col xl={3} lg={3} className="col-6" data-aos="zoom-in">
                            <p className="m-0 fw-bolder text-white d-block mx-auto w-100res" style={{ width: "40%" }}>En Programas de Postgrado</p>
                        </Col>
                        <Col xl={3} lg={3} className="col-6" data-aos="zoom-in">
                            <img src="/img/Certificacion.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col xl={12} data-aos="zoom-in">
                            <h3 className="text-center fw-bolder mt-5">Acerca de Nosotros</h3>
                            <p className="fw-bolder text-center m-0">Conoce nuestra misión, visión y valores.</p>
                            <div className="d-flex w-75 mx-auto mt-5 rounded borderNosotros flex-column flex-md-row w-100res">
                                <div className="rounded p-3 p-xl-5">
                                    <img src="/img/imaganesPaginas/NosotrosDesarrollo.webp" alt="" width={200} className="d-block m-auto" />
                                </div>
                                <div className="color-informacion rounded p-2 p-xl-5">
                                    <p>Centro de Capacitación y Desarrollo Global es una Empresa Educativa privada dedicada a proveer desarrollo gerencial de amplio rango a los servidores civiles, técnicos y profesionales de nuestro país, a través de los servicios educativos en temas de gestión gubernamental. Venimos trabajando esforzadamente desde el año 2011 brindando capacitaciones en línea y de manera presencial como diplomas, cursos, seminarios, conferencias y talleres con el objetivo de aportar a nuestros clientes un servicio de calidad.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row className="justify-cotent-evenly">
                        <Col xl={12}>
                            <div className="w-75 mx-auto d-flex gap-3 flex-wrap flex-md-nowrap w-100res" data-aos="zoom-in"> 
                                <div className="borderNosotros mt-5 w-75 mx-auto rounded w-100res">
                                    <div className="flagNostros mt-3"><p className="m-0 text-white fw-bolder p-1 ps-4 fs-3 rounded-pill">Misión</p></div>
                                    <p className="m-0 p-4">Desarrollar y fortalecer las competencias profesionales de los funcionarios públicos y privados para impulsar el talento y la productividad.</p>
                                </div>
                                <div className="borderNosotros mt-5 w-75 mx-auto rounded w-100res" data-aos="zoom-in">
                                    <div className="flagNostros mt-3"><p className="m-0 text-white fw-bolder p-1 ps-4 fs-3 rounded-pill">Visión</p></div>
                                    <p className="m-0 p-4">Consolidarnos como una empresa educativa estratégica de las organizaciones públicas y privadas para el desarrollo de su talento humano.</p>
                                </div>
                                <div className="borderNosotros mt-5 w-75 mx-auto rounded w-100res" data-aos="zoom-in">
                                    <div className="flagNostros mt-3"><p className="m-0 text-white fw-bolder p-1 ps-4 fs-3 rounded-pill">Valores</p></div>
                                    <p className="m-0 p-4">Sinceridad<br />
                                        Innovación<br />
                                        Mejora Continua<br />
                                        Proactividad
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="color-informacion mt-5">
                <Container>
                    <Row>
                        <Col xl={6} sm={6} className="p-3 p-xl-5" data-aos="zoom-in">
                            <div className="p-xl-5">
                                <h2 className="fw-bolder w-75 w-100res">
                                    Garantía de
                                    Calidad de servicio
                                </h2>
                                <div></div>
                                <p className="m-0 w-100" style={{ fontSize: "18px" }}>Centro de Capacitación y Desarrollo Global, cuenta con certificación ISO 9001-2015 para garantizar la calidad de nuestros programas de capacitación.</p>
                                <p>PROGRAMAS DE POSTGRADO</p>
                                <p className="fw-bolder fs-4 m-0" style={{ fontSize: "18px" }}>Codigo: CO18.00048/U </p>
                            </div>
                        </Col>
                        <Col xl={6} sm={6} className="p-3 p-xl-5" data-aos="zoom-in">
                            <div className="p-xl-5">
                                <h4 className="fw-bolder mt-3 text-center letrasNostros">Certificación ISO 9001-2015</h4>
                                <img src="/img/Certificacion.webp" alt="" className="img-fluid d-block mx-auto" width={300} />
                                <div className="mt-3">
                                    <button className="btn rounded-pill shadow d-block mx-auto border border-primary bg-white border-2 px-5 fw-bolder text-primary">Ver Certificado ISO</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <h3 className="text-center fw-bolder mt-5">Donde estamos Ubicados</h3>
                        <p className="text-center fw-bolder mt-3 m-0">Visítanos en nuestra sede lince</p>
                        <p className="fw-bolder text-center m-0 mt-2">Lunes a viernes: <span className="fw-normal">9:00 am - 18:00 pm</span></p>
                        <p className="fw-bolder text-center m-0">Sábados: <span className="fw-normal">9:00 pm - 1:30 pm</span></p>
                        <p className="fw-bolder text-primary text-center my-4">Av. Julio Cesar Tello 741 - Lince, Lima Perú</p>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso1.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso2.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso3.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso4.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso5.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso6.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso7.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso8.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img loading="lazy" src="/img/imaganesPaginas/Noso9.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                        <Col xl={6} className="p-2" data-aos="zoom-in">
                            <img  loading="lazy"src="/img/imaganesPaginas/Noso10.webp" alt="" className="img-fluid d-block mx-auto" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="color-header-inhouse mt-5 py-5">
                <Container>
                    <Row>
                        <Col data-aos="zoom-in">
                            <h2 className="text-white fw-bolder text-center mt-5">Centro de Capacitación y Desarrollo Global</h2>
                            <img src="/img/DesarrolloGlobalInfo.webp" alt="" className="d-block mx-auto mt-4" height={80} />
                            <p className="text-white text-center mt-3">Más de 11 años brindando capacitaciones virtuales.</p>
                            <div className="w-75 w-100res d-block mx-auto">
                                <VideoPresen />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="color-informacion">
                <EntidadesInHouse />
            </div>
        </>
    )
}