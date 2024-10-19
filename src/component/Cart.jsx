import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Order, {} from './Order'


const Cart=()=>{
    const [show, setShow] = useState(false);


    return(
      <div>
         <Button variant="danger" onClick={()=>setShow(!show)}>
        Cart
      </Button>

      <Offcanvas show={show} onHide={()=>setShow(!show)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Order/>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    )
}

export default Cart;