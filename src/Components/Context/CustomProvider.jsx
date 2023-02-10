import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto


const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const agregarProducto = (producto, cantidad) => {
        
        
        const nuevoEstado = [...carrito]
        producto.stockFinal = producto.stock - cantidad;
        nuevoEstado.push(producto)

        
        
        setCarrito(nuevoEstado)
        

        setTotal(producto.precio * cantidad)
        console.log("CANTIDAD EN PROVIDER", cantidad);
        setCantidad(cantidad)
    }

    const eliminarProducto = () => { }

    const vaciarCarrito = () => { 
        setCarrito([])
    }

    const estaEnCarrito = () => {
        
    }

    
    const valorDelContexto = {
        carrito,
        total,
        cantidad,
        agregarProducto,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider