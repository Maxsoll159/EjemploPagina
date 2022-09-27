import { useState } from "react";
import { Container, Row, Col, Form, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { buscarReclamo } from "../../helpers/LibroReclamaciones";
import { ModalReclamo } from "./ModalReclamo";

export const LibroReclamos = () => {
    const Swal = require('sweetalert2')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [reclamo, setReclamo] = useState([])

    const consultaReclamo = (e) => {
        e.preventDefault()
        const tipo = e.target.tipoDoc.value
        const dni = e.target.nroDni.value
        const reclamo = e.target.nroReclamo.value
        if (dni.length < 8 || dni === "" || reclamo === "") {
            Swal.fire(
                'Algo salio mal Ops..!',
                'Por favor llene todo los campos',
                'error'
            )
        } else {
            const data = new FormData()
            data.append('tipo', tipo)
            data.append('numero', dni)
            data.append('codigo', reclamo)
            buscarReclamo(data).then((resp) => {
                if (resp === false) {
                    Swal.fire(
                        'Algo salio mal Ops..!',
                        'No se encontro ningun reclamo',
                        'error'
                    )
                } else {
                    setShow(true)
                    setReclamo(resp)
                }
            })
        }
    }

    return (
        <Container>
            <h2 className="text-center fw-bolder mt-5">LIBRO DE RECLAMACIONES</h2>
            <Row>
                <Col xl={6} className="shadow mt-3 p-5 mb-5 d-flex align-items-center">
                    <div className="w-100">
                        <h4 className="fw-bolder text-decoration-underline text-center">¿Tienes un Reclamo/Queja?</h4>
                        <ModalReclamo />
                    </div>
                </Col>
                <Col xl={6} className="shadow mt-3 p-5 mb-5">
                    <h4 className="fw-bolder text-decoration-underline text-center">Consulte estado de su reclamo o queja</h4>
                    <Form className="mt-4" onSubmit={consultaReclamo}>
                        <Row>
                            <Col xl={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bolder">Documento:</Form.Label>
                                    <Form.Select id="tipoDoc">
                                        <option value="dni">DNI</option>
                                        <option value="ce">C.E.</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xl={8}>
                                <Form.Group className="mb-3" controlId="nroDni">
                                    <Form.Label className="fw-bolder">Numero documento:</Form.Label>
                                    <Form.Control type="text" placeholder="DNI" />
                                </Form.Group>
                            </Col>
                            <Col xl={12}>
                                <Form.Group className="mb-3" controlId="nroReclamo">
                                    <Form.Label className="fw-bolder">Numero de Reclamo:</Form.Label>
                                    <Form.Control type="text" placeholder="Nr de Reclamo" />
                                </Form.Group>
                            </Col>
                            <p className="text-justify">* Al consultar reclamo/queja acepta <Link to="/politicas-de-privacidad/proteccion-datos">POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES</Link> </p>
                            <button className="btn btn-primary fw-bolder">Consultar</button>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center fw-bolder">Libro de Reclamaciones</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover variant="primary" className="rounded" responsive>
                        <thead>
                            <tr className="tablet">
                                <th>ESTADO</th>
                                <th>DETALLE</th>
                                <th>REGISTRO</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                reclamo !== undefined || reclamo !== [] ? (
                                    reclamo.map((recla, index) => (
                                        <tr key={index}>
                                            <td className="">{recla.estado}</td>
                                            <td className="">{recla.detalle}</td>
                                            <td className="">{recla.registro}</td>
                                        </tr>
                                    ))
                                ) : (<h1>Cargando</h1>)
                            }

                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </Container>
    )
}