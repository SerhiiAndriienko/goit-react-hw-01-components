import css from './FriendItem.module.css';
import PropTypes from 'prop-types';

function FriendItem({ avatar, name, isOnline }) {
  return (
    <div className={css.listItem}>
      <span className={css.status}>{isOnline ? `🟢` : '🔴'} </span>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendName}>{name}</p>
    </div>
  );
}
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
