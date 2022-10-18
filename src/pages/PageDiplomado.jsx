import { useEffect, useState } from "react";
import { Container, Row, Col, Accordion, Spinner  } from "react-bootstrap";
import "../assets/PageDiplomas.css"
import { Certificacion } from "../components/PageCursoDiploma/Certificacion";
import { PorqueCapacitarte } from "../components/PageCursoDiploma/PorqueCapacitarte";
import { Profesores } from "../components/PageCursoDiploma/Profesores";
import { FinalDiploma } from "../components/PageCursoDiploma/FinalDiploma";
import { InicioPage } from "../components/PageCursoDiploma/InicioPage";
import { useParams } from "react-router-dom";
import { ApiDiplomadosEtiqueta } from "../helpers/CursosDiplomas";
import { BtnWhats } from "../components/PageCursoDiploma/BtnWhats";

export const PageDiplomado = () => {
    /* Traer la etiqueta para hacer la peticion*/
    const [tipo, setTipo] = useState("Diplomado")
    let { etiqueta } = useParams();
    const [infoIni, setInfoIni] = useState({
        tipo: "Diplomado"
    })
    useEffect(() => {
        ApiDiplomadosEtiqueta(etiqueta).then((diplo) => setInfoIni({
            dataInicial: {
                tipo: "Diplomado",
                id: diplo.id,
                titulo: diplo.titulo,
                imagen: diplo.imagen,
                precio: diplo.precio,
                horas: diplo.certificados,
                fecha: diplo.inicio,
                descripcion: diplo.descripcion,
                alumnos: diplo.alumnos,
                color: diplo.color,
                pdf: diplo.objectivos
            },
            profesores: diplo.profesores,
            asesores: diplo.asesores,
            testimonios: diplo.testimonios,
            cursos: diplo.cursos,
            seo: diplo.seo,
            banner: diplo.banner
        }))
    }, [etiqueta])
    /*Para el Acordeon*/


    /*PARA CALCULAR EL TOTAL DE SESSIONES*/
    let TotalSesionesDiploma = 0
    const totalSesiones = () =>{
        if (infoIni.cursos !== undefined){
            infoIni.cursos.map((total)=>{
                TotalSesionesDiploma += parseFloat(total.sesiones.length) 
            })
        }

    }
    totalSesiones()
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <InicioPage {...infoIni.dataInicial} totalSesionesDiploma={TotalSesionesDiploma}  asesores={infoIni.asesores} seo={infoIni.seo}/>
            <div id="temario">
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="d-flex align-items-center mt-5 gap-2 justify-content-center">
                                <img src="/img/icons/LiveSeminario.webp" alt="" />
                                <h6 className="fw-bolder text-center colorRed m-0">Este Diploma contiene {TotalSesionesDiploma} sesiones de clases en vivo</h6>
                            </div>
                            <img src={infoIni.banner} alt={infoIni.titulo} className="shadow-lg bg-body rounded img-fluid w-100 mt-4" />
                            <h4 className="fw-semibold text-center mt-5">Contenido Temático</h4>
                            <div>
                                {
                                    infoIni.cursos !== undefined ? (
                                        infoIni.cursos.map((curso) => (
                                            <Accordion key={curso.id} bsPrefix className="mt-3" defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header className="shadow rounded" onClick={() => setIsActive(!isActive)}>
                                                        <div className="w-100 d-flex gap-4 align-items-center padding-5res">
                                                            <div style={{ backgroundColor: "#F4F5F7" }} className="px-5 py-3 ocultar">
                                                                <img src={curso.icono} alt={curso.titulo} width={60} height={60} />
                                                            </div>
                                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                                <div className="">
                                                                    <p className="m-0 fw-bolder w-100 w-100res text-start">{curso.titulo}</p>
                                                                </div>
                                                                <div className="d-flex gap-2 align-items-center items-acordeon me-4">
                                                                    <img src="/img/icons/iconRelojDiplomado.webp" alt="" width={22} height={20} className="ocultar" />
                                                                    <p className="m-0 text-primary ocultar">{curso.sesiones.length} Sesiones</p>
                                                                    <p className="fw-bolder text-primary m-0 fs-4 fs-6">{!isActive ? '-' : '+'}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body className="px-5 py-3 shadow padding-5res" >
                                                        <h5 className="fw-bolder mt-2">Ejes Temáticos</h5>
                                                        {
                                                            curso.sesiones.map((sesiones) => (
                                                                <div key={sesiones.id} className="d-flex gap-2 align-items-center py-2 border-acordeon-items ">
                                                                    <div className="d-flex align-items-center gap-3 width-50-res" style={{ width: "20%" }}>
                                                                        <img src="/img/icons/iconContenido.webp" alt="" width={16} height={16} />
                                                                        <p className="m-0 font-size-14res">{sesiones.titulo}:</p>
                                                                    </div>
                                                                    <p className="m-0 w-100 font-size-14res">{sesiones.sub_titulo}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        ))


                                    ) : (<Spinner animation="grow" variant="primary" />)
                                }
                            </div>
                            {
                                infoIni.dataInicial !== undefined ? (
                                    <a className="mt-4 mb-5 d-block mx-auto btn btn-danger fw-bold w-50 w-100res" target="_blank" href={infoIni.dataInicial.pdf} rel="noreferrer"><img src="/img/icons/iconpdf.webp" alt="" className="mx-2" />  Descargar Termario PDF</a>
                                ) : (<Spinner animation="grow" variant="primary" />)
                            }

                        </Col>
                    </Row>
                </Container>
            </div>
            {/*Componentes Estaticos*/}

            <Certificacion tipo={tipo}/>

            <Profesores profe={infoIni.profesores} />

            <PorqueCapacitarte />

            <FinalDiploma asesores={infoIni.asesores} {...infoIni.dataInicial} testimonios={infoIni.testimonios} totalSesionesDiploma={TotalSesionesDiploma} tipo={tipo}/>


            <BtnWhats asesores={infoIni.asesores} tipo={tipo} {...infoIni.dataInicial}/>

        </>
    )
}