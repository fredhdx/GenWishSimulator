import react, { Component } from 'react';

class ProductColorSelector extends Component {

    handleClick = () => {
        const { id, onClick } = this.props;
        onClick(id);
    }

    render() {
        const { imageUrl, styleName, selected } = this.props;
        return (
            <div className={selected ? 'grid-item-highlighted' : 'grid-item'} onClick={this.handleClick}>
                <img className='Product-color-selector'
                    src={imageUrl} 
                    alt={styleName} 
                    />
            </div>
        )
    }
}

export default ProductColorSelector;