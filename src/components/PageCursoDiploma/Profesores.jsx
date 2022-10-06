import { useState } from "react";
import { Container, Row, Col, Card, Button, Spinner, Modal } from "react-bootstrap";
import Slider from "react-slick";
export const Profesores = ({ profe }) => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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

    {/*MODAL*/ }
    const [show, setShow] = useState(false);
    const [infoProfe, setInfoProfe] = useState()
    const handleClose = () => setShow(false);
    const handleShow = (profesor) => {
        setInfoProfe(profesor)
        setShow(true);
    }

    return (
        <div className="bg-white mt-5 pb-4" id="profesores">
            <Container>
                <Row>
                    <Col xl={8} lg={8} md={12} sm={12}>
                        <h3 className="fw-bold text-center">Profesores</h3>
                        <p className="text-center fw-bolder">Profesionales con amplia experiencia en la Gestión Pública</p>
                        <div className="mt-4">
                            <Slider {...settings}>
                                {
                                    profe !== undefined ? (
                                        profe.map((profesor, index) => (

                                            <div key={index} className="mb-3">
                                                <Card style={{ width: '15rem' }} className="mx-auto shadow border border-0">
                                                    <Card.Img variant="top" src={profesor.avatar} height={250} />
                                                    <Card.Body>
                                                        <Card.Title className="fs-6 text-center">{profesor.nombre}</Card.Title>
                                                        <Card.Text className="fw-bold text-center">
                                                            {profesor.profesion}
                                                        </Card.Text>
                                                        <Button variant="primary" className="d-block mx-auto w-50" onClick={() => handleShow(profesor)}>Ver mas</Button>

                                                    </Card.Body>
                                                </Card>
                                            </div>

                                        ))
                                    ) : (<Spinner animation="grow" variant="primary" className="mx-auto" />)
                                }

                            </Slider>
                        </div>
                        <p className="text-center fw-bolder text-danger mt-4 fs-5">*Segun disponibilidad de los docentes</p>
                    </Col>
                </Row>
            </Container>
            {
                infoProfe !== undefined ? (
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>{infoProfe.nombre}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{infoProfe.descripcion}</Modal.Body>
                    </Modal>
                ) : ("")
            }
        </div >
    )
}