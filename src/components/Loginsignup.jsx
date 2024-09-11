import React from 'react'
import './GetStarted.css';
import {styled} from 'styled-components'
import Logsignimg from '../Assets/onee.webp'
import { useNavigate } from 'react-router-dom';

 


const Loginsignbtn = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & img{
        height: 25%;
        width: 35%;
    }
`
const Logsbtn =styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: -36px;
    width: 25%;

    & button {
    height: 45px;
    width: 50%;
    background: #76509C;
    border: none;
    outline: none;
    border-radius: 20px;
    color: yellow;
    font-size: 24px;
    font-weight: 600;
    margin: 5px;
    cursor : pointer;
    }
`


const Loginsignup = () => {
let nevigate = useNavigate();

function handleClicklogin(){
    nevigate('/login')
 }
 function handleClickSign(){
    nevigate('/signup')
 }
  return (
    <>
    <Loginsignbtn>
        <img  src={Logsignimg} alt="" />
        <Logsbtn>
      <button onClick={handleClicklogin}>Login</button>
      <button onClick={handleClickSign}>Sign Up</button>
        </Logsbtn>
    </Loginsignbtn>
    </>
  )
}

export default Loginsignup
