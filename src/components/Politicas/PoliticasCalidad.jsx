import { Container, Row, Col } from "react-bootstrap";
export const PoliticasCalidad = () => {
    return (
        <Container>
            <h2 className="text-center fw-bolder mt-5 mt-xl-5 mb-5">POLÍTICA DE LA CALIDAD</h2>
            <Row className="mb-5">
                <Col xl={12} className="shadow mt-0 mt-xl-3 p-5 mb-5">
                    <h5 className="fw-bolder text-decoration-underline">DESARROLLO GLOBAL</h5>
                    <p className="text-justify">Brindar programas de capacitación virtual en gestión pública, con el compromiso de cumplir con los requisitos aplicables, mejorar continuamente la eficacia del sistema y lograr la satisfacción de nuestros clientes.</p>
                    <p className="m-0">Nuestros compromisos son:</p>
                    <ul className="pb-1">
                        <li>Lograr la satisfacción de nuestros clientes.</li>
                        <li>Mejorar el desempeño de nuestro sistema de gestión de la calidad.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}