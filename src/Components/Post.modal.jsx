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
import { useNavigate } from "react-router-dom";

const Container = styled.div`
display:flex;
z-index:1;
flex-direction:column;
gap:9px;
align-items:center;
padding:15px;
border-style:solid;
border-top-color:transparent;
border-left-color:transparent;
border-right-color:transparent;
border-width:1px;
border-bottom-color:var(--sky-preference-bg-shade-color)
`
const ParentContainer=styled.div`
display:flex;
padding-top:10px;
flex-direction:column;
`

const ProfileContainer = styled.div`
display:flex;
align-items:center;
gap:0.8em;
`;

const UserProfilePics = styled.div`
background:var(--sky-preference-bg-shade-color);
padding:16px;
width:4px;
height:4px;
border-radius:100px;
background-size:cover;
background-position:center;
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
font-size:10px;
`;

const PostContent = styled.div`
font-size:12px;
width:260px;
align-items:center;
padding-left:75px;
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
background:var(--sky-preference-bg-shade-color);
padding:20px;
border-radius:6px;
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

function formatTime(timestamp) {
  const now = new Date().getTime();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years + (years === 1 ? ' year ago' : ' years ago');
  } else if (months > 0) {
    return months + (months === 1 ? ' month ago' : ' months ago');
  } else if (days > 0) {
    return days + (days === 1 ? ' day ago' : ' days ago');
  } else if (hours > 0) {
    return hours + (hours === 1 ? ' hour ago' : ' hours ago');
  } else 
 if (minutes > 0) {
    return minutes + (minutes === 1 ? ' minute ago' : ' minutes ago');
  } else {
    return 'just now';
  }
}




const PostModal=(props)=>{
  const navigateObj=useNavigate()
  const [getBooleanVote,setBooleanVote]=useState(false)
  const [getUpVote,setHandleVote]=useState(null);
  const [getDownBooleanVote,setDownBooleanVote]=useState(false)
  const [getDownVote,setDownVote]=useState(null)

  const HandleChanges=()=>{
    localStorage.setItem("temporalUserId",props.postOwnerId);
    navigateObj("/profile")
  }

  const HandleUpVote=async()=>{
    if(getDownBooleanVote===true){
    setDownBooleanVote(false);  
    }
    setHandleVote(props.postId);
    setBooleanVote(true);
  }

  const HandleUnUpVote=async()=>{
    setHandleVote(props.postId);
    setBooleanVote(false);
  }


  const HandleDownVote=async()=>{
    if(getBooleanVote===true){
      setBooleanVote(false)
      setDownBooleanVote(true);
      }else{
      setDownBooleanVote(true);
    }
    setDownVote(props.postId)
  }

  
  const HandleUnDownVote=async()=>{
      setDownBooleanVote(false)
    setDownVote(props.postId)
  }


  


    return(
      <ParentContainer style={{display:`${props.revealPost}`}}>
<Container keys={props.key} >     
<ProfileContainer>
<UserProfilePics onClick={()=>{HandleChanges()}} style={{cursor:"pointer",backgroundImage:`url(${props.profilepics})`} }></UserProfilePics>

    <ProfileSubContainer>
   <ProfileDataContainer>
       <UserProfileName>{props.username}</UserProfileName>
       <Timestamp>{formatTime(props.timestamp)}</Timestamp>
   </ProfileDataContainer>
   <SlOptionsVertical />
   </ProfileSubContainer>
   
</ProfileContainer>
 
    {/* post content section */}
    <PostContent>{props.postcontent}</PostContent>

    
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
  {getBooleanVote===false?(<BiUpvote size={19} onClick={()=>{HandleUpVote()}}  style={{cursor:"pointer"}} />):(
    <BiSolidUpvote style={{cursor:"pointer", display:"flex"}} size={19} onClick={()=>{HandleUnUpVote()}}  />
  )}

  {
    getDownBooleanVote===false ?(
      <BiDownvote size={19} onClick={()=>{HandleDownVote()}}  style={{cursor:"pointer"}}  />
    ):(
      <BiSolidDownvote size={19} onClick={()=>{HandleUnDownVote()}}  style={{cursor:"pointer"}}  />
    )
  }
   <BsChatSquareText size={19} />
 </ReactionContainer>

</Container>

      </ParentContainer>
      
    )
}

export default PostModal;