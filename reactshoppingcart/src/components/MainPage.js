import React from 'react';
import CheckOut from "./CheckOut";
import Product from "./Product";
import "./MainPage.css"
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/action';
import {Link} from "react-router-dom"

const MainPage = () => {
    const myState=useSelector((state)=>state.cart.product)
    console.log(myState);
    const dispatch=useDispatch();
  return (
    <>
     
     <section className="section">
          <div className="shopping-cart">
              Shopping Cart
          </div>
          <p className="cart-desc">
              You may have <span className="total-items-count"><strong>{myState.length}</strong></span> items in shopping cart
          </p>
      </section>
      <section className="section-no-two">
      
          <div className="section-container">
          
              {Product.map((item,i)=>{
                //   <Scrollbars>
                  return(<>
                  
  <div className="container" key={i}>
  
  
  <img src={item.imgsrc} alt="image" className="mobile-phone"/>
  <div className="infos">
      <h3>{item.name}</h3>
      <p> {item.description}</p>
      </div>
      <div className="inc-dec">
          <span className="addcart" ><button className="addcartbutton" onClick={()=>dispatch(addToCart(item))}>Add To Cart</button></span>
    </div>
           
  </div>
    <hr/>
    
    </>)
    {/* </Scrollbars> */}
                  
              })}
           
          </div>
          
      </section>
      
    </>
  )
}

export default MainPage
