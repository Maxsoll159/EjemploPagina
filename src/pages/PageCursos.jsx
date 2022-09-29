import { useEffect, useState } from "react"
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Certificacion } from "../components/PageCursoDiploma/Certificacion";
import { FinalDiploma } from "../components/PageCursoDiploma/FinalDiploma";
import { InicioPage } from "../components/PageCursoDiploma/InicioPage"
import { PorqueCapacitarte } from "../components/PageCursoDiploma/PorqueCapacitarte";
import { Profesores } from "../components/PageCursoDiploma/Profesores";
import { ApiCursosEtiqueta } from "../helpers/CursosDiplomas";

export const PageCursos = () => {
    let { etiqueta } = useParams();
    const [tipo, setTipo] = useState("Curso")
    const [isActive, setIsActive] = useState(0)
    const [infoIni, setInfoIni] = useState({
        tipo: "cursos"
    })
    useEffect(() => {
        ApiCursosEtiqueta(etiqueta).then((curso) => setInfoIni({
            dataInicial: {
                id: curso.id,
                tipo: "cursos",
                titulo: curso.titulo,
                imagen: curso.imagen,
                precio: curso.precio,
                horas: curso.certificados,
                fecha: curso.inicio,
                descripcion: curso.descripcion,
                alumnos: curso.alumnos,
                color: curso.color,
                pdf: curso.objectivos
            },
            profesores: curso.profesores,
            asesores: curso.asesores,
            testimonios: curso.testimonios,
            sesiones: curso.sesiones,
            colorCurso: curso.color,
            icono: curso.icono,
            titulo: curso.titulo,
        }))
    }, [etiqueta])
    let TotalSesionesDiploma = 0
    const totalSesiones = () => {
        if (infoIni.sesiones !== undefined) {
            TotalSesionesDiploma = infoIni.sesiones.length
        }

    }
    totalSesiones()
    let colorCurso = {
        background: `${infoIni.colorCurso}`
    }
    let contado = 0
    let nose = 0
    const abrir = (id) => {
        contado++
        if(contado === 1){
            contado ++
            nose = id
        }else{
            nose =  0  
            contado=0
        }
    }


    return (
        <>
            <InicioPage {...infoIni.dataInicial} totalSesionesDiploma={TotalSesionesDiploma} asesores={infoIni.asesores}/>
            <div>
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="d-flex align-items-center mt-5 gap-2 justify-content-center">
                                <img src="/img/icons/LiveSeminario.webp" alt="" />
                                <h6 className="fw-bolder text-center colorRed m-0">Este Curso contiene 0{TotalSesionesDiploma} sesiones de clases en vivo</h6>
                            </div>
                            <h4 className="fw-semibold text-center mt-5">Contenido Temático</h4>
                            <div>
                                <Accordion bsPrefix className="mt-5 pb-3" defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="shadow rounded" onClick={() => setIsActive(!isActive)}>
                                            <div style={colorCurso} className="w-100 d-flex gap-1 align-items-center padding-5res rounded">
                                                <div className="px-5 py-3 ocultar">
                                                    <img src={infoIni.icono} alt="" width={60} />
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between w-100 gap-3">
                                                    <div>
                                                        <p className="m-0 fw-bolder w-100 w-100res text-start text-white">{infoIni.titulo}</p>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-center items-acordeon me-4" style={{ width: "30%" }}>
                                                        <img src="/img/icons/iconRelojDiplomado.webp" alt="" width={22} height={20} className="ocultar" />
                                                        <p className="m-0 text-primary ocultar text-white">{TotalSesionesDiploma} Sesiones</p>
                                                        <p className="fw-bolder text-primary m-0 fs-4 text-white">{!isActive ? '-' : '+'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body className="px-4 shadow padding-5res" >
                                            {/*ACORDEON 2*/}
                                            {
                                                infoIni.sesiones !== undefined ? (
                                                    infoIni.sesiones.map((sesion) => (
                                                        <Accordion key={sesion.id} defaultActiveKey="0" bsPrefix className="mt-2 pb-2">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header className="rounded shadow p-3" style={{ background: "#F4F5F7" }} onClick={()=>abrir(sesion.id)}>
                                                                    <p className="m-0 w-100"><span className="fw-bolder">{sesion.titulo}: </span>{sesion.sub_titulo}</p>
                                                                    <p className="fw-bolder text-primary m-0 fs-4" id={sesion.id}>{isActive !== sesion.id ? '-' : '+'}</p>
                                                                </Accordion.Header>
                                                                <Accordion.Body className="px-4 py-3 padding-5res">
                                                                    <div dangerouslySetInnerHTML={{ __html: sesion.descripcion }}>

                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    ))
                                                ) : (<h1>Cargando</h1>)
                                            }
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            {
                                infoIni.dataInicial !== undefined ? (
                                    <a href={infoIni.dataInicial.pdf} className="mt-4 mb-5 d-block mx-auto btn btn-danger fw-bold w-50 w-100res" target={"_blank"} rel="noreferrer"><img src="/img/icons/iconpdf.webp" alt="" className="mx-2" />  Descargar Temario PDF</a>
                                ) : (<h1>Cargando.....</h1>)

                            }
                        </Col>
                    </Row>
                </Container>
            </div>
            <Certificacion tipo={tipo} />
            <Profesores profe={infoIni.profesores} />
            <PorqueCapacitarte />
            <FinalDiploma asesores={infoIni.asesores} {...infoIni.dataInicial} testimonios={infoIni.testimonios} totalSesionesDiploma={TotalSesionesDiploma} tipo={tipo}/>
        </>
    )
}