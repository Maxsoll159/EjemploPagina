import { Cursos } from "../../pages/Cursos"
import { DetalleSeminario } from "../../pages/DetalleSeminario"
import { Diplomas } from "../../pages/Diplomas"
import { Page404 } from "../../pages/Page404"
import { PageCursos } from "../../pages/PageCursos"
import { PageDiplomas } from "../../pages/PageDiplomas"
import { PageInHouse } from "../../pages/PageInHouse"
import { PageNosotros } from "../../pages/PageNosotros"
import { PagePrincipal } from "../../pages/PagePrincipal"
import { PageRegistro } from "../../pages/PageRegistro"
import { PageSeminarios } from "../../pages/PageSeminarios"
import { PoliticasEmpresa } from "../../pages/PoliticasEmpresa"
import { Seminarios } from "../../pages/Seminarios"
import { VerCertificado } from "../../pages/VerCertificado"
import { Footer } from "../Footer"
import { LibroReclamos } from "../Politicas/LibroReclamos"
import { PoliticasCalidad } from "../Politicas/PoliticasCalidad"
import { PoliticasCookies } from "../Politicas/PoliticasCookies"
import { ProteccionDatos } from "../Politicas/ProteccionDatos"
import { TerminosCondiciones } from "../Politicas/TerminosCondiciones"
import { Routes, Route, useLocation } from "react-router-dom";
import {NavBar} from '../NavBar'
import { PageDiplomado } from "../../pages/PageDiplomado"
import { Diplomados } from "../../pages/Diplomado"
import { PruebaChat } from "../../pages/PruebaChat"

export const RouterInternas = () => {

    const location = useLocation()
    if (location.pathname === "/blog") {
        window.location.href = "https://aula.desarrolloglobal.pe/blog"
    }
    if (location.pathname === "/aula") {
        window.location.href = "https://aula.desarrolloglobal.pe/aula"
    }
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<PagePrincipal />} />
                <Route path="seminarios" element={<PageSeminarios />} />
                <Route path="diplomas/:etiqueta" element={<PageDiplomas />} />
                <Route path="cursos/:etiqueta" element={<PageCursos />} />
                <Route path="cursos" element={<Cursos />} />
                <Route path="diplomas" element={<Diplomas />} />
                <Route path="diplomados" element={<Diplomados />} />
                <Route path="diplomados/:etiqueta" element={<PageDiplomado />} />
                <Route path="InHouse" element={<PageInHouse />} />
                <Route path="nosotros" element={<PageNosotros />} />
                <Route path="seminarios/:id" element={<Seminarios />} />
                <Route path="seminariosInfo/:name" element={<DetalleSeminario />} />
                <Route path="politicas-de-privacidad/" element={<PoliticasEmpresa />} >
                    <Route path="proteccion-datos" element={<ProteccionDatos />} />
                    <Route path="terminos-servicios" element={<TerminosCondiciones />} />
                    <Route path="politicas-cookies" element={<PoliticasCookies />} />
                    <Route path="politicas-calidad" element={<PoliticasCalidad />} />
                    <Route path="libro-reclamaciones" element={<LibroReclamos />} />
                </Route>
                <Route path="buscar_certificado" element={<VerCertificado />}></Route>
                <Route path="registro" element={<PageRegistro />}></Route>
                <Route path="/*" element={<Page404 />}></Route>
                <Route path="ChatPrueba" element={<PruebaChat />}></Route>
            </Routes>
            {
                location.pathname.includes("/seminarios/") || location.pathname.includes("/registro") ? (<></>) : (<Footer />)
            }
        </>
    )
}