
import { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { FormLogin } from "./FormLogin";


export const BtnLogin = ({tipo}) => {

    console.log(tipo)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const tipoBoton = () =>{
        if(tipo !== undefined){
            return <button className="btn text-white d-flex align-items-center gap-2 d-xl-none d-xxl-none" style={{ background: "#4828FC" }} onClick={handleShow}><img src='/img/icons/IconLapto.webp' alt="desarrolloGlobal" /> Aula Virtual</button>
        }else{
            return <button className="color-informacion text-primary rounded border-0 py-2 px-4 fw-bolder shadow w-100res" onClick={handleShow}>Ingreso al Aula Virtual</button>
        }
    }

    return (
        <>
            {
                tipoBoton()
            }
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
                            <div className="px-0 px-xl-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="fw-bolder">Bienvenido 🙂</h2>
                                    <button className="btn-close" onClick={handleClose}></button>
                                </div>
                                <h4 className="fw-bolder mt-4">Iniciar Sesión</h4>
                                <p>Ingresa tu email y contraseña para que ingresar al aula virtual</p>
                                <FormLogin/>
                                <p className="text-center text-primary mt-3">No tengo cuenta, Quiero registrarme</p>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}