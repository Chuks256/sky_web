import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
position:relative;
z-index:3;
margin-top:0px;
display:flex;
align-items:center;
justify-content:center;
transition:linear,700ms;
top:450px;
`;

const BalanceParentContainer =styled.div`
position:absolute;
padding:50px;
border-radius:15px;
background:rgba(20, 20, 20, 60%);
backdrop-filter:blur(10px);
display:flex;
flex-direction:column;
width:250px;
height:150px;
gap:10px;
margin-left:9px;
`;

const BalanceAmountContainer = styled.div`
display:flex;
flex-direction:column;
margin-top:-40px;
margin-left:-20px;
`;

const BalanceHeaderTxt = styled.h3`
font-size:13px;
`;

const MainContainer =styled.div``;

const AmountElemContainer = styled.div`
display:flex;
padding:29px;
border-radius:5px;
background:var(--sky-preference-bg-shade-color);
width:250px;
margin-top:-5px;
`

const AmountSubContainer = styled.div`
display:flex;
`;


const ConnectWalletContainer = styled.div`
display:flex;
flex-direction:column;
margin-left:-15px;
`;

const ConnectWalletTxt=styled.h3`
font-size:13px;
`

const ConnectWalletBtn = styled.button`

`;





const PointBalanceModal=()=>{
    
    return(
        <Container >
            <BalanceParentContainer>
                <BalanceAmountContainer>
                    <BalanceHeaderTxt>Point Balance</BalanceHeaderTxt>
                    <AmountElemContainer></AmountElemContainer>
                </BalanceAmountContainer>

                <ConnectWalletContainer>
                    <ConnectWalletTxt>Connect Wallet</ConnectWalletTxt>
                </ConnectWalletContainer>
            </BalanceParentContainer>
            
        </Container>
    )
}

export default PointBalanceModal;