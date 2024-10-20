import React from "react";
import styled from "styled-components";
import PostModal from "../Components/Post.modal"
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const Container = styled.div``;

const AppBarHeader= styled.div`
position:absolute;
background:var(--sky-preference-default-color);
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
padding:25px;
align-items:center;
justify-content:center;
gap:7.8em;
`;

const ProfileUserDataContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:3em;
`;

const ProfileUserPics=styled.div`
padding:20px;
background:var(--sky-preference-bg-shade-color);
border-radius:100px;
border-style:solid;
border-color:ivory;
width:40px;
height:40px;
border-width:2px;
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
gap:3em;
align-items:center;
margin-top:-30px;
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
padding:10px;
background:ivory;
color:var(--sky-bg-theme);
margin-top:25px;
width:360px;
font-weight:bold;
font-size:12px;
border-radius:7px;
`;

const ProfileScreen=()=>{

    return(
        <Container>
            <AppBarHeader>
                {/* profile header */}
                <ProfileHeaderContainer>
                    <IoArrowBack style={{cursor:"pointer"}} size={25} />
                    <ProfileUserName>Degen</ProfileUserName>
                    <SlOptionsVertical style={{cursor:"pointer"}} size={20}/>
                </ProfileHeaderContainer>

                {/* profile bio data */}
                <ProfileUserDataContainer>
                    
                    <ProfileBioContainer>
                    <ProfileUserPics></ProfileUserPics>
                    <ProfileUserBio>@Degen</ProfileUserBio>
                    </ProfileBioContainer>

                    {/* Stats parent container  */}
                    <StatsParentContainer>
                        <StatsSubContainer>
                            <StatsNumber>100k</StatsNumber>
                            <StatsLabel>Followers</StatsLabel>
                        </StatsSubContainer>

                        <StatsSubContainer>
                            <StatsNumber>100</StatsNumber>
                            <StatsLabel>Rants</StatsLabel>
                        </StatsSubContainer>

                        <StatsSubContainer>
                            <StatsNumber>2000 Sky</StatsNumber>
                            <StatsLabel>Points</StatsLabel>
                        </StatsSubContainer>
                    </StatsParentContainer>           
                </ProfileUserDataContainer>

            <FollowProfileBtn>Follow</FollowProfileBtn>

              
                {/* user post */}

            </AppBarHeader>
            
        </Container>
    )
}

export default ProfileScreen;