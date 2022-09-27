import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { postSeminario } from '../../helpers/SeminariosApi';

export const ModalLive = ({ imagen, titulo, fecha }) => {
    const Swal = require('sweetalert2')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const infoSeminario = (e) => {
        e.preventDefault()
        const nombres = e.target.nombre.value
        const correo = e.target.correo.value
        const telefono = e.target.telefono.value
        const tituloSeminario = titulo
        const fechaSeminario = fecha

        if (nombres === "" || correo === "" || telefono === "") {
            Swal.fire(
                'Algo salio mal Ops..!',
                'Por favor llene todo los campos',
                'error'
            )
        } else {
            const data = new FormData()
            data.append('titulo', tituloSeminario)
            data.append('fecha_seminario', fechaSeminario)
            data.append('correo', correo)
            data.append('nombres', nombres)
            data.append('telefono', telefono)

            postSeminario(data).then((resp) => {
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
            <Button variant="" onClick={handleShow} className="w-100 mt-3 bg-white p-3 text-dark">
                👉 Quiero la Promocion !Registrate!
            </Button>

            <Modal show={show} onHide={handleClose} centered size="semi">
                <img src="https://archivos-comunes.s3.amazonaws.com/2022/popups/x.png.webp" alt="" onClick={() => setShow(false)} width={30} className="pe-auto position-absolute top-0 end-0" style={{ zIndex: "100", cursor: "pointer" }} />
                <Modal.Body className='d-flex p-0'>
                    <img src={imagen} alt="" className="img-fluid rounded ocultar" width={450} />
                    <div className='p-4'>
                        <div className='d-flex align-items-center'>
                            <h4 className='w-100res' style={{ width: "75%" }}><b>Regístrate Gratis</b> y obtén el 36% Dscto. para el <b>Curso Formulación y Evaluación de Proyectos de Inversión.</b></h4>
                            <img src="/img/Descuento36.png" alt="" className='mx-auto ocultar' width={110} height={86} />
                        </div>
                        <Form onSubmit={infoSeminario}>
                            <Form.Group className="mb-3" controlId="nombre">
                                <Form.Control type="text" placeholder="Ingresa tu Nombre" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="correo">
                                <Form.Control type="email" placeholder="Ingresa tu Correo" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="telefono">
                                <Form.Control type="text" placeholder="Ingresa tu telefono" pattern="[0-9]{9}"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ color: "#2a50e8" }}>
                                <Form.Check type="checkbox" label="Acepto politica de datos" defaultChecked={true} />
                            </Form.Group>
                            <Button type="submit" className='w-100 p-2' style={{ background: "#2a50e8" }}>
                                Quiero la Promocion
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}