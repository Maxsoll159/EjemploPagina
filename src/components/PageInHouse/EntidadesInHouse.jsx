import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
export const EntidadesInHouse = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
    return (
        <>

            <div className="py-5">
                <Container>
                    <Row>
                        <Col xl={12} className="my-5">
                            <h3 className="fw-bolder text-center">Entidades que confiaron en nosotros</h3>
                            <p className="text-center">Mas de 50 000 servidores público capacitados</p>
                            <div className="my-5 w-75 mx-auto">
                                <Slider {...settings}>
                                    <div>
                                        <img src="/img/imaganesPaginas/marinaClien.webp" alt="" width={180} height={65} className="w-100res" />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/Minis2Clie.webp" alt="" width={180} height={65} className="w-100res" />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/MinisClien.webp" alt="" width={180} height={65} className="w-100res" />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/onpClien.webp" alt="" width={180} height={65} className="w-100res" />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/OsiClien.webp" alt="" width={180} height={65} className="w-100res" />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/sunarpClien.webp" alt="" width={180} height={65} className="w-100res" />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/agroClien.webp" alt="" width={180} height={65} className="w-100res" />
                                    </div>
                                    <div>
                                        <img src="/img/imaganesPaginas/EsClien.webp" alt="" width={180} height={65} className="w-100res" />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}