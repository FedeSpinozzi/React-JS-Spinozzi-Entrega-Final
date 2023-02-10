import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import { contexto } from "../Context/CustomProvider"

import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBadge
  } from 'mdb-react-ui-kit';
  




const CartWidget = () => {

    const { cantidad } = useContext(contexto)

    
    return (
        <Form className="d-flex">
                      
            <MDBNavbar expand='lg' bgColor='rgb(132, 210, 212)'>
            <MDBContainer fluid>
            <MDBNavbarNav>
            <MDBNavbarItem>
            <MDBNavbarLink href='/cart'>
              <MDBBadge pill color='danger'><span>{cantidad}</span></MDBBadge>
              <span>                
              <MDBIcon fas icon="shopping-cart" />
              </span>
            </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>
            </MDBContainer>
            </MDBNavbar>
          </Form>
    )
  }

  export default CartWidget