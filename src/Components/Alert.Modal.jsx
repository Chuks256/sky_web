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
display:flex;
justify-content:center;
align-items:center;
`;

const AlertModalElem=styled.div`
background:var(--sky-bg-theme);
bottom:0px;
width:60%;
height:50%;
border-radius:30px;
`;

// const PrivateTxtHeader = styled.h3`
// font-size:16px;
// `;

// const ImportBtnParentContainer = styled.div`
// display:flex;
// flex-direction:column;
// justify-content:center;
// gap:20px;
// `;

// const ImportUserAccountBtn=styled.button`
// background-color:ivory;
// padding:14px;
// border-radius:5px;
// font-weight:bold;
// font-size:14px;
// transition:linear,300ms;
// transform:scale(100%);

// &:hover{
// transform:scale(85%);
// }
// `;


// const openAlertModal=()=>{
// document.querySelector(".alert_modal").style.display="block"
// }

// const closeAlertModal=()=>{
// document.querySelector(".alert_modal").style.display="none";
// OpenAuthModalAccount();
// }



const AlertModal=()=>{       
    return(
        <>
        <Container className="alert_modal">
        <AlertModalElem>

        </AlertModalElem>
        </Container>
        </>
    )
}


export default AlertModal;