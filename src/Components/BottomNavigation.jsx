
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
background:red;
height:70px;
width:98%;
`;


const BottomNavigationContainer=styled.div`
`;

const BottomNavigation = ()=>{
    return(
        <Container>
        </Container>
    )
}

export default BottomNavigation;