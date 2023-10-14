import './App.css';
import SplitPane, { Pane } from 'react-split-pane';

import React, { Component } from 'react';

import ProductData from './ProductData';
import ProductColorSelector from './ProductColorSelector';
import Clock from './Clock';

class App extends Component {

  // use state lifting
  state = { 
    selectedFeature: "Time", 
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
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
  };

  onClickColorSelector = (id) => {
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Amazon</span>
        </header>
        <SplitPane split='vertical' minSize="50%">
          <Pane>
            <div className="Product-preview">
              <div className="Product-preview-caption">
                <Clock></Clock>
              </div>
              <img className='Product-logo' 
              src={ProductData.colorOptions[this.state.selectedColor].imageUrl} 
              alt="watch" />
            </div>
          </Pane>
          <Pane style={{ textAlign: 'left'}}>
            <div><p className='Product-title'>ProductData.title</p></div>
            <div><p>ProductData.description</p></div>
            <div>
              <p className='Product-title'>Select Color</p>
              <div className='grid-container'>
                {this.state.colorOptions.map((colorOption) => 
                  (<ProductColorSelector
                    id={colorOption.id}
                    imageUrl={colorOption.imageUrl}
                    styleName={colorOption.styleName} 
                    selected={colorOption.selected}
                    onClick={this.onClickColorSelector} 
                   />
                ))}
              </div>
            </div>
            <div>
              <p className='Product-title'>Features</p>
              <div className='grid-container'>
                <button>Timer</button>
                <button>Heart Rate</button>
              </div>
              <div></div>
            </div>
          </Pane>
        </SplitPane>
      </div>
    );

  }
}

export default App;
