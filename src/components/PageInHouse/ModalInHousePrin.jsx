
import {  useState } from "react";
import { Row, Col, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postInHouse } from "../../helpers/InhouseApi";

export const ModalInHousePrin = ({ inHouse , geo}) => {
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
        const inhouse = e.target.inhouse.value
       if (nombre === "" || correo === "" || telefono === "" || cantidad === "" || nivel === "" || inhouse === "") {
            Swal.fire(
                'Algo salio mal Ops..!',
                'Por favor llene todo los campos',
                'error'
            )
        } else {
            const data = new FormData()
            data.append('pagina', "www.desarrolloglobal.com/inh")
            data.append('cantidad', cantidad)
            data.append('inhouse', inhouse.split("-",25)[1])
            data.append('id_inhouse', inhouse.split("-",25)[0])
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
            <button className="color-informacion border-0 text-primary fw-bolder py-2 px-4 rounded mt-4 mb-0 mb-xl-4 mb-lg-4" onClick={handleShow}>Solicitar Cotización Aquí</button>
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
                        <Col xl={6} className="rounded p-5 d-none d-xl-block color-header-inhouse">
                            <img src='https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png' width={180} alt="desarrolloGlobal" />
                            <div className="mt-3 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <p className="w-100 text-white m-0 fs-3">Tenemos mas de 80 Programas disponibles para ser dictados en tu Entidad/Institución</p>
                                    <img src="/img/icons/FechaInHouse.webp" alt="" width={150} />
                                </div>
                                <img src="/img/imaganesPaginas/LoginRegistro.webp" alt="" className="w-100 mt-5" />
                            </div>
                        </Col>
                        <Col xl={6} lg={12} className="p-5">
                            <div className="d-flex justify-content-end">
                                <button className="btn-close" onClick={handleClose} style={{ marginTop: "-25px" }}></button>
                            </div>
                            <div>
                                <h3 className="fw-bolder mt-4">Solicítalo aquí</h3>
                                <p>Completa el formulario para que un asesor se comunique
                                    para enviarte una proforma de acuerdo a las especificaciones
                                    de la entidad conde laboras.</p>
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
                                            <Form.Select id="nivelInhouse" defaultValue="">
                                                <option disabled value="">Nivel del Curso</option>
                                                <option value={"Basico"}>Basico</option>
                                                <option value={"Intermedio"}>Intermedio</option>
                                                <option value={"Avanzado"}>Avanzado</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xl={12} className="mt-3">
                                            <Form.Select id="inhouse" defaultValue="">
                                                <option disabled value="">Nivel del Curso</option>
                                                {
                                                    inHouse !== undefined ? (
                                                        inHouse.map((house) => (
                                                            <option key={house.id} value={house.id+"-"+house.titulo}>{house.titulo}</option>
                                                        ))
                                                    ) : (<>Cargando</>)
                                                }
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