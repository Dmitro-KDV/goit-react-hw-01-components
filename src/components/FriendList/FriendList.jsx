import PropTypes from 'prop-types';
import { FriendListContainer,  FriendListItemContainer, Status, FriendName} from './FriendList.stiled';

export const FriendList = ({friends}) => {
    return (
        <FriendListContainer>
            {friends.map(({id, isOnline, avatar, name}) => (
                <FriendListItemContainer key={id}>
                    <Status isOnline={isOnline}>{isOnline}</Status>
                    <img src={avatar} alt="User avatar" width="48" />
                    <FriendName>{name}</FriendName>
                </FriendListItemContainer>
            ))}
        </FriendListContainer>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired, 
        }).isRequired
    ).isRequired
}