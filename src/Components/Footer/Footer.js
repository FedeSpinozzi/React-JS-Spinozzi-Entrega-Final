
import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';




const Footer = () => {
    return (
        
        <div className='margintop'>
            <MDBRow>
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='size' alt='' />
      </MDBCol>
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://images.pexels.com/photos/1335463/pexels-photo-1335463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='size' alt='' />
      </MDBCol>
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src='https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='size' alt='' />
      </MDBCol>
      </MDBRow>
            <footer className='footertext'>Big Shoes™ 2023</footer>
        </div>
    );
};

export default Footer;
