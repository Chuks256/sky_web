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
padding-top:110px;
justify-content:center;
`

const PostSubContainer = styled.div`
display:flex;
flex-direction:column;
gap:0.9em;
`;

const ProfileContainer = styled.div`
display:flex;
gap:11px;
`;

const UserProfilePics = styled.div`
background:grey;
padding:15px;
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
font-size:12px;
`;

const Timestamp = styled.p`
font-size:9px;
`;

const PostContent = styled.span`
font-size:12px;
width:290px;
`;

const ReactionContainer = styled.div `
display:flex;
align-items:center;
gap:3em;
`;

const ProfileSubContainer=styled.div`
display:flex;
gap:180px;
align-items:center;
`;


const PostModal=()=>{
    return(
        <Container >    
            <ProfileContainer>
                <UserProfilePics></UserProfilePics>
                
                <PostSubContainer>

                    {/* profile data container */}
                    <ProfileSubContainer>
                    <ProfileDataContainer>
                    <UserProfileName>JaneTheGirl</UserProfileName>
                    <Timestamp>25Sec</Timestamp>
                </ProfileDataContainer>
                <SlOptionsVertical />
       
                </ProfileSubContainer>
                

                {/* post content */}
            <PostContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </PostContent>

            {/* reaction container */}
            <ReactionContainer>
                <BiUpvote size={18} fill="ivory" />
                <BiDownvote size={18} fill="ivory" />
                <BsChatSquareText size={18} fill="ivory" />
            </ReactionContainer>
                
            </PostSubContainer>
               

            </ProfileContainer>

            
            
        </Container>
    )
}

export default PostModal;