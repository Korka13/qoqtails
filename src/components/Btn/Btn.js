import React, { Component } from 'react';

class Btn extends Component {

    state = {
        disabled: false
    };

    handler() {
      let handler = this.props.action();
      if (handler && Promise.resolve(handler)) {
          this.setState({disabled: true});
          return handler.then(() => {
              return this.setState({disabled: false});
          }).catch(() => {
              return this.setState({disabled: false});
          });
      }
  }

    attrs() {
        return {
            children : this.props.name,
            type     : 'button',
            role     : 'button',
            onClick  : this.handler.bind(this),
            disabled : this.state.disabled,
            className: this.props.cssClass
        };
    }

    render() {
        return <button {...this.attrs()} />;
    }
}

export default Btn;