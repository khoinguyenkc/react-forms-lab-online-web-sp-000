import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: 'afasf',
      remainingChars: props.maxChars
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={ event => this.handleMessageChange(event)}value={this.state.message} type="text" name="message" id="message" />
        Remaining characters: {this.state.remainingChars}
    </div>
    );
  }
}

export default TwitterMessage;
