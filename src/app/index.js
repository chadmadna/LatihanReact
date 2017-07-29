import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello, World!'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <p>{this.props.moreText}</p>
      </div>
    )
  }
}

ReactDOM.render(<Hello moreText="I'm ready to learn React." />, document.getElementById('app'));