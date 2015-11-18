'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['ABC', 'DEF', 'GHI'],
      selected: ''
    };
  }

  render() {
    return (
      <select defaultValue={this.state.selected}>
        {this.state.options.map((o, i) =>
          <option key={i} value={o}>
            Item: {o}
          </option>
        )}
      </select>
    );
  }
}

var node = document.createElement('div');
document.body.appendChild(node);
ReactDOM.render(<Form />, node);
