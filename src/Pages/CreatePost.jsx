import React from "react";
import styled from "styled-components"
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { TbPhotoFilled } from "react-icons/tb";
import BottomNavigation from "../Components/BottomNavigation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorModal from "../Components/Error.modal";
import NotificationModal from "../Components/Notification.modal";

const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:1em;
`;

const CreateRantHeader=styled.div`
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
const RantTxt = styled.b`
font-size:14px;
`;

const ParentContainer = styled.div`
display:flex;
flex-direction:column;
padding-top:60px;
`;

const RantInputBox =styled.textarea`
padding:45px;
height:100px;
border-style:solid;
border-color:transparent;
border-radius:5px;
background:var(--sky-bg-theme);
resize:none;
outline:none;
color:ivory;
text-align:center;
font-weight:bold;
font-size:15px;
`;

const CreateRantBtn=styled.button`
padding:12px;
background:ivory;
color:var(--sky-bg-theme);
margin-top:25px;
width:290px;
font-weight:bold;
font-size:13px;
border-radius:7px;
transition:linear,300ms;
transform:scale(100%);

&:focus{
transform:scale(85%);
}
`

const RantMediaOptionContainer = styled.div`
display:flex;
align-items:center;
gap:10px;
`;

const RantParentMediaContainer=styled.div`
display:flex;
flex-direction:row;
align-items:center;
gap:5em;
`;

const RantLimit=styled.div`
padding:6px;
background-color:var(--sky-preference-bg-shade-color);
width:100px;
display:flex;
justify-content:center;
font-size:13px;
width:100px;
border-radius:5px;
align-items:center;
`;

const RantGifElem = styled.button`
color:ivory;
padding:6px;
font-size:13px;
width:50px;
border-radius:5px;
background:var(--sky-preference-bg-shade-color);
`;

const CreatePostScreen=()=>{
    const[rantBtnState,setrantBtnState]=useState("Rant Now");
    const [showErrorMsg,setShowErrorMsg]=useState({
        state:"none",
        msg:""
    });

    const [notifyUser,setNotifyUser]=useState({
        position:"-100px",
        msg:""
    })

    const [userRant,setuserRant]=useState("")

    const [limitColor,setLimitColor]=useState({txt:"ivory",bg:"#191a1a"});
    
    const [limitTxt,setLimitTxt]=useState(`${0}/100 limit`)


    const NavigateObj=useNavigate();

        // function to handle chnage in text input 
        const handleRantChange = (event)=>{
            const rantValue=event.target.value;
            if(rantValue.length>100){
                setLimitColor({
                    txt:"ivory",
                    bg:"var(--sky-default-color)",
                })
                setLimitTxt("Limit reached");

            }
            else{
                setLimitTxt(`${rantValue.length}/100 limit `);
                setLimitColor({
                    txt:"ivory",
                    bg:"#191a1a"
                })
                setuserRant(rantValue);
            }
        }

        // function for showing error message 
        const RevealErrorMessage=(_msg="")=>{
            setShowErrorMsg({
                state:"flex",
                msg:_msg
            })
            setTimeout(()=>{
                setShowErrorMsg({
                    state:"none",
                    msg:""
                })
            },4000)
        }

            // function to notify user of successful event
    const Notify_user_function=(msg="")=>{
        setNotifyUser({
            position:'50px',
            msg:msg
        })
        setTimeout(()=>{
            setNotifyUser({
                position:'-100px',
                msg:""
            })
        },3000)
    }


    const HandleGenerateRantBtn=async()=>{
        if(userRant.length===0){
            RevealErrorMessage("You cannot create empty rant");
        }
        else{
            try{
                const url=`http://localhost:4432/endpoint/1.0/postNewContent`;
                const getUserSessionToken=localStorage.getItem("authorization")

                const Params={
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'authorization': `${getUserSessionToken}`
                    },
                    body:JSON.stringify({
                        postContent:userRant,
                        media:""
                    })
                }

                const post_rant=await fetch(url,Params);
                const getResponse = await post_rant.json();
                setrantBtnState("Please wait...")

                if(getResponse.message==="posted successfully"){
                    Notify_user_function("Rant successfully created");
                    setrantBtnState("Rant Now")
                    setTimeout(()=>{
                        NavigateObj("/app");
                    },5000)
                }
            }
            catch(err){
                RevealErrorMessage("Something went wrong");
            }
        }
    }



    return(
        <>
           <Container>
           <NotificationModal position={notifyUser.position} NotificationMsg={notifyUser.msg} />
             <CreateRantHeader>
                <IoArrowBack onClick={()=>{ NavigateObj("/app") }} style={{cursor:"pointer"}} size={25}/>
                <RantTxt>Rant</RantTxt>
                <SlOptionsVertical/>
            </CreateRantHeader>

            {/* input box */}
            <ParentContainer>
            <RantInputBox value={userRant} onChange={handleRantChange} placeholder="What do you want to rant about ?" ></RantInputBox>
            </ParentContainer>

            <RantParentMediaContainer>
            <RantMediaOptionContainer>
                <TbPhotoFilled style={{cursor:"pointer"}} size={25} />
                <RantGifElem style={{cursor:"pointer"}}>Gif</RantGifElem>                
            </RantMediaOptionContainer>
            <RantLimit style={{background:`${limitColor.bg}`,color:`${limitColor.txt}`}}>{limitTxt}</RantLimit>
            </RantParentMediaContainer>
           <CreateRantBtn onClick={()=>{HandleGenerateRantBtn()}}>{rantBtnState}</CreateRantBtn>
        </Container>
        <BottomNavigation />
        <ErrorModal reveal={showErrorMsg.state} errorMsg={showErrorMsg.msg} />
         
        </>
    )
}

export default CreatePostScreen;