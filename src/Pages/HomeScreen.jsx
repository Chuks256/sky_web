import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
`;

const AppBarHeader= styled.div`
position:absolute;
background:var(--sky-preference-royal-color);
width:100%;
top:0px;
height:40%;
left:0px;
`;
const AppBarItemsContainer=styled.div ``;
const UserProfilePics=styled.div``;
const UserPointBalance =styled.div``;

const HomeScreen=()=>{
    return(
        <Container>
            {/* Header */}
            <AppBarHeader>
                <AppBarItemsContainer>
                    <UserProfilePics></UserProfilePics>
                    <UserPointBalance></UserPointBalance>
                </AppBarItemsContainer>
            </AppBarHeader>

        </Container>
    )
}

export default HomeScreen;