import {FriendListItem} from 'components/FriendList/FriendListItem'
import friends from '../../friends.json'
import { FriendListContainer} from './FriendList.stiled';

export const FriendList = () => {
    return (
        <FriendListContainer>
            <FriendListItem friends={friends} />
        </FriendListContainer>
    );
}