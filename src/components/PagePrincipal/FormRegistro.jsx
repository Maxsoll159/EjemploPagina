import {  Form, Col, FloatingLabel, Row } from "react-bootstrap";
import { registroAlumno } from "../../helpers/ApiLogin";

export const FormRegistro = () => {
    const Swal = require('sweetalert2')
    const registroUsu = (e) => {
        e.preventDefault()
        const nombre = e.target.nombreUsu.value
        const apellido = e.target.apellidoUsu.value
        const correoUsu = e.target.correoUsu.value
        const celularUsu = e.target.celularUsu.value
        const dniUsu = e.target.dniUsu.value
        const contraseñaUsu = e.target.contraseñaUsu.value
        const contraseña2Usu = e.target.reContraseñaUsu.value
        if (nombre === "" || apellido === "" || correoUsu === "" || celularUsu === "" || dniUsu.length < 8 || contraseñaUsu === "" || contraseña2Usu === "") {
            Swal.fire(
                'Algo salio mal Ops..!',
                'Por favor llene todo los campos',
                'error'
            )
            if (contraseñaUsu !== contraseña2Usu) {
                Swal.fire(
                    'Algo salio mal Ops..!',
                    'Las contraseñas no coninciden',
                    'error'
                )
            }
        } else {
            const data = new FormData()
            data.append('correo', correoUsu)
            data.append('clave', contraseñaUsu)
            data.append('nombres', nombre)
            data.append('apellidos', apellido)
            data.append('dni', dniUsu)
            data.append('telefono', celularUsu)
            data.append('celular', celularUsu)
            registroAlumno(data).then((resp) => {
                if (resp) {
                    Swal.fire({
                        title: 'Felicidades',
                        text: "Registro Exitoso",
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ir a Aula Virtual'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.replace("https://www.aula.desarrolloglobal.pe/login");
                        }
                    })
                }
            })
        }
    }
    return (
        <Form className="m-0 p-0" onSubmit={registroUsu}>
            <Row>
                <Col xl={6}>
                    <FloatingLabel
                        controlId="nombreUsu"
                        label="Nombres"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Nombres" />
                    </FloatingLabel>
                </Col>
                <Col xl={6}>
                    <FloatingLabel
                        controlId="apellidoUsu"
                        label="Apellidos"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Apellidos" />
                    </FloatingLabel>
                </Col>
                <Col xl={6}>
                    <FloatingLabel
                        controlId="correoUsu"
                        label="Correo Electronico"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="Correo Electronico" />
                    </FloatingLabel>
                </Col>
                <Col xl={6}>
                    <FloatingLabel
                        controlId="celularUsu"
                        label="Celular"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Celular" />
                    </FloatingLabel>
                </Col>
                <Col xl={6}>
                    <FloatingLabel
                        controlId="dniUsu"
                        label="Dni"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Dni" />
                    </FloatingLabel>
                </Col>
                <Col xl={6}>
                    <FloatingLabel
                        controlId="contraseñaUsu"
                        label="Contraseña"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="contraseña" />
                    </FloatingLabel>
                </Col>
                <Col xl={6}>
                    <FloatingLabel
                        controlId="reContraseñaUsu"
                        label="Repetir Contraseña"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Repetir Contraseña" />
                    </FloatingLabel>
                </Col>
                <Form.Group className="mb-3" controlId="formBasicCheckbox2sd">
                    <Form.Check type="checkbox" label="Acepto Términos y Condiciones y las políticas de Privacidad de Datos" defaultChecked={true} />
                </Form.Group>
            </Row>
            <button className="btn btn-primary fw-bolder w-50 py-2 shadow d-block mx-auto w-100res" style={{ height: "50px" }}>Registrate</button>
        </Form>
    )
}