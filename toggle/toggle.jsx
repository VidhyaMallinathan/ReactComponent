import React from 'react';

class Toggle extends React.Component {

    constructor (props){
        super(props);
        this.state = {toggleState: false};
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        this.setState({toggleState: !this.state.toggleState});
    }

    render() {
        return <div>
            <div className="">
                <input type="checkbox" id="cc-toggle-cb" 
                    className="cc-toggle-ipcb" onClick={this.toggleButton}/>
                <label htmlFor="cc-toggle-cb" className="cc-toggle-label">
                    <span>{this.state.toggleState ? "ON" : "OFF"}</span>
                </label>
            </div>
        </div>;
    }
}

export default Toggle;