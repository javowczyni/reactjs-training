import React, {Component} from 'react';

class AlertInfo extends Component {
    handleDisplay = () => {
        alert("User info");
    };

    render() {
        return (
            <button onClick={this.handleDisplay}>{this.props.text}</button>
        );
    }
}

export default AlertInfo;
