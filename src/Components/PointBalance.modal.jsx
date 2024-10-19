import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
position:absolute;
width:100%;
height:100%;
top:0px;
left:0px;
background:rgba(217,217,217,31%);
backdrop-filter:blur(4px);
z-index:2;
`;

const PointBalanceBottomSheet=styled.div`
background:var(--sky-bg-theme);
bottom:0px;
width:100%;
height:80%;
border-radius:30px 30px 0px 0px;
position:absolute;
right:0px;
left:0px;
display:flex;
justify-content:center;
`


const PointBalanceModal=()=>{
    
    return(
        <Container >
            <PointBalanceBottomSheet></PointBalanceBottomSheet>    
        </Container>
    )
}

export default PointBalanceModal;