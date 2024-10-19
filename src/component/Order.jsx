import { useCart } from "react-use-cart"

const Order=()=>{
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
         }=useCart();
         if(isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2>cart({totalUniqueItems}) totalItems:({totalItems})</h2>
                    <table className="table m-0">
                        {items.map((item,index)=>(
                            <tr key={index}>
                                <td>
                                    <img src={item.image} style={{height:"6rem"}}/>
                                </td>
                                
                                <td>$:{item.price}</td>
                                <td>Quantity ({item.quantity})</td>
                                <td>
                                    <button className="btn btn-info ms-2"
                                    onClick={()=>updateItemQuantity(item.id, item.quantity-1)}
                                    >-</button>
                                    <button  className="btn btn-info ms-2"
                                     onClick={()=>updateItemQuantity(item.id, item.quantity+1)}
                                    >+</button>
                                    <button  className="btn btn-danger ms-2"
                                     onClick={()=>removeItem(item.id)}
                                    >Remove</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price:$ {cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2"
                    onClick={()=>emptyCart()}
                    >Clear Cart</button>
                    <button className="btn btn-primary m-2">Buy Now</button>
                </div>
            </div>

        </section>
    )
}

export default Order