import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ErrorModal from "./Error.modal";
import NotificationModal from "./Notification.modal";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
position:absolute;
width:100%;
height:100%;
top:0px;
left:0px;
background:rgba(217,217,217,31%);
backdrop-filter:blur(4px);
z-index:1;
display:none;
justify-content:center;
align-items:center;
`;

const AlertModalElem=styled.div`
background:var(--sky-bg-theme);
bottom:0px;
width:80%;
height:50%;
border-radius:30px;
`;


const BtnParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
align-items:center;
padding-top:70px;
`;

const AlertParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const LogoutBtn=styled.button`
background-color:red;
padding:14px;
border-radius:5px;
font-weight:bold;
font-size:14px;
transition:linear,300ms;
transform:scale(100%);
color:ivory;
width:200px;
&:hover{
transform:scale(85%);
}
`;

const CloseBtn=styled.button`
background-color:ivory;
padding:14px;
border-radius:5px;
font-weight:bold;
font-size:14px;
width:200px;
transition:linear,300ms;
transform:scale(100%);
&:hover{
transform:scale(85%);
}
`;

const ProceedToProfile=styled.button`
width:200px;
background-color:var(--sky-preference-bg-shade-color);
padding:14px;
color:ivory;
border-radius:5px;
font-weight:bold;
font-size:14px;
transition:linear,300ms;
transform:scale(100%);
&:hover{
transform:scale(85%);
}
`;

const closeAlertModal=()=>{
document.querySelector(".alert_modal").style.display="none";
OpenAuthModalAccount();
}





const AlertModal=()=>{     
    const navigateObj=useNavigate();

    const logoutUser=()=>{
        localStorage.removeItem("authorization");
           navigateObj("/")
       }  
    return(
        <>
        <Container className="alert_modal">
        <AlertModalElem>
            <AlertParentContainer>
            <BtnParentContainer>
                <LogoutBtn onClick={()=>{logoutUser()}}>Log out ?</LogoutBtn>
                <ProceedToProfile>Proceed to Profile</ProceedToProfile>
                <CloseBtn onClick={()=>{closeAlertModal()}}>Close</CloseBtn>
            </BtnParentContainer>
            </AlertParentContainer>
        </AlertModalElem>
        </Container>
        </>
    )
}


export default AlertModal;
