import { useState } from "react";
import { Container, Row, Col, Form, Modal, Table } from "react-bootstrap"
import { buscarCerti } from "../helpers/InhouseApi"

export const VerCertificado = () => {
    const Swal = require('sweetalert2')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [respCerti, setRespCerti] = useState([])
    const buscarCertificado = (e) => {
        e.preventDefault()
        const buscar = e.target.valor.value

        if (buscar.length > 4) {
            const data = new FormData()
            data.append('text', buscar)
            buscarCerti(data).then((res) => {

                if (res !== false) {
                    setShow(true)
                    setRespCerti(res)
                } else {
                    Swal.fire(
                        'Algo salio mal Ops..!',
                        'Por favor ingrese un DNI, NOMBRE o CODIGO Valido!',
                        'error'
                    )
                }
            })
        } else {
            Swal.fire(
                'Algo salio mal Ops..!',
                'Por favor ingrese un DNI, NOMBRE o CODIGO Valido!',
                'error'
            )
        }

    }
    console.log(respCerti)
    return (
        <>
            <div style={{ background: "#1F44A7"}}>
                <Container>
                    <Row className="py-5">
                        <Col xl={12}>
                            <h1 className="text-white fw-bolder text-center mt-5 pt-5">Certificados Digitales de Desarrollo Global</h1>
                            <h4 className="text-white text-center pt-5 mt-5">Digite su N° de DNI, nombres completos o código (Ejem. 22000)</h4>
                            <Form className="w-50 d-block mx-auto w-100res pt-2" onSubmit={buscarCertificado}>
                                <Row className="">
                                    <Col xl={8} >
                                        <Form.Group className="mb-3" controlId="valor">
                                            <Form.Control type="text" placeholder="Ingresa DNI, Nombre Completo o Codigo" style={{ height: "50px" }} className="fs-5 w-100res" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xl={4}>
                                        <button type="submit" className="btn btn-primary py-2 px-5 fs-5 fw-bolder mx-auto d-block   ">
                                            Buscar
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                            <p className="text-white text-center mt-3 mb-5">* Al darle "BUSCAR" acepta la POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES</p>
                        </Col>
                    </Row>
                </Container>


                <Modal show={show} onHide={handleClose} size="xl" centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center text-danger fw-bolder">Certificados Verificados</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover variant="primary" className="rounded" responsive>
                            <thead>
                                <tr className="tablet">
                                    <th>CODIGO</th>
                                    <th>NOMBRES</th>
                                    <th>CATEGORIA</th>
                                    <th>PROGRAMA</th>
                                    <th>MES/AÑO</th>
                                    <th>ESTADO</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    respCerti !== undefined || respCerti !== [] ? (
                                        respCerti.map((cer, index) => (
                                            <tr key={index}>
                                                <td className="">{cer.cod_registro_0}{cer.cod_registro_1}</td>
                                                <td className="">{cer.nombres}</td>
                                                <td className="">{cer.categoria}</td>
                                                <td className="">{cer.programa}</td>
                                                <td className="">{cer.mes}/{cer.year}</td>
                                                {/*<td className="">{cer.estado === "entregado" ? (<>Entregado</>) : (<>En Oficina</>)}</td>*/}
                                                <td className="">{cer.estado === "entregado" ? (<>Entregado</>) : cer.estado === "aula" ? (<>En Aula Virtual</>) : (<>En Oficina</>)}</td>
                                            </tr>
                                        ))
                                    ) : (<h1>Cargando</h1>)
                                }

                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}