import React from "react";
import {styled} from "styled-components";
import skysplash from "../assets/skysplash.png"

const Container=styled.div`
position:relative;
z-index:3;
margin-top:0px;
display:flex;
align-items:center;
justify-content:center;
transition:linear,700ms;
top:-100px;
`;

const NotificationParentContainer =styled.div`
position:absolute;
padding:10px;
border-radius:15px;
background:rgba(20, 20, 20, 60%);
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
font-size:11px;
`;


const NotificationModal=(props)=>{
    return(
        
        <Container style={{top:`${props.position}`}}>
            <NotificationParentContainer>
            <NotificationBadgeImg></NotificationBadgeImg>
        <NotificationTxtContainer>
            <NotificationHeader>{props.NotificationMsg}</NotificationHeader>
            <NotificationTimestamp>{new Date().getSeconds()} Seconds</NotificationTimestamp>
        </NotificationTxtContainer>
            </NotificationParentContainer>
       
        </Container>
    )
}

export default NotificationModal;