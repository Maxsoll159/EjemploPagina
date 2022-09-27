import { useEffect, useState } from "react";
import { Row, Col, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import { recortarDescripcion } from "../../helpers/funciones";
import { postInHouse } from "../../helpers/InhouseApi";

export const ModalInHouse = ({ id, titulo, descripcion, geo }) => {
    const Swal = require('sweetalert2')    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const infoInHouse = (e) => {
        e.preventDefault()
        const nombre = e.target.nombre.value
        const correo = e.target.correo.value
        const telefono = e.target.telefono.value
        const entidad = e.target.entidad.value
        const cantidad = e.target.cantidad.value
        const nivel = e.target.nivelInhouse.value
        if (nombre === "" || correo === "" || telefono === "" || cantidad === "" || nivel === "") {
            Swal.fire(
                'Algo salio mal Ops..!',
                'Por favor llene todo los campos',
                'error'
            )
        } else {
            const data = new FormData()
            data.append('pagina', "www.desarrolloglobal.com/inh")
            data.append('cantidad', cantidad)
            data.append('inhouse', titulo)
            data.append('id_inhouse', id)
            data.append('correo', correo)
            data.append('entidad', entidad)
            data.append('nivel', nivel)
            data.append('nombres', nombre)
            data.append('telefono', telefono)
            data.append('ciudad', geo)

            postInHouse(data).then((resp) => {
                if (resp === true) {
                    Swal.fire(
                        'Buen Trabajo!',
                        'Datos enviados correctamente!',
                        'success'
                    )
                } else {
                    Swal.fire(
                        'Algo salio mal Ops..!',
                        'Los datos no fueron enviados!',
                        'error'
                    )
                }
            })
        }
    }
    return (
        <>
            <button className="btn btn-light p-0 w-100 d-flex align-items-center gap-1 font-size-14 justify-content-between fw-bolder px-2" onClick={handleShow}><img src="/img/icons/iconPencil.webp" alt={titulo} />Informacion del Programa</button>
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
                        <Col xl={6} className="rounded p-5 d-none d-xl-block" style={{ background: "#04a5e2" }}>
                            <img src='https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png' width={180} alt="desarrolloGlobal" />
                            <div className="d-flex align-items-start mt-3 justify-content-between">
                                <img src="/img/icons/ImgInHouseInf.webp" alt="" width={300} className="rounded" />
                                <img src="/img/icons/FechaInHouse.webp" alt="" width={160} />
                            </div>
                            <div className="d-flex align-items-center px-4 py-2 w-50 rounded gap-3 mt-3 color-inhouse">
                                <img src="/img/icons/house.webp" alt="" />
                                <p className="m-0">Programa In-House</p>
                            </div>
                            <h2 className="text-white mt-3 mb-3 w-100 fw-normal">{titulo}</h2>
                            <div className="d-flex gap-3 w-100">
                                <button className="btn btn-light d-flex align-items-center gap-2 font-size-14"><img src="/img/icons/iconEmail.webp" alt={titulo} width={20} /> asesoria@desarrolloglobal.pe</button>
                                <a className="btn btn-success d-flex align-items-center gap-2 font-size-14" href={`https://api.whatsapp.com/send?phone=51933875021&text=Hola,%20solicito%20información%20del%20%20del%20programa%20InHouse%20:${titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer"><img src="/img/icons/iconWhatWhite.webp" alt={titulo} width={25} />Solicitar por whatsapp</a>
                            </div>
                        </Col>
                        <Col xl={6} lg={12} className="p-5">
                            <div className="d-flex justify-content-end">
                                <button className="btn-close" onClick={handleClose} style={{ marginTop: "-25px" }}></button>
                            </div>
                            <div>
                                <div className="d-flex align-items-center px-4 py-2 w-50 rounded gap-3 mt-3 color-inhouse w-100res">
                                    <img src="/img/icons/house.webp" alt="" />
                                    <p className="m-0">Programa In-House</p>
                                </div>
                                <h2 className="mt-3 text-primary fw-normal">{titulo}</h2>
                                <p>{descripcion !== undefined ? (recortarDescripcion(descripcion)) : ("")}</p>
                                <h3 className="fw-bolder">Solicítalo una proforma aquí</h3>
                                <Form onSubmit={infoInHouse}>
                                    <Row>
                                        <Col xl={6} lg={6}>
                                            <Form.Group className="mb-3" controlId="nombre">
                                                <Form.Control type="text" placeholder="Ingresa tu Nombre" />
                                            </Form.Group>
                                        </Col>
                                        <Col xl={6} lg={6}>
                                            <Form.Group className="mb-3" controlId="correo">
                                                <Form.Control type="email" placeholder="Ingresa tu Correo" />
                                            </Form.Group>
                                        </Col>
                                        <Col xl={6} lg={6}>
                                            <Form.Group className="mb-3" controlId="telefono">
                                                <Form.Control type="text" placeholder="Ingresa tu telefono" pattern="[0-9]{9}" />
                                            </Form.Group>
                                        </Col>
                                        <Col xl={6} lg={6}>
                                            <Form.Group className="mb-3" controlId="entidad">
                                                <Form.Control type="text" placeholder="Entidad (opcional)" />
                                            </Form.Group>
                                        </Col>
                                        <Col xl={6} lg={6}>
                                            <Form.Select id="cantidad" defaultValue="">
                                                <option disabled value="">Cantidad de Alumnos</option>
                                                <option value={"5-10"}>De 5 a 10 participantes</option>
                                                <option value={"10-15"}>De 10 a 15 participantes</option>
                                                <option value={"15-20"}>De 15 a 20 participantes</option>
                                                <option value={"20-30"}>De 20 a 30 participantes</option>
                                                <option value={"30-40"}>De 30 a 40 participantes</option>
                                                <option value={"40-50"}>De 40 a 50 participantes</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xl={6} lg={6}>
                                            <Form.Select id="nivelInhouse" defaultValue="" className="mt-3 mt-xl-0 mt-lg-0">
                                                <option disabled value="">Nivel del Curso</option>
                                                <option value={"Basico"}>Basico</option>
                                                <option value={"Intermedio"}>Intermedio</option>
                                                <option value={"Avanzado"}>Avanzado</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3 d-flex gap-3 font-size-14 mt-3" controlId="formBasicCheckbox" style={{ color: "#2a50e8" }}>
                                        <Form.Check type="checkbox" defaultChecked={true} />
                                        <Form.Label className="text-dark">Acepto <Link to="/politicas-de-privacidad/terminos-servicios">Términos y Condiciones</Link> y las políticas de <Link to="/politicas-de-privacidad/proteccion-datos">Privacidad de Datos</Link></Form.Label>
                                    </Form.Group>
                                    <button type="submit" className='w-100 py-3 btn text-white fw-bolder' style={{ background: "#e86b2a" }}>
                                        Enviar Formulario
                                    </button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}