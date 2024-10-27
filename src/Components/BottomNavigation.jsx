
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiTaskLine } from "react-icons/ri";
import { RiTaskFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Container = styled.div`
position:fixed;
bottom:0px;
z-index:1;
display:flex;
align-items:center;
justify-content:center;
background:rgba(16,17,17,40%);
backdrop-filter:blur(10px);
height:70px;
width:98%;
display:flex;
overflow-y:hidden;
`;


const BottomNavigationContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:3em;
`;

const HomeNavContainer = styled.div`
gap:5px;
display:flex;
align-items:center;
flex-direction:column;
font-size:12px`;

const SearchNavContainer = styled.div`
gap:5px;
display:flex;
align-items:center;
flex-direction:column;
font-size:12px`;

const TaskNavContainer = styled.div`
gap:5px;
display:flex;
align-items:center;
flex-direction:column;
font-size:12px`;

const FriendNavContainer = styled.div`
gap:5px;
display:flex;
align-items:center;
flex-direction:column;
font-size:12px`;

const BottomNavigation = ()=>{
    const NavigateObj=useNavigate();

    const HandleFrenNav=()=>{
        NavigateObj("/frens")
    }

    const HandleHomeNav=()=>{
        NavigateObj("/app")
    }


    return(
        <Container>
            <BottomNavigationContainer>
                <HomeNavContainer onClick={()=>{HandleHomeNav()}} style={{cursor:"pointer"}}><GoHome size={25} /> Home</HomeNavContainer>
                <SearchNavContainer style={{cursor:"pointer"}}><IoSearch size={25} /> Search</SearchNavContainer>
                <TaskNavContainer style={{cursor:"pointer"}}><RiTaskLine size={25} /> Task</TaskNavContainer>
                <FriendNavContainer onClick={()=>{HandleFrenNav()}} style={{cursor:"pointer"}} ><BsPeople size={25}/> Frens</FriendNavContainer>
            </BottomNavigationContainer>
        </Container>
    )
}

export default BottomNavigation;