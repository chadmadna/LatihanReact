import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello, World!'
    }
    this.submit = this.submit.bind(this)
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));