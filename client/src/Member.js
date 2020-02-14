import React from 'react';

class Member extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h4>Name: {this.props.player.name}</h4>
                <p>Country: {this.props.player.country}</p>
                <p>Searches: {this.props.player.searches}</p>
            </div>
        )
    }
}

export default Member;