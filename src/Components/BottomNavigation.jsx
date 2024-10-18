
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { RiTaskLine } from "react-icons/ri";
import { RiTaskFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import styled from "styled-components"

const Container = styled.div`
position:absolute;
bottom:0px;
z-index:1;
display:flex;
align-items:center;
justify-content:center;
background:rgba(16,17,17,40%);
backdrop-filter:blur(40px);
height:80px;
width:98%;
display:flex;
`;


const BottomNavigationContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:1.5em;
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
    return(
        <Container>
            <BottomNavigationContainer>
                <HomeNavContainer><GoHomeFill size={25}/> Home</HomeNavContainer>
                <SearchNavContainer><IoSearch size={25}/> Search</SearchNavContainer>
                <TaskNavContainer><RiTaskLine size={25}/> Task</TaskNavContainer>
                <FriendNavContainer><BsPeople size={25}/> Frens</FriendNavContainer>
            </BottomNavigationContainer>
        </Container>
    )
}

export default BottomNavigation;