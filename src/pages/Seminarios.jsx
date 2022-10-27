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
    const [cargando, setCargando] = useState(true)

    const { isdark } = useContext(UserContext)

    useEffect(() => {
        seminarioId(id).then((resp) => {
            setSeminarios(resp)
            setCargando(false)
        })
    }, [id])

    setTimeout(() => {
        if (seminarios.id_video !== undefined) {
            const player = new Plyr('#vdplayer', {
                ratio: '14:6'
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
    const [alertaSemi, setAlertaSemi] = useState()

    useEffect(() => {
        setAlertaSemi(document.querySelector("#alertaEnVivo"))
    }, [])

    if (cargando) {
        return (<>Cargando ...</>)
    }

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
                <Row>
                    <Col xl={9} sm={12} className={`color h-100res p-0 medida2`}>
                        <div className={`${seminarios.source === "facebook" ? ("h-100") : ("")}`}>
                            {
                                seminarios.tipo === "PROXIMO" ? (
                                    seminarios.source === "facebook" ? (
                                        <iframe src={seminarios.id_video} width={"100%"} className='d-block mx-auto h-100' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                                    ) : seminarios.source === "normal" ? (
                                        <ReactHlsPlayer
                                            src={`https://antmediaserver.desarrolloglobal.pe:5443/LiveApp/streams/${seminarios.codigo_envivo}.m3u8`}
                                            autoPlay={true}
                                            controls={true}
                                            width="100%"
                                            height="100%"
                                            className='h-100res'
                                        />
                                    ) : (<>Falta configurar Youtube</>)
                                ) : (
                                    seminarios.source === "facebook" ? (
                                        <iframe src={seminarios.id_video} width={"100%"} className='d-block mx-auto h-100' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                                    ) : (
                                        <video loading="lazy" id="vdplayer" className='h-100res'></video>
                                    )

                                )
                            }
                        </div>

                        {seminarios.source !== "facebook" ? (
                            <>
                                <div className='pt-1 ps-4 pe-4 ocultar'>
                                    <div className='d-flex align-items-center justify-content-between mt-1'>
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
                                </div>

                                <div style={{ borderTop: "3px solid #14206B" }} className="mt-2 mb-2 px-4 ocultar">
                                    <h5 className={`mt-2 ${!isdark ? "color-unete-ligth" : "text-white"}`}>Unete a nuestros grupos y sigue los seminarios</h5>
                                    <div className='mt-3'>
                                        <a className='btn btn-success fw-bold'>Grupo Whatsapp</a>
                                        <button className='btn btn-primary fw-bold ms-3'>Grupo Telegram</button>
                                    </div>
                                </div>
                            </>
                        ) : (<></>)

                        }


                    </Col>
                    <SeminarioBtn {...seminarios} />
                </Row>
            </Container>
        </>

    )
}