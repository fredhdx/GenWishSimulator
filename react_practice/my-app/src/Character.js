import React, { Component } from 'react';
import classes from './Character.module.css';

class Character extends Component {
    state = {
        chosen: false
    };

    id = 0;
    name = "Ayato";
    rarity = "4";
    weapon = "Sword";
    element = "Cryo";

    render() {
        return (
            <div>
                <p>Name: {this.name}</p>
                <p>rarity: {this.rarity}</p>
                <p>weapon: {this.weapon}</p>
            </div>
        )
    }
}

export default Character;