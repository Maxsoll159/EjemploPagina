import { Container, Row, Col } from 'react-bootstrap';
import { ModalLive } from '../components/SeminarioLive/ModalLive';
import { UserContext } from '../context/DarkModeContext';
import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { seminarioId } from '../helpers/SeminariosApi';
import { parsearFecha, parsearHora } from '../helpers/funciones';
import Plyr from "plyr";
import "../../node_modules/plyr/dist/plyr.css";
import { Helmet } from 'react-helmet';
export const Seminarios = () => {
    let { id } = useParams();
    const [seminarios, setSeminarios] = useState([])
    const { isdark } = useContext(UserContext)
    const [{ chat, detalle, promo }, setPartes] = useState({
        chat: true,
        detalle: false,
        promo: false
    });
    useEffect(() => {
        seminarioId(id).then((resp) => setSeminarios(resp))
    }, [id])

    setTimeout(() => {
        /*if (seminarios.id_video !== undefined) {
            const player = new Plyr('#vdplayer', {
                ratio: '13:6'
            });
            player.source = {
                type: 'video',
                sources: [
                    {
                        src: `${seminarios.id_video}`,
                        provider: 'youtube',
                    },
                ],
            };
        }*/

    }, 10)
    console.log(seminarios)
    return (
        <>
            <Helmet>

                <title>{seminarios.titulo}</title>
                <meta name={seminarios.titulo} content={seminarios.descripcion} />

                <meta name="author" content="Centro de Capacitación y Desarrollo Global" />
                <meta name="google-signin-client_id" content="740073627785-npq9orne985ob2cs6j5qlb9m2sdsl2lg.apps.googleusercontent.com" />
                <meta name="google-site-verification" content="hWAwX4vVYax5SPwJoWF6AzsqmoKcV1XmuWQgHgqoD44" />
                <link rel="alternate" hreflang="es" href="https://aula.desarrolloglobal.pe/" />

                <meta property="og:site_name" content="Centro de Capacitación y Desarrollo Global" />
                <meta property="fb:app_id" content="226972427818042" />

                <meta property="og:title" content={seminarios.titulo} />
                <meta property="og:description" content={seminarios.descripcion} />
                <Helmet>
                    {
                        seminarios.banner !== undefined ? (
                            <>
                                <meta property="og:image" content={seminarios.banner.seminario} />
                                <meta property="og:image:secure_url" content={seminarios.banner.seminario} />
                            </>
                        ) : (<></>)
                    }
                </Helmet>
            </Helmet>
            {(seminarios === [] || seminarios === undefined) ? (<h1>Cargando</h1>)
                : (<Container fluid>
                    <Row style={{ height: "calc(100vh - 76.72px)" }}>
                        <Col xl={9} sm={12} className={`p-0 ${!isdark ? "color-live-litgth" : "color"}`}>
                            {/*  <video loading="lazy" id="vdplayer" ratio="14:6" className='h-100res'></video>*/}
                            <ReactHlsPlayer
                                src="https://antmediaserver.desarrolloglobal.pe:5443/LiveApp/play.html?name=seminario13"
                                autoPlay={false}
                                controls={true}
                                width="100%"
                                height="auto"
                            />,
                            <div className='pt-2 ps-4 pe-4 ocultar'>
                                <div className='d-flex align-items-center justify-content-between mt-2'>
                                    <div className='caja-camara rounded'>
                                        <img loading='lazy' src="/img/icons/camara.png" alt="" className='' />
                                    </div>
                                    <h5 className={`w-50 p-0 m-0 fw-bolder ${!isdark ? "text-dark" : "text-white"}`}>{seminarios.titulo}</h5>
                                    <div className='d-flex align-items-center'>
                                        <div className='bg-white' style={{ width: "2px", height: "20px" }}></div>
                                        {
                                            !isdark ? (<img loading='lazy' src="/img/icons/user.webp" alt="" className='ms-3' />)
                                                : (<img loading='lazy' src="/img/iconsDarkMode/userWhite.webp" alt="" className='ms-3' />)
                                        }
                                        <p className={`p-0 m-0 ms-3 fw-bold ${!isdark ? "text-dark" : "text-white"}`}>230</p>
                                    </div>
                                    <div className={`d-flex align-items-center pt-3 py-3 ps-4 px-4 rounded ${!isdark ? "text-primary bg-white shadow" : "text-white color-fecha "}`}>
                                        {
                                            !isdark ? (<img loading='lazy' src="/img/iconsDarkMode/calendarWhite.webp" alt="" />)
                                                : (<img loading='lazy' src="/img/icons/calendar.png" alt="" />)
                                        }
                                        <p className='p-0 m-0 ps-3 fw-bold'>{(seminarios.fecha !== undefined) ? ((seminarios.fecha).substring(8, 10)) : ""} de {(seminarios.fecha !== undefined) ? (parsearFecha(seminarios.fecha)) : ""} | {(seminarios.fecha !== undefined) ? (parsearHora(seminarios.hora)) : ""}</p>
                                    </div>
                                    <div>
                                        <button className='bg-white p-3 rounded text-primary fw-bold shadow' style={{ border: "none" }}>Compartir <img loading='lazy' src="/img/icons/compartir.png" alt="" /></button>
                                    </div>

                                </div>
                                <div style={{ borderTop: "3px solid #14206B" }} className="mt-3">
                                    <h5 className={`mt-2 ${!isdark ? "color-unete-ligth" : "text-white"}`}>Unete a nuestros grupos y sigue los seminarios</h5>
                                    <div className='mt-3'>
                                        <a className='btn btn-success fw-bold'>Grupo Whatsapp</a>
                                        <button className='btn btn-primary fw-bold ms-3'>Grupo Telegram</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} sm={12} className={`p-0 ${!isdark ? "bg-white shadow" : "color-live"}`}>
                            <div>
                                {
                                    !isdark ? (<div className='d-flex mt-3'>
                                        <button className={`caja-live-ligth ms-1 p-3 text-white fw-bolder ${chat === true ? "activate-caja-ligth" : ""}`} onClick={() =>
                                            setPartes({
                                                chat: true,
                                                detalle: false,
                                                promo: false
                                            })
                                        }>
                                            {
                                                chat === true ? (<img loading='lazy' src="/img/iconsDarkMode/chatActivo.svg" alt="" className='d-block mx-auto' />)
                                                    : (<img loading='lazy' src="/img/iconsDarkMode/chat.svg" alt="" className='d-block mx-auto' />)
                                            }
                                            <p>Chat en Vivo</p></button>

                                        <button className={`caja-live-ligth ms-1 p-3 text-white fw-bolder ${detalle === true ? "activate-caja-ligth" : ""}`} onClick={() => setPartes({
                                            chat: false,
                                            detalle: true,
                                            promo: false
                                        })
                                        }>{detalle === true ? (<img loading='lazy' src="/img/iconsDarkMode/LibreriaWhite.svg" alt="" className='d-block mx-auto' />) :
                                            (<img loading='lazy' src="/img/iconsDarkMode/Libreria.svg" alt="" className='d-block mx-auto' />)
                                            }<p>Detalles</p></button>

                                        <button className={`caja-live-ligth ms-1 p-3 text-white fw-bolder ${promo === true ? "activate-caja-ligth" : ""}`} onClick={() => setPartes({
                                            chat: false,
                                            detalle: false,
                                            promo: true
                                        })}>{
                                                promo === true ? (<img loading='lazy' src="/img/iconsDarkMode/RegaloWhite.svg" alt="" className='d-block mx-auto' />)
                                                    : (<img loading='lazy' src="/img/iconsDarkMode/Regalo.svg" alt="" className='d-block mx-auto' />)
                                            }<p>Promocion</p></button>
                                    </div>)
                                        :
                                        (<div className='d-flex mt-3'>
                                            <button className={`cajas-live ms-1 p-3 text-white fw-bolder ${chat === true ? "activate" : ""}`} onClick={() =>
                                                setPartes({
                                                    chat: true,
                                                    detalle: false,
                                                    promo: false
                                                })
                                            }><img loading='lazy' src="/img/icons/chat.png" alt="" className='d-block mx-auto' /><p>Chat en Vivo</p></button>
                                            <button className={`cajas-live ms-1 p-3 text-white fw-bolder ${detalle === true ? "activate" : ""}`} onClick={() => setPartes({
                                                chat: false,
                                                detalle: true,
                                                promo: false
                                            })
                                            }><img loading='lazy' src="/img/icons/detalles.png" alt="" className='d-block mx-auto' /><p>Detalles</p></button>
                                            <button className={`cajas-live ms-1 p-3 text-white fw-bolder ${promo === true ? "activate" : ""}`} onClick={() => setPartes({
                                                chat: false,
                                                detalle: false,
                                                promo: true
                                            })}><img loading='lazy' src="/img/icons/promo.png" alt="" className='d-block mx-auto' /><p>Promocion</p></button>
                                        </div>)
                                }
                            </div>
                            <div className='text-white'>
                                {
                                    chat === true ? (
                                        <div className='res resTablet'>
                                            <h1>Chat</h1>
                                        </div>
                                    ) : detalle === true ? (
                                        <div className='p-4 res resTablet'>
                                            <h4 style={{ color: "#3C86F4" }} className="fw-bold">Tema del Seminario</h4>
                                            <p className={`fw-bold fs-5 ${!isdark ? "text-dark" : "text-white"}`}>{seminarios.titulo}</p>
                                            <h4 style={{ color: "#3C86F4" }} className="mt-3 fw-bolder">¿Quien es el docente?</h4>
                                            <div className='text-dark p-2 rounded d-flex align-items-center gap-3'>
                                                <img loading='lazy' src={seminarios.profesor.perfil} alt="" width={100} className="rounded-circle" />
                                                <h3 className={`${isdark ? "text-white" : "text-dark"}`}>{seminarios.profesor.nombre}</h3>
                                            </div>
                                            <p className={`mt-3 text-justify ${!isdark ? "text-dark" : "text-white"}`}> {seminarios.profesor.descripcion}</p>
                                        </div>
                                    ) : (
                                        <div className='p-4 res resTablet'>
                                            <img loading='lazy' src={seminarios.banner.promocion} alt="" className='rounded' style={{ width: "100%" }} />
                                            <div>
                                                <h5 className='text-center mt-3'>Estamos en Linea 😃</h5>
                                                <a className='btn btn-success w-100 p-2 fs-4 fw-bold' href={`https://api.whatsapp.com/send?phone=51${seminarios.asesor[0].telefono}&text=Hola,%20solicito%20información%20del%20%20diploma:${seminarios.titulo},%20mi%20correo%20es:`}><i class="fa fa-whatsapp" aria-hidden="true"></i> {seminarios.asesor[0] === undefined ? (983495578) : (seminarios.asesor[0].telefono)}</a>
                                                <ModalLive imagen={seminarios.banner.promocion} titulo={seminarios.titulo} fecha={seminarios.fecha} />
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </Col>
                    </Row>
                </Container>)}
        </>

    )
}