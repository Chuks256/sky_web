import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { BiUpvote } from "react-icons/bi";
import { BiSolidUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { BsChatSquareTextFill } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";

const Container = styled.div`
display:flex;
z-index:1;
padding-top:100px;
flex-direction:column;
gap:10px;
align-items:center;

`

const ProfileContainer = styled.div`
display:flex;
align-items:center;
gap:8em;
`;

const UserProfilePics = styled.div`
background:grey;
padding:16px;
width:4px;
height:4px;
border-radius:100px;
`;

const ProfileDataContainer = styled.div`
line-height:0px;
display:flex;
flex-direction:column;
`;

const UserProfileName = styled.h3`
font-size:12.5px;
`;

const Timestamp = styled.p`
font-size:11px;
`;

const PostContent = styled.span`
font-size:12px;
width:290px;
padding-left:50px;
`;

const ReactionContainer = styled.div `
display:flex;
align-items:center;
gap:3em;
padding-top:5px;
padding-right:90px;
`;

const ProfileSubContainer=styled.div`
display:flex;
align-items:center;
gap:1em;
`;





const PostModal=()=>{
    return(
        <Container >     

         <ProfileContainer>
            <ProfileSubContainer>
            <UserProfilePics></UserProfilePics>
            <ProfileDataContainer>
                <UserProfileName>JaneTheGoddess</UserProfileName>
                <Timestamp>25Sec ago</Timestamp>
            </ProfileDataContainer>
            </ProfileSubContainer>
            <SlOptionsVertical />
         </ProfileContainer>
          
          {/* post content section */}
          <PostContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </PostContent>

          {/* reaction section */}
          <ReactionContainer>
            <BiUpvote size={20}/>
            <BiDownvote size={20}/>
            <BsChatSquareText size={20} />
          </ReactionContainer>

        </Container>
    )
}

export default PostModal;