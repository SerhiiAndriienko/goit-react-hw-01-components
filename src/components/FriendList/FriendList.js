import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendItem from 'components/FriendListItem/FriendItem';

function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <li className={css.friendItem} key={friend.id}>
          <FriendItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          ></FriendItem>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
