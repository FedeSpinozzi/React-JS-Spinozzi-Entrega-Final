import React, { useContext, useState } from 'react';
import { contexto } from '../Context/CustomProvider';
import Contador from './Contador';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
    
  } from 'mdb-react-ui-kit';

const ItemDetail = ({ item }) => {

   
   

    const [confirmado, setConfirmado] = useState(false)
    const { agregarProducto } = useContext(contexto)

    const [cantidadLocal, setCantidadLocal] = useState(1)

    const handleAdd = (cantidad) => {
        console.log("cantidad", cantidad);
        setCantidadLocal(cantidad)
        setConfirmado(true)
    }

    const handleClick = () => {
        agregarProducto(item, cantidadLocal)
    }


 



    return (
        
          <div className='carddetail'>    
        <MDBCard style={{ maxWidth: '2000px' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={item.img} alt='...' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Tipo {item.tipo}</MDBCardTitle>
              <MDBCardText>{item.texto}
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'>Precio de Contado ${item.precio}</small>
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'>Talles {item.talles}</small>
              </MDBCardText>
              <MDBCardText>Unidades:</MDBCardText>
              <Contador item={item} stock={10} handleAdd={handleAdd} />                
                  {confirmado && <MDBBtn className='mt-5' color='success'  onClick={handleClick}>Agregar al Carrito</MDBBtn>}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      </div>
    );
  }
export default ItemDetail;

