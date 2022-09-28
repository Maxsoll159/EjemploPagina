import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Informacion } from "../components/CursosDiploma/Infomacion";
import { Listar } from "../components/CursosDiploma/Listar";
import { ApiDiplomas } from "../helpers/CursosDiplomas";
export const Diplomas = () => {
    const [infoDiploma, setInfoDiploma] = useState({
        tipo: "diplomas",
        envivo: [],
        grabados: []
    })
    useEffect(()=>{
        ApiDiplomas().then((diplomas)=>setInfoDiploma({
            tipo: "diplomas",
            envivo: diplomas.envivo,
            grabados: diplomas.grabado
        }))
    },[])
    return (
        <>
            <div className="color-header-diploma">
                <Container>
                    <Row className='pt-4 align-items-md-baseline align-items-lg-start'>
                        <Col xl={6} md={6} className="p-5" data-aos="zoom-in">
                            <h1 className='text-white fw-bolder w-50 w-100res'>Diplomas especializados</h1>
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
                                <img src="/img/imaganesPaginas/LogoDiploma.webp" alt="" width={492}  className="d-none d-md-block img-fluid"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Informacion />
            <Listar {...infoDiploma} />
        </>
    )
}