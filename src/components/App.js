import './App.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

function App() {
  const { avatar, username, location, tag, stats } = user;

  return (
    <div className="App">
      <Profile
        avatar={avatar}
        username={username}
        location={location}
        tag={tag}
        stats={stats}
      ></Profile>
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
