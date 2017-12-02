import React from 'react';
import PropTypes from 'prop-types';

class ResizableTextArea extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  onInput = (...args) => {
    this.setState({ scrollHeight: 0 }, () => {
      this.setState({ scrollHeight: this.textarea.scrollHeight });
    });

    this.props.onInput(...args);
  }
  setRef = (ref) => {
    this.textarea = ref;

    this.props.ref(this.textarea);
  }
  render() {
    const style = {
      ...this.props.style,
      lineHeight: '1.5em',
      height: this.state.scrollHeight,
      overflowY: 'hidden',
    };

    return (
      <textarea
        {...this.props}
        style={style}
        ref={this.setRef}
        onInput={this.onInput}
      />
    );
  }
}

ResizableTextArea.defaultProps = {
  ref: Function.prototype,
  onInput: Function.prototype,
};

ResizableTextArea.propTypes = {
  ref: PropTypes.func,
  onInput: PropTypes.func,
};

export default ResizableTextArea;
