import React from "react";
import styled from "styled-components";
import PostModal from "../Components/Post.modal"
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import BottomNavigation from "../Components/BottomNavigation";


const Container = styled.div`
overflow-x:hidden;
`;

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
padding:20px;
top:0px;
align-items:center;
justify-content:center;
gap:7em;
position:fixed;
z-index:2;
background:var(--sky-preference-bg-modified-shade-color);
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
padding-top:20px;
`;

const ProfileScreen=()=>{

    const dummyData=[
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ",
            postimage:[
                {
                    src:"https://i.pinimg.com/control/564x/7e/1e/42/7e1e42f47a4af412bfce7eee1df29708.jpg"
                }
            ]
        },
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
            postimage:[
                {
                    src:"https://i.pinimg.com/736x/20/7e/f0/207ef089a3b11f0e52d2a40c80c7fc68.jpg"
                },
                {
                    src:"https://i.pinimg.com/control/564x/43/d9/5b/43d95b2312ff74f118368708ea3438a5.jpg"
                }
            ]
        },
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
            postimage:[
                {src:"https://i.pinimg.com/control/474x/75/83/9c/75839c1c207394c929306c04871626c6.jpg" 
                },
                {
                    src:"https://i.pinimg.com/736x/a6/46/11/a6461171b3897ba244050f60c0b63c47.jpg"
                },
                {
                     src:"https://i.pinimg.com/control/564x/03/7a/1e/037a1ee9a1b9d4222f02acf4aa267c8f.jpg",
                },
                {
                    src:"https://i.pinimg.com/564x/c6/cd/c2/c6cdc285dc0ec9b47aed926de291e0a1.jpg"
                }
            ]
        },
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
            postimage:[
                {src:"https://i.pinimg.com/474x/90/77/25/907725c1a28c7258a4ff4b602af20c9e.jpg"},
                    {src:"https://i.pinimg.com/control/474x/e4/90/4e/e4904ed0b889260f9f428fb7a4d48b07.jpg"},
                    {src:"https://i.pinimg.com/736x/3e/e5/21/3ee5216cbcbb6c11ff3ad37d2bbe9e5a.jpg"},
            ]
        },
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
            postimage:[
                {src:"https://i.pinimg.com/control/564x/8b/13/79/8b137979ab5e74ef71563ca5066f0e1e.jpg"}
            ]
        },
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
            postimage:[]
        },
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ",
            postimage:[]
        },
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ",
            postimage:[]
        },
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ",
            postimage:[]
        }
    ]

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

            <FollowProfileBtn style={{cursor:"pointer"}}>Follow</FollowProfileBtn>
               
                {/* user post */}
                <PostContainer>
            {
                    dummyData.map((data)=>(
                        <PostModal revealPost="flex" postimage={data.postimage} username={data.username} timestamp={data.timestamp} postcontent={data.postcontent} />
                    ))
                }
            </PostContainer>

            {/* Bottom navigation */}
            <BottomNavigation />
            </AppBarHeader>
        </Container>
    )
}

export default ProfileScreen;