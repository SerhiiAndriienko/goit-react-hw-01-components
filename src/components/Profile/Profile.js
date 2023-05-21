import css from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile({ avatar, username, location, tag, stats }) {
  return (
    <div className={css.userCard}>
      <div className={css.userInfo}>
        <span className={css.userImgBorder}>
          <img src={avatar} alt="User avatar" className={css.userImg} />
        </span>
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userStatistics}>
        <li>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsQuntity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsQuntity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsQuntity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
