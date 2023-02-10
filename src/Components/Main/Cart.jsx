import { useContext } from "react";
import { contexto } from "../Context/CustomProvider";
import { serverTimestamp, addDoc } from "firebase/firestore";
import { ventasCollection } from "../../firebaseConfig";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  import { toast } from 'react-toastify';

const Cart = () => {
    const { carrito } = useContext(contexto);
    const handleCompra = () => {
        const compra = {
            usuario: {
                nombre: "federico",
                email: "fede@gmail.com",
                telefono: "3513123123"
            },
            carrito: carrito,
            fecha: serverTimestamp(),
        }

        const pedido = addDoc(ventasCollection, compra)

        pedido
            .then((resultado) => {
                console.log("SUCCESS")
                toast.info("Compra realizada con éxito")
            })
            .catch((error) => {
                toast.error("Ocurrió un error inesperado")
            })
    }

    const detail = () => {
        return(
            <div className='carddetail'>    
                {carrito.map(product => {
                    return <MDBCard style={{ maxWidth: '2000px' }}>
                                <MDBRow className='g-0'>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                    <MDBCardTitle>Tipo {product.tipo}</MDBCardTitle>
                                    <MDBCardText>
                                        <small className='text-muted'>Precio Final ${(product.stock - product.stockFinal) * product.precio}</small>
                                    </MDBCardText>
                                    
                                    <MDBCardText>Unidades: {product.stock - product.stockFinal}</MDBCardText>
                                    
                                    </MDBCardBody>
                                </MDBCol>
                                </MDBRow>
                            </MDBCard>
                })}
            </div>
        )
    }

    return (
        <div>
            <h1>Este es el Carrito</h1>
            {detail()}
            <button onClick={handleCompra}>Finalizar Compra</button>
        </div>
    );
};

export default Cart;
