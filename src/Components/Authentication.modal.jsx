import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ErrorModal from "./Error.modal";
import NotificationModal from "./Notification.modal";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
position:absolute;
width:100%;
height:100%;
top:0px;
left:0px;
background:rgba(217,217,217,31%);
backdrop-filter:blur(4px);
z-index:1;
display:none;
`;

const AuthenticationBottomSheet=styled.div`
background:var(--sky-bg-theme);
bottom:0px;
width:100%;
height:70%;
border-radius:30px 30px 0px 0px;
position:absolute;
right:0px;
left:0px;
`;

const PrivateKeyAuthInputSection=styled.div`
padding:30px;
display:flex;
flex-direction:column;
gap:10em;
justify-content:center;
padding-top:35px;
`;

const PrivateParentTxtContainer =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:0.5em;
`;

const PrivateTxtContainer=styled.div`
display:flex;
flex-direction:column;
line-height:0.3px;
`;

const PrivateTxtHeader = styled.h3`
font-size:16px;
`;
const PrivateTxtDetails = styled.p`
font-size:13px;
`
const PrivateInputBox = styled.input`
padding:15px;
border-radius:2px;
background:var(--sky-preference-bg-shade-color);
font-size:14px;
color:ivory;
`;

const ImportBtnParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
`;

const ImportUserAccountBtn=styled.button`
background-color:ivory;
padding:14px;
border-radius:5px;
font-weight:bold;
font-size:14px;
transition:linear,300ms;
transform:scale(100%);

&:hover{
transform:scale(85%);
}
`;

const BackBtn = styled.button `
background-color:var(--sky-preference-bg-shade-color);
padding:14px;
border-radius:5px;
font-size:14px;
font-weight:bold;
color:ivory;
`;



const OpenAuthModalAccount=()=>{
document.querySelector(".IntroAuth_parent_modal").style.display="block"
}

const closeImportAcctModal=()=>{
document.querySelector(".import_account_Parent_container").style.display="none";
OpenAuthModalAccount();
}



const AuthenticationModal=()=>{
    const [getPrivateKeyData,setPrivateKeyData]=useState("")
    const [showErrorMsg,setShowErrorMsg]=useState({
        state:"none",
        msg:""
    });

    const [importBtnState,setImportBtnState]=useState("Import Account")

    const [notifyUser,setNotifyUser]=useState({
        position:"-100px",
        msg:""
    })

    const navigateObj=useNavigate();

    const HandleChange=(event)=>{
        setPrivateKeyData(event.target.value);
    }

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

    const ImportAccountFunction=async()=>{
        const getPrivateInputBox=document.querySelector(".privateKey_input");
        if(getPrivateKeyData.length===0){
            getPrivateInputBox.style.borderColor="red";
            RevealErrorMessage("private key field empty")
        }
        else{
            getPrivateInputBox.style.borderColor="transparent";
            try{
                setImportBtnState("Please Wait ....")
                const url='https://sky-node.onrender.com/endpoint/1.0/importAccount';
                const devUrl='http://localhost:4432/endpoint/1.0/importAccount'
                // define params 
                const Params={
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        privateKey:getPrivateKeyData
                    })
                }

                // send data to server 
                const ImportUserData=await fetch(devUrl,Params);
                const response=await ImportUserData.json();
                if(response.message=="invalid address"){
                    RevealErrorMessage(response.message)
                    setImportBtnState("Import Account")

                }
                else{
                    if(response.message==="correct_address"){
                        Notify_user_function("Import Successful");
                        setImportBtnState("Import Account")
                        // next save session in localstorage and move to main app
                        await localStorage.setItem("authorization",response.authorization);
                        await navigateObj("/app");
                    }
                }
            }
            catch(err){
                RevealErrorMessage("Something went wrong")
            }
        }
    }
    

    return(
        <>
     
        <Container className="import_account_Parent_container">
        <NotificationModal position={notifyUser.position} NotificationMsg={notifyUser.msg} />
        <ErrorModal reveal={showErrorMsg.state} errorMsg={showErrorMsg.msg} />
        <AuthenticationBottomSheet>

            <PrivateKeyAuthInputSection>

                {/* input text section  */}
                <PrivateParentTxtContainer>
                <PrivateTxtContainer>
                    <PrivateTxtHeader>Import Account</PrivateTxtHeader>
                    <PrivateTxtDetails>Enter your private key to import your account</PrivateTxtDetails>
                </PrivateTxtContainer>
                <PrivateInputBox className="privateKey_input" placeholder="Private Key" value={getPrivateKeyData} onChange={HandleChange} required="true" />
                </PrivateParentTxtContainer>

                {/* Button section */}
                <ImportBtnParentContainer>
                    <ImportUserAccountBtn onClick={()=>{ImportAccountFunction()}}>{importBtnState}</ImportUserAccountBtn>
                    <BackBtn onClick={()=>{closeImportAcctModal()}}>Back</BackBtn>
                </ImportBtnParentContainer>


            </PrivateKeyAuthInputSection>

        </AuthenticationBottomSheet>
        </Container>
        </>
    )
}

export default AuthenticationModal;