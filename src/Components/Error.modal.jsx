import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
position:absolute;
background:red;
height:70px;
width:100%;
bottom:0px;
z-index:1;
display:none;
align-items:center;
justify-content:center;
transition:linear,800ms;
`;
const ErrorTxtContainer = styled.div``;

const ErrorTxt=styled.p`font-size:15px`;


const ErrorModal=(props)=>{
    
return(
        <Container style={{display:`${props.reveal}`}}>
            <ErrorTxtContainer>
                <ErrorTxt>{props.errorMsg}</ErrorTxt>
            </ErrorTxtContainer>
        </Container>
)
}

export default ErrorModal;