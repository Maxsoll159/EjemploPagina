import { useState } from "react";
import { Row, Col, Modal, Form } from "react-bootstrap";

export const BtnRegistro = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <button className="btn text-primary fw-bolder shadow border-1 border-primary py-2 px-4 w-100res" onClick={handleShow}>Registro Gratuito</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="xl"
            >
                <Modal.Body className="m-0 p-0">
                    <Row>
                        <Col xl={6} className="bg-primary rounded p-5 d-none d-xl-block">
                            <img src='https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png' width={180} alt="desarrolloGlobal" />
                            <img src="/img/imaganesPaginas/LoginRegistro.webp" alt="" className="w-100 mt-5" height={290} />
                            <h2 className="text-white mt-5 w-50">Plataforma de Aprendizaje</h2>
                        </Col>
                        <Col xl={6} lg={12} className="p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="fw-bolder">Bienvenido 🙂</h2>
                                <button className="btn-close" onClick={handleClose}></button>
                            </div>
                            <h4 className="fw-bolder mt-4">Soy Nuevo Usuario</h4>
                            <p>Registrate para poder acceder al aula virtual de Centro de Capacitación y Desarrollo Global.</p>
                            <Form className="m-0 p-0">
                                <Row>
                                    <Col xl={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Ingresa tu Nombre" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Ingresa tu Apellido" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Correo Electrónico" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Celular" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="password" placeholder="Contraseña" />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="password" placeholder="Repetir Contraseña" />
                                        </Form.Group>
                                    </Col>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox2sd">
                                        <Form.Check type="checkbox" label="Acepto Términos y Condiciones y las políticas de Privacidad de Datos" defaultChecked={true} />
                                    </Form.Group>
                                </Row>
                                <button className="btn btn-primary fw-bolder w-100 py-2">Ingresar al Aula Virtual</button>
                            </Form>
                            <p className="text-center text-primary mt-3">No tengo cuenta, Quiero registrarme</p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

