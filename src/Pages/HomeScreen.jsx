import React from "react";
import styled from "styled-components";
import { RiNotification4Fill } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import {useState} from "react"

const Container = styled.div`
display:flex;
flex-direction:column;
`;

const AppBarHeader= styled.div`
position:absolute;
background:var(--sky-preference-default-color);
width:100%;
top:0px;
height:40%;
left:0px;
`;
const AppBarItemsContainer=styled.div `
display:flex;
padding:25px;
align-items:center;
justify-content:space-between
`;
const UserProfilePics=styled.div`
padding:20px;
background:grey;
border-radius:100px;
`;
const UserPointBalance =styled.div`
padding:10px;
background:var(--sky-preference-default-shade);
border-radius:100px;
width:120px;
display:flex;
align-items:center;
justify-content:space-between;
font-size:14px;
font-weight:bold;
`;

const HomeScreen=()=>{

    const [skyPoint,setSkyPointBalance]=useState("20k Sky")

    return(
        <Container>
            {/* Header */}
            <AppBarHeader>
                <AppBarItemsContainer>
                    <UserProfilePics></UserProfilePics>
                    <UserPointBalance>
                    <PiStarFourFill  size={20}/>
                    {skyPoint}
                    <IoMdArrowDropdown size={30} style={{cursor:"pointer"}} />
                    </UserPointBalance>
                    <RiNotification4Fill size={30}  style={{cursor:"pointer"}} />
                </AppBarItemsContainer>
            </AppBarHeader>

        </Container>
    )
}

export default HomeScreen;