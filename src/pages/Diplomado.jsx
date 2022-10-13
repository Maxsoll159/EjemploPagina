import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Informacion } from "../components/CursosDiploma/Infomacion";
import { Listar } from "../components/CursosDiploma/Listar";
import { ApiDiplomados } from "../helpers/CursosDiplomas";
import AOS from 'aos';
import { Helmet } from "react-helmet";
export const Diplomados = () => {
    const [infoDiplomado, setInfoDiplomado] = useState({
        tipo: "Diplomados",
        envivo: [],
        grabados: []
    })
    useEffect(() => {
        ApiDiplomados().then((diplomas) => setInfoDiplomado({
            tipo: "Diplomados",
            envivo: diplomas.envivo,
            grabados: diplomas.grabado
        }))
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>Diplomados Especializados</title>
                <meta
                    name="Diplomados Especializados"
                    content="Diplomados en Administración y Gestión Pública"
                />

                <meta name="author" content="Centro de Capacitación y Desarrollo Global" />
                <meta name="google-signin-client_id" content="740073627785-npq9orne985ob2cs6j5qlb9m2sdsl2lg.apps.googleusercontent.com" />
                <meta name="google-site-verification" content="hWAwX4vVYax5SPwJoWF6AzsqmoKcV1XmuWQgHgqoD44" />
                <link rel="alternate" hreflang="es" href="https://aula.desarrolloglobal.pe/" />

                <meta property="og:site_name" content="Diplomados Especializados" />
                <meta property="fb:app_id" content="226972427818042" />

                <meta property="og:title" content="Diplomados Especializadoss" />
                <meta property="og:description" content="Diplomados en Administración y Gestión Pública" />
                {/*
                    <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/05/PLANEAMIENTO%20Y%20PRESUPUESTO.png" />
                    <meta property="og:image:secure_url" content="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/05/PLANEAMIENTO%20Y%20PRESUPUESTO.png" />
                */}

                <meta property="article:tag" content="Desarrollo global, centro de capacitaciones, cursos, diplomas" />
            </Helmet>
            <div className="color-header-diplomados">
                <Container>
                    <Row className='pt-4 align-items-md-baseline align-items-lg-start'>
                        <Col xl={6} md={6} className="p-5" data-aos="zoom-in">
                            <h1 className='text-white fw-bolder w-50 w-100res'>Diplomados Especializados</h1>
                            <h5 className='color-l-diplomados fw-bolder'>Porque aprender con nosotros</h5>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white fs-5'>11 años dictando Cursos virtuales</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white fs-5'>Certificación de calidad  ISO 9001-2015</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white fs-5'>Certificación Universitaria</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white fs-5'>Aula Virtual "Plataforma Exclusiva"</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white fs-5'>El mejor soporte para alumnos</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pb-4'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white fs-5'>Docentes Especializados</p>
                            </div>
                        </Col>
                        <Col xl={6} md={6} className="position-relative" data-aos="zoom-in">
                            <div className="position-absolute position-md-relative bottom-0 top-0 translate-xl-middle-x mt-lg-3">
                                <img src="https://nuevapagina.s3.amazonaws.com/Martin_diplomado.webp" alt="" width={492} className="d-none d-md-block img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Informacion />
            <Listar {...infoDiplomado} />
        </>
    )
}