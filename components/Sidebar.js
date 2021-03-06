import styled from 'styled-components';
import { Avatar, Button } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import * as EmailValidator from 'email-validator';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';

function Sidebar() {
    const [user] = useAuthState(auth);

    const createChat = () => {
        const input = prompt(
            "Please enter the email address of the user you wish to chat with"
        );

        if(!input){
            return null;
        }
        if(EmailValidator.validate(input)){
            // we need to add the chat into the db
            db.collection('chats').add({
                users : [ user.email,input]
            })
        }
    }

    return (
        <Container>
           <Header>
              <UserAvatar onClick={() => {auth.signOut()}} />

              <IconsContainer>
                  <IconButton>
                     <ChatIcon />
                  </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                    
              </IconsContainer> 
           </Header>
           <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in Chats" />
           </Search>

           <SideBarButton onClick={createChat}>Start A New Chat</SideBarButton>

           {/* List of Chats */}
        </Container>
    )
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
display : flex;
align-items: center;
padding : 20px;
border-radius : 2px;
`;

const SearchInput = styled.input`
    outline-width : 0;
    border : none;
    flex : 1;
`;

const SideBarButton = styled(Button)`
    width : 100%;
    &&&{
        border-top : 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;

const Header = styled.div`
    display : flex;
    position : sticky;
    top : 0;
    background-color: white;
    z-index : 1;
    justify-content: space-between;
    align-items : center;
    padding : 15px;
    height : 80px;
    border-bottom : 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity : 0.8;
    }
`;

const IconsContainer = styled.div``;