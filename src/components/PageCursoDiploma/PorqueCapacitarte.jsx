import { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

export const PorqueCapacitarte = () => {
    const Swal = require('sweetalert2')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const copiarBy = (element) => {
        const banco1 = document.querySelector(`#banco${element}`).innerHTML
        const a1 = document.querySelector(".a1");
        a1.innerHTML = `<input value="${banco1}" id="hola">`;
        const hola = document.querySelector("#hola");
        hola.select();
        document.execCommand("copy");
        hola.setAttribute("class", "d-none");
        Swal.fire(
            'Buen Trabajo!',
            'Cuenta bancaria copiado exitosamente',
            'success'
        )
    };
    return (
        <>
            <div className="color-porque-diplomado mt-5 pb-5" id="beneficios">
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <h3 className="fw-bolder text-white mt-5 text-center">¿Por qué Capacitarte con nosotros?</h3>
                            <p className="fw-bolder text-center text-white">Más de 50,000 alumnos capacitados</p>
                            <div className="bg-white d-flex border rounded p-2 tamaño-diplomados justify-content-between align-items-center mb-4 mx-auto w-100res">
                                <img src="/img/icons/iconEstrellas.webp" alt="" width={93} height={16} />
                                <p className="text-dark m-0 font-size-14 fw-bolder">4.6 de calificación</p>
                                <img src="/img/icons/iconUsuarios.webp" alt="" width={25} height={16} />
                                <p className="text-dark m-0 font-size-14 fw-bolder">1.358 alumnos capacitados en este Diploma</p>
                            </div>
                            <Row className="mt-3 pt-4 gap-3 flex-wrap padding-5res">

                                <Col xl md sm className="bg-warning rounded py-5 px-4" >
                                    <img src="/img/icons/Icon11años.webp" alt="" width={210} height={66} />
                                    <h5 className="fw-bolder mt-5">Experiencia Comprobada</h5>
                                    <p>11 años Capacitando en la Gestión Pública y miles de alumnos satisfechos, tanto en capacitaciones presenciales y virtuales.</p>
                                </Col>

                                <Col xl md sm className="bg-danger rounded rounded py-5 px-4" >
                                    <img src="/img/icons/IconIsoDiploma.webp" alt="" width={198} height={97} />
                                    <h5 className="fw-bolder text-white mt-3">Garantia de Calidad Servicio</h5>
                                    <p className="text-white">Nuestra empresa educativa, cuenta con Certificación de Calidad ISO 9001-2015, lo cual nos permite brindar un servicio diferenciado a nuestros alumnos.</p>
                                </Col>

                                <Col xl md={6} sm className="color-certificado-uni rounded rounded py-5 px-4">
                                    <img src="/img/icons/Certificado.webp" alt="" width={117} height={86} />
                                    <h5 className="fw-bolder text-white mt-3">Certificación Universitaria</h5>
                                    <p className="text-white">La certificación se otorga con respaldo universitario, válido para todo tipo de convocatorias.</p>
                                </Col>

                                <Col xl md sm className="bg-white rounded rounded py-5 px-4">
                                    <img src="/img/icons/IconDocentesDiploma.webp" alt="" width={91} height={95} />
                                    <h5 className="fw-bolder mt-3 mb-3">Docentes
                                        Especializados</h5>
                                    <p>Plana docente con amplia trayectoria en Gestión Gubernamental y metodología de enseñanza. </p>
                                </Col>

                                <Col xl md={6} sm={6} className="bg-white rounded rounded py-5 px-4">
                                    <img src="/img/icons/IconSoporteDiploma.webp" alt="" width={72} height={89} />
                                    <h5 className="fw-bolder mt-3 ">El mejor soporte
                                        para alumnos</h5>
                                    <p>Te ayudamos a instalar los DEMOS en tu computadora, de manera remota, también te brindamos asistencia respecto a cualquier problema técnico que puedas tener en tus clases.</p>
                                </Col>

                                <Col xl md sm className="bg-white rounded rounded py-5 px-4">
                                    <img src="/img/icons/IconPcDiplomas.webp" alt="" width={117} height={86} />
                                    <h5 className="fw-bolder mt-3">Plataforma Exclusiva</h5>
                                    <p>Hemos desarrollado una plataforma exclusiva pensado en que nuestros alumnos tengan un aula virtual de fácil acceso que le permita disponer de todos los materiales de clases.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="pagar">
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <h3 className="fw-bolder mt-5">✍ Pasos para Inscribirme</h3>
                            <div className="mt-4 d-flex gap-4 align-items-center">
                                <div className="Pasos1 fw-bolder fs-3 ">
                                    <p className="m-0 text-center">01</p>
                                </div>
                                <p className="fw-bolder m-0 fs-5 lh-1 diplocolor">Paso 1: <br /> Efectuar el pago a las siguientes cuentas bancarias.</p>
                            </div>
                            <div className="ms-4 mt-2 px-5 border-interlineado padding-5res">
                                <p className="m-0 fw-bolder diplocolor">Cuentas Corriente</p>
                                <div className="rounded color-incripcion-diploma d-flex gap-4 px-5 py-2 mt-3 w-100res padding-5res">
                                    <img src="/img/iconBancos/IconBcp.webp" alt="" width={80} height={80} />
                                    <div>
                                        <p className="m-0 lh-sm font-size14-res">
                                            Cta corriente: <br />
                                            N° cuenta: 193-1945239-0-77<br />
                                            CCI: 0219300194523907716<br />
                                            Centro de Capacitación y Desarrollo Global<br />
                                        </p>
                                    </div>
                                </div>
                                <div className="rounded color-incripcion-diploma d-flex gap-4 px-5 py-2 mt-3 w-100res padding-5res">
                                    <img src="/img/iconBancos/IconNacion.webp" alt="" width={80} height={80} />
                                    <div>
                                        <p className="m-0 lh-sm font-size14-res">
                                            Cta corriente:<br />
                                            N° cuenta: 00-015-013982<br />
                                            CCI: 0219300194523907716<br />
                                            Centro de Capacitación y Desarrollo Global<br />
                                        </p>
                                    </div>
                                </div>
                                <h5 className="fw-bolder mt-3 diplocolor">Cuentas de Ahorro</h5>
                                <div className="rounded color-incripcion-diploma d-flex gap-4 px-5 py-3 mt-3 justify-content-center align-items-center">
                                    <img src="/img/iconBancos/Nacion.webp" alt="" width={60} className="ocultar" />
                                    <img src="/img/iconBancos/Bcp.webp" alt="" width={60} className="ocultar" />
                                    <img src="/img/iconBancos/Scotiabank.webp" alt="" width={60} className="ocultar" />
                                    <img src="/img/iconBancos/Interbank.webp" alt="" width={60} className="ocultar" />
                                    <img src="/img/iconBancos/Bbva.webp" alt="" width={60} className="ocultar" />
                                    {/*MODAL*/}
                                    <button onClick={handleShow} className="btn bg-white fw-bolder text-primary border border-primary">
                                        Ver Cuentas
                                    </button>

                                </div>
                                {/* Yape Plin Falta terminar*/}
                                <h5 className="fw-bolder mt-3 diplocolor">Pagos por Aplicativo (Yape, Plin)</h5>
                                <div className="d-flex gap-2 mt-3 flex-wrap-resp flex-lg-wrap flex-xl-nowrap">
                                    <div className="color-incripcion-diploma rounded w-100res">
                                        <div className="d-flex gap-3 align-items-center p-3 justify-content-center">
                                            <div>
                                                <img src="/img/iconBancos/IconYape.webp" alt="" className="rounded ocultar" width={75} height={75} />
                                                <p className="m-0 fw-bolder ocultar">Escanear el código  QR</p>
                                            </div>
                                            <div>
                                                <img src="/img/iconBancos/CodigoQrYape.webp" alt="" className="pt-1" />
                                                <p className="yape m-0 fw-bolder fs-4 rounded-pill text-center mt-2">933179895</p>
                                            </div>
                                        </div>
                                        <p className="text-center">Titular: Wilber C. Camargo Muñoz</p>
                                    </div>
                                    <div className="color-incripcion-diploma rounded w-100res">
                                        <div className="d-flex gap-3 align-items-center p-3 justify-content-center">
                                            <div>
                                                <img src="/img/iconBancos/IconPlin.webp" alt="" className="rounded ocultar" width={80} height={80} />
                                                <p className="m-0 fw-bolder ocultar">Escanear el código  QR</p>
                                            </div>
                                            <div>
                                                <img src="/img/iconBancos/CodigoQrPlin.webp" alt="" />
                                                <p className="plin m-0 fw-bolder fs-4 rounded-pill text-center mt-2 text-white">933179895</p>
                                            </div>
                                        </div>
                                        <p className="text-center">Titular: Wilber C. Camargo Muñoz</p>
                                    </div>
                                </div>
                                {/* */}
                                <h5 className="mt-3 fw-bolder diplocolor">Pagos en línea con tarjeta de crédito/débito</h5>
                                <div className="rounded color-incripcion-diploma d-flex gap-4 px-5 py-3 mt-3 align-items-center flex-wrap-resp padding-5res">
                                    <div>
                                        <p className="m-0">Puedes pagar en linea de manera segura desde nuestra pasarela de pago de IZIPAY y PAGO EFECTIVO con total seguridad.</p>
                                        <div className="d-flex align-items-center gap-2 mt-3">
                                            <img src="/img/icons/IconCandado.webp" alt="" />
                                            <p className="m-0 font-size-14">Pagos seguros encriptados con seguridad SSL</p>
                                        </div>

                                    </div>
                                    <div>
                                        <button className="btn text-white fw-bolder w-100 p-2 d-flex justify-content-center align-items-center gap-3" style={{ background: "#0017eb" }}><img src="/img/icons/IconTarjeta.webp" alt="" className="" /> Pagar con tarjeta</button>
                                        <img src="/img/iconBancos/IconTarjetas.webp" alt="" className="mt-4 img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 d-flex gap-4 align-items-center">
                                <div className="Pasos1 fw-bolder fs-3 ">
                                    <p className="m-0 text-center">02</p>
                                </div>
                                <p className="fw-bolder m-0 fs-5 lh-1 diplocolor">Paso 2: <br /> Envíanos el comprobante de pago</p>
                            </div>
                            <div className="ms-4 mt-2 px-5 border-interlineado padding-5res">
                                <p className="m-0 fw-bolder w-75 mt-3 diplocolor w-100res">Tomar foto o escanear el voucher de pago y enviar al <br className="ocultar" />whatsapp o correo asesoria@desarrolloglobal.pe</p>
                                <div className="color-incripcion-diploma d-flex justify-content-between mt-4 rounded">
                                    <div className="px-5 py-4">
                                        <h5 className="fw-bolder diplocolor">Al enviar el voucher incluir lo siguiente:</h5>
                                        <ul>
                                            <li>Número de DNI del participante:</li>
                                            <li>N° de celular o fijo para contactarlo(a):</li>
                                            <li>Especificar el nombre del programa:</li>
                                        </ul>
                                    </div>
                                    <img src="/img/iconBancos/IconEnviar.webp" alt="" width={162} height={241} style={{ marginTop: "-73px" }} className="mx-5 ocultar" />
                                </div>
                            </div>
                            <div className="mt-4 d-flex gap-4 align-items-center">
                                <div className="Pasos1 fw-bolder fs-3 ">
                                    <p className="m-0 text-center">03</p>
                                </div>
                                <p className="fw-bolder m-0 fs-5 lh-1 diplocolor">Paso 3: <br />Ingresa a tu Aula Virtual</p>
                            </div>
                            <div className="ms-4 mt-2 px-5 padding-5res">
                                <div className="color-incripcion-diploma mt-4 rounded d-flex justify-content-between">
                                    <p className="fw-bolder m-0 px-5 py-4">Solicita tu acceso a la plataforma virtual y <br />lleva tu programa.</p>
                                    <img src="/img/iconBancos/IconLapto.webp" alt="" width={174} height={135} style={{ marginTop: "-60px" }} className="mx-5 ocultar" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/*  MODA*/}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body className="p-xl-5 p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="fw-bolder m-0">Pagos por Transferencias y/o deposito</h4>
                            <p>Puedes pagar con tarjeta de credito o debito, deposito o transferencia.</p>
                        </div>
                        <button className="btn-close" onClick={handleClose}></button>
                    </div>
                    <Row className="mt-3">
                        <Col xl={6} className="d-flex align-items-center gap-3 mt-3">
                            <img src="/img/iconBancos/Nacion.webp" alt="" width={70} />
                            <div>
                                <p className="fw-bolder m-0">BANCO DE LA NACION</p>
                                <p className="m-0">Cuenta Corriente</p>
                                <p className="fw-bolder m-0" id="banco1">00-015-013982</p>
                                <div className="a1"></div>
                                <button onClick={()=>copiarBy(1)} className="btn btn-light border border-dark">Copiar</button>
                            </div>
                        </Col>
                        <Col xl={6} className="d-flex align-items-center gap-3 mt-3">
                            <img src="/img/iconBancos/Nacion.webp" alt="" width={70} />
                            <div>
                                <p className="fw-bolder m-0">BANCO DE LA NACION</p>
                                <p className="m-0">Cuenta Corriente</p>
                                <p className="fw-bolder m-0" id="banco2">04-074-875926</p>
                                <div className="a1"></div>
                                <button onClick={()=>copiarBy(2)} className="btn btn-light border border-dark">Copiar</button>
                            </div>
                        </Col>
                        <Col xl={6} className="d-flex align-items-center gap-3 mt-3">
                            <img src="/img/iconBancos/Bcp.webp" alt="" width={70} />
                            <div>
                                <p className="fw-bolder m-0">BCP</p>
                                <p className="m-0">Cuenta Corriente</p>
                                <p className="fw-bolder m-0" id="banco3">193-19452390-77</p>
                                <div className="a1"></div>
                                <button onClick={()=>copiarBy(3)} className="btn btn-light border border-dark">Copiar</button>
                            </div>
                        </Col>
                        <Col xl={6} className="d-flex align-items-center gap-3 mt-3">
                            <img src="/img/iconBancos/Bcp.webp" alt="" width={70} />
                            <div>
                                <p className="fw-bolder m-0">BCP</p>
                                <p className="m-0">Cuenta Corriente</p>
                                <p className="fw-bolder m-0" id="banco4">193-94612138-0-14</p>
                                <div className="a1"></div>
                                <button onClick={()=>copiarBy(4)} className="btn btn-light border border-dark">Copiar</button>
                            </div>
                        </Col>
                        <Col xl={6} className="d-flex align-items-center gap-3 mt-3">
                            <img src="/img/iconBancos/Scotiabank.webp" alt="" width={70} />
                            <div>
                                <p className="fw-bolder m-0">SCOTIABANK</p>
                                <p className="m-0">Cuenta Corriente</p>
                                <p className="fw-bolder m-0" id="banco5">027-7544565</p>
                                <div className="a1"></div>
                                <button onClick={()=>copiarBy(5)} className="btn btn-light border border-dark">Copiar</button>
                            </div>
                        </Col>
                        <Col xl={6} className="d-flex align-items-center gap-3 mt-3">
                            <img src="/img/iconBancos/Bbva.webp" alt="" width={70} />
                            <div>
                                <p className="fw-bolder m-0">BBVA</p>
                                <p className="m-0">Cuenta Corriente</p>
                                <p className="fw-bolder m-0" id="banco6">0011-0153-02-00460394</p>
                                <div className="a1"></div>
                                <button onClick={()=>copiarBy(6)} className="btn btn-light border border-dark">Copiar</button>
                            </div>
                        </Col>
                        <Col xl={6} className="d-flex align-items-center gap-3 mt-3">
                            <img src="/img/iconBancos/Interbank.webp" alt="" width={70} />
                            <div>
                                <p className="fw-bolder m-0">INTERBANK</p>
                                <p className="m-0">Cuenta Corriente</p>
                                <p className="fw-bolder m-0" id="banco7">011-303500069-3</p>
                                <div className="a1"></div>
                                <button onClick={()=>copiarBy(7)} className="btn btn-light border border-dark">Copiar</button>
                            </div>
                        </Col>

                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}