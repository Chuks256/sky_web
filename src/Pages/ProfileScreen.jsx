import React, { useEffect } from "react";
import styled from "styled-components";
import PostModal from "../Components/Post.modal"
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import BottomNavigation from "../Components/BottomNavigation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
overflow-x:hidden;
`;

const AppBarHeader= styled.div`
position:absolute;
width:100%;
top:0px;
height:40%;
left:0px;
display:flex;
flex-direction:column;
align-items:center;
`;

const ProfileHeaderContainer=styled.div`
display:flex;
padding:20px;
top:0px;
align-items:center;
justify-content:center;
gap:7em;
position:fixed;
z-index:2;
backdrop-filter:blur(10px);
width:100%;
`;

const ProfileUserDataContainer = styled.div`
padding-top:70px;
display:flex;
justify-content:center;
align-items:center;
gap:2em;
`;

const ProfileUserPics=styled.div`
padding:20px;
background:var(--sky-preference-bg-shade-color);
border-radius:100px;
border-style:solid;
border-color:ivory;
width:30px;
height:30px;
border-width:2px;
background-size:cover;
background-position:center;
`;



const ProfileUserName=styled.b`
font-size:13px;
`;

const ProfileBioContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
line-height:15px;
`

const StatsParentContainer = styled.div`
display:flex;
gap:1em;
align-items:center;
margin-top:-35px;
`;

const StatsSubContainer = styled.div`
display:flex;
flex-direction:column;
line-height:1px;
align-items:center;
`;


const StatsLabel =styled.p`
font-size:12px;
`;

const StatsNumber = styled.h3`
font-size:13px;
`;

const ProfileUserBio = styled.p`
font-size:13px;
`;

const FollowProfileBtn=styled.button`
padding:12px;
background:ivory;
color:var(--sky-bg-theme);
margin-top:25px;
width:290px;
font-weight:bold;
font-size:12px;
border-radius:7px;
`;

const PostContainer = styled.div `
padding-top:10px;
`;

const ProfileScreen=()=>{
    const navigateObj=useNavigate();
    const [getProfileData,setProfileData]=useState({});
    const [getAmbientColor,setAmbientColor]=useState("");
    const [getIsUserAcct,setIsUserAcct]=useState(true);
    const [getPost,setPost]=useState([])

            // function to set user ambient color 
            const configureUserAmbientColor=(ambientColorChoice="")=>{
                switch(ambientColorChoice){
                    case"Cold":
                    const cold_color_scheme={
                        mainColor:"var(--sky-preference-default-color)",
                        subColor:"#2E97FF"
                    }
                    setAmbientColor(cold_color_scheme);
                    break;
        
                    case "Hot":
                        const hot_color_scheme={
                            mainColor:"var(--sky-preference-fire-color)",
                            subColor:"var(--sky-preference-fire-shade)"
                        }
                        setAmbientColor(hot_color_scheme);
                        break;
                    
                    case "Royal":
                        const royal_color_scheme={
                            mainColor:"var(--sky-preference-royal-color)",
                            subColor:"var(--sky-preference-royal-shade)"
                        }
                        setAmbientColor(royal_color_scheme);
                        break;
                    
                    case "Pink":
                        const pink_color_scheme={
                            mainColor:"var(--sky-preference-pink-color)",
                            subColor:"var(--sky-preference-pink-shade)"
                        }
                        setAmbientColor(pink_color_scheme);
                        break;
                    
                    case "Soul":
                        const soul_color_scheme={
                            mainColor:"var(--sky-preference-soul-color)",
                            subColor:"var(--sky-preference-soul-shade)"
                        }
                        setAmbientColor(soul_color_scheme);
                        break;
        
                        
                    case "SunShine":
                        const sunshine_color_scheme={
                            mainColor:"var(--sky-preference-summer-color)",
                            subColor:"var(--sky-preference-summer-shade)"
                        }
                        setAmbientColor(sunshine_color_scheme);
                        break;
                }
            }

            // function to fectch user posts
    const fetchUserPost=async(userSessionToken="",userId="")=>{
        // const postdevurl="http://localhost:4432/endpoint/1.0/listUsersPost"
        const url="https://sky-node.onrender.com/endpoint/1.0/listUsersPost"
        const ProtocolParams={
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              'authorization': `${userSessionToken}`,
              },
              body:JSON.stringify({
                id:userId
              })
            }
            const getPost=await fetch(url,ProtocolParams);
            const getResponsedata = await getPost.json();
            if(getResponsedata){
                setPost(getResponsedata)
            }
    }
        


    useEffect(()=>{
        window.scrollTo({top:0});
        const fetchUserProfile=async()=>{
        const getOtherUserId=localStorage.getItem("temporalUserId")
        if( getOtherUserId!= undefined){
            // const devurl="http://localhost:4432/endpoint/1.0/getOtherUserData"
            const url="https://sky-node.onrender.com/endpoint/1.0/getOtherUserData"
            const getUserSessionToken=localStorage.getItem("authorization")
            const transportProtocolParams={
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `${getUserSessionToken}`,
                  },
                  body:JSON.stringify({
                    id:getOtherUserId
                  })
                }
                const getPost=await fetch(url,transportProtocolParams);
                const getResponse = await getPost.json();
                    await configureUserAmbientColor(getResponse.data.ambientColor);
                   await  setProfileData(getResponse.data)
                    await setIsUserAcct(getResponse.isUserAcct);
                    if(getResponse){
                        await fetchUserPost(getUserSessionToken,getOtherUserId);
                        console.log(getResponse)  
                    }
                }
    
            }
            fetchUserProfile()
        },[]);


    const HandleBackBtn=()=>{
        const getOtherUserId=localStorage.getItem("temporalUserId");
        if(getOtherUserId != undefined){
            localStorage.removeItem("temporalUserId");
            navigateObj("/app");        
        }
    }

    return(
        <Container>
            <AppBarHeader style={{background:`${getAmbientColor.mainColor}`}}>
                {/* profile header */}
                <ProfileHeaderContainer >
                    <IoArrowBack onClick={()=>{HandleBackBtn()}} style={{cursor:"pointer"}} size={25} />
                    <ProfileUserName>{getProfileData.profileName}</ProfileUserName>
                    <SlOptionsVertical style={{cursor:"pointer"}} size={20}/>
                </ProfileHeaderContainer>

                {/* profile bio data */}
                <ProfileUserDataContainer>
                    
                    <ProfileBioContainer>
                    <ProfileUserPics style={{backgroundImage:`url(${getProfileData.profilePics})`}}></ProfileUserPics>
                    <ProfileUserBio>@{getProfileData.profileName}</ProfileUserBio>
                    </ProfileBioContainer>

                    {/* Stats parent container  */}
                    <StatsParentContainer>
                        <StatsSubContainer>
                            <StatsNumber>600</StatsNumber>
                            <StatsLabel>Followers</StatsLabel>
                        </StatsSubContainer>

                        <StatsSubContainer>
                            <StatsNumber>100</StatsNumber>
                            <StatsLabel>Rants</StatsLabel>
                        </StatsSubContainer>

                        <StatsSubContainer>
                            <StatsNumber>{getProfileData.points} Sky</StatsNumber>
                            <StatsLabel>Points</StatsLabel>
                        </StatsSubContainer>
                    </StatsParentContainer>           
                </ProfileUserDataContainer>
                {
                getIsUserAcct?(
                  <></>
                ): (
                <FollowProfileBtn style={{cursor:"pointer"}}>Follow</FollowProfileBtn>)         
                }
           
                {/* user post */}
                <PostContainer>
                    {
                        Array.isArray(getPost)===false ?(
                            <PostModal key={getPost._id} revealPost="flex" profilepics={getPost.profilePics} postimage={getPost.media.photos} username={getPost.profileName} timestamp={getPost.timePosted} postcontent={getPost.content} />
                        )
                        :(    
                                getPost.map((data)=>(
                                    <PostModal key={data._id} revealPost="flex" profilepics={data.profilePics} postimage={data.media.photos} username={data.profileName} timestamp={data.timePosted} postcontent={data.content} />
                                ))
                         )
                    }
            </PostContainer>

            {/* Bottom navigation */}
            <BottomNavigation />
            </AppBarHeader>
        </Container>
    )
}

export default ProfileScreen;