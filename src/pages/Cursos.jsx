import '../assets/CursosDiplo.css'
import { Container, Row, Col } from "react-bootstrap";
import { Informacion } from '../components/CursosDiploma/Infomacion';
import { Listar } from '../components/CursosDiploma/Listar';
import { useState, useEffect} from 'react';
import { ApiCursos } from '../helpers/CursosDiplomas';
import AOS from 'aos';
export const Cursos = () => {
    const [infoCursos, setInfoCursos] = useState({
        tipo: "cursos",
        envivo: [],
        grabados: []
    })
    useEffect(()=>{
        ApiCursos().then((cursos)=>setInfoCursos({
            tipo: "cursos",
            envivo: cursos.envivo,
            grabados: cursos.grabado
        }))
    },[])

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
        <>
            <div className="color-header-curso">
                <Container>
                    <Row className='pt-xl-5 pt-0  align-items-md-baseline align-items-lg-start align-items-xl-start'>
                        <Col xl={6} md={6} className="p-5" data-aos="zoom-in">
                            <h1 className='text-white fw-bolder w-50 w-100res'>Cursos Especializados</h1>
                            <h5 className='color-l-diplomados fw-bolder'>Porque aprender con nosotros</h5>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white' style={{fontSize: "19px"}}>11 años dictando Cursos virtuales</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white' style={{fontSize: "19px"}}>Certificación de calidad  ISO 9001-2015</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white' style={{fontSize: "19px"}}>Certificación Universitaria</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white' style={{fontSize: "19px"}}>Aula Virtual "Plataforma Exclusiva"</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white' style={{fontSize: "19px"}}>El mejor soporte para alumnos</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <img src="/img/icons/VistoBuenoCursos.webp" alt="" />
                                <p className='m-0 text-white' style={{fontSize: "19px"}}>Docentes Especializados</p>
                            </div>
                        </Col>
                        <Col xl={6} md={6} className="position-relative mt-md-3 mt-xl-0" data-aos="zoom-in">
                            <div className="position-absolute position-md-relative bottom-0 top-0 translate-xl-middle-x mt-lg-3 mt-lg-5 mt-md-5 pt-md-5 pt-xl-0 pt-lg-1">
                                <img src="/img/imaganesPaginas/LogoCurso.webp" alt="" width={503} className="img-fluid d-none d-sm-none d-md-block margin-top-logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Informacion/>
            <Listar {...infoCursos}/>
        </>
    )
}