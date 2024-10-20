import React from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import BottomNavigation from "../Components/BottomNavigation";
import PostModal from "../Components/Post.modal"
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

const Container = styled.div`
display:flex;
flex-direction:column;
gap:1em;
justify-content:center;
align-items:center;
`;

const CommentHeader=styled.div`
display:flex;
padding:20px;
top:0px;
align-items:center;
justify-content:center;
gap:6em;
margin-left:-29px;
position:fixed;
z-index:2;
background:rgba(16,17,17,40%);
backdrop-filter:blur(10px);
width:100%;
`;
const CommentTxt = styled.b`
font-size:14px;
`

const PostContainer = styled.div`
padding-top:30px;
margin-left:50px;
`;

const CommentContainer=styled.div`
display:flex;
flex-direction:column;
`;

const CommentUserPics = styled.div`
background:var(--sky-preference-bg-shade-color);
padding:12px;
width:6px;
height:6px;
border-radius:100px;
`;

const UserCommentData=styled.div`
display:flex;
flex-direction:column;
line-height:5px;
margin-top:-7px;
justify-content:center;
`;

const CommenterName = styled.h3`font-size:12px;`

const CommentTime=styled.span`font-size:12px;`

const UserCommentParentContainer = styled.div`
display:flex;
align-items:center;
gap:10em;
`;

const CommentSubParentContainer= styled.div`
display:flex;
gap:12px;
padding:10px;
align-items:center;
`;

const CommentContent=styled.div`
font-size:13px;
padding:13px;
padding-top:12px;
width:230px;
`;

const CommentReactionContainer = styled.div`
display:flex;
align-items:center;
gap:3em;
padding-top:5px;
padding-right:-25px;

`;

const CommentSection = styled.div`
display:flex;
flex-direction:column;
gap:2em;
justify-content:center;
align-items:center;
padding:1px;
`;

const CommentBodyTxt = styled.b`
font-size:12px;
margin-left:-200px;
`;



const CommentScreen=()=>{
    const dummyData=[
        {
            username:"JaneTheBaddie",
            timestamp:`${new Date().getSeconds()} Sec ago`,
            postcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            postimage:[
                {
                    src:"https://i.pinimg.com/control/564x/7e/1e/42/7e1e42f47a4af412bfce7eee1df29708.jpg"
                }
            ]
        }]

        const CommentDummyData=[
            {
                commentName:"Brody",
                time:`${new Date().getSeconds()} Sec ago`,
                commentcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            },
            {
                commentName:"Jane",
                time:`${new Date().getSeconds()} Sec ago`,
                commentcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            },
            {
                commentName:"Blessing",
                time:`${new Date().getSeconds()} Sec ago`,
                commentcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "            },
            {
                commentName:"Mary",
                time:`${new Date().getSeconds()} Sec ago`,
                commentcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "            },
            {
                commentName:"JaneTheBaddie",
                time:`${new Date().getSeconds()} Sec ago`,
                commentcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "            }
        ]

    return(
        <Container>
            <CommentHeader>
                <IoArrowBack/>
                <CommentTxt>Comments</CommentTxt>
                <SlOptionsVertical/>
            </CommentHeader>

            {/* Post section */}
                    <PostContainer>
            {
                    dummyData.map((data)=>(
                        <PostModal revealPost="flex" postimage={data.postimage} username={data.username} timestamp={data.timestamp} postcontent={data.postcontent} />
                    ))
                }
            </PostContainer>

            {/* comment section */}
            <CommentSection>
                <CommentBodyTxt>Comments (200)</CommentBodyTxt>
                
                {/* comment container section  */}
                {
                    CommentDummyData.length>0?(
                        <>
                        {
                            CommentDummyData.map((data)=>(
                                <CommentContainer>
                                
                                <UserCommentParentContainer>
                                <CommentSubParentContainer>
                                <CommentUserPics></CommentUserPics>
                                <UserCommentData>
                                    <CommenterName>{data.commentName}</CommenterName>
                                    <CommentTime>{data.time}</CommentTime>
                                </UserCommentData>
                                </CommentSubParentContainer>
            
                                <SlOptionsVertical size={15}/>
                                </UserCommentParentContainer>
            
                                {/* comment content  */}
                                <CommentContent>{data.commentcontent}</CommentContent>
            
                                {/* comment reaction container  */}
                                <CommentReactionContainer>
                                    <BiUpvote/>
                                    <BiDownvote />
                                </CommentReactionContainer>
                                
                            </CommentContainer>   
                            ))
                        }
                        </>
                        ):
                    <></>
                }
               

            </CommentSection>


         <BottomNavigation />   
        </Container>
    )
}

export default CommentScreen;