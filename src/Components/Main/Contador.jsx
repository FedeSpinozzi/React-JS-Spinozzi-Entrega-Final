import { useState } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdb-react-ui-kit';

const Contador = ({ stock , handleAdd }) => {

    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleConfirmar = () => {
        handleAdd(cantidad)
    }

    return (
        
            
                <MDBContainer>
            <MDBBtn onClick={restar}>
            <MDBIcon fas icon="minus" /> 
            </MDBBtn>
                <p>{cantidad}</p>
                <MDBBtn disabled={cantidad === stock} onClick={sumar}>
                <MDBIcon fas icon="plus" />
                </MDBBtn><div>
                
            <MDBBtn className="add-to-cart mt-1" onClick={handleConfirmar}>Confirmar</MDBBtn></div>
            </MDBContainer>
            

            
    );
};

export default Contador

    

  