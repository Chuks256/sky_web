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
margin-left:50px;
`;

const SelectParentContainer = styled.div`
display:flex;
flex-direction:column;
gap:1em;
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
`;

const ProfileImageSubContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap:18px;
padding-top:20px;
padding:30px;
margin-top:15px;
width:230px;
height:250px;
align-items:center;
justify-content:center;
overflow-y:scroll;
overflow-x:hidden;
`;

const ProfileImgElem=styled.div`
background:var(--sky-preference-bg-shade-color);
border-radius:100px;
padding:15px;
height:40px;
width:40px;
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