import react, { Component } from 'react';
import classes from './ProductPreview.module.css';

import Clock from '../Clock/Clock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getHeartbeat = () => { 
  return Math.floor(Math.random() * (180 - 65 + 1)) + 65;

}

class ProductPreview extends Component {

    render() {
        const { imageUrl, selectedId} = this.props;
        return (
            <div className={classes.preview}>
              <div className={classes.overlay} style={{visibility: (selectedId === 0) ? "visible" : "hidden"}}>
                <Clock></Clock>
              </div>
              <div className={classes.overlay} style={{visibility: (selectedId !== 0) ? "visible" : "hidden"}}>
                <div>
                  <FontAwesomeIcon icon="fa-solid fa-heart-pulse" />
                  <p>{getHeartbeat()}</p>
                </div>
              </div>
              <img className='Product-logo' 
              src={imageUrl} 
              alt="watch" />
            </div>
        )
    }

}

export default ProductPreview;