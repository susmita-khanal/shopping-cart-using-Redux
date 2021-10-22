import React,{useState} from 'react';
import "./Cart.css";
import Product from "./Product";
import "react-toastify/dist/ReactToastify.css";
// import { Scrollbars } from 'react-custom-scrollbars';
// import {Button,Modal} from "react-bootstrap";

import { useSelector,useDispatch } from 'react-redux';
import ModalDialog from "./ModalDialog"
import {removeFromCart,increaseQty,decreaseQty} from "../redux/actions/action";

// import {Link} from "react-router-dom"

const CheckOut = () => {
const[isModalOpen,setIsModalOpen]=useState(false)
const [confirmObj,setConfirmObj]=useState({
    message:"",
    onSuccess:""

})
// const removeFromCart=()=>{
//     setIsModalOpen(true);
// }

const cartItem=useSelector((state)=>state.cart.product)
console.log(cartItem);
const dispatch=useDispatch();

function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  return (
    <>
     <ModalDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} confirmObj={confirmObj}/>
      <section className="section">
          <div className="shopping-cart">
              Shopping Cart
          </div>
          {/* <p className="cart-desc">
              You may have <span className="total-items-count"><strong>{cartItem.length}</strong></span> items in shopping cart
          </p> */}
      </section>
      <section className="section-no-two">
      
          <div className="section-container">
          {cartItem.map((data)=>{
              console.log(data)
              return(
                  <>
 <div className="container" key={data.id}>
  
  
  <img src={data.imgsrc} alt="image" className="mobile-phone"/>
  <div className="infos">
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      </div>
      <div className="inc-dec">
          <span className="increment" onClick={()=>dispatch(increaseQty(data.id))}><i className="inc fas fa-plus"></i></span>
          <input className="input-field" type="text" value={data.quantity}/>
          <button className="decrement" onClick={()=>dispatch(decreaseQty(data.id))} disabled={data.quantity===1? true:false}><i className="inc fas fa-minus"></i></button>
    </div>
    <div className="price">
        {numberWithCommas(parseInt(data.price) * parseInt(data.quantity))}
        </div>
        
        
        <div className="trash" onClick={()=>{

        setConfirmObj({
            message:"Are you sure want to delete?",
            onSuccess:()=>{
                setIsModalOpen(false)
                dispatch(removeFromCart(data.id))
            }
        })
        setIsModalOpen(true)}
            }>
        <i className="fas fa-trash-alt"></i>
            </div>
          
  </div>
    <hr/>
                  </>
                  
              )
          })}
                 
               
                 <div className="summary-information">
              <div className="totalItem"> Total-Price: Rs.{numberWithCommas(cartItem.reduce((accumulator, currentvalue) =>accumulator + parseInt(currentvalue.price)*currentvalue.quantity, 0))}</div>
              </div>
          </div>
          
      </section>
    </>
  )
}

export default CheckOut
