import React, { useEffect } from "react";
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
display:none;
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
gap:1em;
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
grid-template-columns: repeat(100, 1fr);
width:300px;
overflow-x:scroll;
overflow-y:hidden;
padding:0px;
gap:15px;
border-radius:10px;
transition:linear,500ms;
`;

const ProfileImgElem=styled.div`
background:var(--sky-preference-bg-shade-color);
padding:20px;
width:50px;
height:50px;
border-radius:100px;
border-style:solid;
border-color:var(--sky-preference-bg-shade-color);
background-position:center;
background-size:cover;
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
font-size:13px;
width:300px;
margin-top:110px;
`;

const CreateAccountModal=()=>{
  const [selectedItem,setSelectedItem]=useState(null)

  const profilePics=[
    {
      id:1,
      src:'https://i.pinimg.com/564x/e1/59/c2/e159c2f008e34498a7384af8874d7d23.jpg'
    },
    {
      id:2,
      src:"https://i.pinimg.com/control/236x/ed/25/0e/ed250e3e0760a9fbf18d3da9aaff4869.jpg"
    },
    {
      id:3,
      src:"https://i.pinimg.com/236x/31/36/7a/31367a1d75ab006872c0761644fafd58.jpg"
    },
    {
      id:4,
      src:"https://i.pinimg.com/control/736x/38/22/21/382221627eee8999b2bccc3cf96105e7.jpg"
    },
    {
      id:5,
      src:"https://i.pinimg.com/control/236x/b2/21/59/b2215961260b69d79712dcb3819a25e5.jpg"
    },
    {
      id:6,
      src:"https://i.pinimg.com/236x/cb/4d/8f/cb4d8f742ef83237b22667deef378b4a.jpg"
    },
    {
      id:7,
      src:"https://i.pinimg.com/236x/f3/4f/37/f34f3780ab9e42a37e82bac0935cc731.jpg"
    },
    {
      id:8,
      src:"https://i.pinimg.com/control/236x/2a/3a/b5/2a3ab5901912f08ce0e8c74e290da598.jpg"
    },
    {
      id:9,
      src:"https://i.pinimg.com/control/236x/77/1f/4a/771f4ab9221fb143eff98735916925ac.jpg"
    },
    {
      id:10,
      src:"https://i.pinimg.com/236x/53/87/f9/5387f9768ec52a0e26832bffd7107121.jpg"
    } ,
    {
      id:11,
      src:"https://i.pinimg.com/control/236x/ca/18/a9/ca18a977ef10cc915a78763f283976ca.jpg"
    },
    {id:12,
    src:"https://i.pinimg.com/control/236x/2e/5a/b2/2e5ab2e3e1a41f729488ee1b961d1f45.jpg"
    },
    {
      id:13,
      src:"https://i.pinimg.com/control/236x/bc/72/85/bc72853f9879d18eea06f2a0de44e71a.jpg"
    },
    {
      id:14,
      src:"https://i.pinimg.com/236x/fd/85/6e/fd856e8e1e0fb9e753b8b4c54b11a82c.jpg"
    },
    {
      id:15,
      src:"https://i.pinimg.com/236x/6a/44/6d/6a446dd6fb888c70bde756b336fbbc83.jpg"
    } ,
    {
      id:16,
      src:"https://i.pinimg.com/474x/21/3c/b4/213cb469f8038915e585350de3675e77.jpg"
    },
    {
      id:17,
      src:"https://i.pinimg.com/236x/a8/86/e3/a886e3a152fb6475377198ac95b2b967.jpg"
    },
    {
      id:18,
      src:"https://i.pinimg.com/236x/97/3f/90/973f90f8b1ff23057d166b9e65946cb5.jpg"
    },
    {
      id:19,
      src:"https://i.pinimg.com/236x/66/14/64/661464b152d8dea6a7a17ccd1ab1a6be.jpg"
    },
    {
      id:20,
      src:"https://i.pinimg.com/236x/32/6a/5d/326a5d923d302ae3c0104c3fa1ed2b79.jpg"
    }            
  ]

  const SelectProfilePics=(src="")=>{
    setSelectedItem(src);
  }

  const OpenAuthModalFunction =()=>{
    const OpenAuthModal=document.querySelector(".IntroAuth_parent_modal");
    OpenAuthModal.style.display="block"
  }

  const CloseAcctModalFunction=()=>{
    const CloseAcctModal=document.querySelector(".acct_parent_modal");
    CloseAcctModal.style.display="none";
    OpenAuthModalFunction();
  }

    

    return(
      <>
        <Container className="acct_parent_modal">
        <AccountBottomSheet>
            <AccountBottomParentContainer>
                {/* account header */}
            <CreateAccountHeader><IoArrowBack style={{cursor:"pointer"}} onClick={()=>{CloseAcctModalFunction()}} size={20} /></CreateAccountHeader>
            
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
                  {
                    profilePics.map((data)=>(
                      <ProfileImgElem onClick={()=>{SelectProfilePics(data.src)}} key={data.id} style={{backgroundImage:`url(${data.src})`}}></ProfileImgElem>
                    ))
                  }
                </ProfileImageSubContainer>
      
            </ProfileImageParentContainer>
            </SelectParentContainer>
      
            <CreateAccountBtn>Create Account</CreateAccountBtn>
            </AccountBottomParentContainer>
        </AccountBottomSheet>
        </Container>  
      </>
          
    )
}

export default CreateAccountModal;