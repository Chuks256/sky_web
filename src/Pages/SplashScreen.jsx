import React, { useEffect } from "react";
import styled from "styled-components";
import skysplash from "../assets/skysplash.png"
import SkyCircle from "../assets/SkyCircle.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//  import components 
import AuthenticationModal from "../Components/Authentication.modal"
import IntroAuthModal from "../Components/IntroAuth.modal";
import ErrorModal from "../Components/Error.modal";


const Container = styled.div`
width:100%;
height:100%;
background:grey;
top:0px;
left:0px;
position:absolute;
background-image:url(${skysplash});
background-size:cover;
background-repeat:no-repeat;
background-position:center;
object-fit:cover;
`;

const SplashScreenParentContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding:65px;
gap:18em;
`;


const LogoParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
`
const LogoObject = styled.img``;
const LogoTxt=styled.b`
font-size:20px;
`;

const SplashCtaParentContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
gap:15px;
`;

const CtaTxtDetails=styled.p`
width:200px;
font-size:13px;
text-align:center;
`;

const CtaButton = styled.button`
padding:14px;
font-weight:bold;
width:309px;
border-radius:10px;
background:ivory;
color:#090909;
font-size:12px;
height:48px;
transition:linear,300ms;
transform:scale(100%);

&:hover{
transform:scale(85%);
}
`;


const SplashScreen=()=>{
    const [ctaBtnState,setctaBtnState]=useState("Start Ranting")
    const [private_key,setPrivate_key]=useState({
        originalKey:"",
        truncatedKey:"Generating private key"
    });

    const [revealErrorModal,setRevealErrorModal]=useState({
        msg:"",
        mode:"none"
    });
    const navigate=useNavigate();


    // initialize auth and intro bottomsheet modal 
    const InitializeRantBtn=async(event)=>{
        // check if localstorage is null or not 
        const getUserSessionKey=localStorage.getItem("authorization");
        if(getUserSessionKey===null || getUserSessionKey.length===0){
              event.stopPropagation()
              const OpenIntroAuthModal=document.querySelector(".IntroAuth_parent_modal");
              OpenIntroAuthModal.style.display="flex"
                 try{
                    const url="https://sky-node.onrender.com/endpoint/1.0/generatePrivateKey"
                    const getPrivateKeyFromServer=await fetch(url);
                    const response =await getPrivateKeyFromServer.json();
                    const truncatePrivateKey=response.privateKey.substring(0,22)+"...."
                    setPrivate_key({
                        originalKey:response.privateKey,
                        truncatedKey:truncatePrivateKey
                    });
                 }
                 catch(err){
                    console.log(err)
                 }
        }
        else{
            navigate("/app")
        }
    }


    return(
        <Container >
            <ErrorModal reveal={revealErrorModal.mode} errorMsg={revealErrorModal.msg}/>
            <IntroAuthModal  originalKey={private_key.originalKey} truncatedKey={private_key.truncatedKey}  /> 
            <AuthenticationModal /> 
            {/* Define splash parent container  */}
            <SplashScreenParentContainer>
                <LogoParentContainer>
                    <LogoObject src={SkyCircle} alt="Sky circle" />
                    <LogoTxt>Sky.</LogoTxt>
                </LogoParentContainer>

                {/* Splash cta container */}
                <SplashCtaParentContainer>
                    <CtaTxtDetails>Rant freely about anything , anytime anonymously</CtaTxtDetails>
                    <CtaButton onClick={InitializeRantBtn}>{ctaBtnState}</CtaButton>
                </SplashCtaParentContainer>

            </SplashScreenParentContainer>
        </Container>
    )
}

export default SplashScreen;