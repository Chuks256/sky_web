import React from "react";
import styled from "styled-components";
import { RiNotification4Fill } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import {useState} from "react"

// import components 
import BottomNavigation from "../Components/BottomNavigation";
import PostModal from "../Components/Post.modal";

const Container = styled.div`
display:flex;
flex-direction:column;
height:150vh;
`;

const AppBarHeader= styled.div`
position:absolute;
background:var(--sky-preference-default-color);
width:100%;
top:0px;
height:40%;
left:0px;
`;

const AppBarItemsContainer=styled.div `
display:flex;
padding:25px;
align-items:center;
justify-content:space-between
`;
const UserProfilePics=styled.div`
padding:20px;
background:grey;
border-radius:100px;
`;
const UserPointBalance =styled.div`
padding:10px;
background:var(--sky-preference-default-shade);
border-radius:100px;
width:120px;
display:flex;
align-items:center;
justify-content:space-between;
font-size:14px;
font-weight:bold;
`;

const PostParentContainer = styled.div`
display:flex;
flex-direction:column;
padding-top:80px;
`

const PostButton=styled.button`
background:var(--sky-default-color);
padding:12px;
width:80px;
font-size:14px;
border-radius:100px;
z-index:1;
font-weight:bolder;
position:fixed;
margin-top:460px;
color:ivory;
margin-left:250px;
`;


const HomeScreen=()=>{
    const [skyPoint,setSkyPointBalance]=useState("20k Sky")
    
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
            {/* Header  */}

            {/* Header */}
            <AppBarHeader>

                <AppBarItemsContainer>
                    <UserProfilePics></UserProfilePics>
                    <UserPointBalance>
                    <PiStarFourFill  size={20}/>
                    {skyPoint}
                    <IoMdArrowDropdown size={30} style={{cursor:"pointer"}} />
                    </UserPointBalance>
                    <RiNotification4Fill size={30}  style={{cursor:"pointer"}} />
                </AppBarItemsContainer>
            </AppBarHeader>

            {/* Post section */}
            <PostParentContainer>
                {
                    dummyData.map((data)=>(
                        <PostModal revealPost="flex" postimage={data.postimage} username={data.username} timestamp={data.timestamp} postcontent={data.postcontent} />
                    ))
                }
           
            </PostParentContainer>

            <PostButton>Post</PostButton>

            {/* Bottom Navigaion */}
            <BottomNavigation />
        </Container>
    )
}

export default HomeScreen;