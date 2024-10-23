import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";

const Container = styled.div`
position:absolute;
width:100%;
height:100%;
top:0px;
left:0px;
background:rgba(217,217,217,31%);
backdrop-filter:blur(4px);
z-index:2;
overflow-y:hidden;
`;

const BalanceParentContainer =styled.div`
background:var(--sky-bg-theme);
bottom:0px;
width:100%;
height:70%;
border-radius:30px 30px 0px 0px;
position:absolute;
right:0px;
left:0px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:7em;
`;

const BalanceAmountContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-top:-100px;
`;

const BalanceHeaderTxt = styled.h3`
font-size:13px;
`;


const AmountElemContainer = styled.div`
display:flex;
border-radius:7px;
background:var(--sky-preference-bg-shade-color);
width:250px;
height:40px;
align-items:center;
margin-top:-5px;
padding:12px;
`

const AmountSubContainer = styled.div`
display:flex;
gap:10px;
align-items:center;
`;

const AmountMainContainer = styled.div`
font-size:14px;
`;


const ConnectWalletContainer = styled.div`
display:flex;
flex-direction:column;
margin-left:0px;
`;

const ConnectWalletTxt=styled.h3`
font-size:13px;
`

const ConnectWalletBtn = styled.button`
padding:15px;
background:ivory;
font-weight:bold;
font-size:12px;
border-radius:5px;
width:300px;
`;





const PointBalanceModal=()=>{
    
    return(
        <Container >
            <BalanceParentContainer>
                <BalanceAmountContainer>
                    <BalanceHeaderTxt>Point Balance</BalanceHeaderTxt>
                    <AmountElemContainer>
                        <AmountSubContainer>
                            <PiStarFourFill size={22}/>
                            <AmountMainContainer>25 sky</AmountMainContainer>
                        </AmountSubContainer>
                    </AmountElemContainer>
                </BalanceAmountContainer>

                <ConnectWalletContainer>
                    <ConnectWalletTxt>Connect Wallet</ConnectWalletTxt>
                    <ConnectWalletBtn style={{cursor:"disabled"}}>Coming Soon</ConnectWalletBtn>
                </ConnectWalletContainer>
      
            </BalanceParentContainer>
            
        </Container>
    )
}

export default PointBalanceModal;