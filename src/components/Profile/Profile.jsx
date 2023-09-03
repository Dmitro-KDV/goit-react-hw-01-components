import PropTypes from 'prop-types';
import {Event} from 'components/Profile/Event'
import user from '../../user.json'

export const Profile = () => {
    return (
        <div>
        <Event 
            key={user.username}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes} />
        </div>
    );
}

// Profile.propTypes = {
//     key: PropTypes.string.isRequired,
// }