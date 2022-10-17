import "../assets/PageSeminarios.css";
import { Container, Row, Col, Card } from "react-bootstrap"
import { useState, useContext, useEffect } from "react";
import { UserContext } from '../context/DarkModeContext';
import { seminariosLive } from "../helpers/SeminariosApi";
import { parsearFecha, parsearHora, recortarTitulo } from "../helpers/funciones";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import AOS from 'aos';
export const PageSeminarios = () => {
    let navigate = useNavigate();
    const { isdark } = useContext(UserContext)
    const [fechaProxSeminario, setFechaProxSeminario] = useState("")
    const [fechaActual, setFechaActual] = useState(new Date())
    const [page, setPage] = useState(12)
    /*Para el Scroll infinito*/
    const [noMore, setNomore] = useState(true)
    /*Almacenamos todos los Seminarios de la BD*/
    const [{ seminariosProximos, seminariosTerminados, flag }, setSeminariosDb] = useState({
        'seminariosProximos': [],
        'seminariosTerminados': [],
        'flag': false
    })

    useEffect(() => {
        seminariosLive().then((res) => setSeminariosDb({
            seminariosProximos: res.proximos,
            seminariosTerminados: res.terminados,
            flag: true
        }))
    }, [])
    const fetchComments = async () => {
        const res = await fetch(`https://aula.desarrolloglobal.pe/v03/api/seminarios/?offset=${page}&limit=12`)
        const data = await res.json()
        return data.terminados;
    }
    const fetchData = async () => {
        const server = await fetchComments()
        setSeminariosDb({ seminariosProximos: [...seminariosProximos], seminariosTerminados: [...seminariosTerminados, ...server], flag: true })
        if (server.length === 0 || server.length < 12) {
            setNomore(false)
        }
        setPage(page + 12)
    }
    const irSeminario = (etiqueta) => {
        navigate(`/seminarios/${etiqueta}`, { replace: false });
    }

    const irSeminarioProximo = (etiqueta) => {
        navigate(`/seminariosInfo/${etiqueta}`, { replace: false });
    }

    const irSeminarioProximoLive = (etiqueta) => {
        navigate(`/seminarios/${etiqueta}`, { replace: false });
    }
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    useEffect(() => {
        if (seminariosProximos[0] !== undefined) {
            setFechaProxSeminario(new Date(`${seminariosProximos[0].fecha} ${seminariosProximos[0].hora}`))
        }
        setFechaActual(new Date())
    }, [seminariosProximos])


    return (
        <>
            <div className={`${isdark ? "color-DarkMode-DetalleSeminario" : "bg-white"}`}>
                <Container>
                    <Row className="align-items-center">
                        <Col xl={5} lg={5} md={5} sm={12} className="p-3" data-aos="zoom-in">
                            <h1 className={`fw-bolder w-75 w-100res ${isdark ? "text-white" : "text-dark"}`}>Seminarios en Gestion Publica</h1>
                            <div className="d-flex align-items-center gap-2 w-100res justify-content-center-res">
                                <h3>👉</h3>
                                <h5 className="fw-bolder d-block bg-warning rounded-pill p-1">Participa Gratis aqui</h5>
                            </div>
                            <p className={`w-100res ${isdark ? "text-white" : "text-dark"}`} style={{ width: "90%" }}>Regístrate ó únete a nuestros grupos de WhatsApp y Telegram,
                                no te pierdas ningún seminarios en vivo.</p>
                            <div className="mt-3 d-flex-res gap-3 flex-column-desa">
                                <a className="btn btn-primary p-2 fw-bolder d-flex gap-3 align-items-center justify-content-center w-100res" style={{ width: "65%" }} href="https://t.me/DesarrolloGlobal" target="_blank" rel="noreferrer"><i className="fa fa-telegram fa-2x" aria-hidden="true" ></i>Registrarme por Telegram</a>
                                <a className="btn btn-light border border-dark p-2 fw-bolder d-flex align-items-center gap-3 mt-2 justify-content-center w-100res" style={{ width: "65%" }} href="https://chat.whatsapp.com/Lgx182kXXFCJEnJtwvYg4w" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>Registrame por WhatsApp</a>
                            </div>
                        </Col>
                        <Col xl={7} lg={7} md={7} sm={12} data-aos="zoom-in">
                            <img src="/img/imaganesPaginas/pruebaHombre.png" alt="" className="w-100 pt-5 img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`pb-5 margin-negativo ${isdark ? "color-DarkMode-form" : "color-form"}`}>
                <Container>
                    <h3 className={`fw-bolder text-center ${isdark ? "text-white" : "text-dark"}`} style={{ paddingTop: "80px" }}>Lista de Seminarios</h3>
                    <Row>
                        <Col xl={12}>
                            <Row>
                                <InfiniteScroll
                                    className="w-100 d-flex justify-content-around flex-wrap"
                                    dataLength={seminariosTerminados.length} //This is important field to render the next data
                                    next={flag === true ? fetchData : ""}
                                    hasMore={noMore}
                                    loader={<h4>Loading...</h4>}>
                                    {seminariosProximos === undefined ? (<h1>Cargando...</h1>) :
                                        seminariosProximos.map((seminariosProxi) => (
                                            <Col xl={3}>
                                                <Card key={seminariosProxi.id} style={{ width: '19rem' }} className={`mt-5 ${isdark ? "color-DarkMode-DetalleSeminario" : "bg-white"}`} data-aos="zoom-in">
                                                    <Card.Img variant="top" src={seminariosProxi.banner.oferta} height={180} />
                                                    <div className="bg-danger d-flex align-items-center gap-2 py-3 justify-content-center">
                                                        <img src="/img/icons/LiveDiploCur.webp" alt="" />
                                                        <h6 className="m-0 text-white fw-bolder">Proximo seminarios en vivo</h6>
                                                    </div>
                                                    <div className="bg-primary d-flex align-items-center gap-2 py-3 justify-content-center">
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <img src="/img/icons/calendar.png" alt="" height={20} />
                                                            <p className={`m-0 fw-bold ${isdark ? "text-white" : "text-dark"}`} >Fecha:  {(seminariosProxi.fecha).substring(8, 10)} de {parsearFecha(seminariosProxi.fecha)} </p>
                                                        </div>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <img src="/img/iconsDarkMode/relojWhite.webp" alt="" height={20} />
                                                            <p className={`m-0 fw-bold ${isdark ? "text-white" : "text-dark"}`}>{parsearHora(seminariosProxi.hora)}</p>
                                                        </div>
                                                    </div>
                                                    <Card.Body className="p-4">
                                                        <div>
                                                            <h5 className={`m-0 fw-bolder altoTituloSeminario d-flex ${isdark ? "text-white" : "text-dark"}`}>{seminariosProxi.titulo.replace("<br>", "")}</h5>
                                                        </div>

                                                        {
                                                            fechaActual > fechaProxSeminario ? (
                                                                <button onClick={() => irSeminarioProximoLive(seminariosProxi.etiqueta)} className={`btn w-100 mt-3 d-flex justify-content-center align-items-center gap-2 p-2 border border-2 fw-bolder ${isdark ? "bg-transparent border-white text-white" : "btn-light border-dark text-dark"}`}>
                                                                    {!isdark ? (<img src="/img/icons/VerSeminario.webp" alt="" />) : (<img src="/img/icons/IconLapizDiplomado.webp" alt="" />)}Incribirme en el Seminario</button>

                                                            ) : (
                                                                <button onClick={() => irSeminarioProximo(seminariosProxi.etiqueta)} className={`btn w-100 mt-3 d-flex justify-content-center align-items-center gap-2 p-2 border border-2 fw-bolder ${isdark ? "bg-transparent border-white text-white" : "btn-light border-dark text-dark"}`}>
                                                                    {!isdark ? (<img src="/img/icons/VerSeminario.webp" alt="" />) : (<img src="/img/icons/IconLapizDiplomado.webp" alt="" />)}Incribirme en el Seminario</button>
                                                            )
                                                        }


                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    {seminariosTerminados === undefined ? (<h1>Cargando...</h1>) :
                                        seminariosTerminados.map((semTerminados) => (
                                            <Col xl={3}>
                                                <Card key={semTerminados.id} style={{ width: '19rem' }} className={`mt-5 ${isdark ? "color-DarkMode-DetalleSeminario" : "bg-white"}`} data-aos="zoom-in">
                                                    <Card.Img variant="top" className="cursor-pointer" src={semTerminados.banner.oferta} height={180} onClick={() => irSeminario(semTerminados.etiqueta)} />
                                                    <Card.Body className="p-4">
                                                        <div className="d-flex gap-1 justify-content-center-res">
                                                            <div className={`rec rounded-pill color-detalle fw-bolder text-center d-flex align-items-center justify-content-center color-prin-detalle ${isdark ? "" : ""}`}>Seminario</div>
                                                            <div className={`rec rounded-pill fw-bolder text-center d-flex justify-content-center align-items-center gap-2 ${isdark ? "color-black back-black text-white" : "border border-dark"}`}>{
                                                                !isdark ? (<img src="/img/icons/GrabadosIcon.svg" alt="" width={19} />) :
                                                                    (<img loading="lazy" src="/img/iconsDarkMode/GrabadosIconDark.svg" alt="" width={19} />)
                                                            }Realizado</div>
                                                        </div>
                                                        <div>
                                                            <h5 className={`m-0 fw-bolder mt-3 altoTituloSeminario d-flex cursor-pointer ${isdark ? "text-white" : "text-dark"}`} onClick={() => irSeminario(semTerminados.etiqueta)}>{recortarTitulo(semTerminados.titulo)}</h5>
                                                            <div className="d-flex gap-2 mt-2 align-items-center">
                                                                {!isdark ? (<img src="/img/icons/calendarDark.svg" alt="" />) :
                                                                    (<img src="/img/icons/calendar.png" alt="" height={18} />)
                                                                }
                                                                <p className={`m-0 fw-bolder ${isdark ? "text-white" : "text-dark"}`}>Fecha: {(semTerminados.fecha).substring(8, 10)} de {parsearFecha(semTerminados.fecha)}</p>
                                                            </div>
                                                            <div className="d-flex gap-2 mt-2 align-items-center">
                                                                {
                                                                    !isdark ? (<img src="/img/icons/relojDark.svg" alt="" />)
                                                                        : (<img src="/img/iconsDarkMode/relojWhite.webp" alt="" height={19} />)
                                                                }
                                                                <p className={`m-0 fw-bolder ${isdark ? "text-white" : "text-dark"}`}>{parsearHora(semTerminados.hora)}</p>
                                                            </div>
                                                        </div>
                                                        <button onClick={() => irSeminario(semTerminados.etiqueta)} className={`btn w-100 mt-3 d-flex justify-content-center align-items-center gap-2 p-2 border border-2 fw-bolder ${isdark ? "bg-transparent border-white text-white" : "btn-light border-dark text-dark"}`}>
                                                            {!isdark ? (<img src="/img/icons/VerSeminario.webp" alt="" />) : (<img src="/img/iconsDarkMode/VerSeminarioDark.webp" alt="" />)}Ver Seminario Realizado</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </InfiniteScroll>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    )
}