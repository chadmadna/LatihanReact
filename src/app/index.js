import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Hello extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: 'initial text'
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    const text = $('#textinput').val()
    $.post('php/submit.php', { text: text })
      .done(() => {
        this.setState({ text: text })
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input id="textinput" placeholder="Enter text.." />
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));