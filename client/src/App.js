import React, {useState, useEffect} from 'react';
import './App.css';
import Member from './Member';
import useDarkMode from './darkMode';

const App = (props) => {
  const [players, setPlayers] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode();
  const body = document.querySelector('body');
  useEffect(() => {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
        .then(data => setPlayers(data));
  }, []);
  useEffect(() => {
    if (darkMode) {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    }
  }, [darkMode])
  return (
    <div>
      <button onClick={setDarkMode}>Dark Mode</button>
      {players.length ? players.map(player => <Member key={player.id} player={player}/>) : 'Loading'}
    </div>
  );
}

export default App;
