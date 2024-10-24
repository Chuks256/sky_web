import React, { useEffect } from "react";
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
overflow-y:hidden;
`;

const IntroAuthBottomSheet=styled.div`
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
`;

const IntroAuthHeaderContainer=styled.div`
padding:30px;
line-height:10px;
`;

const IntroAuthHeaderTxt = styled.h2`
font-size:14px;
`;

const IntroAuthDetails = styled.p`
font-size:13px;
`;

const IntroHeaderTxtParentContainer = styled.div``;

const PrivateKeyParentContainer = styled.div`
padding:10px;
background:var(--sky-preference-bg-shade-color);
border-radius:6px;
`;

const PrivateKeyTxtParentContainer = styled.div`
display:flex;
align-items:center;
gap:1em;
justify-content:space-between;
`;
const CopyBtn=styled.button`
padding:5px;
font-size:12px;
width:60px;
border-radius:5px;
background:ivory;
transition:linear,200ms;
&:focus{
background:var(--sky-bg-theme-color);
color:ivory;
font-weight:bold;
}
`;

const PrivateKeyData = styled.p`
font-size:13px;
margin-left:10px;
`;

const AmbientOptionParentContainer = styled.div`
padding-top:35px;
`;

const AmbientOptionTxtContainer = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
gap:1em;
padding-top:10px;
`;

const AmbientHeaderTxt = styled.h2`
font-size:14px;
`;
const AmbientOptionCard=styled.div`
width:70px;
justify-content:center;
font-size:13px;
padding:15px;
background:var(--sky-preference-bg-shade-color);
border-radius:5px;
display:flex;
cursor:pointer;
transition:linear,100ms;
&:hover{
background:ivory;
color:var(--sky-bg-theme);
font-weight:bold;
}

`;

const ButtonParentContainer=styled.div`
display:flex;
flex-direction:column;
gap:1px;
padding-top:30px;
`;

const ButtonInnerParentContainer=styled.div`
display:flex;
flex-direction:column;
gap:13px;
`;

const ButtonTxtElem = styled.p`
text-align:center;
font-size:9px;`;

const CreateButtonElem = styled.button`
background:ivory;
padding:13px;
border-radius:5px;
font-size:14px;
font-weight:bold;
color:#090909;
`;
const ImportButtonElem = styled.button`
background:var(--sky-preference-bg-shade-color);
padding:13px;
border-radius:5px;
font-size:14px;
font-weight:bold;
color:ivory
`;


const CloseContainer =styled.div`
display:flex;
align-items:center;
gap:11em;
`;

const CloseTxt=styled.b`
font-size:14px;
cursor:pointer;
`;

const IntroAuthModal=(props)=>{
    const [copyTxt,setCopyTxt]=useState("Copy");

    const AmbientColor=[
        {
            id:1,
            type:'Cold'
        },
        {
            id:2,
            type:'Hot'
        },
        {
            id:3,
            type:'Royal'
        },
        {
            id:4,
            type:'Pink'
        },
        {
            id:5,
            type:'SunShine'
        },
        {
            id:6,
            type:'Soul'
        }
    ]

    const CloseIntroAuthContainer=(ev)=>{
        ev.stopPropagation();
        const elem=document.querySelector(".parentContainer");
        elem.style.display="none"
    }

    return(
        <Container className="parentContainer">    
            <IntroAuthBottomSheet>
                <IntroAuthHeaderContainer>
                    
                    {/* header txt */}
                    <IntroHeaderTxtParentContainer>
                        <CloseContainer>
                        <IntroAuthHeaderTxt>Your Private Key</IntroAuthHeaderTxt>
                        <CloseTxt onClick={CloseIntroAuthContainer}>Close</CloseTxt>          
                        </CloseContainer>
                    <IntroAuthDetails>Make sure you keep you private key safe</IntroAuthDetails>
                    </IntroHeaderTxtParentContainer>

                    {/* private key section */}
                    <PrivateKeyParentContainer>

                        <PrivateKeyTxtParentContainer>
                            <PrivateKeyData>{props.privateKey}</PrivateKeyData>
                            <CopyBtn>{copyTxt}</CopyBtn>
                        </PrivateKeyTxtParentContainer>

                    </PrivateKeyParentContainer>

                    {/* ambient option section */}
                    <AmbientOptionParentContainer>
                        <AmbientHeaderTxt>Choose Your Ambient Color</AmbientHeaderTxt>
                        <AmbientOptionTxtContainer>
                            {
                                AmbientColor.map((colors)=>(
                                    <AmbientOptionCard>{colors.type}</AmbientOptionCard>
                                ))
                            }
                        </AmbientOptionTxtContainer>
                    </AmbientOptionParentContainer>

                    {/* button section */}
                    <ButtonParentContainer>
                        <ButtonTxtElem >Your private key will be used to recover your account</ButtonTxtElem>

                      <ButtonInnerParentContainer>
                      <CreateButtonElem>Create Account </CreateButtonElem>
                      <ImportButtonElem>Import Account</ImportButtonElem>
                      </ButtonInnerParentContainer>
                       
                    </ButtonParentContainer>
                    
                </IntroAuthHeaderContainer>
            </IntroAuthBottomSheet>
        </Container>
    )
}

export default IntroAuthModal;