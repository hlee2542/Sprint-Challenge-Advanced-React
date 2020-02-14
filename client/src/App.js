import React from 'react';
import Member from './Member';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
        .then(data => this.setState({players: data}))
  }
  render() {
    return (
      <div>
        <button>Dark Mode</button>
        {this.state.players.length ? this.state.players.map(player => <Member key={player.id} player={player}/>) : 'Loading'}
      </div>
    );
  }
}

export default App;
