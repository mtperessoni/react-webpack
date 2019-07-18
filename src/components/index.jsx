import React, { Component, Fragment } from 'react'
console.log(process.env.TESTE)

class Root extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        Webpack from scratch
      </Fragment>
    );
  }
}

export default Root
