import classes from './WishCard.module.css';
import React, { Component } from 'react';

// Wish Card Class
// state: wish[str]
// component: display text, button

const banner = ['Banet', 'Ayato', 'Cyno', 'Diona', 'Xingqiu'];

const makeWish = ()=>{
  return banner[Math.floor(Math.random() * (banner.length - 1))];
}

class WishCard extends Component {

    // init state
    state = { wish: 'Venti'}

    // setState is async
    // generally, do this.setState((prevState, prevProp)=>{}) if you need to use previous state
    // to update new state
    onWishButtonClick = () => { this.setState({wish: makeWish()}) };
    render () {
        return (
            <div>
                <p className={classes.WishCard}>You get: {this.state.wish}</p>
                <button onClick={this.onWishButtonClick}>Wish</button>
            </div>
        )
    }

}

export default WishCard;