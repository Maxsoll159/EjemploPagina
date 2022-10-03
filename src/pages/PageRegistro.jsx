
import { Container, Row, Col, FloatingLabel } from "react-bootstrap";
import { FormRegistro } from "../components/PagePrincipal/FormRegistro";
export const PageRegistro = () => {
    
    return (
        <>
            <div>
                <Container fluid>
                    <Row className="" style={{ height: "calc(100vh - 77px)" }}>
                        <Col xl={6} lg={6} className="bg-primary p-5 d-none  d-lg-block d-xl-block">
                            <img src='https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png' width={200} alt="desarrolloGlobal" />
                            <img src="/img/imaganesPaginas/LoginRegistro.webp" alt="" className="w-100 mt-5 " height={450} />
                            <h1 className="text-white mt-5 w-50">Plataforma de Aprendizaje</h1>
                        </Col>
                        <Col xl={6} lg={6} className="p-xl-5 ">
                            <div className="p-xl-5 py-5 ">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h1 className="fw-bolder">Bienvenido 🙂</h1>
                                </div>
                                <h4 className="fw-bolder mt-4">Soy Nuevo Usuario</h4>
                                <p>Registrate para poder acceder al aula virtual de Centro de Capacitación y Desarrollo Global.</p>
                                <FormRegistro/>
                                <p className="text-center text-primary mt-3">No tengo cuenta, Quiero registrarme</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}