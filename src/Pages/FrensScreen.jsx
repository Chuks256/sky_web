import React from "react";
import styled from "styled-components"
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import BottomNavigation from "../Components/BottomNavigation";
import NotificationModal from "../Components/Notification.modal";


const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:1em;
`;

const FrenHeader=styled.div`
display:flex;
padding:20px;
top:0px;
align-items:center;
justify-content:center;
gap:8em;
position:fixed;
z-index:2;
background:rgba(16,17,17,40%);
backdrop-filter:blur(10px);
width:100%;
`;

const FrenTxt = styled.b`
font-size:14px;
`;

const FrenOptionContainer = styled.div`
padding:8px;
background:var(--sky-preference-bg-shade-color);
border-radius:100px;
display:flex;
align-items:center;
width:250px;
`;

const InviteOption = styled.button`
background:;
padding:10px;
width:120px;
border-radius:100px;
font-size:12px;
font-weight:bold;
`;

const FrenOption = styled.button`
background:var(--sky-preference-bg-shade-color);
padding:10px;
width:120px;
color:ivory;
border-radius:100px;
font-size:12px;
`;

const FrenParentContainer = styled.div`
padding:60px;
display:flex;
flex-direction:column;
align-items:center
`;

 const FrenContainer = styled.div``;

 const NoFrenContainer = styled.div`
 display:flex;
 padding:100px;
 padding-top:200px;
 font-size:16px;
color:grey;
text-align:center;
 `;

 const InviteContainer = styled.div`
 
 `;

 const SubParentContainer = styled.div`
 display:flex;
 flex-direction:column;
 margin-top:-50px;
 align-items:center;
gap:2em;
 `;

 const QrCodeContainer = styled.div`
 padding:100px;
 background:var(--sky-preference-bg-shade-color);
 border-radius:10px;
 width:50px;
 
 `;

 const ShareContainer = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 `;
const ShareHeaderContainer = styled.div`
line-height:10px;
`;
 const ShareHeaderTxt=styled.h3`
font-size:14px;
 `;
 const ShareSubTxt = styled.p`
 font-size:10px;
 
 `;
 const ShareElemContainer = styled.div`
 padding:10px;
 background:var(--sky-preference-bg-shade-color);
 display:flex;
 border-radius:10px;
 width:270px;
 `;
 const ShareElemSubContainer=styled.div`
 display:flex;
 align-items:center;
 gap:1em;
 `;
 const ShareElemTxt = styled.p`
 font-size:12px;
 margin-left:5px;
 `;
 const CopyBtn = styled.button`
 padding:10px;
 border-radius:10px;
 width:60px;
 background:ivory;
 `;

const FrensScreen=()=>{
    const FrendummyData=[]
    return(
        <>
           <Container>
        <FrenHeader>
                <IoArrowBack size={20}/>
                <FrenTxt>Invite</FrenTxt>
                <SlOptionsVertical/>
            </FrenHeader>

            
            <FrenParentContainer>
            <FrenOptionContainer>
                <InviteOption>Invited</InviteOption>
                <FrenOption>Frens</FrenOption>
            </FrenOptionContainer>
            <FrenContainer style={{display:"none"}}></FrenContainer>
            <InviteContainer></InviteContainer>
            </FrenParentContainer>

            <SubParentContainer>
                <QrCodeContainer></QrCodeContainer>
                <ShareContainer>
  
                    <ShareHeaderContainer>
                        <ShareHeaderTxt>Share Link</ShareHeaderTxt>
                        <ShareSubTxt>Invite Your frens and rant together to Get More Points </ShareSubTxt>
                    </ShareHeaderContainer>

                    <ShareElemContainer>
                        <ShareElemSubContainer>
                            <ShareElemTxt>https://tnvvitvtvtvtvtvjntvtvtinfv</ShareElemTxt>
                            <CopyBtn>Copy</CopyBtn>
                        </ShareElemSubContainer>
                    </ShareElemContainer>
                </ShareContainer>
            </SubParentContainer>
           
        </Container>
        <BottomNavigation />
        </>
     
    )
}

export default FrensScreen;