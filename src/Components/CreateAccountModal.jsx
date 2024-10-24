import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

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

const AccountBottomSheet=styled.div`
background:var(--sky-bg-theme);
bottom:0px;
width:100%;
height:90%;
border-radius:30px 30px 0px 0px;
position:absolute;
right:0px;
left:0px;
`;

const AccountBottomParentContainer=styled.div`
padding:30px;
display:flex;
justify-content:left;
flex-direction:column;
margin-left:0px;
`;

const SelectParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:2em;
`;

const CreateAccountHeader=styled.div`
`;

const NameParentContainer = styled.div`
display:flex;
flex-direction:column;
line-height:10px;
`;

const NameTxt=styled.h3`
font-size:14px;
`;

const NameInputBox=styled.input`
padding:17px;
background:var(--sky-preference-bg-shade-color);
border-radius:7px;
color:ivory;
font-size:14px;
width:260px;
`;

const ProfileImageParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:1.2em;
`;

const ProfileImageSubContainer = styled.div`
margin-top:20px;
 display: grid;
grid-template-columns: repeat(10, 1fr);
width:300px;
overflow-x:scroll;
overflow-y:hidden;
padding:0px;
gap:10px;
`;

const ProfileImgElem=styled.div`
background:var(--sky-preference-bg-shade-color);
padding:20px;
width:50px;
height:50px;
border-radius:100px;
border-style:solid;
border-color:var(--sky-preference-bg-shade-color);
border-width:2px;
transition:linear,400ms;
&:hover{
border-color:ivory;
}

`;

const ProfileImageSelectTxtContainer = styled.div`
line-height:8px;
`;

const ProfileImageSelectHeaderTxt=styled.h3`
font-size:14px;
`;

const ProfileImageSelectTxt=styled.span`
font-size:12px;
`;

const CreateAccountBtn=styled.button`
background-color:ivory;
padding:14px;
border-radius:5px;
font-weight:bold;
font-size:14px;
`;

const CreateAccountModal=(props)=>{

    return(
        <Container>
        <AccountBottomSheet>
            <AccountBottomParentContainer>

                {/* account header */}
            <CreateAccountHeader><IoArrowBack size={20} /></CreateAccountHeader>
            
            <SelectParentContainer>

                 {/* Name container  */}
            <NameParentContainer>
                <NameTxt>UserName</NameTxt>
                <NameInputBox />
            </NameParentContainer>

            {/* image container section */}
            <ProfileImageParentContainer>
                <ProfileImageSelectTxtContainer>
                    <ProfileImageSelectHeaderTxt>Select your profile pics</ProfileImageSelectHeaderTxt>
                    <ProfileImageSelectTxt>Select your anonymous profile pics</ProfileImageSelectTxt>
                </ProfileImageSelectTxtContainer>

                {/* image containr  */}
                <ProfileImageSubContainer>
                <ProfileImgElem></ProfileImgElem>
                <ProfileImgElem></ProfileImgElem>
                <ProfileImgElem></ProfileImgElem>
                <ProfileImgElem></ProfileImgElem>
                <ProfileImgElem></ProfileImgElem>
                <ProfileImgElem></ProfileImgElem>         
                </ProfileImageSubContainer>

            </ProfileImageParentContainer>
            </SelectParentContainer>
        
            </AccountBottomParentContainer>
        </AccountBottomSheet>
        </Container>
    )
}

export default CreateAccountModal;