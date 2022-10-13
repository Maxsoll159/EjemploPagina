import { useState } from "react"
import CloseButton from 'react-bootstrap/CloseButton';
export const BtnWhats = ({ tipo, titulo, asesores }) => {
    const [btnWhatsApp, setBtnWhatsApp] = useState(true)
    const ftnWhats = () => {
        setBtnWhatsApp(!btnWhatsApp)
    }


    return (
        <div>
            {
                asesores !== undefined ? (<a class="position-fixed bottom-0 start-0 rounded rounded-circle m-2"
                    href={`https://api.whatsapp.com/send?phone=51${asesores[0].telefono}&text=Hola,%20solicito%20información%20del%20%20${tipo}:${titulo},%20mi%20correo%20es:`} target="_blank" rel="noreferrer"
                >
                    <img src="https://cdn.shopify.com/s/files/1/0033/3538/9233/files/504.png" alt="" width={50} style={{ zIndex: "99999999" }} className="rounded rounded-circle" />
                    <span class="position-absolute translate-middle badge rounded-pill bg-danger icon-noti-whats">
                        1
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </a>) : (<></>)
            }
            {
                btnWhatsApp ? (
                    <div className="position-fixed bg-white start-0 m-3 p-2 rounded shadow contenedor-icon-whats width-50-res w-50res-tab">

                        <div className="d-flex ">
                            <p className="m-0" style={{ fontSize: "12px" }}>Hola, solicito información del {tipo} : <strong>{titulo}</strong></p>
                            <CloseButton onClick={ftnWhats} style={{width: "1px"}} />
                        </div>
                    </div>

                ) : (<></>)
            }
        </div>
    )
}