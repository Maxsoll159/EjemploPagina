import {Col} from "react-bootstrap";
export const BeneifioNav = () => {
    return (
        <Col xl={4} className="d-none d-sm-none d-md-none d-lg-none d-xl-block">
            <div className="h-100 w-100 px-5 py-4 rounded" style={{ background: "#F4F6FA" }}>
                <h4 className="fw-bold">Nuestros Beneficios</h4>
                <div className="bg-white rounded w-100 d-flex p-3 gap-3 align-items-center mt-3">
                    <img loading="lazy" src="https://nuevapagina.s3.amazonaws.com/IconLiveDiploma.webp" alt="" className="w-25" />
                    <div>
                        <p className="m-0 text-danger">Clases en Vivo</p>
                    </div>
                </div>
                <div className="bg-white rounded w-100 d-flex p-3 gap-3 align-items-center mt-3">
                    <img loading="lazy" src="https://nuevapagina.s3.amazonaws.com/IconMenu2.webp" alt="" className="w-25" />
                    <div>
                        <p className="m-0 text-warning">Certificación
                            Universitaria</p>
                    </div>
                </div>
                <div className="bg-white rounded w-100 d-flex p-3 gap-3 align-items-center mt-3">
                    <img loading="lazy" src="https://nuevapagina.s3.amazonaws.com/IconMenu3.webp" alt="" className="w-25" />
                    <div>
                        <p className="m-0 text-success">Garantía de
                            Calidad</p>
                    </div>
                </div>
                <div className="bg-white rounded w-100 d-flex p-3 gap-3 align-items-center mt-3">
                    <img loading="lazy" src="https://nuevapagina.s3.amazonaws.com/IconMenu4.webp" alt="" className="w-25" />
                    <div>
                        <p className="m-0 text-primary">Plataforma
                            Premium</p>
                    </div>
                </div>
                <p className="text-primary text-center mt-3 m-0">TODAS NUESTRAS CURSOS
                    TIENES MAS SESIONES</p>
                <p className="m-0 text-center fw-normal">Te damos mas por tu dinero</p>
            </div>
        </Col>
    )
}