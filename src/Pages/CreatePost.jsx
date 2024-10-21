import React from "react";
import styled from "styled-components"
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { TbPhotoFilled } from "react-icons/tb";
import BottomNavigation from "../Components/BottomNavigation";

const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:1em;
`;

const CreateRantHeader=styled.div`
display:flex;
padding:20px;
top:0px;
align-items:center;
justify-content:center;
gap:6em;
position:fixed;
z-index:2;
background:rgba(16,17,17,40%);
backdrop-filter:blur(10px);
width:100%;
`;
const RantTxt = styled.b`
font-size:14px;
`;

const ParentContainer = styled.div`
display:flex;
flex-direction:column;
padding-top:60px;
`;

const RantInputBox =styled.textarea`
padding:45px;
height:100px;
border-style:solid;
border-color:transparent;
border-radius:5px;
background:var(--sky-bg-theme);
resize:none;
outline:none;
color:ivory;
text-align:center;
font-weight:bold;
font-size:15px;
`;

const CreateRantBtn=styled.button`
padding:12px;
background:ivory;
color:var(--sky-bg-theme);
margin-top:25px;
width:290px;
font-weight:bold;
font-size:13px;
border-radius:7px;
`

const RantMediaOptionContainer = styled.div`
display:flex;
align-items:center;
gap:10px;
`;

const RantParentMediaContainer=styled.div`
display:flex;
flex-direction:row;
align-items:center;
gap:5em;
`;

const RantLimit=styled.div`
padding:6px;
background-color:var(--sky-preference-bg-shade-color);
width:100px;
display:flex;
justify-content:center;
font-size:13px;
width:100px;
border-radius:5px;
align-items:center;
`;

const RantGifElem = styled.button`
color:ivory;
padding:6px;
font-size:13px;
width:50px;
border-radius:5px;
background:var(--sky-preference-bg-shade-color);
`;

const CreatePostScreen=()=>{
    return(
        <>
           <Container>
             <CreateRantHeader>
                <IoArrowBack size={20}/>
                <RantTxt>Rant</RantTxt>
                <SlOptionsVertical/>
            </CreateRantHeader>

            {/* input box */}
            <ParentContainer>
            <RantInputBox placeholder="What do you want to rant about ?"></RantInputBox>
            </ParentContainer>

            <RantParentMediaContainer>
            <RantMediaOptionContainer>
                <TbPhotoFilled style={{cursor:"pointer"}} size={25} />
                <RantGifElem style={{cursor:"pointer"}}>Gif</RantGifElem>                
            </RantMediaOptionContainer>
            <RantLimit>250 words limit</RantLimit>
            </RantParentMediaContainer>
           <CreateRantBtn>Rant Now</CreateRantBtn>
        </Container>
        <BottomNavigation />
        </>
    )
}

export default CreatePostScreen;