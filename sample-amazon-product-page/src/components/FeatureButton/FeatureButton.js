import react, { Component } from 'react';

const BUTTON_CLASS = `
bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 
py-2 text-sm leading-5 rounded-full font-semibold text-white
`

class FeatureButton extends Component {
    // TODO: keep active/focus state of button

    handleClick = () => {
        const { id, onClick } = this.props;
        onClick(id);
    }

    render() {
        const { active, name } = this.props;
        return (
            <button 
            style={{maxHeight: "4vh", minWidth: "15vh"}}
            className={BUTTON_CLASS} 
            onClick={this.handleClick}>{name}</button>
        )
    }
}

export default FeatureButton;