import { Container, Row, Col } from "react-bootstrap";

export const Informacion = () => {
    return (
        <div className="color-info-inhouse position-relative">
            <Container>
                <Row className="py-3 align-items-center justify-content-center gap-3 gap-xl-0 gap-lg-0">
                    <Col xl={3} lg={3} md={5} sm={5} className="col-5 p-0" data-aos="zoom-in">
                        <div className="d-flex gap-xl-3 gap-2 align-items-center w-100">
                            <img src="/img/icons/inhouseicon1.webp" alt="" width={50} height={50} className="img-fluid" />
                            <div>
                                <h6 className="m-0 text-white">Capacitando</h6>
                                <h3 className="m-0 text-white fw-bolder font-size14-res">+ 11 años</h3>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={5} sm={5} className="col-5 p-0" data-aos="zoom-in">
                        <div className="d-flex gap-xl-3 gap-2 align-items-center w-100">
                            <img src="https://nuevapagina.s3.amazonaws.com/inhouseIcon2.webp" alt="" width={70} height={50} className="img-fluid" />
                            <div>
                                <h6 className="m-0 text-white">Modalidad virtual</h6>
                                <h3 className="m-0 text-white fw-bolder font-size14-res">en vivo</h3>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={5} sm={5} className="col-5 p-0" data-aos="zoom-in">
                        <div className="d-flex gap-xl-3 gap-2 align-items-center w-100">
                            <img src="https://nuevapagina.s3.amazonaws.com/inhouseIcon3.webp" alt="" width={60} height={50} className="img-fluid" />
                            <div>
                                <h6 className="m-0 text-white">Modalidad</h6>
                                <h3 className="m-0 text-white fw-bolder font-size14-res">presencial</h3>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} md={5} sm={5} className="col-5 p-0" data-aos="zoom-in">
                        <div className="d-flex gap-xl-3 gap-3 align-items-center w-100">
                            <div className="width-50-res">
                                <img src="https://nuevapagina.s3.amazonaws.com/inhouseIcon4.webp" alt="" width={40} height={50} className="img-fluid d-block mx-auto" />
                            </div>
                            <div>
                                <h6 className="m-0 text-white">Certificacion</h6>
                                <h3 className="m-0 text-white fw-bolder font-size14-res">universitaria</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}