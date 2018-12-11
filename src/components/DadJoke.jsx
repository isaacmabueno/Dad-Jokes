import React from 'react';
import './dadJoke.css'

export default class Dadjoke extends React.Component {
render() {
        return (
            <div className="joke">
            {this.props.joke}
            </div>
        )
    }
}