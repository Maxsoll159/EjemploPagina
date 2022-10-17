import { useEffect } from "react";
import { createContext, useState } from "react";
import { valirdarUsuario } from "../helpers/ApiLogin";
import { ApiCursos, ApiDiplomados, ApiDiplomas } from "../helpers/CursosDiplomas";
import { seminariosLive } from "../helpers/SeminariosApi";
export const UserContext = createContext();

export const DarkModeProvider = ({ children }) => {

    /*Cerrar sesion*/
    const validarCookie = () =>{
        if(!document.cookie.includes("token")){
            localStorage.removeItem("usuarioDesarrollo");
        }else{
            let arrayCookie = document.cookie.split(";")
            let filtro = arrayCookie.find(valor => valor.length === 47)
            let token = filtro.substring(7)
            const data = new FormData()
            data.append('token', token)
            valirdarUsuario(data).then((resp) =>{
                if(resp !== false){
                    setUsuarioLogin(resp)
                    localStorage.setItem("usuarioDesarrollo", JSON.stringify(resp))
                }else{
                    setUsuarioLogin([])
                }
            })
        }   
    }

    useEffect(()=>{
        validarCookie()
    },[])


    const [usuarioLogin, setUsuarioLogin] = useState([])
    useEffect(() => {
        const usuario = localStorage.getItem("usuarioDesarrollo")
        if (usuario !== undefined && usuario !== "" && usuario !== null) {
            /*Validar*/
            const data = new FormData()
            data.append('token', JSON.parse(usuario).token)
            valirdarUsuario(data).then((resp) => console.log("validar usuario", resp))
            setUsuarioLogin(JSON.parse(localStorage.getItem("usuarioDesarrollo")))
        } else {
            setUsuarioLogin([])
        }
    }, [])


    const [diplomasLimit, setDiplomasLimit] = useState([])
    const [cursosLimit, setCursosLimit] = useState([])
    const [seminarios, setSeminarios] = useState([])
    const [diplomados, setDiplomados] = useState([])
    useEffect(() => {
        ApiDiplomas().then((diplo) => setDiplomasLimit(diplo.envivo))
    }, [])

    useEffect(() => {
        seminariosLive().then((seminario) => setSeminarios(seminario.proximos))
    }, [])

    useEffect(() => {
        ApiCursos().then((curso) => setCursosLimit(curso.envivo))
    }, [])

    useEffect(() => {
        ApiDiplomados().then((diplomado) => setDiplomados(diplomado.envivo))
    }, [])
    

    const Swal = require('sweetalert2')

    const [cartItem, setCartItems] = useState(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItem));
    }, [cartItem])

    const addToCart = async(product) => {
        const inCart = cartItem.find((productoInCart) => productoInCart.id === product.id)
        if (inCart) {
            setCartItems(
                cartItem.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: 1 }
                    } else return productInCart;
                })
            )
        } else {
            setCartItems([...cartItem, { ...product, amount: 1 }])
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                iconColor: 'white',
                customClass: {
                    popup: 'colored-toast'
                },
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            })
            await Toast.fire({
                icon: 'success',
                title: 'Producto Agregado!'
            })
        }
    }

    const deleteItemsCart = (product) => {
        const inCart = cartItem.find((productInCart) =>
            productInCart.id === product.id
        )
        if (inCart.amount === 1) {
            setCartItems(
                cartItem.filter(productInCart => productInCart.id !== product.id)
            )
        } else {
            setCartItems((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, amount: inCart.amount - 1 }
                } else return productInCart

            })
        }
    }


    const [isdark, setIsDark] = useState(true)
    return (
        <UserContext.Provider value={{ isdark, setIsDark, cartItem, addToCart, deleteItemsCart, diplomasLimit, cursosLimit, setUsuarioLogin, usuarioLogin, seminarios ,diplomados}}>
            {children}
        </UserContext.Provider>
    )
}