import React from "react";
import styled from "styled-components"
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { TbPhotoFilled } from "react-icons/tb";
import BottomNavigation from "../Components/BottomNavigation";

const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:1em;
`;

const TaskHeader=styled.div`
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
const TaskTxt = styled.b`
font-size:14px;
`;

const TaskOptionContainer = styled.div`
padding:8px;
background:var(--sky-preference-bg-shade-color);
border-radius:100px;
display:flex;
align-items:center;
justify-content:center;
`;

const CompletedTask = styled.button`
background:var(--sky-preference-bg-shade-color);
padding:10px;
width:100px;
border-radius:100px;
color:ivory;
font-size:12px;
`;

const ActiveTask = styled.button`
background:ivory;
padding:10px;
width:100px;
border-radius:100px;
font-weight:bold;
font-size:12px;
`;

const TaskParentContainer = styled.div`
padding:60px;
display:flex;
flex-direction:column;
`;

 const TaskContainer = styled.div``;

 const NoTaskContainer = styled.div`
 display:flex;
 padding:100px;
 padding-top:200px;
 font-size:16px;
color:grey;
 `;

const TaskScreen=()=>{
    const taskdummyData=[]
    return(
        <>
           <Container>
             <TaskHeader>
                <IoArrowBack size={20}/>
                <TaskTxt>Task</TaskTxt>
                <SlOptionsVertical/>
            </TaskHeader>

            <TaskParentContainer>
            <TaskOptionContainer>
                <ActiveTask>Active</ActiveTask>
                <CompletedTask>Completed</CompletedTask>
            </TaskOptionContainer>
            {taskdummyData.length>0?(
                <TaskContainer></TaskContainer>
            ):<NoTaskContainer>Coming Soon</NoTaskContainer>}
            
            </TaskParentContainer>
           

        </Container>
        <BottomNavigation />
        </>
    )
}

export default TaskScreen;