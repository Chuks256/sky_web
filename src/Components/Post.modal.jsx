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
flex-direction:column;
gap:9px;
align-items:center;
`
const ParentContainer=styled.div`
display:flex;
padding-top:30px;
flex-direction:column;
`

const ProfileContainer = styled.div`
display:flex;
align-items:center;
gap:0.8em;
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

const PostContent = styled.div`
font-size:12px;
width:290px;
align-items:center;
padding-left:70px;
`;

const ReactionContainer = styled.div `
display:flex;
align-items:center;
gap:3em;
padding-top:5px;
padding-right:60px;
`;

const ProfileSubContainer=styled.div`
display:flex;
align-items:center;
gap:10em;
`;

const MediaContent = styled.div`
background:grey;
padding:20px;
border-radius:15px;
width:180px;
height:180px;
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`;

const MediaContainer = styled.div`
 display: grid;
  gap: 3px;

  ${
    ((props)=>{
      if(props.children.length===3){
        return`
        grid-template-columns:1fr 1fr;
        :nth-child(1){
        width:70px;
        height:70px;
        grid-column:1;
        grid-row:1;
        }
        :nth-child(2){
        width:70px;
        height:70px;
        grid-column:2;
        grid-row:1;
        }
        :nth-child(3){
        width:70px;
        height:70px;
        grid-column:1/span 2;
        grid-row:2;
        width:180px;
        }
      `
      }

      if(props.children.length===2){
        return `
         grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minimax(150px, 1fr);
        :nth-child(1){
        width:70px;
        height:100px;
        }
        :nth-child(2){
        height:100px;
        width:70px;
        }
        `
      }

      
      if(props.children.length===4){
        return `
         grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minimax(150px, 1fr);
        :nth-child(1){
        width:70px;
        height:70px;
      }
         :nth-child(2){
        width:70px;
        height:70px;
      }
         :nth-child(3){
        width:70px;
        height:70px;
      }
         :nth-child(4){
        width:70px;
        height:70px;
      }
        
        `
      }
      
      
    })
  }
`;




const PostModal=(props)=>{
    return(
      <ParentContainer style={{display:`${props.revealPost}`}}>
<Container >     
<ProfileContainer>
<UserProfilePics></UserProfilePics>

    <ProfileSubContainer>
   <ProfileDataContainer>
       <UserProfileName>{props.username}</UserProfileName>
       <Timestamp>{props.timestamp}</Timestamp>
   </ProfileDataContainer>
   <SlOptionsVertical />
   </ProfileSubContainer>
   
</ProfileContainer>
 
    {/* post content section */}
    <PostContent>{props.postcontent}{props.postimage.length} </PostContent>

    
    {/* media content section */}
    {props.postimage.length>0?(
    <MediaContainer style={{display:"grid"}}>
    {props.postimage.map((data)=>(
     <MediaContent style={{backgroundImage:`url(${data.src})`}}></MediaContent>
    ))} 
   </MediaContainer>
    ):(
      <></>
    )
    }
    
 {/* reaction section */}
 <ReactionContainer>
   <BiUpvote size={19}/>
   <BiDownvote size={19}/>
   <BsChatSquareText size={19} />
 </ReactionContainer>

</Container>

      </ParentContainer>
      
    )
}

export default PostModal;