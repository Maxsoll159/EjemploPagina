import { Row, Col, Container } from "react-bootstrap";

export const PasarelaPagos = () => {
    return (
        <div>
            <div className="shadow">
                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex align-items-center gap-4 py-3">
                                <img src="/img/icons/flechaAtras.webp" alt="" className="img-fluid" />
                                <p className="m-0 fw-bolder text-black-50">Volver atras</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex align-items-center gap-3 h-100">
                                <div className="bg-primary rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                    <img src="/img/icons/VistoBueno.webp" alt="" className="position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <p className="m-0 fw-bold text-primary">Detalle</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex align-items-center gap-3 h-100">
                                <div className="border border-primary border-3 rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                    <p className="m-0 fw-bolder text-primary d-flex align-items-center justify-content-center fs-5">2</p>
                                </div>
                                <p className="m-0 fw-bold text-primary">Completar Datos</p>
                            </div>
                        </Col>
                        <Col><div className="d-flex align-items-center gap-3 h-100">
                            <div className="border border-primary border-3 rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                <p className="m-0 fw-bolder text-primary d-flex align-items-center justify-content-center fs-5">3</p>
                            </div>
                            <p className="m-0 fw-bold text-primary">Método de Pago</p>
                        </div>
                        </Col>
                        <Col><div className="d-flex align-items-center gap-3 h-100">
                            <div className="border border-primary border-3 rounded-circle position-relative" style={{ width: "40px", height: "40px" }}>
                                <p className="m-0 fw-bolder text-primary d-flex align-items-center justify-content-center fs-5">4</p>
                            </div>
                            <p className="m-0 fw-bold text-primary">Pago Realizado</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ background: "#F9FBFC" }}>
                <Container>
                    <h2 className="fw-bolder pt-5">Detalles</h2>
                    <Row className="shadow pb-5 mt-5">
                        <Col xl={4} style={{ background: "#F9FBFC" }}>
                            <div className="p-4">
                                <p className="fw-bolder text-primary fs-5">Resumen de Compra:</p>
                            </div>
                        </Col>
                        <Col xl={8} className="bg-white" >
                            <div className="p-4">
                                <h4 className="fw-bolder">Bienvenido a la pasarela de pagos</h4>
                                <p className="m-0">Compra el Programa elegido desde nuestra plataforma de manera segura, puedes iniciar sesión si eres alumno ó regístrate si aún no estas registrado. 🙂</p>
                                <img src="/img/DesarrolloGlobalInfo.webp" className="mt-4 d-block mx-auto"></img>
                                <p>Si ya tienes una cuenta en nuestra plataforma</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>


    )
}