import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import {keyframes} from 'styled-components'

const Container = styled.div`
display:none;
position:absolute;
width:100%;
height:100%;
top:0px;
left:0px;
background:var(--sky-bg-theme);
backdrop-filter:blur(6px);
z-index:1;
overflow-y:hidden;
z-index:2;
justify-content:center;
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
  
`;

const Spinner=styled.div`
transition:linear,1000ms;
padding:10px;
background:transparent;
width:0px;
height:0px;
margin-top:290px;
border-radius:100px;
border-style:solid;
border-color:grey grey ivory;
border-width:7px;
 animation: ${Rotate} 1s infinite linear;
`;


const LoadModal=(props)=>{
    return(
        <>   
                <Container className='load_parent_modal' >
                   <Spinner></Spinner>
                </Container>
          
        </>
        
    )
}

export default LoadModal;