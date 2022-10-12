import { useEffect, useState } from "react";
import { ApiCulqi } from "../../helpers/ApiCulqi";


export const FormPasarela = () => {


    let inputStyle = {
        border: "1px solid #E4E7EE",
        height: "40px",
        outline: "none"
    }
    let divBorder = {
        border: "1px solid #E4E7EE",
    }
    const onInputChange = ({ target }) => {
        //RECIBIMOS SIEMRE EL EVENTO
        setTarjeta(target.value);
    };

    const [tarjeta, setTarjeta] = useState("");

    const tarjetass = () => {
        if (tarjeta.includes("4111")) {
            return <img src="/img/iconBancos/visa1.png" className="ps-3" alt="" />
        } else if (tarjeta.includes("5111")) {
            return <img src="/img/iconBancos/mas-1.png" className="ps-3" alt="" />
        } else if (tarjeta.includes("3712")) {
            return <img src="img/iconBancos/iconBancos.png" className="ps-3" alt="" />
        } else if (tarjeta.includes("360012")) {
            return <img src="img/iconBancos/diners1.png" className="ps-3" alt="" />
        } else {
            return <img src="img/iconBancos/IconTarjeta.png" width={45} className="ps-3" alt="" />
        }
    };

    const Culqi = window.Culqi;
    const valor = 3000
    useEffect(() => {
        Culqi.init();
    }, []);

    Culqi.publicKey = "pk_test_6a775a8208136a3f";


    Culqi.settings({
        currency: 'PEN',
        amount: valor
    });

    Culqi.options({
        paymentMethods: {
            tarjeta: true,
            bancaMovil: true,
            agente: true,
            billetera: true,
            cuotealo: true,
            yape: true,
        },
    });


    useEffect(() => {
        const btn_pagar = document.getElementById("btn_pagar");

        Culqi.validationPaymentMethods();

        //Obtenemos los metodos de pagos disponibles
        var paymentTypeAvailable = Culqi.paymentOptionsAvailable;
        btn_pagar.addEventListener("click", function (e) {
            // Crea el objeto Token con Culqi JS
            if (paymentTypeAvailable.token.available) {
                paymentTypeAvailable.token.generate();
            }
            // Crea el objeto Token con Culqi JS
            if (paymentTypeAvailable.yape.available) {
                paymentTypeAvailable.yape.generate();
            }
            // Crea cip
            if (paymentTypeAvailable.cip.available) {
                paymentTypeAvailable.cip.generate();
            }
            // Crea el link de cuotéalo
            if (paymentTypeAvailable.cuotealo.available) {
                paymentTypeAvailable.cuotealo.generate();
            }
            e.preventDefault();
        });
    },[])

    function culqi() {
        if (Culqi.token) {
            // Objeto Token creado exitosamente!
            const token = Culqi.token.id;
            console.log("Se ha creado un Token: ", token);
        } else if (Culqi.order) {
            // Objeto order creado exitosamente!
            const order = Culqi.order;
            console.log("Se ha creado el objeto Order: ", order);
            if (order.paymentCode) {
                console.log("Se ha creado el cip: ", order.paymentCode);
            }
            if (order.qr) {
                console.log("Se ha generado el qr: ", order.qr);
            }
            if (order.cuotealo) {
                console.log("Se ha creado el link cuotéalo: ", order.cuotealo);
            }
        } else {
            // Mostramos JSON de objeto error en consola
            console.log("Error : ", Culqi.error);
        }
    }



    return (
        <div className="w-100">
            <form className="mt-2">
                <div>
                    <label className="w-100">
                        <p className="m-0 mt-3">Recuerda activar tu tarjeta para compras por internet</p>
                        <p className="fw-bolder m-0 mt-3">Número de Tarjeta :</p>
                        <div className="w-100 d-flex gap-3 align-items-center inputDiv rounded mt-3" style={divBorder}>
                            {
                                tarjetass()
                            }
                            <input type="text" size="20" data-culqi="card[number]" id="card[number]" style={inputStyle} className="border-0" placeholder="0000-0000-0000-0000" />
                        </div>
                    </label>
                </div>
                <div className="d-flex mt-3 gap-3 align-items-center">
                    <div>
                        <label className="d-flex align-items-center gap-3">
                            <span className="fw-bolder w-50">Fecha de Expiración de Tarjeta :</span>
                            <div className="inputDiv rounded" style={divBorder}>
                                <input size="2" data-culqi="card[exp_month]" id="card[exp_month]" className="border-0 formPago ps-2" placeholder="MM" style={inputStyle} />
                                <span>/</span>
                                <input size="4" data-culqi="card[exp_year]" id="card[exp_year]" className="border-0 formPago ps-2" placeholder="AAAA" style={inputStyle} />
                            </div>

                        </label>
                    </div>
                    <div>
                        <label className="d-flex gap-3 align-items-center">
                            <span className="fw-bolder w-50 d-flex align-items-center">Código de Seguridad : <img src="/img/icons/IconInterrogacion.webp" alt="" /></span>
                            <div className="inputDiv rounded" style={divBorder}>
                                <input type="text" size="4" data-culqi="card[cvv]" id="card[cvv]" className="border-0 formPago ps-2" placeholder="123" style={inputStyle} />
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                    <label className="w-100">
                        <p className="fw-bolder m-0 mt-2">Correo Electrónico :</p>
                        <div className="inputDiv mt-2 rounded" style={divBorder}>
                            <input type="text" size="50" data-culqi="card[email]" id="card[email]" className="border-0 formPago ps-3" style={inputStyle} placeholder="ejemplo@hotmail.com" />
                        </div>
                    </label>
                </div>
            </form>
            <button id="btn_pagar" className="btn btn-primary mt-4 w-100 py-3 d-block mx-auto fw-bolder" onClick={culqi} >Completar Pago S/ 497.00</button>
        </div>

    )
}