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
z-index:1;
`;

const AuthenticationBottomSheet=styled.div`
background:var(--sky-bg-theme);
bottom:0px;
width:100%;
height:70%;
border-radius:30px 30px 0px 0px;
position:absolute;
right:0px;
left:0px;
`;

const PrivateKeyAuthInputSection=styled.div`
padding:30px;
display:flex;
flex-direction:column;
gap:10em;
justify-content:center;
padding-top:35px;
`;

const PrivateParentTxtContainer =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:0.5em;
`;

const PrivateTxtContainer=styled.div`
display:flex;
flex-direction:column;
line-height:0.3px;
`;

const PrivateTxtHeader = styled.h3`
font-size:16px;
`;
const PrivateTxtDetails = styled.p`
font-size:13px;
`
const PrivateInputBox = styled.input`
padding:15px;
border-radius:2px;
background:var(--sky-preference-bg-shade-color);
font-size:14px;
color:ivory;
`;

const ImportBtnParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
`;

const ImportUserAccountBtn=styled.button`
background-color:ivory;
padding:14px;
border-radius:5px;
font-weight:bold;
font-size:14px;
`;

const BackBtn = styled.button `
background-color:var(--sky-preference-bg-shade-color);
padding:14px;
border-radius:5px;
font-size:14px;
font-weight:bold;
color:ivory;
`;

const AuthenticationModal=(props)=>{

    return(
        <Container style={{display:`${props.reveal}`}}>
        <AuthenticationBottomSheet>

            <PrivateKeyAuthInputSection>

                {/* input text section  */}
                <PrivateParentTxtContainer>
                <PrivateTxtContainer>
                    <PrivateTxtHeader>Import Account </PrivateTxtHeader>
                    <PrivateTxtDetails>Enter your private key to import your account</PrivateTxtDetails>
                </PrivateTxtContainer>
                <PrivateInputBox placeholder="Private Key" required="true" />
                </PrivateParentTxtContainer>

                {/* Button section */}
                <ImportBtnParentContainer>
                    <ImportUserAccountBtn>Import Account</ImportUserAccountBtn>
                    <BackBtn>Back</BackBtn>
                </ImportBtnParentContainer>


            </PrivateKeyAuthInputSection>

        </AuthenticationBottomSheet>
        </Container>
    )
}

export default AuthenticationModal;