import React, {Component} from 'react'

export class A extends Component {
  render() {
    const a = {
      name: 'strong'
    }
    return (
      <div {...a}>AComponent</div>
    )
  }
}

export class B extends Component {
  render() {
    return (
      <div>BComponent</div>
    )
  }
}