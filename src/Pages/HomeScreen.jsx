import React, { useEffect } from "react";
import styled from "styled-components";
import { RiNotification4Fill } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import {useState} from "react"
import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";

// import components 
import BottomNavigation from "../Components/BottomNavigation";
import PostModal from "../Components/Post.modal";
import PointBalanceModal from "../Components/PointBalance.modal";
import ErrorModal from "../Components/Error.modal";
import AlertModal from "../Components/Alert.Modal"

const Container = styled.div`
display:flex;
flex-direction:column;
height:150vh;
`;

const AppBarHeader= styled.div`
position:absolute;
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
border-style:solid;
border-color:ivory;
border-width:2px;
background-size:cover;
background-position:center;
background-color:var(--sky-preference-default-shade)
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
    const [showErrorMsg,setShowErrorMsg]=useState({
        state:"none",
        msg:""
    });

    const [liveData,setLiveData]=useState([]);

    const [get_user_data,set_user_data]=useState({});

    const [getAmbientColor,setAmbientColor]=useState({
        mainColor:"",
        subColor:""
    })


    const locationObj=useLocation()
    const navigateModule=useNavigate();


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
      

    const GetAllPost=async()=>{
        const devurl="http://localhost:4432/endpoint/1.0/listAllUsersPost"
        const url="https://sky-node.onrender.com/endpoint/1.0/listAllUsersPost"
        const getUserSessionToken=localStorage.getItem("authorization")
        const transportProtocolParams={
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${getUserSessionToken}`
              }
            }
            const getPost=await fetch(url,transportProtocolParams);
            const getResponse = await getPost.json();
                setLiveData(getResponse.reverse())
            }

    useEffect(()=>{
        if(locationObj.pathname==="/app"){
            const fetchData=async()=>{
                try{
                    const getUserSessionToken=localStorage.getItem("authorization")
                    const url="https://sky-node.onrender.com/endpoint/1.0/getUserData"
                    const transportProtocolParams={
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `${getUserSessionToken}`
                          }
                        }
                    const getUserData=await fetch(url,transportProtocolParams);
                    const getResponse = await getUserData.json();
                    set_user_data(getResponse)
                    configureUserAmbientColor(getResponse.ambientColor)
                    setSkyPointBalance(`${getResponse.points} sky`)
                    if(getResponse){
                        try{
                            GetAllPost();
                        }
                        catch(err){
                            RevealErrorMessage("Something went wrong")
                        }
                    }
                            }
                            catch{
                                RevealErrorMessage("Something went wrong")       
                            }
                        }
                         fetchData();
                    }
                },[locationObj.pathname])

    
const openAlertModal=()=>{
document.querySelector(".alert_modal").style.display="flex"
}
    

const handleRantEvent=()=>{
    navigateModule("/createRant")
}

    return(
        <>
        {/* <PointBalanceModal /> */}
        <Container>
            {/* Header  */}
            {/* Header */}
            <AppBarHeader style={{background:`${getAmbientColor.mainColor}`}}>
                <AppBarItemsContainer>
                    <UserProfilePics onClick={()=>{openAlertModal()}} style={{backgroundImage:`url(${get_user_data.profilePics})`}}></UserProfilePics>
                    <UserPointBalance style={{background:`${getAmbientColor.subColor}`}} >
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
                    liveData.map((data)=>(
                        <PostModal key={data._id} postOwnerId={data.postOwnerId} revealPost="flex" postimage={data.media.photos} profilepics={data.profilePics} username={data.profileName} timestamp={data.timePosted} postcontent={data.content} />
                    ))
                }
           
            </PostParentContainer>

            <PostButton onClick={()=>{handleRantEvent()}} style={{backgroundColor:`${getAmbientColor.subColor}`}}>Post</PostButton>

            {/* Bottom Navigaion */}
            <BottomNavigation />
            <AlertModal />
            <ErrorModal reveal={showErrorMsg.state} errorMsg={showErrorMsg.msg} />
        </Container>
        </>
    )
}

export default HomeScreen;