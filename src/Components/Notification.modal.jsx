import React from "react";
import {styled} from "styled-components";
import skysplash from "../assets/skysplash.png"

const Container=styled.div`
position:absolute;
z-index:3;
margin-left:102px;
margin-top:0px;
display:flex;
align-items:center;
justify-content:center;
transition:linear,700ms;
top:20px;
`;

const NotificationParentContainer =styled.div`
padding:10px;
border-radius:15px;
background:rgba(9,9,7,30%);
backdrop-filter:blur(10px);
display:flex;
align-items:center;
width:250px;
gap:10px;
margin-left:9px;
`;

const NotificationBadgeImg = styled.div`
padding:15px;
width:5px;
height:5px;
background:grey;
border-radius:5px;
margin-left:5px;
background-image:url(${skysplash});
`;

const NotificationTxtContainer = styled.div`
display:flex;
flex-direction:column;
line-height:20px;
`;

const NotificationHeader=styled.b`
font-size:13px;
`;
const NotificationTimestamp=styled.span`
font-size:12px;
`;


const NotificationModal=(props)=>{
    return(
        <Container style={{marginTop:`${props.position}`}}>
            <NotificationParentContainer>
            <NotificationBadgeImg></NotificationBadgeImg>
        <NotificationTxtContainer>
            <NotificationHeader>{props.NotificationMsg}</NotificationHeader>
            <NotificationTimestamp>{new Date().getSeconds()}</NotificationTimestamp>
        </NotificationTxtContainer>
            </NotificationParentContainer>
       
        </Container>
    )
}

export default NotificationModal;