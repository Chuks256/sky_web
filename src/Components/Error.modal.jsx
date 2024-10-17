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
display:flex;
align-items:center;
justify-content:center;
`;
const ErrorTxtContainer = styled.div``;

const ErrorTxt=styled.p`font-size:15px`;


const ErrorModal=(props)=>{
    const [errorMsg,setErrorMsg]=useState("No Internet Connection")
return(
        <Container style={{display:`${props.reveal}`}}>
            <ErrorTxtContainer>
                <ErrorTxt>{props.errorMsg}</ErrorTxt>
            </ErrorTxtContainer>
        </Container>
)
}

export default ErrorModal;