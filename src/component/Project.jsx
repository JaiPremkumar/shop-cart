import { Button, Card } from "react-bootstrap";
import img from '../assets/image/laptop.webp'
import img1 from '../assets/image/mobile.webp'
import img2 from '../assets/image/headPhone.webp'
import { useEffect, useState } from "react";
import {useCart} from 'react-use-cart'

const Project=()=>{
  const[data,setData] = useState([])
  const[error,setError]=useState(null)

  useEffect(()=>{
   fetchData() 
  },[])

  const fetchData=async()=>{
    try{
    const response = await fetch('https://fakestoreapi.com/products/')
    const datas = await response.json()
    console.log(datas)
    setData(datas)

    }catch(error){
      console.log(error);
      setError(error)
    }
  }
    const {addItem} = useCart();
    return(
      
        <div className="row m-5">
          {data.map((item)=>(
        <Card className="m-5" style={{ width: '12rem' }} key={item.id}>
      <Card.Img variant="top" src={item.image} style={{ width: '8rem',height:'8rem' }}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <p>$: {item.price}</p>
        <Button variant="primary" onClick={()=>addItem(item)}>addToCard</Button>
      </Card.Body>
    </Card>
          ))}
        </div>
    
    )
}

export default Project;