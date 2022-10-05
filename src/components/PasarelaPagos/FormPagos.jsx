import { FormPasarela } from "./FormPasarela"

export const FormPagos = () =>{
    return(
        <>
            <h3 className="fw-bolder">Pago con Tarjeta Crédito/Débito</h3 >
            <div className="d-flex gap-3 mt-4">
                <img src="https://nuevapagina.s3.amazonaws.com/iconTarjeta.webp" alt="" className="img-fluid" />
                <img src="https://nuevapagina.s3.amazonaws.com/iconYape.webp" alt="" className="img-fluid" />
                <img src="https://nuevapagina.s3.amazonaws.com/iconBanco.webp" alt="" className="img-fluid"/>
            </div>
            <FormPasarela/>
        </>
    )
}