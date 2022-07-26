import React from "react";
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux';
import {checkout, clear} from '../features/shopping/ShoppingSlice';


const Checkout = () => {
  const {cartItems} = useSelector(state => state.shopping);
  const dispatch = useDispatch();

  const sumTotal =() => {
    const newArray = cartItems.map((cartItem) => cartItem.quantity * cartItem.price);
    return newArray.reduce((acc, curr) => acc + curr)
  }
  return (
    <Wrapper>
    <p>Total Items:</p>
    <h4>{cartItems.length}</h4>
    <p>Total Payment:</p>
    <h4> $ {sumTotal()}</h4>
    <div>
      <CheckBtn onClick={() => dispatch(checkout())}>CHECKOUT</CheckBtn>
      <ClearBtn onClick={() => dispatch(clear())}>CLEAR</ClearBtn>
    </div>
  </Wrapper>
  )
};

export default Checkout;

const Wrapper = styled.div`
  margin-top: 3rem;
  border: 1px solid #000;
  padding: 1.5rem;
  p,
  h4 {
    margin: 1rem;
    font-size: large;
  }
`;

const CheckBtn = styled.button`
  color: #fff;
  background-color: green;
  border: 1px solid #1a1a1a;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 10px;
  border-radius: 0;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`;

const ClearBtn = styled(CheckBtn)`
  background: transparent;
  color: #000;
  &:hover {
    background-color: red;
    color: #fff;
  }
`;