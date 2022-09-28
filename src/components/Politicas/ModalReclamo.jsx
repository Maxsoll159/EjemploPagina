import { useState } from "react";
import { Row, Col, Modal, Form, FloatingLabel } from "react-bootstrap";
import { mandarReclamo } from "../../helpers/LibroReclamaciones";

export const ModalReclamo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const reclamo = (e) => {
        e.preventDefault()
        const tipoConsumidor = e.target.tipoConsumidor.value,
            nombre = e.target.nombre.value,
            apellido = e.target.apellido.value,
            numeroDocumento = e.target.numeroDocumento.value,
            correo = e.target.correo.value,
            tipoPrograma = e.target.tipoPrograma.value,
            direccion = e.target.direccion.value,
            telefono1 = e.target.telefono1.value,
            telefono2 = e.target.telefono2.value,
            programa = e.target.tipoPrograma.value,
            tituloPrograma = e.target.tituloPrograma.value,
            monto = e.target.monto.value,
            descripcionProducto = e.target.descripcionProducto.value,
            TipoReclamo = e.target.tipoReclamo.value,
            detalleReclamo = e.target.detalleReclamo.value,
            pedidoReclamo = e.target.pedidoReclamo.value,
            tipoReclamo = e.target.tipoReclamo.value,
            menorEdad = e.target.menorEdad.value,
            tipoDocumento = e.target.tipoDocumento.value

        if (nombre !== "" || apellido !== "" || numeroDocumento !== "" || numeroDocumento.lenght === 8 || correo !== "" || direccion !== "" || telefono1 !== "" || programa !== "" || tituloPrograma !== "" || monto !== "" || descripcionProducto !== "" || detalleReclamo !== "" || pedidoReclamo !== "" || tipoReclamo !== "" || tipoPrograma !== "" || tipoReclamo !== "" || menorEdad !== "" || tipoDocumento !== "") {
            const data = new FormData()
            data.append('tipo_programa', tipoPrograma)
            data.append('titulo_programa', tituloPrograma)
            data.append('monto_reclamo', monto)
            data.append('des_reclamo', descripcionProducto)
            data.append('tipo_reclamo', tipoReclamo)
            data.append('detalle_reclamo', detalleReclamo)
            data.append('pedido_reclamo', pedidoReclamo)
            data.append('telefono2', telefono2)
            data.append('tipo_documento', tipoDocumento)

            if(tipoConsumidor === "Empresa"){
                data.append('ruc', numeroDocumento)
                data.append('razon_social', nombre)
            }
            
            if(menorEdad === "Si"){
                data.append('nombres_menor', nombre)
                data.append('apellidos_menor', apellido)
                data.append('documento_menor', numeroDocumento)
            }else{
                data.append('nombres', apellido)
                data.append('apellidos', apellido)
                data.append('num_documento', numeroDocumento)
            }
            data.append('correo', correo)
            data.append('direccion', direccion)
            data.append('telefono1', telefono1)
            mandarReclamo(data).then((resp)=>console.log(resp))

        }
    }



    return (
        <>
            <button className="btn btn-primary shadow d-block mx-auto" onClick={handleShow}>
                Crear Reclamo o Queja
            </button>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={reclamo}>
                        <Row>
                            <h2 className="fw-bolder my-3 text-decorations">Informacion del consumidor</h2>
                            <Col xl={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tipo de Consumidor:</Form.Label>
                                    <Form.Select id="tipoConsumidor" defaultValue="">
                                        <option disabled value="">Cantidad de Alumnos</option>
                                        <option value="Persona natura">Persona natura</option>
                                        <option value="Empresa">Empresa</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="nombre">
                                    <Form.Label>Nombres:</Form.Label>
                                    <Form.Control type="text" placeholder="Nombres Completos" />
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="apellido">
                                    <Form.Label>Apellidos:</Form.Label>
                                    <Form.Control type="text" placeholder="Apellidos Completos" />
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Row>
                                    <Col xl={4}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Documento:</Form.Label>
                                            <Form.Select id="tipoDocumento" defaultValue="">
                                                <option disabled value="">Documento:</option>
                                                <option value="dni">D.N.I</option>
                                                <option value="ce">C.E</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={8}>
                                        <Form.Group className="mb-3" controlId="numeroDocumento">
                                            <Form.Label>Numero de Documento:</Form.Label>
                                            <Form.Control type="text" placeholder="Numero de documento" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Menor de edad:</Form.Label>
                                    <Form.Select id="menorEdad" defaultValue="">
                                        <option disabled value="">Menos de edad:</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="correo">
                                    <Form.Label>Correo Electronico:</Form.Label>
                                    <Form.Control type="email" placeholder="Correo electronico" />
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="direccion">
                                    <Form.Label>Dirreccion:</Form.Label>
                                    <Form.Control type="text" placeholder="Dirrecion de domicilio" />
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="telefono1">
                                    <Form.Label>Telefono 1:</Form.Label>
                                    <Form.Control type="text" placeholder="Numero de celular o telefono 1" />
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="telefono2">
                                    <Form.Label>Telefono 2:</Form.Label>
                                    <Form.Control type="text" placeholder="Numero de celular o telefono 2" />
                                </Form.Group>
                            </Col>
                            <h2 className="fw-bolder my-3 text-decorations">Identificacion del producto contratado</h2>
                            <Col xl={6}>
                                <Row>
                                    <Col xl={4}>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Programa:</Form.Label>
                                            <Form.Select id="tipoPrograma" defaultValue="">
                                                <option disabled value="">Programa:</option>
                                                <option value="Curso">Curso</option>
                                                <option value="Curso Grabado">Curso Grabado</option>
                                                <option value="Diploma/Diplomado">Diploma/Diplomado</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={8}>
                                        <Form.Group className="mb-3" controlId="tituloPrograma">
                                            <Form.Label>Titulo de Programa:</Form.Label>
                                            <Form.Control type="text" placeholder="Titulo de programa" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="monto">
                                    <Form.Label>Monto de Reclamo:</Form.Label>
                                    <Form.Control type="text" placeholder="Monto de Reclamo" />
                                </Form.Group>
                            </Col>
                            <Col xl={6}></Col>
                            <Col xl={6}>
                                <Form.Label>Descripcion:</Form.Label>
                                <FloatingLabel controlId="descripcionProducto" label="Descripcion de producto contratado (fechas, cuando realizo el pago...)">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                            <h2 className="fw-bolder my-3 text-decorations">Detalle del reclamo</h2>
                            <Col xl={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tipo de Reclamo:</Form.Label>
                                    <Form.Select id="tipoReclamo" defaultValue="">
                                        <option disabled value="">Tipo de Reclamo:</option>
                                        <option value="Reclamo">Reclamo</option>
                                        <option value="Queja">Queja</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Label>Detalle Reclamo:</Form.Label>
                                <FloatingLabel controlId="detalleReclamo" label="Detalle de reclamo (que es lo que no le parecio)">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col xl={6}></Col>
                            <Col xl={6}>
                                <Form.Label>Pedido de Reclamo:</Form.Label>
                                <FloatingLabel controlId="pedidoReclamo" label="Pedido de reclamo (que es lo que solicita)">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <button className="btn btn-success d-block mx-auto mt-3">Enviar Reclamo</button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}