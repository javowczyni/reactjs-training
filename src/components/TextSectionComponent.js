import React, {Component} from 'react';

class TextSectionComponent extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default TextSectionComponent;
