import { Routes, Route, useLocation } from "react-router-dom";
import { RouterInternas } from "../components/RouterInternas/RouterInternas";
import { PasarelaPagos } from "../pages/PaseraPagos";


export const Router = () => {
    const location = useLocation()
    if (location.pathname === "/blog") {
        window.location.href = "https://aula.desarrolloglobal.pe/blog"
    }
    if (location.pathname === "/aula") {
        window.location.href = "https://aula.desarrolloglobal.pe/aula"
    }
    return (
        <>
            <Routes>
                <Route path="/*" element={<RouterInternas />} />
                <Route path="pasarela-pagos" element={<PasarelaPagos />}></Route>
            </Routes>
        </>
    )
}