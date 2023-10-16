import react, { Component } from 'react';

import classes from './ColorSelector.module.css';

class ProductColorSelector extends Component {

    handleClick = () => {
        const { id, onClick } = this.props;
        onClick(id);
    }

    render() {
        const { imageUrl, styleName, selected } = this.props;
        return (
            <div className={selected ? classes.gridItemHighlight : classes.gridItem} onClick={this.handleClick}>
                <img className={classes.imgBox}
                    src={imageUrl} 
                    alt={styleName} 
                    />
            </div>
        )
    }
}

export default ProductColorSelector;