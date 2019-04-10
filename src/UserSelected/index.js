import React, { PureComponent } from 'react';

class UserSelected extends PureComponent {
  renderOptions(options) {
    return options.map(item => (
      <option key={item} value={item}>{item}</option>
    ));
  }
  render() {
    return (
      <select name="user">
        {this.renderOptions(this.props.user)}
      </select>
    );
  }
}

export default UserSelected;
