import './App.css';
import React, { Component } from 'react';
import SplitPane, { Pane } from 'react-split-pane';

// tailwind css
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

// components
import ProductData from '../../Data/ProductData';
import ProductColorSelector from '../ColorSelector/ColorSelector';
import FeatureButton from '../FeatureButton/FeatureButton';
import ProductPreview from '../ProductPreview/ProductPreview';

library.add(fas, faTwitter, faFontAwesome)

class App extends Component {

  // use state lifting
  state = { 
    selectedFeature: 0,
    selectedColor: 0,
    colorOptions: [
        {
            id: 0,
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png',
            selected: true
        },
        {
            id: 1,
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png',
            selected: false
        },
        {
            id: 2,
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png',
            selected: false
        },
        {
            id: 3,
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png',
            selected: false
        },
    ]
  };

  onColorClick = (id) => {
    this.setState((prevState) => ({   
      selectedColor: id,
      colorOptions: prevState.colorOptions.map((colorOption) => {
        if (id === colorOption.id) {
          return { ...colorOption, selected: true };
        } else {
          return { ...colorOption, selected:false };
        }
      })
    }));
  }

  onFeatureClick = (id) => {
    this.setState((prevState) => ({ selectedFeature: id}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Amazon</span>
        </header>
        <SplitPane split='vertical' minSize="50%">

          <Pane>
            <ProductPreview
              imageUrl={this.state.colorOptions[this.state.selectedColor].imageUrl} 
              selectedId={this.state.selectedFeature}>
            </ProductPreview>
          </Pane>

          <Pane style={{ textAlign: 'left'}}>
            <div><p className='Product-title'>{ProductData.title}</p></div>

            <div><p>{ProductData.description}</p></div>

            <div>
              <p className='Product-title'>Select Color</p>
              <div className='grid-container'>
                {this.state.colorOptions.map((colorOption) => 
                  (<ProductColorSelector
                    id={colorOption.id}
                    imageUrl={colorOption.imageUrl}
                    styleName={colorOption.styleName} 
                    selected={colorOption.selected}
                    onClick={this.onColorClick} 
                   />
                ))}
              </div>
            </div>

            <div>
              <p className='Product-title'>Features</p>
              <div className='grid-container'>
                <FeatureButton active={this.selectedFeature === 0} id={0} name={'Timer'} onClick={this.onFeatureClick}></FeatureButton>
                <FeatureButton active={this.selectedFeature === 1} id={1} name={'Heart Rate'} onClick={this.onFeatureClick}></FeatureButton>
              </div>
            </div>
          </Pane>

        </SplitPane>
      </div>
    );

  }
}

export default App;
