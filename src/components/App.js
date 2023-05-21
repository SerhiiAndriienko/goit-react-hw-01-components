import './App.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../json/user.json';
import data from '../json/data.json';

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
    </div>
  );
}

export default App;
