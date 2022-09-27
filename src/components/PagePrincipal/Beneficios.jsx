import { Container, Row, Col } from "react-bootstrap";


export const Beneficios = () => {

    return (
        <div className="colorBene py-1 mt-5">
            <Container>
                <Row className="mx-auto py-5 mt-5 md-gap-2 w-100res">
                    <Col xl={4} lg={4} md={4} sm={6} data-aos="zoom-in">
                        <div>
                            <h3 className="text-white fw-bolder w-50 text-center text-sm-start w-100res">Beneficios
                                de nuestras
                                programas</h3>
                            <div className="lineaBen mt-5 rounded-pill"></div>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} data-aos="zoom-in">
                        <div className="">
                            <img src="/img/imaganesPaginas/LiveBene.svg" alt="" width={92} height={70} className="d-block margin-auto-resp" />
                            <h5 className="text-white fw-bolder mt-2 text-center text-sm-start">Clases 100% en vivo</h5>
                            <p className="text-white lh-sm text-start w-75 w-100res text-center text-sm-start">Todas nuestras clases son virtuales en vivo, y podras interactuar con el docente y realizar preguntas en tiempo real.
                            </p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} data-aos="zoom-in">
                        <div className="">
                            <img src="/img/imaganesPaginas/AulaBene.svg" alt="" width={92} height={70} className="d-block margin-auto-resp" />
                            <h5 className="text-white fw-bolder mt-2 text-center text-sm-start">Aula Interactiva</h5>
                            <p className="text-white lh-sm text-start w-75 w-100res text-center text-sm-start">Acceso las 24 horas al día, desde una computadora, smartphone o tablet, para ver las sesiones en vivo, repasar clases, descargar materiales y resolver evaluaciones, activo durante un año.
                            </p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} data-aos="zoom-in">
                        <div className="">
                            <img src="/img/imaganesPaginas/UniBene.svg" alt="" width={92} height={70} className="d-block margin-auto-resp" />
                            <h5 className="text-white fw-bolder mt-2 text-center text-sm-start">Certificación Universitaria</h5>
                            <p className="text-white lh-sm text-start w-75 w-100res text-center text-sm-start">Descarga de certificación digital, el recojo en oficina del físico es opcional luego de aprobar las evaluaciones.
                            </p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} data-aos="zoom-in">
                        <div className="">
                            <img src="/img/imaganesPaginas/CertBene.svg" alt="" width={92} height={70} className="d-block margin-auto-resp" />
                            <h5 className="text-white fw-bolder mt-2 text-center text-sm-start">Certificado Digital</h5>
                            <p className="text-white lh-sm text-start w-75 w-100res text-center text-sm-start">La certificación se otorga con respaldo universitario, válido para todo tipo de convocatorias.
                            </p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} data-aos="zoom-in">
                        <div className="">
                            <img src="/img/imaganesPaginas/IsoBene.svg" alt="" width={92} height={70} className="d-block margin-auto-resp" />
                            <h5 className="text-white fw-bolder mt-2 text-center text-sm-start">Certificación ISO 9001-2015</h5>
                            <p className="text-white lh-sm text-start w-75 w-100res text-center text-sm-start">Somos una empresa con certificación de calidad para dictar programas virtuales, certificado por VEREAU VERITAS.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}