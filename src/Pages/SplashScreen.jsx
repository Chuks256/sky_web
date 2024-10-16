import React from "react";
import styled from "styled-components";
import skysplash from "../assets/skysplash.png"
import SkyCircle from "../assets/SkyCircle.png"

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
gap:20em;
`;


const LogoParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const LogoObject = styled.img``;

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

&:focus{
transform:scale(85%);
}
`;


const SplashScreen=()=>{
    return(
        <Container>
            {/* Define splash parent container  */}
            <SplashScreenParentContainer>
                <LogoParentContainer>
                    <LogoObject src={SkyCircle} alt="Sky circle" />
                </LogoParentContainer>

                {/* Splash cta container */}
                <SplashCtaParentContainer>
                    <CtaTxtDetails>Rant freely about anything , anytime anonymously</CtaTxtDetails>
                    <CtaButton>Start Ranting</CtaButton>
                </SplashCtaParentContainer>

            </SplashScreenParentContainer>
        </Container>
    )
}

export default SplashScreen;