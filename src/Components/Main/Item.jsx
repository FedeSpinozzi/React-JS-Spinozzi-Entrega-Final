import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const Item = ({ producto }) => {
    
    return (
        <div className="item">
    <MDBCard style={{ maxWidth: '1500px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={producto.img} width="400px" alt={producto.title} /> 
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{producto.tipo}</MDBCardTitle>
            <MDBCardText>
            {producto.texto}
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>${producto.precio}</small>
            </MDBCardText>
            <Link className="ver-detalle" to={`/detail/${producto.id}`}>
                    Ver detalle
                </Link>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
  );
}
        
            
                    
                  
               
      

export default Item;



