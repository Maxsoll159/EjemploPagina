import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Informacion } from "../components/CursosDiploma/Infomacion";
import { EntidadesInHouse } from "../components/PageInHouse/EntidadesInHouse";
import { ModalInHouse } from "../components/PageInHouse/ModalInHouse";
import { ModalInHousePrin } from "../components/PageInHouse/ModalInHousePrin";
import { getLocalizacion } from "../helpers/CursosDiplomas";
import { ApiInHouse } from "../helpers/InhouseApi";
import AOS from 'aos';
import { VideoPresen } from "../components/CompoVideo/VideoPresen";
export const PageInHouse = () => {
    const [inHouse, setInHouse] = useState([])
    const [geo, setGeo] = useState()
    useEffect(() => {
        ApiInHouse().then((inhouse) => setInHouse(inhouse))
    }, [])

    useEffect(() => {
        getLocalizacion().then((datas) => setGeo(datas.city));
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <>
            <div className="color-header-inhouse">
                <Container>
                    <Row className="align-items-center">
                        <Col xl={6} lg={6} className="py-5" data-aos="zoom-in">
                            <div className="my-5 mx-3 mx-lg-0 mx-lg-0 mx-md-0 mx-sm-0">
                                <h1 className="text-white fw-bolder w-75 w-100res">Capacítate en nuestra
                                    Modalidad In House</h1>
                                <p className="fw-bolder color-l-diplomados">Aprende con nosotros</p>
                                <p className="text-white w-50 w-100res">Solicite un Programa de Capacitación a la medida de su INSTITUCIÓN  y Cumpla el Plan de Desarrollo de las Personas (PDP)</p>
                                <div className="d-flex gap-3 flex-column flex-xl-row flex-lg-row">
                                    <ModalInHousePrin inHouse={inHouse} geo={geo} />
                                    <a className="color-btn-what border-0 text-white fw-bolder py-2 px-4 rounded mt-0 mt-xl-4 mt-lg-4 mb-4 d-flex align-items-center justify-content-center gap-2" href='https://api.whatsapp.com/send?phone=51933929742&text=Hola,%20solicito%20información%20mi%20correo%20es:' target="_blank" rel="noreferrer"><img src="/img/imaganesPaginas/WhatsInHouse.webp" alt=""/> Solicitar por WhatsApp</a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} data-aos="zoom-in">
                            <img src="/img/inhouselogo.webp" alt="" width={480} className="d-none  d-xl-block d-lg-block d-md-none" />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*Componente*/}
            <Informacion />
            {/* FIN DEL COMPONENTE*/}
            <div>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className="text-center fw-bolder mt-5">Elige el programa que deseas llevar</h2>
                            <p className="text-center fw-bolder">Tenemos mas de 90 programas disponibles para ser dictados en tu Entidad / Empresa</p>

                        </Col>
                    </Row>
                    <Row className="gap-3">
                        <Col xl={12} className="d-flex flex-wrap gap-3 mt-5 justify-content-center">
                            {
                                inHouse !== undefined ? (
                                    inHouse.map((house) => (
                                        <Card key={house.id} style={{ width: '19rem' }} data-aos="zoom-in">
                                            <Card.Img variant="top" src={house.imagen} height={218} loading="lazy" />
                                            <div className="d-flex align-items-center px-3 py-1 rounded position-absolute translate-middle-y bg-white gap-2" style={{ left: "5%", top: "55%" }}>
                                                <img src="/img/icons/house.webp" alt={house.titulo} />
                                                <p className="m-0">Programa In House</p>
                                            </div>
                                            <Card.Body style={{ background: `${house.color}` }}>
                                                <Card.Title className="text-white w-75 mt-3" style={{ height: "95px", fontFamily: "Arial, Helvetica, sans-serif" }}>{house.titulo}</Card.Title>
                                                <div className="d-flex w-100 gap-2 justify-content-between">
                                                    <ModalInHouse {...house} geo={geo} />
                                                    <a className="rounded px-2 py-1 btn btn-light" href={`https://api.whatsapp.com/send?phone=51933875021&text=Hola,%20solicito%20información%20del%20%20del%20programa%20InHouse%20:${house.titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer"><img loading="lazy" src="/img/icons/whatsapp.svg" alt={house.titulo}/></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    ))
                                ) : (<h1>Cargando</h1>)
                            }
                        </Col>

                        <div className="my-3 w-100">
                            <div className="d-block mx-auto w-100res w-25 ps-5">
                                <ModalInHousePrin inHouse={inHouse} />
                            </div>
                        </div>

                    </Row>
                </Container>
            </div>
            <div className="color-info-inhouse pb-5">
                <Container>
                    <h2 className="text-white fw-bolder text-center pt-5">Beneficios de la Metodología In House</h2>
                    <Row className="gap-5">
                        <Col xl={12} className="d-flex flex-wrap gap-4 justify-content-center">
                            <div className="d-flex gap-4" style={{ width: "400px" }} data-aos="zoom-in">
                                <img src="/img/imaganesPaginas/InHouseIcon1.webp" alt="" width={90} height={90} />
                                <div>
                                    <h4 className="fw-bolder text-white w-75 w-100res">Personaliza tu Capacitación</h4>
                                    <p className="m-0 text-white">Usted elige los el tema y personaliza la capacitación con los objetivos específicos de la su entidad.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4" style={{ width: "400px" }} data-aos="zoom-in">
                                <img src="/img/imaganesPaginas/InHouseIcon2.webp" alt="" width={90} height={90} />
                                <div>
                                    <h4 className="fw-bolder text-white w-50 w-100res">Ahorro en inversión</h4>
                                    <p className="m-0 text-white">Manejamos el mejor precio en capacitaciones corporativas, solicite una propuesta sin compromiso y capacite a su equipo.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4" style={{ width: "400px" }} data-aos="zoom-in">
                                <img src="/img/imaganesPaginas/InHouseIcon3.webp" alt="" width={90} height={90} />
                                <div>
                                    <h4 className="fw-bolder text-white w-50 w-100res">Profesores Expertos</h4>
                                    <p className="m-0 text-white">Tenemos especialistas con apmlia experiencia en Gestión Privada y Pública, te proponemos al que mas se adecue a sus necesidades institucionales.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4" style={{ width: "400px" }} data-aos="zoom-in">
                                <img src="/img/imaganesPaginas/InHouseIcon4.webp" alt="" width={90} height={90} />
                                <div>
                                    <h4 className="fw-bolder text-white w-50 w-100res">Flexibilidad en Horarios</h4>
                                    <p className="m-0 text-white">Nos acondicionamos a los requerimientos de las entidades, considerando el lugar, fecha y horarios de acuerdo a solicitud. </p>
                                </div>
                            </div>
                            <div className="d-flex gap-4" style={{ width: "400px" }} data-aos="zoom-in">
                                <img src="/img/imaganesPaginas/InHouseIcon5.webp" alt="" width={90} height={90} />
                                <div>
                                    <h4 className="fw-bolder text-white w-50 w-100res">Plataforma Educativa</h4>
                                    <p className="m-0 text-white">Usted tendrá acceso a una plataforma propia desarrollada para brindar una mejor experiencia para nuestros alumnos.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4" style={{ width: "400px" }} data-aos="zoom-in">
                                <img src="/img/imaganesPaginas/InHouseIcon6.webp" alt="" width={90} height={90} />
                                <div>
                                    <h4 className="fw-bolder text-white w-50 w-100res">Informe de Capacitación</h4>
                                    <p className="m-0 text-white">Los alumnos son evaluados en nuestra plataforma y se entregan los informes de notas y asistencia como retroalimentación al servicio.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h3 className="fw-bolder text-center mt-5">Solicite una propuesta sin compromiso</h3>
                            <p className="text-center w-50 mx-auto mt-3 w-100res">Si necesita Capacitar a su Personal en un tema específico. Envíenos sus datos, para elaborar una propuesta a la medida de sus necesidades</p>
                            <button className="color-informacion d-block mx-auto border-0 text-primary fw-bolder py-3 px-4 rounded mt-5 mb-5 w-25 w-100res">Solicitar Cotización Aquí</button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="color-header-inhouse pb-5">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="text-center fw-bolder text-white mt-5" data-aos="zoom-in">Centro de Capacitación y Desarrollo Global</h3>
                            <p className="text-center text-white mt-3" data-aos="zoom-in">Más de 10 años brindando capacitaciones virtuales.</p>
                            <div className="w-75 w-100res d-block mx-auto">
                                <VideoPresen />
                            </div>
                            <div className="bg-white d-flex w-50 w-lg-75 mx-auto rounded w-100res mt-5" data-aos="zoom-in">
                                <div className="w-100 d-none d-lg-block d-xl-block">
                                    <div className="position-relative">
                                        <img src="/img/imaganesPaginas/medallaIso.webp" alt="" width={308} height={250} className="position-absolute" style={{ left: "-30px" }} />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h4 className="fw-bolder">Certificación ISO 9001-2015</h4>
                                    <p>Centro de Capacitación y Desarrollo Global, cuenta con certificación ISO 9001-2015 para garantizar la calidad de nuestros programas de capacitación.</p>
                                    <p className="fw-bolder">Cod: CO18.00048/U </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <EntidadesInHouse />
        </>


    )
}