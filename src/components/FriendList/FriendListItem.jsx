import { FriendListItemContainer, Status, FriendName} from './FriendList.stiled';
import PropTypes from 'prop-types';

export const FriendListItem = ({friends}) => {
    return (
            friends.map(({id, isOnline, avatar, name}) => (
                <FriendListItemContainer key={id}>
                    <Status isOnline={isOnline}>{isOnline}</Status>
                    <img src={avatar} alt="User avatar" width="48" />
                    <FriendName>{name}</FriendName>
                </FriendListItemContainer>
            ))
    );
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired, 
        })
    )
}