
import { Container, Row, Col, Nav, Navbar, NavDropdown, Offcanvas, Popover, OverlayTrigger, Spinner, Dropdown } from "react-bootstrap";
import { UserContext } from '../context/DarkModeContext';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { parsearFecha, recortarTituloDiplomas } from "../helpers/funciones";
import { BeneifioNav } from "./Navbar/BeneficioNav";
import { BtnLogin } from "./PagePrincipal/BtnLogin";
import { CerrarSesion } from "../helpers/ApiLogin";
import { useEffect } from "react";
export const NavBar = () => {
    const { cartItem, isdark, deleteItemsCart, diplomasLimit, cursosLimit, usuarioLogin } = useContext(UserContext)
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
              url("http://pa1.narvii.com/6570/1593d98fcb635d938ff843bc4ffab8b6cfa79f2b_00.gif")
              left top
              no-repeat
            `
        }).then((resul) => {
            if (resul.isConfirmed) {
                CerrarSesion(data).then((resp) => { console.log() })
                localStorage.removeItem("usuarioDesarrollo");
                window.location.reload()
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

    console.log(usuarioLogin)

    return (
        <Navbar collapseOnSelect bg="light" expand="xl" className="h-100" variant="white" >
            <Container fluid >
                <Navbar.Brand href="#">{
                    isdark ? (<Link to="/"><img src='https://archivos-comunes.s3.amazonaws.com/2021/web/logo-DG-nuevo.webp' width={145} alt="desarrolloGlobal" /></Link>) :
                        (<Link to="/"><img src='https://archivos-comunes.s3.amazonaws.com/2022/nuevo_logo_blanco.png' width={150} alt="desarrolloGlobal" /></Link>)
                }</Navbar.Brand>
                <div className="d-flex align-items-center gap-1">
                    {
                        usuarioLogin.length !== 0 ? (
                            <div className="d-flex align-items-center me-3 mostrarNav d-block d-xl-none">
                                <NavDropdown title={usuarioLogin.nombre} id="collasible-nav-dropdown" className="fw-bolder navPru" style={{ fontSize: "13px" }}>
                                    <div className="navbar-img py-3 d-flex align-items-center justify-content-center gap-3">
                                        <img src={usuarioLogin.avatar} alt="" width={45} height={45} className="rounded-circle" />
                                        <div>
                                            <p className="m-0 text-white text-center fw-normal">{usuarioLogin.nombre}</p>
                                            <p className="m-0 text-white fw-normal font-size-14 text-light" >{usuarioLogin.tipo}</p>
                                        </div>
                                    </div>
                                    <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/" className="d-flex gap-3 align-items-center fw-bold"><i className="fa fa-laptop" aria-hidden="true"></i>Mi Aula</NavDropdown.Item>
                                    <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/#tab_perfil" className="d-flex gap-3 align-items-center fw-bold"><i className="fa fa-user-circle-o" aria-hidden="true"></i>Mi perfil</NavDropdown.Item>
                                    <NavDropdown.Item href="https://aula.desarrolloglobal.pe/sesiones_hoy_manana.php" className="d-flex gap-3 align-items-center fw-bold"><i className="fa fa-calendar" aria-hidden="true"></i>Sesion Hoy y mañana</NavDropdown.Item>
                                    {
                                        usuarioLogin.tipo === "ADMI" ? (<NavDropdown.Item href="https://aula.desarrolloglobal.pe/admin/" className="d-flex gap-3 align-items-center fw-bold"><i className="fa fa-calendar" aria-hidden="true"></i>Administrador</NavDropdown.Item>) : (<></>)
                                    }
                                    <NavDropdown.Item href="#action/3.4" className="d-flex gap-3 align-items-center fw-bold w-100 py-1" onClick={cerrarSesion}>
                                        <i className="fa fa-sign-in" aria-hidden="true"></i> Cerrar Sesion
                                    </NavDropdown.Item>

                                </NavDropdown>
                            </div>

                        ) : (<></>)
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
                                                    <Col xl={12} className="p-2 d-flex flex-wrap justify-content-start justify-content-xl-around flex-column flex-xl-row">
                                                        {cursosLimit !== undefined ? (
                                                            cursosLimit.map((cursosLimit) => (
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
                                                        {diplomasLimit !== undefined ? (
                                                            diplomasLimit.map((diploLimit, index) => (
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
                            </div>

                            <div className="d-flex gap-2 gap-xl-4 mt-3 mt-xl-0 justify-content-center flex-column  align-items-start flex-xl-row align-items-xl-center ">
                                <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Header as="h3">{`Popover bottom`}</Popover.Header>
                                            <Popover.Body>
                                                <strong>Holy guacamole!</strong> Check this info.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <button type="button" className="btn bg-white position-relative rounded shadow border-light d-flex justify-content-xl-center
                                    justify-content-start w-100res btnsNav p-0 align-items-center shadow-res w-100res" style={{ width: "40px", height: "40px" }} onClick={handleClick}>
                                        <img src="/img/icons/NavNotificacion.webp" alt="" className="d-none d-xl-block mx-auto" width={20} />
                                        <span className="fw-bolder d-xl-none">Notificaciones</span>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger respon">
                                            0
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                </OverlayTrigger>




                                <div className="carrito position-relative w-100res">
                                    <button type="button" className="btn bg-white position-relative rounded shadow border-light w-100res d-flex justify-content-start justify-content-xl-center align-items-center p-0 shadow-res w-100res prueba" style={{ width: "40px", height: "40px" }} onClick={handleClick}>
                                        <img src="/img/icons/NavCarrito.webp" alt="" className="d-block mx-auto d-none d-xl-block" width={20} />
                                        <span className="fw-bolder d-xl-none">Carrito</span>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger respon">
                                            {cartItem.length}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>

                                    <div className="mostrar start-50 translate-middle-x bg-white rounded py-3 px-4 shadow responseCarrito">
                                        <div><h4 className="fw-bolder">Carrito</h4></div>
                                        <div>
                                            {
                                                cartItem !== undefined ? (
                                                    cartItem.map((cart) => (
                                                        <div key={cart.id} className="d-flex gap-3 mt-3 align-items-center">
                                                            <img loading="lazy" src={cart.imagen} alt="" width={100} height={65} className="rounded border border-dark" />
                                                            <div className="w-100">
                                                                <p className="m-0 fw-bolder">{cart.titulo}</p>
                                                                <p className="m-0 fs-6">{cart.tipo}</p>
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
                                                        <div className="d-flex gap-3 align-items-center">
                                                            <Spinner animation="grow" variant="primary" />
                                                            <h4 className="m-0">No tiene productos</h4>
                                                        </div>

                                                    ) : (<p className="m-0 fw-bolder mt-2 fs-4">Total: <span className="text-danger">S/. {total}</span></p>)
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
                                                <div className="navbar-img py-3 d-flex align-items-center justify-content-center gap-3">
                                                    <img src={usuarioLogin.avatar} alt="" width={45} height={45} className="rounded-circle" />
                                                    <div>
                                                        <p className="m-0 text-white text-center fw-normal">{usuarioLogin.nombre}</p>
                                                        <p className="m-0 text-white fw-normal font-size-14 text-light" >{usuarioLogin.tipo}</p>
                                                    </div>
                                                </div>
                                                <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/" className="d-flex gap-3 align-items-center fw-bold"><i className="fa fa-laptop" aria-hidden="true"></i>Mi Aula</NavDropdown.Item>
                                                <NavDropdown.Item href="https://aula.desarrolloglobal.pe/aula/#tab_perfil" className="d-flex gap-3 align-items-center fw-bold"><i className="fa fa-user-circle-o" aria-hidden="true"></i>Mi perfil</NavDropdown.Item>
                                                <NavDropdown.Item href="https://aula.desarrolloglobal.pe/sesiones_hoy_manana.php" className="d-flex gap-3 align-items-center fw-bold"><i className="fa fa-calendar" aria-hidden="true"></i>Sesion Hoy y mañana</NavDropdown.Item>
                                                {
                                                    usuarioLogin.tipo === "ADMI" ? (<NavDropdown.Item href="https://aula.desarrolloglobal.pe/admin/" className="d-flex gap-3 align-items-center fw-bold"><i className="fa fa-calendar" aria-hidden="true"></i>Administrador</NavDropdown.Item>) : (<></>)
                                                }
                                                <NavDropdown.Item href="#action/3.4" className="d-flex gap-3 align-items-center fw-bold w-100 py-1" onClick={cerrarSesion}>
                                                    <i className="fa fa-sign-in" aria-hidden="true"></i> Cerrar Sesion
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

    )
}