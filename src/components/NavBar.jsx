
import { Container, Row, Col, Nav, Navbar, NavDropdown, Offcanvas, Spinner } from "react-bootstrap";
import { UserContext } from '../context/DarkModeContext';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { parsearFecha, parsearHora, recortarTituloDiplomas } from "../helpers/funciones";
import { BeneifioNav } from "./Navbar/BeneficioNav";
import { BtnLogin } from "./PagePrincipal/BtnLogin";
import { CerrarSesion } from "../helpers/ApiLogin";
import { AlertaSeminario } from "./Navbar/AlertaSeminario";
import { useEffect } from "react";
export const NavBar = () => {
    const { cartItem, isdark, deleteItemsCart, diplomasLimit, cursosLimit, usuarioLogin, seminarios } = useContext(UserContext)
    const Swal = require('sweetalert2')
    let naviagte = useNavigate()
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    /*Carrito de Compra*/
    const total = cartItem.reduce(
        (previous, current) => previous + current.amount * current.precio.final, 0
    )

    /*Paginacion*/
    const verMas = (tipo) => {
        naviagte(`/${tipo}`)
        if (window.screen.width < 1200) {
            setShow1(!show1)
        }
    }

    /*Cerrar Sesion*/
    const cerrarSesion = () => {
        const data = new FormData()
        data.append('token', usuarioLogin.token)
        Swal.fire({
            title: 'Estas seguro de salir?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!',
            width: 600,
            height: 300,
            padding: '1em',
            color: 'black',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://nuevapagina.s3.amazonaws.com/mascota.webp")
              left top
              no-repeat
            `
        }).then((resul) => {
            if (resul.isConfirmed) {
                CerrarSesion(data).then((resp) => { console.log() })
                localStorage.removeItem("usuarioDesarrollo");
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=.desarrolloglobal.pe";
                window.location.reload()
                naviagte("/")
            }
        })

    }
    /*Cerrar Navbar*/
    const [show1, setShow1] = useState(false);
    const cerrarNav = () => {
        setShow1(!show1)
    }

    const cerrarNavLink = () => {
        if (window.screen.width < 1200) {
            setShow1(!show1)
        }
    }


    const handleClose = () => setShow1(false);

    setTimeout(() => {
        let navbar = document.querySelectorAll("#navbarScrollingDropdown")
        if (window.screen.width > 1200) {
            navbar.forEach(element => {
                element.click()
            })
        }
    }, 500)
    const [nombreUsu, setNomnreUsu] = useState("")
    useEffect(() => {
        if (usuarioLogin.nombre !== undefined) {
            setNomnreUsu(usuarioLogin.nombre.split(" "))
        }
    }, [usuarioLogin])
    /*Recorte */
    console.log(nombreUsu)
    let diplomasNav = diplomasLimit.slice(0, 8)
    let cursosNav = cursosLimit.slice(0, 8)
    console.log("Soiy seminario", usuarioLogin)
    return (
        <>
            <AlertaSeminario {...seminarios} />
            <Navbar collapseOnSelect bg="light" expand="xl" className="h-100" variant="white" >
                <Container fluid >
                    <Navbar.Brand href="#">{
                        <>
                            <Link to="/"><img src='https://archivos-comunes.s3.amazonaws.com/2021/web/logo-DG-nuevo.webp' width={125} alt="desarrolloGlobal" className="d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none" /></Link>
                            <Link to="/"><img src='https://archivos-comunes.s3.amazonaws.com/2021/web/logo-DG-nuevo.webp' width={180} alt="desarrolloGlobal" className="d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block" /></Link>
                        </>
                    }</Navbar.Brand>

                    <div className="d-flex align-items-center gap-1">
                        {
                            usuarioLogin.length !== 0 ? (

                                <div className="d-flex align-items-center me-2 mostrarNav d-block d-xl-none gap-2">
                                    <NavDropdown title={nombreUsu !== "" ? nombreUsu[0] : ("Error")} id="collasible-nav-dropdown" className="fw-bolder navPru" style={{ fontSize: "13px" }}>
                                        <div className="d-flex align-items-center p-3 gap-2">
                                            <img src={usuarioLogin.avatar} alt="" width={45} height={45} className="rounded-circle" />
                                            <div>
                                                <p className="m-0 fw-bold">{usuarioLogin.nombre}</p>
                                                <p className="m-0 fw-normal font-size-14" >{usuarioLogin.correo}</p>
                                            </div>
                                        </div>
                                        <hr className="m-0 mb-3" />
                                        <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavLap.webp" alt="" width={20} />Mi Aula</NavDropdown.Item>
                                        <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/#tab_perfil" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavUsu.webp" alt="" width={20} />Mi perfil</NavDropdown.Item>
                                        <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/#tab_cursos" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavCur.webp" alt="" width={20} />Mis Cursos</NavDropdown.Item>
                                        <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/#tab_diplomas" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavCur.webp" alt="" width={20} />Miss Diplomas</NavDropdown.Item>
                                        <NavDropdown.Item href="https://aula.desarrolloglobal.pe/sesiones_hoy_manana.php" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavCalen.webp" alt="" width={20} />Sesion Hoy y mañana</NavDropdown.Item>
                                        {
                                            usuarioLogin.tipo === "ADMI" ? (<NavDropdown.Item href="https://aula.desarrolloglobal.pe/admin/" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavAdmin.webp" alt="" width={20} />Administrador</NavDropdown.Item>) : (<></>)
                                        }
                                        <NavDropdown.Item className="d-flex gap-3 align-items-center w-100 py-1" onClick={cerrarSesion}>
                                            <img src="/img/icons/IconNavSalir.webp" alt="" width={20} />Cerrar Sesion
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <img src={usuarioLogin.avatar} alt="" width={37} className="rounded-circle" />
                                </div>
                            ) : (<>
                                <BtnLogin tipo={"aula"} />
                            </>)
                        }
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} onClick={cerrarNav} />
                    </div>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                        onHide={handleClose}
                        show={show1}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                                <img src="https://archivos-comunes.s3.amazonaws.com/2021/web/logo-DG-nuevo.webp" alt="" height={50} width={200} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-between flex-grow-1">
                                <div className="d-flex gap-3 align-items-xl-center flex-column flex-xl-row">
                                    <Link to="/" className="text-decoration-none text-dark" onClick={cerrarNavLink}><Nav className="fw-bolder">Inicio </Nav></Link>
                                    {/*Cursos*/}
                                    <NavDropdown className={`fw-bolder ${window.screen.width > 1200 ? ("prueba") : ("")}`} title="Cursos" id="navbarScrollingDropdown">
                                        <div className="d-block mx-auto w-100res m-0 p-0" style={{ width: "1050px" }}>
                                            <Row>
                                                <Col xl={8} className="px-xl-5 py-xl-4 px-5 py-4">
                                                    <h4 className="fw-bold">Cursos</h4>
                                                    <Row>
                                                        <Col xl={12} className="p-2 d-flex flex-wrap justify-content-start justify-content-xl-around flex-column flex-xl-row d-blok">
                                                            {cursosNav !== undefined ? (
                                                                cursosNav.map((cursosLimit) => (
                                                                    <div key={cursosLimit.id} className="d-flex gap-3 mt-3 w-50 w-100res">
                                                                        <img src={cursosLimit.icono} alt="" width={50} height={50} className="rounded-circle" />
                                                                        <div>
                                                                            <Link to={`/cursos/${cursosLimit.etiqueta}`} className="text-decoration-none text-dark" onClick={cerrarNavLink}><p className="m-0 fw-bolder">{recortarTituloDiplomas(cursosLimit.titulo)}</p></Link>
                                                                            <p className="fw-normal m-0">Inicia: {(cursosLimit.inicio).substring(8,)} {parsearFecha(cursosLimit.inicio)}</p>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (<h1>Cargando.....</h1>)}

                                                        </Col>
                                                    </Row>
                                                    <button className="btn btn-primary w-50 d-block mx-auto mt-3" onClick={() => verMas("cursos")}>Ver mas Cursos</button>
                                                </Col>
                                                <BeneifioNav />
                                            </Row>
                                        </div>
                                    </NavDropdown>

                                    {/*Diplomas*/}
                                    <NavDropdown className={`fw-bolder ${window.screen.width > 1200 ? ("prueba") : ("")}`} title="Diplomas" id="navbarScrollingDropdown">
                                        <div className="d-block mx-auto w-100res m-0 p-0" style={{ width: "1050px" }}>
                                            <Row>
                                                <Col xl={8} className="px-xl-5 py-xl-4 px-5 py-4">
                                                    <h4 className="fw-bold">Diplomas</h4>
                                                    <Row>
                                                        <Col xl={12} className="p-2 d-flex flex-wrap justify-content-start justify-content-xl-around flex-column flex-xl-row">
                                                            {diplomasNav !== undefined ? (
                                                                diplomasNav.map((diploLimit, index) => (
                                                                    <div key={index} className="d-flex gap-3 mt-3 w-50 w-100res">
                                                                        <img loading="lazy" src={diploLimit.imagen} alt="" width={50} height={50} className="rounded-circle border border-dark" />
                                                                        <div>
                                                                            <Link to={`/diplomas/${diploLimit.etiqueta}`} className="text-decoration-none text-dark"><p className="m-0 fw-bolder" onClick={cerrarNavLink}>{recortarTituloDiplomas(diploLimit.titulo)}</p></Link>
                                                                            <p className="fw-normal m-0">Inicia: {(diploLimit.inicio).substring(8,)} {parsearFecha(diploLimit.inicio)}</p>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (<h1>Cargando.....</h1>)}

                                                        </Col>
                                                    </Row>
                                                    <button className="btn btn-primary w-50 d-block mx-auto mt-3" onClick={() => verMas("diplomas")}>Ver mas Diplomas</button>
                                                </Col>
                                                <BeneifioNav />
                                            </Row>
                                        </div>
                                    </NavDropdown>

                                    <Link to="/diplomados" className="text-decoration-none text-dark" onClick={cerrarNavLink}><Nav className="fw-bolder">Diplomados</Nav></Link>
                                    <Link to="/InHouse" className="text-decoration-none text-dark" onClick={cerrarNavLink}><Nav className="fw-bolder">InHouse</Nav></Link>
                                    <Link to="/seminarios" className="text-decoration-none text-dark" onClick={cerrarNavLink}><Nav className="fw-bolder">Seminarios</Nav></Link>
                                    <Link to="/nosotros" className="text-decoration-none text-dark" onClick={cerrarNavLink}><Nav className="fw-bolder">Contactenos</Nav></Link>
                                    <a href="https://blog.desarrolloglobal.pe" className="text-decoration-none text-dark" ><Nav className="fw-bolder">Blog</Nav></a>
                                </div>

                                <div className="d-flex gap-2 gap-xl-4 mt-3 mt-xl-0 justify-content-center flex-column  align-items-start flex-xl-row align-items-xl-center ">


                                    <div className="carrito position-relative w-100res">
                                        <button type="button" className="btn bg-white position-relative rounded shadow border-light w-100res d-flex justify-content-start justify-content-xl-center align-items-center p-0 shadow-res w-100res prueba" style={{ width: "40px", height: "40px" }} onClick={handleClick}>
                                            <img src="/img/icons/NavNotificacion.webp" alt="" className="d-block mx-auto d-none d-xl-block" width={20} />
                                            <span className="fw-bolder d-xl-none">Notificaciones</span>
                                            <span className="position-absolute translate-middle rounded-pill p-0 m-0 top-0 start-100" style={{ top: "10%" }}>
                                                <div class="badge rounded-pill icon-noti-whats">
                                                    {seminarios.length}
                                                </div>
                                            </span>
                                        </button>

                                        <div className="mostrar start-50 translate-middle-x bg-white rounded py-3 px-4 shadow responseCarrito">
                                            <div className="d-flex gap-3 align-items-center"><h6 className="fw-bolder m-0">Seminarios en Vivo</h6><div className="badge bg-danger bg-opacity-10 text-danger ms-2">{seminarios.length} seminario</div></div>
                                            <hr />
                                            <div>
                                                {
                                                    seminarios !== undefined ? (
                                                        seminarios.map((semi) => (
                                                            <div key={semi.id} className="d-flex gap-3">
                                                                <img src={semi.banner.seminario} alt="" width={130} height={100} className="rounded mt-2 rounded" />
                                                                <div>
                                                                    <h6 className="m-0 fw-bolder">{semi.titulo}</h6 >
                                                                    <p className="m-0"><span className="">Fecha : <span>{semi.fecha.substring(7, 5)} de {parsearFecha(semi.fecha)}</span></span></p>
                                                                    <p className="m-0"><span className="">Hora : <span>{parsearHora(semi.hora)}</span></span></p>
                                                                    <Link to={`seminariosInfo/${semi.etiqueta}`} className="text-decoration-none">Ver Seminario 👉</Link>
                                                                </div>
                                                            </div>

                                                        )

                                                        )
                                                    ) : (<></>)
                                                }
                                            </div>
                                            <div>
                                                {seminarios.length === 0 ? (
                                                    <div className="d-flex gap-3 align-items-center mt-2">
                                                        <Spinner animation="grow" variant="primary" />
                                                        <h4 className="m-0">No hay seminario en Vivo</h4>
                                                    </div>
                                                ) : (<></>)


                                                }
                                            </div>
                                        </div>
                                    </div>





                                    <div className="carrito position-relative w-100res">
                                        <button type="button" className="btn bg-white position-relative rounded shadow border-light w-100res d-flex justify-content-start justify-content-xl-center align-items-center p-0 shadow-res w-100res prueba" style={{ width: "40px", height: "40px" }} onClick={handleClick}>
                                            <img src="/img/icons/NavCarrito.webp" alt="" className="d-block mx-auto d-none d-xl-block" width={20} />
                                            <span className="fw-bolder d-xl-none">Carrito</span>
                                            <span className="position-absolute translate-middle rounded-pill p-0 m-0 top-0 start-100" style={{ top: "10%" }}>
                                                <div class="badge rounded-pill icon-noti-whats">
                                                    {cartItem.length}
                                                </div>
                                            </span>
                                        </button>

                                        <div className="mostrar start-50 translate-middle-x bg-white rounded py-3 px-4 shadow responseCarrito">
                                            <div className="d-flex gap-3 align-items-center"><h6 className="fw-bolder m-0">Carrito</h6><div className="badge bg-danger bg-opacity-10 text-danger ms-2">{cartItem.length} items</div></div>
                                            <div>
                                                {
                                                    cartItem !== undefined ? (
                                                        cartItem.map((cart) => (
                                                            <div key={cart.id} className="d-flex gap-3 mt-3 align-items-center">
                                                                <img loading="lazy" src={cart.imagen} alt="" width={100} height={65} className="rounded border border-dark" />
                                                                <div className="w-100">
                                                                    <p className="m-0 fw-bolder">{cart.titulo}</p>
                                                                    <p className="m-0 fs-6 fw-bolder">{cart.tipo}</p>
                                                                    <div className="d-flex gap-3 align-items-center">
                                                                        <p className="m-0 fw-bolder text-danger fs-5 ">S/. {cart.precio.final}</p>
                                                                        <p className="m-0 text-decoration-line-through">S/. {cart.precio.normal}</p>
                                                                    </div>
                                                                </div>
                                                                <button className="btn-close" onClick={() => deleteItemsCart(cart)}></button>
                                                            </div>
                                                        ))
                                                    ) : (<div></div>)
                                                }
                                                <div>
                                                    {
                                                        cartItem.length === 0 ? (
                                                            <div className="d-flex gap-3 align-items-center mt-2">
                                                                <Spinner animation="grow" variant="primary" />
                                                                <h4 className="m-0">No tiene productos</h4>
                                                            </div>

                                                        ) : (<>
                                                            <hr /><div className="d-flex justify-content-between align-items-center">
                                                                <p className="m-0 fw-bolder mt-2 fs-4">Total: <span className="text-danger">S/. {total}</span></p>
                                                                <button className="btn btn-success">Comprar</button>
                                                            </div>
                                                        </>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        usuarioLogin.length !== 0 ? (
                                            <div className="d-flex align-items-center gap-2 me-3">
                                                <img src={usuarioLogin.avatar} alt="" width={50} height={50} className="rounded-circle" />
                                                <NavDropdown title={"Hola " + usuarioLogin.nombre} id="collasible-nav-dropdown" className="fw-bolder">
                                                    <div className="d-flex align-items-center p-3 gap-2">
                                                        <img src={usuarioLogin.avatar} alt="" width={45} height={45} className="rounded-circle" />
                                                        <div>
                                                            <p className="m-0 fw-bold">{usuarioLogin.nombre}</p>
                                                            <p className="m-0 fw-normal font-size-14" >{usuarioLogin.correo}</p>
                                                        </div>
                                                    </div>
                                                    <hr className="m-0 mb-3" />
                                                    <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavLap.webp" alt="" width={20} />Mi Aula</NavDropdown.Item>
                                                    <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/#tab_perfil" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavUsu.webp" alt="" width={20} />Mi perfil</NavDropdown.Item>
                                                    <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/#tab_cursos" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavCur.webp" alt="" width={20} />Mis Cursos</NavDropdown.Item>
                                                    <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/#tab_diplomas" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavCur.webp" alt="" width={20} />Miss Diplomas</NavDropdown.Item>
                                                    <NavDropdown.Item href="https://aula.desarrolloglobal.pe/sesiones_hoy_manana.php" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavCalen.webp" alt="" width={20} />Sesion Hoy y mañana</NavDropdown.Item>
                                                    {
                                                        usuarioLogin.tipo === "ADMI" ? (<NavDropdown.Item href="https://aula.desarrolloglobal.pe/admin/" className="d-flex gap-3 align-items-center"><img src="/img/icons/IconNavAdmin.webp" alt="" width={20} />Administrador</NavDropdown.Item>) : (<></>)
                                                    }
                                                    <NavDropdown.Item className="d-flex gap-3 align-items-center w-100 py-1" onClick={cerrarSesion}>
                                                        <img src="/img/icons/IconNavSalir.webp" alt="" width={20} />Cerrar Sesion
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </div>

                                        ) : (<BtnLogin />)
                                    }
                                    {/**/}

                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar >
        </>

    )
}