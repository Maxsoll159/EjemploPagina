import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { VideoPresen } from "../CompoVideo/VideoPresen";
import { useNavigate } from "react-router-dom";

export const Entidades = () => {
    let navigate = useNavigate()
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }

    const irInHouse = () =>{
        navigate("/inhouse", {replace: true})
    }

    return (
        <>
            <div className="color-DarkMode-DetalleSeminario">
                <Container>
                    <Row>
                        <Col xl={12} data-aos="zoom-in">
                            <h3 className="text-white fw-bolder text-center mt-5">Centro de Capacitación y Desarrollo Global</h3>
                            <p className="text-white text-center mt-4">Más de 10 años brindando capacitaciones virtuales.</p>
                            <div className="w-50 w-100res d-block mx-auto ">
                                <VideoPresen />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-white" style={{ marginTop: "-55px" }}>
                <Container>
                    <Row>
                        <Col xl={12} data-aos="zoom-in">
                            <div className="d-flex mx-auto border gap-5 px-5 py-4 justify-content-center align-items-center rounded shadow flex-column-desa" style={{ maxWidth: "750px", marginTop: "70px" }}>
                                <img src="/img/imaganesPaginas/Iso9001.webp" alt="" width={208} height={125} />
                                <div>
                                    <h3 className="fw-bolder">Certificación ISO 9001-2015</h3>
                                    <p className="m-0 lh-1">Centro de Capacitación y Desarrollo Global, cuenta con certificación ISO 9001-2015 para garantizar la calidad de nuestros programas de capacitación.</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="pt-0 pt-xl-5">
                                    <h4 className="fw-bolder text-center pt-0 pt-xl-5">Entidades que confiaron en nosotros</h4>
                                    <p className="text-center p-Raleway mt-3">Mas de 50 000 servidores público capacitados</p>
                                </div>
                            </div>
                            <div className="w-75 mx-auto mt-4">
                                <Slider {...settings}>
                                    <div>
                                        <img src="/img/imaganesPaginas/marinaClien.webp" alt="" width={180} height={60} />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/Minis2Clie.webp" alt="" width={180} height={60} />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/MinisClien.webp" alt="" width={180} height={60} />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/onpClien.webp" alt="" width={180} height={60} />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/OsiClien.webp" alt="" width={180} height={60} />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/sunarpClien.webp" alt="" width={180} height={60} />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/agroClien.webp" alt="" width={180} height={60} />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/EsClien.webp" alt="" width={180} height={60} />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="colorBene mt-5 pb-5">
                <Container>
                    <h3 className="fw-bolder text-white text-center d-block pt-5">Estamos en línea, ¿Qué deseas hacer hoy?</h3>
                    <Row className="gap-3 mt-5 p-3">
                        <Col xl lg className="bg-white mt-2 p-5 rounded" data-aos="zoom-in">
                            <img src="/img/icons/IconHombreLapto.webp" alt="" width={98} height={64} />
                            <h4 className="fw-bolder mt-3">¿Ya eres alumno?</h4>
                            <p className="lh-1 h-25" style={{ fontSize: "17px" }}>Consulta con atención al alumno el estado
                                de tus notas y certificaciones.</p>
                            <a className="btn btn border border-2 border-success text-success w-75 p-2 fw-bolder fs-4 w-100res" href='https://api.whatsapp.com/send?phone=51990945941&text=Hola,%20solicito%20información%20mi%20correo%20es: ' target="_blank" rel="noreferrer">990945941</a>
                        </Col>
                        <Col xl lg className="bg-white mt-2 rounded p-5" data-aos="zoom-in">
                            <img src="/img/icons/IconCursos.webp" alt="" height={54} />
                            <h4 className="fw-bolder mt-4">Información de programas</h4>
                            <p className="lh-1 h-25" style={{ fontSize: "17px" }}>Quieres información de algún curso, diploma
                                o diplomado contáctanos aquí.</p>
                            <a className="btn btn border border-2 border-dark w-75 p-2 fw-bolder fs-4 w-100res" href='https://api.whatsapp.com/send?phone=51933929742&text=Hola,%20solicito%20información%20mi%20correo%20es: ' target="_blank" rel="noreferrer">933929742</a>
                        </Col>
                        <Col xl lg={12} className="bg-white mt-2 rounded p-5" data-aos="zoom-in"> 
                            <img src="/img/icons/IconGrupo.webp" alt="" width={88} height={64} />
                            <h4 className="fw-bolder mt-3">Cursos In House</h4>
                            <p className="lh-1 h-25" style={{ fontSize: "17px" }}>Puedes solicitar cualquiera de nuestros programas para que sean dictados en su ENTIDAD / INSTITUCIÓN.</p>
                            <button className="btn btn border border-2 border-dark w-100 p-2 fw-bolder fs-5 w-100res" onClick={irInHouse}>Solicitar esta Modalidad</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}