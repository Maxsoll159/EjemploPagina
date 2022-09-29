import { Container, Row, Col } from "react-bootstrap";
export const Certificacion = ({tipo}) => {
    return (
        <div className="color-certiticado-diplomado mt-5" id="certificado">
            <Container>
                <Row>
                    <Col xl={8} lg={8} md={12} sm={12}>
                        <h3 className="fw-bold mt-5 text-center-res">Doble Certificación Universitaria</h3>
                        <div className="bg-white rounded p-5 mt-4 shadow">
                            <p className="fw-bolder">👉 Válido para postular a convocatorias Públicas y Privadas</p>
                            <p className="m-0 fw-bolder w-75 w-100res text-start">Los Certificados son válidos y aceptados por instituciones públicas, de acuerdo a la Normativa Nº141-2016-SERVIR-PE.</p>
                            <div className="w-75 d-flex justify-content-between mt-4 w-100res flex-wrap-resp">
                                <div className="d-flex align-items-center gap-3 gap-response-0">
                                    <img src="https://nuevapagina.s3.amazonaws.com/vistoDiploma.webp" alt="" />
                                    <p className="m-0 fw-bold text-start">Certificado por Curso</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 gap-response-0">
                                    <img src="https://nuevapagina.s3.amazonaws.com/vistoDiploma.webp" alt="" />
                                    <p className="m-0 fw-bold text-start">Diploma de Especialización</p>
                                </div>
                            </div>
                        </div>
                        {
                            tipo === "Diploma" ? (<img src="https://nuevapagina.s3.amazonaws.com/Diploma.webp" alt="" className="p-4 mb-4 mt-4 img-fluid" />) : 
                            (<img src="https://nuevapagina.s3.amazonaws.com/Certificado.webp" alt="" className="p-4 mb-4 mt-4 img-fluid" />)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}