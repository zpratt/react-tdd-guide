import React, {Component} from 'react';

function onChange(event) {
    this.setState({value: event.target.value});
}

export default class TextInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <input
                onChange={onChange.bind(this)}
                type='text'
                value={this.state.value}
            />
        );
    }
}
