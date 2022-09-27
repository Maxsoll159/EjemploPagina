import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { LibroReclamos } from "../components/Politicas/LibroReclamos";
import { PoliticasCalidad } from "../components/Politicas/PoliticasCalidad";
import { PoliticasCookies } from "../components/Politicas/PoliticasCookies";
import { ProteccionDatos } from "../components/Politicas/ProteccionDatos";
import { TerminosCondiciones } from "../components/Politicas/TerminosCondiciones";
export const PoliticasEmpresa = () => {

    const [anchoPan, setAnchoPan] = useState(0)
    let navigate = useNavigate()

    let location = useLocation()
    console.log(location)

    const navegar = (valor) => {
        navigate(`${valor}`);
    }


        return (
            <>
                <Container>
                    <Row>
                        <Col xl={3}>
                            <h1 className="fw-bolder mt-5 text-center text-xl-start">Legal</h1>
                            <div className="d-flex flex-xl-column gap-3 mt-0 mt-xl-5 flex-wrap" >
                                <button className="btn w-100 text-start fw-bolder" onClick={() => navegar("proteccion-datos")}>Políticas de Protección de Datos</button>
                                <button className="btn w-100 text-start fw-bolder" onClick={() => navegar("terminos-servicios")}>Terminos de servicio</button>
                                <button className="btn w-100 text-start fw-bolder" onClick={() => navegar("politicas-cookies")}>Políticas de Cookies</button>
                                <button className="btn w-100 text-start fw-bolder" onClick={() => navegar("politicas-calidad")}>Política de la Calidad</button>
                                <button className="btn w-100 text-start fw-bolder" onClick={() => navegar("libro-reclamaciones")}>Libro de Reclamaciones</button>
                            </div>
                        </Col>
                        <Col xl={9}>
                            {
                                location.pathname.includes("proteccion-datos") ? (<ProteccionDatos />) : location.pathname.includes("terminos-servicios") ? (<TerminosCondiciones />) : location.pathname.includes("politicas-cookies") ? (<PoliticasCookies />) : location.pathname.includes("politicas-calidad") ? (<PoliticasCalidad />) : location.pathname.includes("libro-reclamaciones") ? (<LibroReclamos />) : location.pathname.includes("politicas-de-privacidad") ? (<h1></h1>) : (<></>)
                            }

                        </Col>
                    </Row>
                </Container>
            </>
        )
    }