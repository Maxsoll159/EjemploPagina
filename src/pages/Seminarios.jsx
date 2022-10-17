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
import ReactHlsPlayer from 'react-hls-player/dist';
import { SeminarioBtn } from '../components/SeminarioLive/SeminarioBtn';

export const Seminarios = () => {
    let { id } = useParams();
    const [seminarios, setSeminarios] = useState([])
    const { isdark } = useContext(UserContext)

    useEffect(() => {
        seminarioId(id).then((resp) => setSeminarios(resp))
    }, [id])

    setTimeout(() => {
        if (seminarios.id_video !== undefined) {
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
        }
    }, 10)

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

            <Container fluid>
                <Row style={{ height: "calc(100vh - 76.72px)" }}>
                    <Col xl={9} sm={12} className={`p-0 ${!isdark ? "color-live-litgth" : "color"}`}>

                        {
                            seminarios.tipo === "PROXIMO" ? (
                                <ReactHlsPlayer
                                    src={`https://antmediaserver.desarrolloglobal.pe:5443/LiveApp/streams/${seminarios.codigo_envivo}.m3u8`}
                                    autoPlay={true}
                                    controls={true}
                                    width="100%"
                                    height="73%"
                                    className='h-100res'
                                />
                            ) : (
                                <video loading="lazy" id="vdplayer" ratio="14:6" className='h-100res'></video>
                            )
                        }
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
                    <SeminarioBtn {...seminarios}/>
                </Row>
            </Container>
        </>

    )
}